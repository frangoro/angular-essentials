import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-essentials';
  rootName = 'Pacome';
  rootItems = ['a','b','c'];

  onNameChanged(newName) {
    this.rootName = newName;
  }

  onItemAdded(newItem) {
    this.rootItems.push(newItem);
    console.log(this.rootItems);
  }
}
