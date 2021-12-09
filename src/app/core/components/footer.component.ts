import { Component } from '@angular/core';

@Component({
  selector: 'lbk-footer',
  template: ` <footer role="footer" class="bg-footer text-inverted">
    <div
      class="container flex flex-col gap-8 py-16 justify-center desktop:flex-row desktop:justify-between"
    >
      <div class="grid place-content-center  gap-6">
        <!-- logo -->
        <a href="#" class="">
          <img src="/assets/images/logo.svg" alt="Logo" />
        </a>
        <!-- end logo -->

        <!-- links -->
        <ul
          class="flex flex-col font-black text-center gap-4 desktop:flex-row desktop:gap-6"
        >
          <li><a class="link" href="#">About</a></li>
          <li><a class="link" href="#">Careers</a></li>
          <li><a class="link" href="#">Events</a></li>
          <li><a class="link" href="#">Products</a></li>
          <li><a class="link" href="#">Support</a></li>
        </ul>
        <!-- end links -->
      </div>

      <div class="grid place-items-center gap-2 desktop:place-items-end">
        <!-- social -->
        <ul class="inline-flex gap-4 desktop:text-2xl desktop:gap-6">
          <li>
            <a class="link" href="#"><span class="fab fa-facebook-square"></span></a>
          </li>
          <li>
            <a class="link" href="#"><span class="fab fa-twitter"></span></a>
          </li>
          <li>
            <a class="link" href="#"><span class="fab fa-pinterest"></span></a>
          </li>
          <li>
            <a class="link" href="#"><span class="fab fa-instagram"></span></a>
          </li>
        </ul>
        <!-- end social -->

        <!-- copyright -->
        <div>
          <p class="text-muted">© 2021 Loopstudios. All rights reserved.</p>
        </div>
        <!-- end copyright -->
      </div>
    </div>
  </footer>`,
})
export class FootComponent {}
