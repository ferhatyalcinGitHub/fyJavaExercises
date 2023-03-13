import {Component, OnInit} from '@angular/core';
import {AppointmentService, IDatePicker} from './service/appointment.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public datePicker: IDatePicker = {
    items: []
  };

  public ngOnInit(): void {
    const appointments = this.appointmentService.getAppointments();
    this.datePicker = this.appointmentService.convertToDatepicker(appointments);
  }

  constructor(public appointmentService: AppointmentService) {
  }

}
