import { Component, OnInit } from '@angular/core';

import { faArrowCircleDown, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { PageScrollConfig } from 'ngx-page-scroll';
import { ParallaxConfig } from 'ngx-parallax';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  customStyle: object;
  faArrowCircleDown: IconDefinition;
  parallaxConfig: ParallaxConfig;

  constructor() {
    // Set ngx-page-scroll default configurations
    PageScrollConfig.defaultScrollOffset = 80;
    PageScrollConfig.defaultEasingLogic = {
      ease: (t: number, b: number, c: number, d: number): number => {
        // easeInOutExpo easing
        if (t === 0) return b;
        if (t === d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
      }
    };
  }

  ngOnInit() {
    this.parallaxConfig = { ratio: 0.2 };
    this.faArrowCircleDown = faArrowCircleDown;
    this.adjustHeight();
  }

  adjustHeight() {
    this.customStyle = {
      "height": window.innerHeight + "px"
    };
  }
}
