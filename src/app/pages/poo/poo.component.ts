import { Component } from '@angular/core';
import { faPoo } from '@fortawesome/free-solid-svg-icons';
import { Poo } from 'src/app/models/poo';
import { PooService } from 'src/app/services/poo.service';

@Component({
  selector: 'app-poo',
  templateUrl: './poo.component.html',
  styleUrls: ['./poo.component.scss'],
})
export class PooComponent {
  faPoo = faPoo;
  poos: Poo[];

  constructor(public pooService: PooService) {
    this.poos = this.pooService.findMany();
  }
}
