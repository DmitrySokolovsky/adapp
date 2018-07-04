import { Container } from 'inversify';
import { LoggerService, LoggerServiceImplementation } from './logger';

import {
    ICustomerRepo,
    CustomerRepository,
    IProductRepo,
    ProductRepository,
    OrderRepository
} from '../repo';
import { IOrderRepo } from '../repo/order-repo/order-repo-interface';

export const CONTAINER = new Container();

CONTAINER.bind<LoggerService>(LoggerService).to(LoggerServiceImplementation);
CONTAINER.bind<ICustomerRepo>(ICustomerRepo).to(CustomerRepository);
CONTAINER.bind<IProductRepo>(IProductRepo).to(ProductRepository);
CONTAINER.bind<IOrderRepo>(IOrderRepo).to(OrderRepository);
