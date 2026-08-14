const crypto = require('crypto');

const COOKIE_NAME = 'mb_admin_session';
const SESSION_MAX_AGE = 60 * 60 * 8;

function secret() {
  return process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD;
}

function sign(value) {
  return crypto.createHmac('sha256', secret()).update(value).digest('base64url');
}

function createSession() {
  const payload = `${Date.now()}:${crypto.randomBytes(16).toString('hex')}`;
  return `${payload}.${sign(payload)}`;
}

function verifySession(token) {
  if (!token || !secret()) return false;
  const dot = token.lastIndexOf('.');
  if (dot < 1) return false;
  const payload = token.slice(0, dot);
  const signature = token.slice(dot + 1);
  const expected = sign(payload);
  if (signature.length !== expected.length) return false;
  if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return false;
  const timestamp = Number(payload.split(':')[0]);
  return Number.isFinite(timestamp) && (Date.now() - timestamp) < SESSION_MAX_AGE * 1000;
}

function parseCookies(cookieHeader = '') {
  return Object.fromEntries(cookieHeader.split(';').map(part => {
    const index = part.indexOf('=');
    if (index < 0) return ['', ''];
    return [part.slice(0, index).trim(), decodeURIComponent(part.slice(index + 1).trim())];
  }).filter(([key]) => key));
}

function requireAuth(event) {
  const cookies = parseCookies(event.headers?.cookie || event.headers?.Cookie || '');
  if (!verifySession(cookies[COOKIE_NAME])) {
    const error = new Error('No autorizado');
    error.statusCode = 401;
    throw error;
  }
}

function sessionCookie(token) {
  return `${COOKIE_NAME}=${encodeURIComponent(token)}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${SESSION_MAX_AGE}`;
}

function clearSessionCookie() {
  return `${COOKIE_NAME}=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0`;
}

function json(statusCode, body, headers = {}) {
  return {
    statusCode,
    headers: { 'Content-Type': 'application/json; charset=utf-8', ...headers },
    body: JSON.stringify(body)
  };
}

module.exports = { createSession, requireAuth, sessionCookie, clearSessionCookie, json };
