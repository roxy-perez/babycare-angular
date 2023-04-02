import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Community } from 'src/app/models/community';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { ToastService } from '../../services/toast.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  faArrowLeft = faArrowLeft;
  user: User = {
    username: '',
    email: '',
    password: '',
    Baby: {
      id: '',
      name: '',
      birthday: '',
      communityCode: null
    }
  };
  communities: Community[];

  constructor(private router: Router, private userService: UserService, private toastr: ToastService) {
    this.userService.getAllCommunities().subscribe({
      next: (data: { communities: Community[] }) => {
        this.communities = data.communities;
      }
    });
  }

  onSubmit() {
    this.userService.register(this.user).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }

  exit() {
    window.close();
    this.router.navigate(['/front']);
  }
}
