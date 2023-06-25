import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutusComponent } from './aboutus/aboutus.component';

@NgModule({
  declarations: [HeroComponent, AboutusComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [HeroComponent, AboutusComponent],
})
export class HomepageModule {}
