import {
  animate, state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Component } from '@angular/core';
import { fromEvent, map } from 'rxjs';

@Component({
  selector: 'lbk-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('slideIn', [
      state('void', style({ opacity: 0, transform: 'translateX(-100%)' })),
      transition(':enter', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateX(-100%)' })),
      ]),
    ]),
  ],
})
export class HeaderComponent {
  sticky$ = fromEvent(document, 'scroll').pipe(map((_) => window.scrollY > 0));
  isActive = false;
}
