import { createSocket } from "../server.js";

const io = createSocket();

// io.on('connection', (socket) => {
//     console.log('socket connected');
//     socket.on('disconnect', () => {
//         console.log('socket disconnected');
//     })
// })