import express, { json, urlencoded } from "express";
import cors from "cors";
import helmet from "helmet";
import http from "http";
import { Server } from "socket.io";

import initializeRoutes from "./routes/index.js";

const app = express();
app.use(helmet());
app.use(cors());
app.use(json());
app.use(urlencoded());

const server = http.createServer(app);
const io = new Server(server);

export const createServer = function() {
    initializeRoutes(server);
    return server;
}

export const createSocket = function() {
    return io;
}