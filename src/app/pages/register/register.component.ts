import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  faArrowLeft = faArrowLeft;
  constructor(private router: Router) { }

  exit() {
    Swal.fire({
      title: '¿Deseas salir sin guardar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: "#F22E52",
      confirmButtonText: 'Sí, ya he guardado!',
      cancelButtonColor: "#59D961",
      cancelButtonText: 'No, ahora guardaré'
    }).then((answer) => {
      if (!answer.isConfirmed) {
        return;
      } else {
        window.close();
        this.router.navigate(['/front']);
      }
    });
  }
}
