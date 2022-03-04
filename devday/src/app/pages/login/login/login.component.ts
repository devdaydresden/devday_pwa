import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Card } from 'src/app/classes/card';
import { LoginData, LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginTabs = {
    activeIndex: 0,
    data: [{
      text : 'Login',
    } , {
      text : 'Registrieren',
    }]
  };

  public cards : Card[] = [
    {
      text: 'Sessions',
      icon: 'ic_sessions',
      link: '/test'
    },
    {
      text: 'Speaker',
      icon: 'ic_speaker',
      link: '/test'
    },
    {
      text: 'Location',
      icon: 'ic_location',
      link: '/test'
    }
  ];

  public loginData : LoginData = {
    username: null,
    password: null,
  }

  constructor(private loginService: LoginService, private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  public tabChanged(tabIndex: number) {
    this.loginTabs.activeIndex = tabIndex;
  }

  public performLogin() {
    this.loginService.login(this.loginData).subscribe(
      (data : {token: string}) => {
        console.log(data)
        this.cookieService.set('sessionToken', data.token, { expires: 2, sameSite: 'Strict' });
      }
    )
  }

}
