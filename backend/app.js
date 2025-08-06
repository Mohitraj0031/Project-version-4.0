const http = require('http')
const express = require("express")

const app = express();

app.use("/",(req, res, next) => {
  console.log("Incoming Request first:", req.method, req.url);
  res.send("<h1>Hello from Express!</h1>");
  next();
});

const server = http.createServer(app);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
