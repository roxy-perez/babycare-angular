import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Appointment } from 'src/app/models/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';
import { ToastService } from 'src/app/services/toast.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-show-appointment',
  templateUrl: './show-appointment.component.html',
  styleUrls: ['./show-appointment.component.scss'],
})
export class ShowAppointmentComponent {
  id: string;
  babyId: string;
  title: string;
  details: string;
  date: string;
  time: string;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public appointmentService: AppointmentService,
    public userService: UserService,
    public toastService: ToastService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.babyId = this.userService.getBabyId();
    this.getAppointment();
  }

  getAppointment() {
    this.appointmentService.getOne(this.babyId, this.id).subscribe({
      next: (res: { data: { appointment: Appointment } }) => {
        const { appointment } = res.data;
        if (appointment) {
          this.title = appointment.title;
          this.details = appointment.details;
          this.date = appointment.date.toString().split('T')[0];
          this.time = new Date(appointment.date).toLocaleTimeString();
        }
        return true;
      },
      error: (error: any) => {
        this.toastService.error('Algo salió mal');
        this.router.navigateByUrl('/appointments');
        return false;
      },
    });
  }

  update(form: NgForm) {
    const { date, time, title, details } = form.value;
    const appointment: Appointment = {
      title,
      details,
      date: new Date(`${date}T${time}`),
      babyId: this.babyId,
    };
    this.appointmentService.update(this.id, appointment).subscribe({
      next: (res: { data: { appointment: Appointment } }) => {
        const { appointment } = res.data;
        if (appointment) {
          this.toastService.success('Actualizado correctamente');
          this.router.navigateByUrl('/appointments');
        } else {
          this.toastService.error('No se pudo actualizar');
          this.router.navigateByUrl('/appointments');
        }
        return true;
      },
      error: (error: any) => {
        this.toastService.error('No se pudo actulizar');
        this.router.navigateByUrl('/appointments');
        return false;
      },
    });
  }

  delete() {
    this.appointmentService.delete(this.id).subscribe({
      next: (res: { data: { appointment: Appointment } }) => {
        const { appointment } = res.data;
        if (appointment) {
          this.toastService.success('Eliminado correctamente');
          this.router.navigateByUrl('/appointments');
        } else {
          this.toastService.error('No se pudo eliminar');
          this.router.navigateByUrl('/appointments');
        }
        return true;
      },
      error: (error: any) => {
        this.toastService.error('No se pudo eliminar');
        this.router.navigateByUrl('/appointments');
        return false;
      },
    });
  }
}
