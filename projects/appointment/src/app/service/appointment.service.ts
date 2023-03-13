import {debug, logAppointment} from '../util/logging.util';

export interface IAppointment {
  id: number;
  start: string; // format YYYY-MM-DDTHH:mm:ss
  end: string; // format YYYY-MM-DDTHH:mm:ss
}

export interface IDatePickerSlot {
  id: number;
  startTime: string; // format HH:mm:ss
  endTime: string; // format HH:mm:ss
}

export interface IDatePickerItem {
  date: string; // format YYYY-MM-DD
  slots: IDatePickerSlot[];
}

export interface IDatePicker {
  items: IDatePickerItem[];
}

export class AppointmentService {

  public getAppointments(): IAppointment[] {
    debug('Appointments are loaded');
    const mockedAppointments =  [
      {
        id: 1,
        start: '2020-02-02T07:30:00',
        end: '2020-02-02T11:30:00',
      },
      {
        id: 2,
        start: '2020-02-02T14:30:00',
        end: '2020-02-02T18:30:00',
      },
      {
        id: 3,
        start: '2020-02-03T08:00:00',
        end: '2020-02-03T16:00:00',
      },
      {
        id: 4,
        start: '2020-02-04T08:00:00',
        end: '2020-02-04T16:00:00',
      },
      {
        id: 5,
        start: '2020-02-04T08:00:00',
        end: '2020-02-04T12:00:00',
      },
    ];
    mockedAppointments.forEach(appointment => logAppointment(appointment));
    return mockedAppointments;
  }

  public convertToDatepicker(appointments: IAppointment[]): IDatePicker {
    // Do something here
    return {
      items: []
    };
  }

}
