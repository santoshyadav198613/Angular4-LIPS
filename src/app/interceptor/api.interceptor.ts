import { Injectable, Inject } from '@angular/core';
import {
    HttpRequest, HttpHeaders, HttpInterceptor,
    HttpHandler, HttpEvent
} from '@angular/common/http';

import { ApiEndpoint } from '../service/api/Iapi';
import { EndPoint, apiEndPoint } from '../service/api/api.value';

import { Observable } from 'rxjs/Observable'

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

    constructor( @Inject(EndPoint) private apiEndPoint: ApiEndpoint) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.method === 'POST') {
            let body = req.body;
            body.createdDate = new Date('13-sep-2017');
            console.log(body)
            let request = req.clone({
                body: body,
                headers: req.headers.set('token', this.apiEndPoint.token)
            });
            return next.handle(request);
        }

        return next.handle(req);
    }

}
