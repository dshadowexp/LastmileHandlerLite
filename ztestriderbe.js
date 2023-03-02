let socket;
function connectToSocket() {
    socket = io("http://localhost:8000", { autoConnect: false });

    socket.on("connect", () => {
        console.log('connected to server');
    // either with send()
    //   socket.send("Hello!");

    //   // or with emit() and custom event names
    //   socket.emit("salutations", "Hello!", { "mr": "john" }, Uint8Array.from([1, 2, 3, 4]));
    });

    socket.on("disconnect", () => {
        console.log('disconnected from server');
    })
}

function disconnectSocket() {
    socket.disconnect();
}

const connectBtn = document.getElementById('connect');
connectBtn.addEventListener("click", (ev) => {
    if (socket == null || !socket.connected) {
        connectToSocket();
        connectBtn.innerHTML = 'disconnect';
    } else {
        disconnectSocket();
        connectBtn.innerHTML = 'connect';
    }
})