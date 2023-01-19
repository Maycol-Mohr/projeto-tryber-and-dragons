import Fighter from '../Fighter/Fighter';

abstract class Battle {
  constructor(protected player: Fighter) { }

  // Should return 1 if player wins, -1 otherwise - testes git
  fight(): number {
    return this.player.lifePoints === -1 ? -1 : 1;
  }
  // abstract fight(): number;
}

export default Battle;
