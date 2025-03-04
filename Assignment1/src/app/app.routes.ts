import { Routes } from '@angular/router';
import { LoginComponent } from './auth-user/login/login.component';

export const routes: Routes = [
    {
        path : 'login',
        component : LoginComponent
    },
    {
        path : 'register',
        component : LoginComponent
    },
    {
        path : 'user',
        component : LoginComponent
    }
];
