import { Component } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  faArrowRight = faArrowRight;
  heroText: HTMLElement = document.querySelector('#hero-text');

  constructor() {}

  ngOnInit(): void {
    window.addEventListener('resize', this.updateHeroTextClass.bind(this));
    this.updateHeroTextClass();
  }

  updateHeroTextClass() {
    if (window.innerWidth <= 1024) {
      this.heroText.classList.add('col-12');
    } else {
      this.heroText.classList.remove('col-7');
    }
  }
}
