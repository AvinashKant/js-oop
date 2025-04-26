const http = require('http');
const url = require('url');

// Store clients
let clients = [];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  // Only handle SSE connections
  if (parsedUrl.pathname === '/events') {
    const userId = parsedUrl.query.userId || 'anonymous';

    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Access-Control-Allow-Origin': '*',
    });

    // Register client
    const client = { userId, res };
    clients.push(client);

    console.log(`👤 User connected: ${userId}. Total clients: ${clients.length}`);

    // Send welcome event
    res.write(`event: welcome\n`);
    res.write(`data: {"message": "Welcome ${userId}!"}\n\n`);

    // Handle client disconnect
    req.on('close', () => {
      console.log(`❌ User disconnected: ${userId}`);
      clients = clients.filter(c => c.res !== res);
      res.end();
    });

  } else if (parsedUrl.pathname === '/send') {
    // API to trigger a message manually
    const message = parsedUrl.query.message || 'Hello everyone!';
    const targetUserId = parsedUrl.query.userId;

    clients.forEach(client => {
      if (!targetUserId || client.userId === targetUserId) {
        client.res.write(`event: new-message\n`);
        client.res.write(`data: ${JSON.stringify({ message, time: new Date() })}\n\n`);
      }
    });

    res.writeHead(200);
    res.end('Message sent\n');

  } else {
    // Basic home page
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <h1>SSE Advanced Demo</h1>
      <script>
        const userId = prompt('Enter your user ID:') || 'anonymous';
        const sse = new EventSource('/events?userId=' + userId);

        sse.addEventListener('welcome', (e) => {
          console.log('Welcome Event:', JSON.parse(e.data));
        });

        sse.addEventListener('new-message', (e) => {
          const data = JSON.parse(e.data);
          console.log('New Message:', data.message, '@', data.time);
          document.body.innerHTML += '<p>' + data.message + ' - ' + data.time + '</p>';
        });

        sse.onerror = (err) => {
          console.error('Connection error', err);
        };
      </script>
    `);
  }
});

server.listen(3000, () => {
  console.log('🚀 Advanced SSE Server running at http://localhost:3000');
});
