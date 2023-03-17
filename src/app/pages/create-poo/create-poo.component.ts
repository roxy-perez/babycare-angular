import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faPoo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create-poo',
  templateUrl: './create-poo.component.html',
  styleUrls: ['./create-poo.component.scss'],
})
export class CreatePooComponent {
  faPoo = faPoo;
  color: string;
  consistency: string;

  create(form: NgForm) {
    const date = new Date();
    const poo = {
      ...form.value,
      date,
    };
    console.log(poo);
  }
}
