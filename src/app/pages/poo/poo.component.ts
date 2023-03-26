import { Component } from '@angular/core';

import { PooService } from 'src/app/services/poo.service';
import { UserService } from 'src/app/services/user.service';
import { ToastService } from 'src/app/services/toast.service';
import { Poo } from 'src/app/models/poo';

@Component({
  selector: 'app-poo',
  templateUrl: './poo.component.html',
  styleUrls: ['./poo.component.scss'],
})
export class PooComponent {
  babyId: string;
  poos: Poo[];

  constructor(
    public pooService: PooService,
    public userService: UserService,
    public toastService: ToastService
  ) {
    this.babyId = this.userService.getBabyId();
    this.pooService.getAll(this.babyId).subscribe({
      next: (res: { data: { poos: Poo[] } }) => {
        const { poos } = res.data;
        if (poos) this.poos = poos;
        return true;
      },
      error: (error: any) => {
        const errorMessage = error.error.error.message;
        console.log(errorMessage);
        return false;
      },
    });
  }
}
