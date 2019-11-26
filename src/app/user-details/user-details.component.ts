import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {random} from 'lodash';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() items = [];
  @Output() itemAdded = new EventEmitter<string>();
  item;
  number = 0;

  onAddItem() {
    this.itemAdded.emit(this.item);
  }

  constructor() { }

  ngOnInit() {
  }

  onIncrease() {
    this.number=random(1,10);
  }

}
