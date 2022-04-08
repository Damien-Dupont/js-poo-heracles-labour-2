class Weapon {
    constructor(name, damage=10, emoji='🗡️') {
        this.name = name;
        this.damage = damage;
        this.emoji = emoji;
    }
}

module.exports = Weapon;