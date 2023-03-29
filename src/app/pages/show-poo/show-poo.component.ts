import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Poo } from 'src/app/models/poo';
import { PooService } from 'src/app/services/poo.service';
import { ToastService } from 'src/app/services/toast.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-show-poo',
  templateUrl: './show-poo.component.html',
  styleUrls: ['./show-poo.component.scss'],
})
export class ShowPooComponent {
  id: string;
  babyId: string;
  color: string;
  date: Date;
  consistency: string;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public pooService: PooService,
    public userService: UserService,
    public toastService: ToastService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.babyId = this.userService.getBabyId();
    this.getPoo();
  }

  getPoo() {
    this.pooService.getOne(this.babyId, this.id).subscribe({
      next: (res: { data: { poo: Poo } }) => {
        const { poo } = res.data;
        if (poo) {
          this.color = poo.color;
          this.consistency = poo.consistency;
          this.date = poo.date;
        }
        return true;
      },
      error: (error: any) => {
        const errorMessage = error.error.error.message;
        this.toastService.error(errorMessage);
        this.router.navigateByUrl('/poo');
        return false;
      },
    });
  }

  update(form: NgForm) {
    const poo: Poo = {
      ...form.value,
      date: this.date,
    };
    this.pooService.update(this.id, poo).subscribe({
      next: (res: { data: { poo: Poo } }) => {
        const { poo } = res.data;
        if (poo) {
          this.toastService.success('Actualizado correctamente');
          this.router.navigateByUrl('/poo');
        }
        return true;
      },
      error: (error: any) => {
        this.toastService.error('No se pudo actulizar');
        this.router.navigateByUrl('/poo');
        return false;
      },
    });
  }

  delete() {
    this.pooService.delete(this.id).subscribe({
      next: (res: { data: { poo: Poo } }) => {
        const { poo } = res.data;
        if (poo) {
          this.toastService.success('Eliminado correctamente');
          this.router.navigateByUrl('/poo');
        } else {
          this.toastService.error('No se pudo eliminar');
          this.router.navigateByUrl('/poo');
        }
        return true;
      },
      error: (error: any) => {
        this.toastService.error('No se pudo eliminar');
        this.router.navigateByUrl('/poo');
        return false;
      },
    });
  }
}
