import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Creation } from '../models/creation.model';

@Component({
  selector: 'lbk-creation-preview',
  template: `
    <a
      href="#"
      class="block relative aspect-w-16 aspect-h-6 desktop:aspect-h-5 desktop:aspect-w-3 overflow-hidden group"
    >
      <!-- mobile -->
      <img
        class="image-fill desktop:hidden "
        [src]="creation.srcMobile"
        [alt]="creation.name"
      />
      <!-- end mobile -->

      <!-- desktop -->
      <img
        class="image-fill hidden desktop:block "
        [src]="creation.srcDesktop"
        [alt]="creation.name"
      />
      <!-- end desktop -->

      <!-- mask -->
      <div
        class="absolute w-full h-full bg-gradient-to-r from-black/30 to-black/10"
      ></div>

      <!-- end mask -->
      <!-- name -->
      <div class="absolute h-full">
        <div
          class="absolute left-6 bottom-6 desktop:left-10 desktop:bottom-10 group-hover:font-black"
        >
          <h2
            [innerHTML]="name(creation.name)"
            class="bottom-0 text-inverted uppercase tracking-wide font-heading text-xl inline-block desktop:text-2xl"
          ></h2>
        </div>
      </div>
      <!-- end name -->
    </a>
  `,
  styles: [
    `
      .image-fill {
        @apply absolute inset-0 w-full h-full object-cover object-center delay-75 duration-200 group-hover:scale-110;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreationPreviewComponent {
  @Input() creation!: Creation;

  name(name: string): string {
    return name.replace(new RegExp(` `), '<br>');
  }
}
