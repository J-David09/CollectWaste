import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Bienvenido a Collect-Waste';
  openFacebook() {
    window.open('https://www.facebook.com/edwin.granada.96', '_blank');
  }

  openTwitter() {
    window.open('https://twitter.com/EdwinGranada', '_blank');
  }

  openInstagram() {
    window.open('https://www.instagram.com/edwingranada/', '_blank');
  }

  openWhatsApp() {
    window.open('https://wa.me/573215433283', '_blank');
  }
}
