
import { Component, OnInit } from '@angular/core';
import { HttpUtilsService } from '../services/http.utils.service';


@Component({
  selector: 'holidays-list',
  templateUrl: './holidays.list.component.html',
  styleUrls: ['./holidays.list.component.scss']
})

export class HolidaysListComponent implements OnInit {
  holidaysListDetails: object = {};
  holidaysList: Array<string> = [];
  constructor(private httpUtilsService: HttpUtilsService) {
  }

  renderDate(dt){
    return new Date(dt);
  }

  ngOnInit() {
    this.httpUtilsService.getHolidaysList().subscribe((response) => {
      this.httpUtilsService.setHolidayDetails(response.data.holidays);
      this.holidaysListDetails = response.data.holidays;
      this.holidaysList = Object.keys(this.holidaysListDetails);      
    })
  }
}