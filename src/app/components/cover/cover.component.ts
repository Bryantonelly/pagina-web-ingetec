import { Component, Input, OnInit } from '@angular/core';

@Component({
  templateUrl: './cover.component.html',
  selector: 'app-cover',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {

  @Input() altCover : string = "assets\img\carousel\\1.jpeg";
  @Input() imgCover : string = "assets\img\carousel\\1.jpeg";
  constructor() { }

  ngOnInit(): void {
  }

}
