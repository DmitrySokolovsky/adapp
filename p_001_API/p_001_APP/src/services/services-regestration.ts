import getDecorators from 'inversify-inject-decorators';
import 'reflect-metadata';

import { LoginRepository, ILoginPepo } from './login-repository';
import { INJECTION_CONTAINER } from '../constants';

INJECTION_CONTAINER.bind<ILoginPepo>(ILoginPepo).to(LoginRepository).inSingletonScope();

export const inject = getDecorators(INJECTION_CONTAINER).lazyInject;
