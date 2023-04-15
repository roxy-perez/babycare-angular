import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { Community } from 'src/app/models/community';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
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
      communityCode: null,
    },
  };
  communities: Community[];
  placeholderDate: string;

  constructor(private router: Router, private userService: UserService) {
    this.userService.getAllCommunities().subscribe({
      next: (data: { communities: Community[] }) => {
        this.communities = data.communities;
      },
    });
    const userAgent = navigator.userAgent.toLowerCase();
    const mobileKeywords = ['mobile', 'android', 'ios', 'iphone', 'ipad'];
    const isMobile = mobileKeywords.some((keyword) =>
      userAgent.includes(keyword)
    );
    this.placeholderDate = isMobile ? 'F. nacimiento' : '';
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
