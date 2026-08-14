const { requireAuth, json } = require('./_auth');
exports.handler = async (event) => {
  try { requireAuth(event); return json(200, { authenticated: true }); }
  catch (error) { return json(error.statusCode || 401, { authenticated: false }); }
};
