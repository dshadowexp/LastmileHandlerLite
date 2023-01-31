import { createServer } from "./server.js";

const PORT = process.env.PORT || 8000;

const app = createServer();

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}...`);
})