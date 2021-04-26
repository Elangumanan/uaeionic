import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IsRegisterGuard } from './core/guards/is-register.guard';
import { LandingCheckGuard } from './core/guards/landing-check.guard';

const routes: Routes = [
  {
    path: 'home',
    canActivate: [LandingCheckGuard],
    loadChildren: () => import('./modules/home/home.module').then( m => m.HomeModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/login/login.module').then( m => m.LoginModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
