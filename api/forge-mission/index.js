export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log('Incoming mission:', req.body);
    res.status(200).json({ message: 'Mission received successfully.' });
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
