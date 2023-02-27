import express, { json, urlencoded } from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

export const createServer = function() {
    return server;
}

export const createSocket = function() {
    return io;
}