import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as morgan from "morgan";
import { CONTAINER } from './service/services-registration';

import { InversifyExpressServer } from 'inversify-express-utils';
import { Container } from 'inversify';

// ------------------------------------------

import { CustomerRepository } from './repo/customer-repo/customer-repository';
import { CustomerAddModel, Customer } from './models/customer-models.model';
import { sequelize } from './instances';

sequelize.authenticate().then(() => console.log('db connect'));
sequelize.addModels([Customer]);
sequelize.sync({force: true});

// ------------------------------------------

let server = new InversifyExpressServer(CONTAINER);

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
    res.sendStatus(200);
    const sr = new CustomerRepository();
    sr.getAllCustomers();
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
    res.sendStatus(200);
});

app.listen(3000, () => {
    console.log('listening 3000');
});
