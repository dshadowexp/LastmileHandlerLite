import userRouter from "./users.route.js";
import error from "../middlewares/error.js";

export default function(app) {
    app.use('/api/users', userRouter);
    //app.use(error);
}