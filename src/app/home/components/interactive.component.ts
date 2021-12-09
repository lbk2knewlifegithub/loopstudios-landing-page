import { Component } from '@angular/core';

@Component({
  selector: 'lbk-interactive',
  template: `
    <section
      class="relative container grid gap-20 py-28 place-content-center desktop:place-content-start"
    >
      <!-- interactive image mobile and tablet -->
      <div class="desktop:hidden">
        <img
          class="w-full object-cover object-center"
          src="/assets/images/mobile/image-interactive.jpg"
          alt="Interactive"
        />
      </div>
      <!-- end interactive image mobile and tablet -->

      <!-- interactive image desktop -->
      <div class="hidden desktop:block">
        <img
          class="w-full object-cover object-center"
          src="/assets/images/mobile/image-interactive.jpg"
          alt="Interactive"
        />
      </div>
      <!-- end interactive image desktop -->


      <div class="text-center space-y-4 max-w-2xl desktop:absolute desktop:bg-white desktop:bottom-0 desktop:right-0 desktop:-translate-x-36 desktop:p-20 desktop:text-left">
        <h1 class="text-4xl">THE LEADER IN INTERACTIVE VR</h1>

        <p class="font-bold font-subheading text-muted">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  `,
})
export class InteractiveComponent {}
