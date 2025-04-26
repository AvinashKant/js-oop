const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/events') {
    // Setup headers for SSE
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Access-Control-Allow-Origin': '*', // For CORS if needed
    });

    // Send a message every 2 seconds
    const interval = setInterval(() => {
      const message = `data: Server time is ${new Date().toLocaleTimeString()}\n\n`;
      res.write(message);
    }, 2000);

    // Clean up if client closes connection
    req.on('close', () => {
      clearInterval(interval);
      res.end();
    });

  } else {
    // Simple landing page
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <html>
        <body>
          <h1>SSE Demo</h1>
          <script>
            const sse = new EventSource('/events');
            sse.onmessage = (event) => {
              console.log('Message:', event.data);
              document.body.innerHTML += '<p>' + event.data + '</p>';
            };
          </script>
        </body>
      </html>
    `);
  }
});

server.listen(3000, () => {
  console.log('🚀 Server running at http://localhost:3000/');
});
