import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-well-list',
  templateUrl: './well-list.component.html',
  styleUrls: ['./well-list.component.scss']
})
export class WellListComponent implements OnInit {

  wells = [];
  showListVal = true;
  sourcekey = '10001';
  addWell = false;

  constructor() { }

  ngOnInit() {
    this.getWellsList();
  }
  
  getWellsList() {
    this.wells = JSON.parse(localStorage.getItem('wells'));
  }

  showList($event) {
    this.showListVal = $event;
    this.addWell = false;
  }

  addWellEvent($event) {
    this.addWell = true; 
    this.showListVal = false;
    this.sourcekey = $event.target.getAttribute('data-value') == null ? Math.floor(Math.random()*100).toString(2) : $event.target.getAttribute('data-value');
  }

}
