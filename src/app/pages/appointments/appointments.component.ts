import { Component } from '@angular/core';

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
    public toastService: ToastService
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
        this.toastService.error(errorMessage);
        return false;
      },
    });
  }
}
