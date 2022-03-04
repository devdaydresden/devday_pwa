import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BasicRestService } from './basic-rest.service';

export interface LoginData {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private restService: BasicRestService) { }

  login(loginData : LoginData) {
    return this.restService.post(environment.apiUrl + 'api-token-auth/', loginData)
  }
}
