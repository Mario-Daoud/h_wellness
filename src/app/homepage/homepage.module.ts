import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeroComponent } from './hero/hero.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';
import { RecentworksComponent } from './recentworks/recentworks.component';
import { ReviewsComponent } from './reviews/reviews.component';

@NgModule({
  declarations: [
    HeroComponent,
    AboutusComponent,
    ServicesComponent,
    RecentworksComponent,
    ReviewsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FontAwesomeModule,
    CoreModule,
    FormsModule,
  ],
  exports: [
    HeroComponent,
    AboutusComponent,
    ServicesComponent,
    RecentworksComponent,
    ReviewsComponent
  ],
})
export class HomepageModule {}
