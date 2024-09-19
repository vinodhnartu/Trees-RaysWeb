import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  openNav(): void {
    document.getElementById('mySidenav')!.style.width = '250px';
  }

  closeNav(): void {
    document.getElementById('mySidenav')!.style.width = '0';
  }
}
