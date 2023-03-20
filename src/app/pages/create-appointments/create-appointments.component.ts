import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-create-appointments',
  templateUrl: './create-appointments.component.html',
  styleUrls: ['./create-appointments.component.scss'],
})
export class CreateAppointmentsComponent {
  title: string;
  details: string;
  time: string;
  date: string;

  constructor(
    public router: Router,
    public appointmentService: AppointmentService
  ) {}

  create(form: NgForm) {
    const { date, time, title, details } = form.value;
    const appointment: Appointment = {
      title,
      details,
      date: new Date(`${date}T${time}`),
    };
    this.appointmentService.create(appointment);
    this.router.navigateByUrl('/appointments');
  }
}
