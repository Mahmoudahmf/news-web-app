import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { HealthComponent } from './health/health.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { SportComponent } from './sport/sport.component';
import { TechComponent } from './tech/tech.component';
import { NewsdetailsComponent } from './newsdetails/newsdetails.component';
const routes: Routes = [
  { path: "home", canActivate: [AuthGuard], component: HomeComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "tech", canActivate: [AuthGuard], component: TechComponent },
  { path: "sport", canActivate: [AuthGuard], component: SportComponent },
  { path: "health", canActivate: [AuthGuard], component: HealthComponent },
  { path: "moviedetails/:id", canActivate: [AuthGuard], component: NewsdetailsComponent },
  { path: "login", component: LoginComponent },
  { path: "reg", component: RegisterComponent },
  { path: "**", component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
