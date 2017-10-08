import { InjectionToken } from '@angular/core';
import { ApiEndpoint } from './Iapi';

export let EndPoint = new InjectionToken<ApiEndpoint>('api.value');

export let apiEndPoint: ApiEndpoint = {
    endPoint: 'http://localhost:3000/',
    token: 'dsgfjhgsdjhjhjafj235345'
}
