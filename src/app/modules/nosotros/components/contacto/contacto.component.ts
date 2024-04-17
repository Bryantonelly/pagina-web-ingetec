import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent implements OnInit {
  showAnimation = false;
  altCover: string = 'CONTÁCTANOS';
  imgCover: string = 'assets\\img\\carousel\\11.JPG';

  constructor() {}

  ngOnInit(): void {}

  submitForm() {}
}
