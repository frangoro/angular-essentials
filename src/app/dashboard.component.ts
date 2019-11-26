import {Component  } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent{
  loadState = 'Loading';
  onPressButton(event) {
    this.loadState = 'Finished';
  }
}
