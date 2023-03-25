import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faPoo } from '@fortawesome/free-solid-svg-icons';
import { Poo } from 'src/app/models/poo';
import { PooService } from 'src/app/services/poo.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-poo',
  templateUrl: './create-poo.component.html',
  styleUrls: ['./create-poo.component.scss'],
})
export class CreatePooComponent {
  faPoo = faPoo;
  color: string;
  consistency: string;

  constructor(
    public router: Router,
    public pooService: PooService,
    public userService: UserService
  ) {}

  create(form: NgForm) {
    const date = new Date();
    const poo: Poo = {
      ...form.value,
      date,
      babyId: this.userService.getBabyId(),
    };
    this.pooService.create(poo).subscribe({
      next: (res: { data: { poo: Poo } }) => {
        const { poo } = res.data;
        if (poo) this.router.navigateByUrl('/poo');
        return true;
      },
      error: (error: any) => {
        console.log(error.error.error.message);
        return false;
      },
    });
  }
}
