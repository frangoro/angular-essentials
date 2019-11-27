import { LogService } from './log.service';
import { Injectable } from '@angular/core';

@Injectable()
export class StartWarsService {

  characters = [
    {name: 'Luke Skywalker', side: ''},
    {name: 'Darth Vader', side: ''}
  ];

  logService: LogService;

  constructor(logService: LogService) {
    this.logService = logService;
  }

  getCharacters(chosenList) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter(c => {
      return c.side === chosenList;
    });
  }

  onSideChosen(charInfo) {
    const pos = this.characters.findIndex(c => {
      return c.name === charInfo.name;
    });
    this.characters[pos].side = charInfo.side;
    this.logService.writeLog('Change side of ' + charInfo.name + ', new side: ' + charInfo.side);
  }

  addCharacter(character) {
    const pos = this.characters.findIndex(c => {
      return c.name === character.name;
    });
    if (pos !== -1 || character.name === '') {
      return;
    }
    this.characters.push(character);
  }
}
