import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsRegisterGuard } from 'src/app/core/guards/is-register.guard';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { VerifyOtpComponent } from './component/verify-otp/verify-otp.component';

const routes: Routes = [
  {
    path: 'register',
    pathMatch: 'full',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'verify-otp',
    component: VerifyOtpComponent,
  },
  {
    path: '',
    canActivate: [IsRegisterGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {}
