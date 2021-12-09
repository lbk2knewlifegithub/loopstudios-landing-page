import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FootComponent, HeaderComponent } from './components';
import { AppComponent } from './containers/app.component';

const COMPONENTS = [FootComponent, HeaderComponent];
const CONTAINERS = [AppComponent];

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [COMPONENTS, CONTAINERS],
  declarations: [COMPONENTS, CONTAINERS],
})
export class CoreModule {}
