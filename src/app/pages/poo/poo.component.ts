import { Component } from '@angular/core';
import { Poo } from 'src/app/models/poo';
import { PooService } from 'src/app/services/poo.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-poo',
  templateUrl: './poo.component.html',
  styleUrls: ['./poo.component.scss'],
})
export class PooComponent {
  babyId: string;
  poos: Poo[];

  constructor(public pooService: PooService, public userService: UserService) {
    this.babyId = this.userService.getBabyId();
    this.pooService.getAll(this.babyId).subscribe({
      next: (res: { data: { poos: Poo[] } }) => {
        const { poos } = res.data;
        if (poos) this.poos = poos;
        return true;
      },
      error: (error: any) => {
        console.log(error.error.error.message);
        return false;
      },
    });
  }
}
