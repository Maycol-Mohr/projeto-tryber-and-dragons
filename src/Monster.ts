import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  constructor(private _lifePoints = 85, private _strength = 63) {
    this._lifePoints = this.lifePoints;
    this._strength = this.strength;
  }

  public get lifePoints(): number {
    return this.lifePoints;
  }

  public get strength(): number {
    return this.strength;
  }
  
  receiveDamage(attackPoints: number) {
    this._lifePoints -= attackPoints;
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter) {
    return enemy.receiveDamage(this._strength);
  }
}
  
export default Monster;