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

  imagesOpt1: string[] = [
    'assets\\img\\carousel\\3.jpeg',
    'assets\\img\\carousel\\2.jpeg',
    'assets\\img\\carousel\\1.jpeg'
  ];

  imagesOpt2: string[] = [
    'assets\\img\\carousel\\4.jpeg',
    'assets\\img\\carousel\\5.jpeg',
    'assets\\img\\carousel\\6.jpeg'
  ];

  imagesOpt3: string[] = [
    'assets\\img\\carousel\\7.jpeg',
    'assets\\img\\carousel\\8.jpeg',
    'assets\\img\\carousel\\9.jpeg'
  ];
  imageSelectOpt1: string = this.imagesOpt1[0];
  imageSelectOpt2: string = this.imagesOpt2[0];
  imageSelectOpt3: string = this.imagesOpt3[0];
  indexImage1: number = 0;
  indexImage2: number = 0;
  indexImage3: number = 0;

  ocultar= false;

  constructor() { }

  ngOnInit(): void {
  }

  nextImage1(){
    if( this.indexImage1 + 1 > this.imagesOpt1.length - 1 ){
      this.indexImage1 = 0;
    }else{
      this.indexImage1  = this.indexImage1 + 1;
    }
    console.log(this.indexImage1);
    this.imageSelectOpt1 = this.imagesOpt1[ this.indexImage1 ];
  }

  nextImage2(){
    if( this.indexImage2 + 1 > this.imagesOpt2.length - 1 ){
      this.indexImage2 = 0;
    }else{
      this.indexImage2  = this.indexImage2 + 1;
    }
    console.log(this.indexImage2);
    this.imageSelectOpt2 = this.imagesOpt2[ this.indexImage2 ];
  }
  nextImage3(){
    if( this.indexImage3 + 1 > this.imagesOpt3.length - 1 ){
      this.indexImage3 = 0;
    }else{
      this.indexImage3  = this.indexImage3 + 1;
    }
    console.log(this.indexImage3);
    this.imageSelectOpt3 = this.imagesOpt3[ this.indexImage3 ];
  }

  prevImage1(){
    if( this.indexImage1 - 1 < 0 ){
      this.indexImage1 = this.imagesOpt1.length - 1;
    }else{
      this.indexImage1 = this.indexImage1 - 1;
    }
    console.log(this.indexImage1);
    this.imageSelectOpt1 = this.imagesOpt1[ this.indexImage1 ];
  }

  prevImage2(){
    if( this.indexImage2 - 1 < 0 ){
      this.indexImage2 = this.imagesOpt2.length - 1;
    }else{
      this.indexImage2 = this.indexImage2 - 1;
    }
    console.log(this.indexImage2);
    this.imageSelectOpt2 = this.imagesOpt2[ this.indexImage2 ];
  }

  prevImage3(){
    if( this.indexImage3 - 1 < 0 ){
      this.indexImage3 = this.imagesOpt3.length - 1;
    }else{
      this.indexImage3 = this.indexImage3 - 1;
    }
    console.log(this.indexImage3);
    this.imageSelectOpt3 = this.imagesOpt3[ this.indexImage3 ];
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
