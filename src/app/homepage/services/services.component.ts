import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/core/services/service.service';
import { Service } from 'src/app/shared/models/service.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  
})
export class ServicesComponent implements OnInit {
  services: Service[] = [];
  displayedServices: Service[] = [];
  showMoreButton: boolean = false;

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.serviceService.getServices().subscribe((data) => {
      this.services = data;
      this.displayedServices = this.services.slice(0, 3);
      this.showMoreButton = this.services.length > 3;
    });
  }

  showMore(): void {
    const currentIndex = this.displayedServices.length;
    const remainingServices = this.services.slice(
      currentIndex,
      currentIndex + this.services.length
    );
    this.displayedServices = [...this.displayedServices, ...remainingServices];
    this.showMoreButton = this.displayedServices.length < this.services.length;
  }
}
