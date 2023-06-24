import { Component } from '@angular/core';
import { faSpa } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  faSpa = faSpa;
}
