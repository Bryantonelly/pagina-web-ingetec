import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isOpen: boolean = false;

  constructor(
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onChangeBar(){
    this.isOpen = !this.isOpen;
  }

  goRoute(index: string){
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
      default:
        break;
    }
  }
}
