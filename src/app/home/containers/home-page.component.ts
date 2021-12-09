import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as fromData from 'src/app/home/data';
import { Creation } from '../models/creation.model';

@Component({
  selector: 'lbk-home-page',
  template: `
    <lbk-intro></lbk-intro>

    <lbk-interactive></lbk-interactive>

    <lbk-creation-preview-list
      [creations]="(creations$ | async)!"
    ></lbk-creation-preview-list>
  `,
})
export class HomePageComponent {
  creations$!: Observable<Creation[]>;

  constructor() {
    this.creations$ = of(fromData.creations);
  }
}
