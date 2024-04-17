import { Component, OnInit } from '@angular/core';

export interface IProyecto{
  titulo: string;
  img: string;
}
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
  altCover : string = "PROYECTOS";
  imgCover : string = "assets\\img\\carousel\\4.jpeg";
  proyectos1 : IProyecto[] = [
    {
      img:"assets\\img\\carousel\\4.jpeg",
      titulo : "CONSTRUCCIÓN DE MURO 15 M ALTURA CON ESTRUCTURA METÁLICA Y TERMOPANELES PIR MOLITALIA"
    },
    {
      img:"assets\\img\\carousel\\3.jpeg",
      titulo : "CONSTRUCCIÓN DE MURO 15 M ALTURA CON ESTRUCTURA METÁLICA Y TERMOPANELES PIR MOLITALIA"
    },
    {
      img:"assets\\img\\carousel\\2.jpeg",
      titulo : "CONSTRUCCIÓN DE MURO 15 M ALTURA CON ESTRUCTURA METÁLICA Y TERMOPANELES PIR MOLITALIA"
    },
    {
      img:"assets\\img\\carousel\\8.jpeg",
      titulo : "CONSTRUCCIÓN DE MURO 15 M ALTURA CON ESTRUCTURA METÁLICA Y TERMOPANELES PIR MOLITALIA"
    }
  ];
  proyectos2 : IProyecto[] = [
    {
      img:"assets\\img\\carousel\\4.jpeg",
      titulo : "CONSTRUCCIÓN DE MURO 15 M ALTURA CON ESTRUCTURA METÁLICA Y TERMOPANELES PIR MOLITALIA"
    }
  ];
  proyectos3 : IProyecto[] = [
    {
      img:"assets\\img\\carousel\\4.jpeg",
      titulo : "CONSTRUCCIÓN DE MURO 15 M ALTURA CON ESTRUCTURA METÁLICA Y TERMOPANELES PIR MOLITALIA"
    }
  ];

  constructor() { }

  currentProyectos : IProyecto[] | null = this.proyectos1;
  ngOnInit(): void {
  }

  items: any[] = [1, 2, 3, 4]; // Suponiendo que tengas una lista de elementos
  selectedItem: any = 1;

  changeClass(item: any) {
    this.selectedItem = item;
    switch (item) {
      case 1:
        this.currentProyectos = this.proyectos1
        break;
      case 2:
        this.currentProyectos = this.proyectos2
        break;
      case 3:
        this.currentProyectos = this.proyectos3
        break;
      default:
        break;
    }
  }

}
