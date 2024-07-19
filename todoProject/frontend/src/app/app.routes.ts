import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ListToDoComponent } from './components/list-to-do/list-to-do.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RouteGuardService } from './services/auth/route-guard.service';
import { TodoUpdateComponent } from './components/todo-update/todo-update.component';

export const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'welcome/:name', component:WelcomeComponent, canActivate:[RouteGuardService] },
    {path:'todos', component:ListToDoComponent,canActivate:[RouteGuardService] },
    {path:'logout', component: LogoutComponent, canActivate:[RouteGuardService] },
    {path:'todos/:id', component: TodoUpdateComponent, canActivate:[RouteGuardService] },
    {path:'**', component:ErrorComponent, canActivate:[RouteGuardService] }
];
