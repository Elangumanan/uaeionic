import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRoutingModule } from './home-routing.module';
import { TermsConditionComponent } from './component/terms-condition/terms-condition.component';



@NgModule({
  declarations: [
    TermsConditionComponent
  ],
  imports: [
    HomePageRoutingModule,
    CommonModule
  ]
})
export class HomeModule { }
