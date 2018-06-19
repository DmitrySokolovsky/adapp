import { Container } from 'inversify';
import { LoggerService, LoggerServiceImplementation } from './logger';

export const CONTAINER = new Container();

CONTAINER.bind<LoggerService>(LoggerService).to(LoggerServiceImplementation);