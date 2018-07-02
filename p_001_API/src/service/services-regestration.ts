import { Container } from 'inversify';
import { LoggerService, LoggerServiceImplementation } from './logger';

import {
    ICustomerRepo,
    CustomerRepository,
    IProductRepo,
    ProductRepository
} from '../repo';

export const CONTAINER = new Container();

CONTAINER.bind<LoggerService>(LoggerService).to(LoggerServiceImplementation);
CONTAINER.bind<ICustomerRepo>(ICustomerRepo).to(CustomerRepository);
CONTAINER.bind<IProductRepo>(IProductRepo).to(ProductRepository);
