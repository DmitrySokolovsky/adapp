//import * as express from 'express';
import * as bodyParser from 'body-parser';
import 'reflect-metadata';
import * as path from 'path';
import * as morgan from 'morgan';
import * as express from 'express';
import * as session from 'express-session';

import { InversifyExpressServer } from 'inversify-express-utils';
import { LoggerService, LoggerServiceImplementation } from './service';
import { LogStatus } from './constant';
import { CONTAINER } from './service/services-regestration';

import './controller';

import { Customer } from './models/customer-models.model';
import { sequelize } from './instances';

let logger: LoggerService = new LoggerServiceImplementation();

sequelize.authenticate().then(() => {
    logger.log(`DATABASE CONNECTED\n`,
        LogStatus.INFO);
    logger.log('Press CTRL+C to stop\n', LogStatus.INFO);
});
sequelize.addModels([Customer]);
sequelize.sync();

let server = new InversifyExpressServer(CONTAINER);

server.setConfig((app) => {      
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(session({
        secret: 'adapp_api',
        cookie: {
            path: '/',
            maxAge: 30000
        }
    }));

    app.use(morgan('dev'));
    app.use(express.static('../p_001_APP/dist'));
});

let serverInstance = server.build();

serverInstance.listen(3001, () => {
    logger.log(`App is running at http://localhost:3001`,
        LogStatus.INFO);
    logger.log('Press CTRL+C to stop\n', LogStatus.INFO);
});
