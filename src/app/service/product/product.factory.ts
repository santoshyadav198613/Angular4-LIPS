import { ProductService } from './product.service';
import { LoginService } from '../login/login.service';

export function productFactory(loginService: LoginService) {
    return new ProductService(loginService.isValidUser);
}

export let productServiceFactory = {
    provide: ProductService,
    useFactory: productFactory,
    deps: [LoginService]
}
