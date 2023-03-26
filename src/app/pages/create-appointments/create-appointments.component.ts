import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AppointmentService } from 'src/app/services/appointment.service';
import { UserService } from 'src/app/services/user.service';
import { Appointment } from 'src/app/models/appointment';
import { ToastService } from 'src/app/services/toast.service';

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
    public userService: UserService,
    public toastService: ToastService
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
        if (appointment) {
          this.toastService.success('Guardado correctamente');
          this.router.navigateByUrl('/appointments');
        }
        return true;
      },
      error: (error: any) => {
        const errorMessage = error.error.error.message;
        this.toastService.error(errorMessage);
        return false;
      },
    });
  }
}
