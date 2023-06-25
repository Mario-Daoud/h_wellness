import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutusComponent } from './aboutus/aboutus.component';
import { OurservicesComponent } from './ourservices/ourservices.component';

@NgModule({
  declarations: [HeroComponent, AboutusComponent, OurservicesComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [HeroComponent, AboutusComponent, OurservicesComponent],
})
export class HomepageModule {}
