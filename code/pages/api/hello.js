export default function handler(req, res) {
  console.log(`hello> Node version: ${process.version}`);

  res.status(200).json({
    text: 'Hello 456',
    nodejsVer: process.version
  });
}
