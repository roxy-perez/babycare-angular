import { Component } from '@angular/core';
import { faPoo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-poo',
  templateUrl: './poo.component.html',
  styleUrls: ['./poo.component.scss'],
})
export class PooComponent {
  faPoo = faPoo;
}
