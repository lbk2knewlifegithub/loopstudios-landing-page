import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IntroComponent } from './components/intro.component';
import { HomePageComponent } from './containers';
import { HomeRoutingModule } from './home-routing.module';

const COMPONENTS = [
  IntroComponent
];

const CONTAINERS = [
  HomePageComponent
];

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [COMPONENTS, CONTAINERS],
})
export class HomeModule {}
