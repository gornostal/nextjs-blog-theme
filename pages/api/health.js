export default function handler(req, res) {
  res
    .status(200)
    .json({
      status: 'ok',
      'x-vercel-id': req.headers['x-vercel-id'] || 'empty',
    });
}
