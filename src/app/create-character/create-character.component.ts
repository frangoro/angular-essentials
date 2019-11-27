import { Component, OnInit } from '@angular/core';
import { StartWarsService } from '../star-wars.sevice';

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
  defaultName = 'Obi-Wan';

  constructor(swService: StartWarsService) {
    this.swService = swService;
   }

  ngOnInit() {
  }

  onSubmit(submittedForm) {
    console.log(submittedForm);
    this.swService.addCharacter(submittedForm.value);
  }

}
