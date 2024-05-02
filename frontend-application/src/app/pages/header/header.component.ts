import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  userName = localStorage.getItem("userName"); // Nombre quemado por el momento

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }

  logout(): void {
    // Lógica para cerrar sesión (por ejemplo, limpiar localStorage, etc.)
    // Después, redirige al componente de login
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
