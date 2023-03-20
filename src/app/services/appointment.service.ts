import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  appointments: Appointment[] = [
    {
      title: 'Otorrino',
      details: 'Consulta 23',
      date: new Date(),
    },
    {
      title: 'Revisión anual',
      details: 'Revisión niño sano primer año, Consulta 10.',
      date: new Date('2023-03-17T15:30:45'),
    },
    {
      title: 'Pediatra',
      details: '',
      date: new Date('2023-03-16T05:40:45'),
    },
    {
      title: 'Fisio',
      details: '',
      date: new Date('2023-03-05T10:20:45'),
    },
  ];

  constructor() {}

  findMany(): Appointment[] {
    return this.appointments.sort(
      (a, b) => a.date.getTime() - b.date.getTime()
    );
  }

  create(appointment: Appointment): void {
    this.appointments.push(appointment);
  }
}
