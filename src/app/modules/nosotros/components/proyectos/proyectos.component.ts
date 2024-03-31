import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
  altCover : string = "PROYECTOS";
  imgCover : string = "assets\\img\\carousel\\3.jpeg";

  constructor() { }

  ngOnInit(): void {
  }

}
