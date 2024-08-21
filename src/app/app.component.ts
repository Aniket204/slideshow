import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CodeSandbox';
  noOfSlides: number = 10;
  currentTranslate: number = 0;
  slideWidth: number = 250;
  visibleSlides: number = 4.5;

  get maxTranslate(): number {
    return -(this.slideWidth * (this.noOfSlides - this.visibleSlides));
  }

  get disablePrev(): boolean {
    return this.currentTranslate === 0;
  }

  get disableNext(): boolean {
    return this.currentTranslate <= this.maxTranslate;
  }

  leftClick() {
    if (!this.disablePrev) {
      this.currentTranslate += this.slideWidth;
      if (this.currentTranslate > 0) {
        this.currentTranslate = 0;
      }
    }
  }

  rightClick() {
    if (!this.disableNext) {
      this.currentTranslate -= this.slideWidth;
      if (this.currentTranslate < this.maxTranslate) {
        this.currentTranslate = this.maxTranslate;
      }
    }
  }
}
