import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-aniversario',
  templateUrl: './aniversario.component.html',
  styleUrls: ['./aniversario.component.scss'],
})
export class AniversarioComponent implements OnInit {
  items = [1, 2, 3, 4, 5];
  currentIndex = 0;

  ngOnInit(): void {}
}
