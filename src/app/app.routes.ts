import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomtimerComponent } from './customtimer/customtimer.component';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { InterfaceComponent } from './interface/interface.component';
import { LogininterfaceComponent } from './logininterface/logininterface.component';
import { SignupinterfaceComponent } from './signupinterface/signupinterface.component';

export const routes: Routes = [
    
    
    {path:'',component:InterfaceComponent},
  { path: 'customtimer', component: CustomtimerComponent },
  { path: 'logininterface', component: LogininterfaceComponent },
  { path: 'signupinterface', component: SignupinterfaceComponent },
];
