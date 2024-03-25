import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lineas-negocios',
  templateUrl: './lineas-negocios.component.html',
  styleUrls: ['./lineas-negocios.component.scss']
})
export class LineasNegociosComponent implements OnInit {
  @ViewChild('seccion1Ref') seccion1Ref!: ElementRef;
  @ViewChild('seccion2Ref') seccion2Ref!: ElementRef;
  @ViewChild('seccion3Ref') seccion3Ref!: ElementRef;

  images: string[] = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZGCaI8fhARKmUw5nPywWWD-V5r7xdG_6CvA&usqp=CAU',
    'https://altertecnia.com/wp-content/uploads/ingenieros-crisis-covid19.jpg',
    'https://predictiva21.com/wp-content/uploads/2021/07/94dbb3d0-2430-4af4-9f4c-43cdbf8aaa41-1024x535.jpeg'
  ];

  imageSelect: string = this.images[0];
  indexImage: number = 0;

  ocultar= false;

  constructor() { }

  ngOnInit(): void {
  }

  nextImage(){
    if( this.indexImage + 1 > this.images.length - 1 ){
      this.indexImage = 0;
    }else{
      this.indexImage  = this.indexImage + 1;
    }
    console.log(this.indexImage);
    this.imageSelect = this.images[ this.indexImage ];
  }

  prevImage(){
    if( this.indexImage - 1 < 0 ){
      this.indexImage = this.images.length - 1;
    }else{
      this.indexImage = this.indexImage - 1;
    }
    console.log(this.indexImage);
    this.imageSelect = this.images[ this.indexImage ];
  }

  scrollToSection(section: string) {
    let elementRef: ElementRef | undefined;

    switch (section) {
      case 'seccion1':
        elementRef = this.seccion1Ref;
        break;
      case 'seccion2':
        elementRef = this.seccion2Ref;
        break;
      case 'seccion3':
        elementRef = this.seccion3Ref;
        break;
      default:
        break;
    }

    if (elementRef) {
      const scrollPosition = elementRef.nativeElement.offsetTop - 120;
      window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    }
  }

}
