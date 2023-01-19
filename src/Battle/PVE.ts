import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    private _character: Fighter, 
    private _monsters: (Fighter | SimpleFighter)[],
  ) {
    super(_character);
    this._character = _character;
    this._monsters = _monsters;
  }

  fight(): number {
    this._monsters.forEach((monster) => {
      while (this._character.lifePoints > 0 && monster.lifePoints > 0) {
        this._character.attack(monster);
        monster.attack(this._character);
      }
    });

    return this._character.lifePoints === -1 ? -1 : 1;
  }
}
  
export default PVE;