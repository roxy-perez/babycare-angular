import { Component } from '@angular/core';
import { faPoo } from '@fortawesome/free-solid-svg-icons';
import { Poo } from 'src/app/models/poo';

@Component({
  selector: 'app-poo',
  templateUrl: './poo.component.html',
  styleUrls: ['./poo.component.scss'],
})
export class PooComponent {
  faPoo = faPoo;
  poos: Poo[] = [
    {
      color: 'brown',
      consistency: 'normal',
      date: new Date(),
    },
    {
      color: 'brown',
      consistency: 'hard',
      date: new Date('2023-03-17T15:30:45'),
    },
    {
      color: 'brown',
      consistency: 'normal',
      date: new Date('2023-03-16T05:40:45'),
    },
    {
      color: 'yellow',
      consistency: 'soft',
      date: new Date('2023-03-15T10:20:45'),
    },
    {
      color: 'green',
      consistency: 'diarrhea',
      date: new Date('2023-03-14T22:30:45'),
    },
    {
      color: 'green',
      consistency: 'soft',
      date: new Date('2023-03-14T08:10:45'),
    },
    {
      color: 'yellow',
      consistency: 'normal',
      date: new Date('2023-03-13T21:00:45'),
    },
    {
      color: 'black',
      consistency: 'hard',
      date: new Date('2023-03-12T12:30:45'),
    },
  ];
}
