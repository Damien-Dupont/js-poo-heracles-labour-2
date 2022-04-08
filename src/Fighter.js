const MAX_LIFE = 100;

class Fighter {
    constructor(name, strength, dexterity, emoji='👹', heart='💜', weapon=null) {
        this.name = name;
        this.emoji = emoji;
        this.strength = strength;
        this.dexterity = dexterity;
        this.heart = heart;
        this.life = MAX_LIFE;
        this.wound = 0;
        this.weapon = weapon;
    }
    getRandomInt(max){
        return 1 + Math.floor(Math.random() * max);
    }

    getDamage(strength, weapon){  
        return (weapon === null ? strength : strength + weapon.damage);
    }

    fight(enemy){
      const hit = this.getRandomInt(this.getDamage(this.strength, this.weapon));
      enemy.wound = Math.max(hit - enemy.dexterity, 0);
      enemy.life = Math.max(enemy.life - enemy.wound, 0)
    }
/*  retour sur épisode 1 ///
    fight(enemy){
      const hit = this.getRandomInt(this.strength);
      enemy.wound = Math.max(hit - enemy.dexterity, 0);
      enemy.life = Math.max(enemy.life - enemy.wound, 0);
    }
*/

    isAlive() {
        return this.life > 0;
}
}

module.exports = Fighter;