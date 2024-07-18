import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListToDoComponent } from './list-to-do/list-to-do.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './services/route-guard.service';
import { TodoUpdateComponent } from './todo-update/todo-update.component';

export const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'welcome/:name', component:WelcomeComponent, canActivate:[RouteGuardService] },
    {path:'todos', component:ListToDoComponent,canActivate:[RouteGuardService] },
    {path:'logout', component: LogoutComponent, canActivate:[RouteGuardService] },
    {path:'todos/:id', component: TodoUpdateComponent, canActivate:[RouteGuardService] },
    {path:'**', component:ErrorComponent, canActivate:[RouteGuardService] }
];
