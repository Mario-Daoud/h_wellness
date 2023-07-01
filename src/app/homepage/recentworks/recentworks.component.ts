import { Component } from '@angular/core';
import { Recentwork } from 'src/app/shared/models/recentwork.model';

@Component({
  selector: 'app-recentworks',
  templateUrl: './recentworks.component.html',
  styleUrls: ['./recentworks.component.css'],
})
export class RecentworksComponent {
  images: Recentwork[];
  currentIndex = 0;

  constructor() {}
}
