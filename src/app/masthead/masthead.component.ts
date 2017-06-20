import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.css']
})
export class MastheadComponent implements OnInit {

  public introTextOpacity: Number;

  constructor() { }

  ngOnInit() { }

}
