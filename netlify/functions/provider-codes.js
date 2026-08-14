const { requireAuth, json } = require('./_auth');

exports.handler = async (event) => {
  try { requireAuth(event); } catch (error) { return json(error.statusCode || 401, { error: 'No autorizado.' }); }
  if (event.httpMethod !== 'POST') return json(405, { error: 'Método no permitido' });

  const providerUrl = process.env.PROVIDER_CODES_URL;
  if (!providerUrl) {
    return json(501, {
      error: 'Falta configurar PROVIDER_CODES_URL. Pega aquí la URL de tu proveedor o adapta esta función a tu script actual.'
    });
  }

  let body;
  try { body = JSON.parse(event.body || '{}'); } catch { return json(400, { error: 'Solicitud inválida.' }); }

  try {
    const upstream = await fetch(providerUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(process.env.PROVIDER_API_KEY ? { Authorization: `Bearer ${process.env.PROVIDER_API_KEY}` } : {})
      },
      body: JSON.stringify(body)
    });

    const text = await upstream.text();
    let data;
    try { data = JSON.parse(text); } catch { data = { result: text }; }

    return json(upstream.status, data);
  } catch (error) {
    return json(502, { error: 'No se pudo contactar al proveedor.', detail: error.message });
  }
};
