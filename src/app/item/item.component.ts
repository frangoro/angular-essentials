import { Component, OnInit, Input } from '@angular/core';
import { StartWarsService } from '../star-wars.sevice';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() character;
  swService: StartWarsService;

  constructor(swService: StartWarsService) {
    this.swService = swService;
   }

  ngOnInit() {
  }

  onAssign(side) {
    this.swService.onSideChosen({name: this.character.name, side});
  }

}
