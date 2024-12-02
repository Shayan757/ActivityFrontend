import { Routes } from '@angular/router';
import { ActivityListComponent } from './activity-list/activity-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'activity-list', pathMatch: 'full' },
  { path: 'activity-list', component: ActivityListComponent },
];
