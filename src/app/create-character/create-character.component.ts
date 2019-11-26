import { Component, OnInit } from '@angular/core';
import { StartWarsService } from '../star-wars.sevice';
import { summaryFileName } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  private swService: StartWarsService;
  private availableSides = [
    {display: 'None', value: ''},
    {display: 'Light', value: 'light'},
    {display: 'Dark', value: 'dark'}
  ];

  constructor(swService: StartWarsService) {
    this.swService = swService;
   }

  ngOnInit() {
  }

  onSubmit(submittedForm) {
    console.log(submittedForm.value);
    this.swService.addCharacter(submittedForm.value);
  }

}
