import getDecorators from 'inversify-inject-decorators';
//import 'reflect-metadata';

import { LoginRepository, ILoginPepo } from './login-repository';
import { INJECTION_CONTAINER } from '../constants';
import { INavigationService, NavigationService } from './';
import { IProductRepo } from './product-repository/product.interface';
import { ProductRepository } from './product-repository/product.repository';


INJECTION_CONTAINER.bind<INavigationService>(INavigationService).to(NavigationService).inSingletonScope();
INJECTION_CONTAINER.bind<ILoginPepo>(ILoginPepo).to(LoginRepository).inSingletonScope();
INJECTION_CONTAINER.bind<IProductRepo>(IProductRepo).to(ProductRepository).inSingletonScope();


export const inject = getDecorators(INJECTION_CONTAINER).lazyInject;
