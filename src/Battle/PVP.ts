import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(private _player1: Fighter, private _player2: Fighter) {
    super(_player1);
  }
  
  fight(): number {
    while (this._player1.lifePoints !== -1 && this._player2.lifePoints !== -1) {
      this._player1.attack(this._player2);
      this._player2.attack(this._player1);
    }
    // Should return 1 if player1 wins, -1 otherwise(player2)
    // fight(): number {
    //   return this.player.lifePoints === -1 ? -1 : 1;
    // }
    return this._player1.lifePoints === -1 ? -1 : 1;
  }
}
  
export default PVP;