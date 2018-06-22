//import * as express from 'express';
import * as bodyParser from 'body-parser';
import 'reflect-metadata';
import * as path from 'path';
import * as morgan from 'morgan';
import * as express from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import { LoggerService, LoggerServiceImplementation } from './service';
import { LogStatus } from './constant';
import { CONTAINER } from './service/services-regestration';

//import * as path from 'path';

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
    app.use(morgan('dev'));
    console.log(__dirname);
    //app.use(express.static('../p_001_APP/dist'));
    app.get('/logged', (req, resp) => {
        console.log(__dirname, 'dir');
        resp.sendFile(path.resolve(__dirname, 'p_001_APP/dist/index.html'));
        //resp.end();
    });
    app.get('/', (req, resp) => resp.send('<h1>HELLO WORLD</h1>')); 
});

let serverInstance = server.build();

serverInstance.listen(3000, () => {
    logger.log(`App is running at http://localhost:3000`,
        LogStatus.INFO);
    logger.log('Press CTRL+C to stop\n', LogStatus.INFO);
});
