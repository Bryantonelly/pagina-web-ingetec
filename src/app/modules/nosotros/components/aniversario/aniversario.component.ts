import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import M from 'materialize-css';
@Component({
  selector: 'app-aniversario',
  templateUrl: './aniversario.component.html',
  styleUrls: ['./aniversario.component.scss'],
})
export class AniversarioComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.startCarousel();
  }

  startCarousel() {
    const images = document.querySelectorAll('.images img');
    let currentIndex = 0;

    setInterval(() => {
      images[currentIndex].classList.remove('visible');
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add('visible');
    }, 6000); // Cambia de imagen cada 2 segundos (ajusta según tu preferencia)
  }
}
