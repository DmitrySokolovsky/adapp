//import * as express from 'express';
import * as bodyParser from 'body-parser';
import 'reflect-metadata';
import * as morgan from 'morgan';
import { InversifyExpressServer } from 'inversify-express-utils';
import { LoggerService, LoggerServiceImplementation } from './services';
import { LogStatus } from './constant';
import { CONTAINER } from './services/services-registration';

import './controller';

import { CustomerRepository } from './repo/customer-repo/customer-repository';
import { CustomerAddModel, Customer } from './models/customer-models.model';
import { sequelize } from './instances';

let logger: LoggerService = new LoggerServiceImplementation();

sequelize.authenticate().then(() => {
    logger.log(`DATABASE CONNECTED\n`,
        LogStatus.INFO);
    logger.log('Press CTRL+C to stop\n', LogStatus.INFO);
});
sequelize.addModels([Customer]);
sequelize.sync({force: true});

let server = new InversifyExpressServer(CONTAINER);

server.setConfig((app) => {
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(morgan('dev'));
    // app.use(express.static('../epump-app/build'));
});

let serverInstance = server.build();

serverInstance.listen(3000, () => {
    logger.log(`App is running at http://localhost:3003`,
        LogStatus.INFO);
    logger.log('Press CTRL+C to stop\n', LogStatus.INFO);
});
