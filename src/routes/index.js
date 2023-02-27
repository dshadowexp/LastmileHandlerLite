import userRouter from "./users.route.js";

export default function(app) {
    app.use('/api/users', userRouter);
}