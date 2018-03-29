import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing.module';
import {
  MatGridListModule,
  MatIconModule,  
  MatCardModule,
  MatInputModule,
  MatListModule,
} from '@angular/material';
import { AppComponent } from './app.component';
import { HolidaysListComponent } from './holidays-list/holidays.list.component';
import { HolidayDetailsComponent } from './holiday-details/holiday.details.component';
import { HttpUtilsService } from './services/http.utils.service';

@NgModule({
  declarations: [
    AppComponent,
    HolidaysListComponent,
    HolidayDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [HttpUtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
