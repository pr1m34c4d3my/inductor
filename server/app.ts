require("dotenv").config();
import express, { Application, Express, Request, Response } from "express";

const server: Application = express();
const { PORT, VERSION } = process.env;
let post = require("./routes/post");

server.use(express.json());
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

server.get("/", (req: Request, res: Response) => {
  res.send("Ini REST API saya");
});
server.use(`${VERSION} + /post`, post);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
