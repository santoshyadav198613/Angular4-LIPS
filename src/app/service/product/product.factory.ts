import { ProductService } from './product.service';
import { LoginService } from '../login/login.service';
import { HttpClient } from '@angular/common/http';
export function productFactory(loginService: LoginService, http:HttpClient) {
    return new ProductService(loginService.isValidUser, http);
}

export let productServiceFactory = {
    provide: ProductService,
    useFactory: productFactory,
    deps: [LoginService, HttpClient]
}
