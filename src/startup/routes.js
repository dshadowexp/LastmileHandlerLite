import userRouter from "../users/route.js";
import fleetRouter from "../fleets/route.js";
import courierRouter from "../couriers/route.js";
import error from "../middlewares/error.js";

export default function(app) {
    app.use('/api/users', userRouter);
    app.use('/api/fleets', fleetRouter);
    app.use('/api/couriers', courierRouter);
    app.use(error);
}