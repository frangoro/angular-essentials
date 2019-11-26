import { Component, OnInit } from '@angular/core';
import { StartWarsService } from '../star-wars.sevice';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  characters = [];
  chosenList = 'all';
  swService: StartWarsService;

  constructor(swService: StartWarsService) {
    this.swService = swService;
  }

  ngOnInit() {
  }

  getCharacters() {
    this.characters = this.swService.getCharacters(this.chosenList);
    return this.characters;
  }

  onChoose(side) {
    this.chosenList = side;
  }



}
