import getDecorators from 'inversify-inject-decorators';
import 'reflect-metadata';
import { Container } from 'inversify';

import { LocalSaver } from './localSaver';
import { IDataSaver } from './dataSaver';

const INJECTION_CONTAINER = new Container();

INJECTION_CONTAINER.bind<IDataSaver>(IDataSaver).to(LocalSaver).inSingletonScope();

export const inject = getDecorators(INJECTION_CONTAINER).lazyInject;