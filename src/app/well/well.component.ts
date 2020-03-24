import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.scss']
})
export class WellComponent implements OnInit {

  @Input() sourcekey : string;
  @Output() showListEvent = new EventEmitter<boolean>();
  @Output() newWellEvent = new EventEmitter();
  @ViewChild('showListBtn', {static: true}) showListBtn: ElementRef;

  showListVal = false;
  formData: FormGroup;
  dummyWells = [
    { name: "well0", type: "rls", sourcekey: 10101 },
    { name: "well1", type: "esp", sourcekey: 101011 }
  ]

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formData = this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      sourcekey: [this.sourcekey, Validators.required]
    });
    JSON.parse(localStorage.getItem('wells')) == null ? localStorage.setItem('wells', JSON.stringify(this.dummyWells)) : true;
    this.showListBtn.nativeElement.innerHTML = this.showListVal ? `Hide Well's List` : `Show Well's List`;
  }

  onSubmit(wellsData) {
    if (this.formData.invalid) {
      return false;
    } else {
      this.formData.reset();
      let savedData = this.saveToLocalStorage(wellsData);
      console.warn('Well added successfully', savedData);
      this.newWellEvent.emit(savedData);
      this.showList();
    }
  }

  saveToLocalStorage(wellToAdd): any {
    let newWell = [];
    let existingWells: [] = JSON.parse(localStorage.getItem('wells'));
    existingWells.length == undefined ?
      newWell.push(existingWells) :
      Object.keys(existingWells).map(function (key) {
        newWell.push(existingWells[key])
        return newWell;
      });
    newWell.push(wellToAdd);
    localStorage.setItem('wells', JSON.stringify(newWell));
    console.log(newWell);
    return wellToAdd;
  }

  showList() {
    this.showListVal = !this.showListVal;
    this.showListEvent.emit(this.showListVal)
  }
}
