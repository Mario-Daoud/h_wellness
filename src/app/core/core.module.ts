import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './services/service.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [ServiceService],
})
export class CoreModule {}
