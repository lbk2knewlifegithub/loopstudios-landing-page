import { Component, Input } from '@angular/core';
import { Creation } from '../models/creation.model';

@Component({
  selector: 'lbk-creation-preview-list',
  template: `
    <section class="container pb-32 desktop:mt-32">

      <div class="desktop:justify-between desktop:flex desktop:items-center">
        <h1 class="font-heading text-3xl text-center desktop:text-left">
          OUR CREATIONS
        </h1>

        <div class="hidden desktop:block">
          <a class="btn btn-outline" href="#">SEE ALL</a>
        </div>
      </div>

      <div
        class="grid gap-6 mt-14 tablet:grid-cols-2 desktop:grid-cols-4 desktop:gap-8"
      >
        <ng-container *ngFor="let creation of creations">
          <lbk-creation-preview [creation]="creation"></lbk-creation-preview>
        </ng-container>
      </div>

      <div class="mt-10 flex justify-center desktop:hidden">
        <a class="btn btn-outline" href="#">SEE ALL</a>
      </div>
    </section>
  `,
})
export class CreationPreviewListComponent {
  @Input() creations!: Creation[];
}
