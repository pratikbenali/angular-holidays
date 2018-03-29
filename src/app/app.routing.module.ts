import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { HolidaysListComponent }   from './holidays-list/holidays.list.component';
import {HolidayDetailsComponent} from './holiday-details/holiday.details.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/holidaysList', pathMatch: 'full' },
  { path: 'holidaysList', component: HolidaysListComponent },
  { path: 'holiday-details/:id', component: HolidayDetailsComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}