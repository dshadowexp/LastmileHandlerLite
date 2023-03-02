import usersRouter from "../users/route.js";
import fleetsRouter from "../fleets/route.js";
import couriersRouter from "../couriers/route.js";
import ordersRouter from "../orders/route.js";
import error from "../middlewares/error.js";

export default function(app) {
    app.use('/api/users', usersRouter);
    app.use('/api/fleets', fleetsRouter);
    app.use('/api/couriers', couriersRouter);
    app.use('/api/orders', ordersRouter);
    app.use(error);
}