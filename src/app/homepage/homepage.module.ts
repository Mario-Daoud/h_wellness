import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [HeroComponent, AboutusComponent, ServicesComponent],
  imports: [CommonModule, FontAwesomeModule, CoreModule],
  exports: [HeroComponent, AboutusComponent, ServicesComponent],
})
export class HomepageModule {}
