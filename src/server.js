import express, { json, urlencoded } from "express";
import cors from "cors";
import helmet from "helmet";
import http from "http";
import { Server } from "socket.io";

import initializeRoutes from "./startup/routes.js";
import dbConnect from './startup/db.js';

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

const app = express();
app.use(helmet());
app.use(cors(corsOptions));
app.use(json());
app.use(urlencoded({ extended: true }));

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' }});

export const createServer = function() {
    initializeRoutes(app);
    dbConnect();
    return [server, app];
}

export const createSocket = function() {
    io.on('connection', (socket) => {
        console.log('socket connected');
        socket.on('disconnect', () => {
            console.log('socket disconnected');
        })
    })
    return io;
}