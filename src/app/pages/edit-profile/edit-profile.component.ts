import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { ToastService } from 'src/app/services/toast.service';
import { ApiResponse } from 'src/app/models/api-response';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent {

  faArrowLeft = faArrowLeft;
  user: User;
  username: string;
  babyName: string;
  email: string;
  currentPassword: string;
  newPassword: string;

  constructor(private router: Router, public userService: UserService, public toastr: ToastService) {
    this.user = this.userService.user;
    this.username = this.user.username;
    this.babyName = this.user.Baby.name;
    this.email = this.user.email;
    this.currentPassword = '';
  }

  onSave() {
    this.userService.editProfile(this.username,
      this.babyName,
      this.email,
      this.currentPassword,
      this.newPassword).subscribe({
        next: (response: ApiResponse) => {
          this.user = response.message.updatedUser;
          this.userService.user = this.user;
          this.userService.user.Baby.name = this.user.Baby.name;
          console.log(this.userService);
          this.toastr.success('Perfil editado correctamente');
        },
        complete: () => this.router.navigate(['/login']),
        error: (err) => {
          this.toastr.error('Error al editar perfil');
        }
      });
  }
}
