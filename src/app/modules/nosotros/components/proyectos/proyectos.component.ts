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
  proyectos2 : IProyecto[] = [
    {
      img:"assets\\img\\proyectos\\36.jpg",
      titulo : `CASA CLUB "LAS TORRES" ALBAÑILERIA TORRE “A” 20 PISOS`
    },
    {
      img:"assets\\img\\proyectos\\41.jpg",
      titulo : "VILLA DE ATLETAS JUEGOS PANAMERICANOS 2019"
    },
    {
      img:"assets\\img\\proyectos\\45.jpg",
      titulo : "VILLA ATLETAS CAMARA DE BOMBEO"
    },
    {
      img:"assets\\img\\proyectos\\54.jpg",
      titulo : "VILLA ATLETAS CONSTRUCCIÓN “14” LOBBIES PARA EDIFICIO"
    }
  ];
  proyectos3 : IProyecto[] = [
    {
      img:"assets\\img\\proyectos\\90.jpg",
      titulo : "TELECOM GREELFIELD"
    },
    {
      img:"assets\\img\\proyectos\\93.jpg",
      titulo : "TELECOM GREELFIELD"
    },
    {
      img:"assets\\img\\proyectos\\100.jpg",
      titulo : "TELECOM ROOFTOP"
    },
    {
      img:"assets\\img\\proyectos\\96.jpg",
      titulo : "TELECOM IMPLEMENTACIÓN"
    }
  ];
  proyectos1 : IProyecto[] = [
    {
      img:"assets\\img\\proyectos\\333.jpg",
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
