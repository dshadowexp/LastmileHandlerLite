let socket;

function socketConnect() {
    socket = io("http://localhost:8000", { autoConnect: false });
    socket.on("connect", () => {
        console.log('connected to server');
    })
}

function disconnectSocket() {
    socket.disconnect();
}

const connectButton = document.getElementById("connect");
connectButton.addEventListener('click', (event) => {
    if (socket == null || !socket.connected) {
        connectToSocket();
        connectBtn.innerHTML = 'disconnect';
    } else {
        disconnectSocket();
        connectBtn.innerHTML = 'connect';
    }
});