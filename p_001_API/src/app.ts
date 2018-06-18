import * as express from 'express';
import * as bodyParser from 'body-parser';
import { CustomerRepository } from './repo/customer-repo/customer-repository';
import { CustomerAddModel } from './models/customer-models';

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use((req: express.Request, res: express.Response , next: Function): void => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req: express.Request, res: express.Response, next: Function): void => {
    res.json('hello');
});

app.get('/cust', (req: express.Request, res: express.Response, next: Function): void => {
    const mParams: CustomerAddModel = {
        name: 'Serg',
        company: 'OOO',
        phone: '123654',
        email: 'string@string.str'
    };
    const sr = new CustomerRepository();
    sr.addCustomer(mParams);
});

app.listen(3000, () => {
    console.log('listening 3000');
});
