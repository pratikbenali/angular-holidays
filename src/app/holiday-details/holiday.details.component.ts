
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpUtilsService } from '../services/http.utils.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'holiday-details',
  templateUrl: './holiday.details.component.html',
  styleUrls: ['./holiday.details.component.scss']
})

export class HolidayDetailsComponent implements OnInit, OnDestroy {
  holidayDetails: object = {};
  date: string;
  private sub: any;

  constructor(private httpUtilsService: HttpUtilsService, private route: ActivatedRoute) {

  }

  renderDate(dt) {
    return new Date(dt);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.date = params['id'];
    });
    if (this.httpUtilsService.getHolidayDetails()) {
      this.holidayDetails = this.httpUtilsService.getHolidayDetails();
    } else {
      this.httpUtilsService.getHolidaysList().subscribe((response) => {
        this.httpUtilsService.setHolidayDetails(response.data.holidays);
        this.holidayDetails = response.data.holidays;
      })
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}