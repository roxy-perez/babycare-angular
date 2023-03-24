import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent {

  faArrowLeft = faArrowLeft;
  constructor(private router: Router) { }

  onCancel() {
    Swal.fire({
      title: '¿Deseas salir sin guardar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: "#F22E52",
      confirmButtonText: '¡Por supuesto que sí!',
      cancelButtonColor: "#59D961",
      cancelButtonText: 'No, ahora guardaré'
    }).then((answer) => {
      if (!answer.isConfirmed) {
        return;
      } else {
        window.close();
        this.router.navigate(['/home']);
      }
    });
  }
  onSave(){
    console.log('Guardando...');
  }
}
