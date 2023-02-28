import { createServer } from "./server.js";
import morgan from "morgan";
import swaggerDocs from './startup/swagger.js';

const PORT = process.env.PORT || 8000;

const [server, app] = createServer();
app.use(morgan('tiny'));

server.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}...`);
    swaggerDocs(app, PORT);
})