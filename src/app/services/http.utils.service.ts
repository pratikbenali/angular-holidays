import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";

@Injectable()

export class HttpUtilsService {
    public holidayDetails = null;
    constructor(private http: Http) {

    }

    setHolidayDetails(data) {
        this.holidayDetails = data;
    }

    getHolidayDetails(): object {
        return this.holidayDetails;
    }

    getHolidaysList(): Observable<any> {
        return this.http
            .get('/api/holidays-list')
            .map(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}