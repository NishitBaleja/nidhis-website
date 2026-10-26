const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject'
};

const server = http.createServer((req, res) => {
  // Normalize request URL
  let parsedUrl;
  try {
    parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  } catch (e) {
    res.writeHead(400);
    res.end('Bad Request');
    return;
  }

  let pathname = decodeURIComponent(parsedUrl.pathname);

  // Default security headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  let filePath = path.join(PUBLIC_DIR, pathname);

  // Check if file exists directly
  fs.stat(filePath, (err, stats) => {
    if (!err && stats.isDirectory()) {
      filePath = path.join(filePath, 'index.html');
      fs.stat(filePath, (err2, stats2) => {
        if (!err2 && stats2.isFile()) {
          serveFile(filePath, res);
        } else {
          // Fallback to root index.html for SPA routing
          serveFile(path.join(PUBLIC_DIR, 'index.html'), res);
        }
      });
      return;
    }

    if (!err && stats.isFile()) {
      serveFile(filePath, res);
      return;
    }

    // Try appending .html
    const htmlPath = filePath + '.html';
    fs.stat(htmlPath, (err3, stats3) => {
      if (!err3 && stats3.isFile()) {
        serveFile(htmlPath, res);
        return;
      }

      // Check if folder exists with index.html
      const subIndexPath = path.join(filePath, 'index.html');
      fs.stat(subIndexPath, (err4, stats4) => {
        if (!err4 && stats4.isFile()) {
          serveFile(subIndexPath, res);
          return;
        }

        // SPA Fallback: serve root index.html so client-side router can handle it
        serveFile(path.join(PUBLIC_DIR, 'index.html'), res);
      });
    });
  });
});

function serveFile(absPath, res) {
  const ext = path.extname(absPath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(absPath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
      return;
    }

    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': data.length,
      'Cache-Control': 'no-cache'
    });
    res.end(data);
  });
}

server.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`  Jackie Zhang Portfolio Clone Server Running!`);
  console.log(`  Local URL:   http://localhost:${PORT}`);
  console.log(`  Home:        http://localhost:${PORT}/`);
  console.log(`  About:       http://localhost:${PORT}/about`);
  console.log(`  Work:        http://localhost:${PORT}/work`);
  console.log(`  Case Study:  http://localhost:${PORT}/case-studies/heygo-creator`);
  console.log(`======================================================\n`);
});
