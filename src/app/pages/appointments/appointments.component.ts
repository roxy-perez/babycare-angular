import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Appointment } from 'src/app/models/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';
import { ToastService } from 'src/app/services/toast.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
})
export class AppointmentsComponent {
  babyId: string;
  appointments: Appointment[];

  constructor(
    public appointmentService: AppointmentService,
    public userService: UserService,
    public toastService: ToastService,
    public router: Router
  ) {
    this.babyId = this.userService.getBabyId();
    this.appointmentService.getAll(this.babyId).subscribe({
      next: (res: { data: { appointments: Appointment[] } }) => {
        const { appointments } = res.data;
        if (appointments) this.appointments = appointments;
        return true;
      },
      error: (error: any) => {
        const errorMessage = error.error.error.message;
        console.log(errorMessage);
        return false;
      },
    });
  }

  show(id: string) {
    this.router.navigateByUrl(`/appointments/show/${id}`);
  }
}
