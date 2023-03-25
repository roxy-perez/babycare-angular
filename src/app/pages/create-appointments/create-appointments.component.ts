import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment.service';
import { UserService } from 'src/app/services/user.service';

import { Appointment } from 'src/app/models/appointment';

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
    public appointmentService: AppointmentService,
    public userService: UserService
  ) {}

  create(form: NgForm) {
    const { date, time, title, details } = form.value;
    const appointment: Appointment = {
      title,
      details,
      date: new Date(`${date}T${time}`),
      babyId: this.userService.getBabyId(),
    };

    this.appointmentService.create(appointment).subscribe({
      next: (res: { data: { appointment: Appointment } }) => {
        const { appointment } = res.data;
        if (appointment) this.router.navigateByUrl('/appointments');
        return true;
      },
      error: (error: any) => {
        console.log(error.error.error.message);
        return false;
      },
    });
  }
}
