const Fighter = require("./src/Fighter.js");
const Weapon = require("./src/Weapon.js");
const Shield = require("./src/Shield.js");

/** Create Heracles  */
const heracles = new Fighter("Heracles", 20, 6, '🧔', '💚');

/** Create the opponent  */
const boar = new Fighter("Erymanthian Boar", 25, 12, '🐗');

/** Create the weapon  */
const sword = new Weapon("épée");
heracles.weapon = sword;

/** Create the shield  */
const woodenShield = new Shield("bouclier");
heracles.shield = woodenShield;

/**
 * Helper to produce the result of a round
 */
 const roundDisplay = (attacker, enemy) => {
  let fightPhrase = `${attacker.name} ${attacker.emoji}🗡️${enemy.emoji} ${enemy.name} => ${enemy.emoji}`;
  // ajouter affichage des armes VS bouclier en lieu et place de l'emoji épée
  return enemy.wound === 0 ?
  `${fightPhrase}🛡️`
  :
  `${fightPhrase}:` + (enemy.life > 0 ? ` ${enemy.life}${enemy.heart}` : `💀`);
};

/**
 * Helper to dispatch fighters between winner and loser
 */
const score = (fighter1, fighter2) => {
  return fighter1.isAlive() ? {
    winner: fighter1,
    loser: fighter2,
  } : {
    winner: fighter2,
    loser: fighter1
  };
};

let round = 1;

while (heracles.isAlive() && boar.isAlive()) {
    console.log(`⏳ Round #${round}`);

    heracles.fight(boar);
    console.log(roundDisplay(heracles, boar));
    if (boar.life>0) {
        boar.fight(heracles);
        console.log(roundDisplay(boar, heracles));
    }

    round++;
}

const result = score(heracles, boar);

console.log(`💀 ${result.loser.name} est mort`);
console.log(`🏆 ${result.winner.name} gagne (Reste ${result.winner.life}${result.winner.heart})`);