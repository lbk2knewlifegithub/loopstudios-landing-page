import { Component } from '@angular/core';

@Component({
  selector: 'lbk-intro',
  template: `
    <section class="relative">
      <!-- hero  image mobile and tablet-->
      <div class="desktop:hidden">
        <img
          class="max-h-[950px]  w-full object-cover object-center"
          src="assets/images/mobile/image-hero.jpg"
          alt="Hero"
        />
      </div>
      <!-- end hero  image mobile and tablet-->

      <!-- hero  image desktop-->
      <div class="hidden desktop:block">
        <img
          class="max-h-[950px]  w-full object-cover object-center"
          src="assets/images/desktop/image-hero.jpg"
          alt="Hero"
        />
      </div>
      <!-- end hero  image desktop -->

      <div class="container ">
        <div
          class="absolute -translate-y-1/2  top-1/2 text-inverted  text-4xl p-6 border-2 border-white desktop:pr-20 lg:text-6xl"
        >
          <h1>
            IMMERSIVE <br />
            EXPERIENCES <br />
            THAT <br class="desktop:hidden" />
            DELIVER <br />
          </h1>
        </div>
      </div>
    </section>
  `,
})
export class IntroComponent {}
