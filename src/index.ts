import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';
import Battle, { PVP, PVE } from './Battle';

const player1 = new Character('PLAYER 1'); 
const player2 = new Character('PLAYER 2'); 
const player3 = new Character('PLAYER 3'); 

player1.levelUp();
player1.levelUp();
player1.levelUp();

for (let i = 0; i < 10; i += 1) {
  player1.levelUp();
}

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);

const pve = new PVE(player1, [monster1, monster2]);

function runBattles(battles: Battle[]) {
  battles.forEach((battle) => battle.fight());
}

console.log(player1);
console.log(player2);
console.log(player3);

console.log(monster1);
console.log(monster2);

console.log(pvp);

console.log(pve);

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };