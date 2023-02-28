import { connect, set } from 'mongoose';
import config from 'config';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

export default function() {
    set('strictQuery', false);
    const liveURL = `mongodb+srv://${config.get('db.username')}:${config.get('db.password')}@cluster0.dczyixi.mongodb.net/?retryWrites=true&w=majority`;
    const devURL = "mongodb://localhost/lastmile";
    connect(liveURL, options)
        .then(() => console.log('Connected to Mongodb'))
        .catch(err => console.log('Error connecting to Mongodb', err));
}