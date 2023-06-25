import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [HeroComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [HeroComponent],
})
export class HomepageModule {}
