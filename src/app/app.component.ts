import { Component } from '@angular/core';
import { ActivityListComponent } from './activity-list/activity-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ActivityListComponent],
  template: '<app-activity-list></app-activity-list>',
})
export class AppComponent {}
