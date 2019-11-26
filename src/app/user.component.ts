import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <p>Hi {{name}}</p>
    <!--<input type="text" [(ngModel)]="name"/>-->
    <input type="text" (input)="onUserInput($event)" [value]="name">
  `
})

export class UserComponent {
  @Input() name;
  @Output() nameChanged = new EventEmitter<string>();

  onUserInput(event) {
    // this.nameChanged = event.target.value;
    this.nameChanged.emit(event.target.value);
  }
}
