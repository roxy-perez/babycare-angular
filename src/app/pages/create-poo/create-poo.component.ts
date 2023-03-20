import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faPoo } from '@fortawesome/free-solid-svg-icons';
import { Poo } from 'src/app/models/poo';
import { PooService } from 'src/app/services/poo.service';

@Component({
  selector: 'app-create-poo',
  templateUrl: './create-poo.component.html',
  styleUrls: ['./create-poo.component.scss'],
})
export class CreatePooComponent {
  faPoo = faPoo;
  color: string;
  consistency: string;

  constructor(public router: Router, public pooService: PooService) {}

  create(form: NgForm) {
    const date = new Date();
    const poo: Poo = {
      ...form.value,
      date,
    };
    this.pooService.create(poo);
    this.router.navigateByUrl('/poo');
  }
}
