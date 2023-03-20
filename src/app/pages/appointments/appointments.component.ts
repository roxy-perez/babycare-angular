import { Component } from '@angular/core';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
})
export class AppointmentsComponent {
  appointments: Appointment[];

  constructor(public appointmentService: AppointmentService) {
    this.appointments = this.appointmentService.findMany();
  }
}
