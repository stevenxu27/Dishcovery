import { eventEmitter } from '../../backend/db';

export default function handler(req, res) {
  // Set headers for Server-Sent Events (SSE)
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  // Send an initial connection acknowledgment
  res.write('data: connected\n\n');

  // Listen for new document events and send data to the client
  const sendNewDocument = (newDocument) => {
    const data = JSON.stringify({ text: newDocument.text || 'New document detected!' });
    res.write(`data: ${data}\n\n`);
  };

  eventEmitter.on('newDocument', sendNewDocument);

  // Cleanup when the connection is closed
  req.on('close', () => {
    eventEmitter.off('newDocument', sendNewDocument);
  });
}