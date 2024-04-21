import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public isOpen: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const navCollapse = document.querySelector('.navbar__collapse');
        if (navCollapse) {
          navCollapse.classList.add('hide');
        }
      }
    });
  }

  ngOnInit(): void {}

  onChangeBar() {
    const navCollapse = document.querySelector('.navbar__collapse');
    if (navCollapse) {
      navCollapse.classList.toggle('hide');
    }
  }

  goRoute(index: string) {
    switch (index) {
      case '01':
        this.router.navigate(['/']);
        break;
      case '02':
        this.router.navigate(['/lineas-negocios']);
        break;
      case '03':
        this.router.navigate(['/proyectos']);
        break;
      case '04':
        this.router.navigate(['/certificaciones']);
        break;
      case '05':
        this.router.navigate(['/novedades']);
        break;
      case '06':
        this.router.navigate(['/contacto']);
        break;
      default:
        break;
    }
    const navCollapse = document.querySelector('.navbar__collapse');
    if (navCollapse) {
      navCollapse.classList.add('hide');
    }
  }
}
