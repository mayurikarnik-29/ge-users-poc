import { Component, OnInit } from '@angular/core';
import * as data from '../../assets/data/data.json';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: {id:number, name:string, age:number}[] = (data as any).default;
  ifcond: boolean = true;
  constructor() { }

  ngOnInit() {
     console.log(this.users.length)
  }

}
