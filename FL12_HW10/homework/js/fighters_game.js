class Fighter {
  constructor(obj) {
    let name = obj.name;
    this.getName = function () { 
      return name; 
    }

    let damage = obj.damage;
    this.getDamage = function () { 
      return damage; 
    }
    
    let strength = obj.strength;
    this.getStrength = function () {
      return strength
    }
    
    let agility = obj.agility;
    this.getAgility = function () { 
      return agility; 
    }

    let health = obj.hp;
    this.getHealth = function () { 
      return health; 
    }

    this.setHealth = function (healthAmount) { 
      health = healthAmount; 
    }


    this.totalHealth = obj.hp;
    this.wins = 0;
    this.losses = 0;
  }

  attack(defender) {
    const multiplier = 100;
    const sucessProbability = defender.getStrength() + defender.getAgility()
    const randomNumber = Math.ceil(Math.random() * multiplier);

    if (randomNumber > multiplier - sucessProbability) {
      if (defender.dealDamage(this.getDamage()) === 0) {
        this.addWin();
      }
      console.log(this.getName() + ' makes ' + this.getDamage() + ' damage to ' + defender.getName());
    } else {
      console.log(this.getName() + ' attack missed');
    }
  }

  logCombatHistory() {
    console.log('Name: ' + this.getName() + ', Wins: ' + this.wins + ', Losses: ' + this.losses);
  }

  heal(healthAmount) {
    this.setHealth(this.getHealth() + healthAmount);
    if (this.getHealth() > this.totalHealth) {
      this.setHealth(this.totalHealth);
    }
  }

  dealDamage(healthAmount) {
    if (this.getHealth() > healthAmount) {
      this.setHealth(this.getHealth() - healthAmount);
    } else {
      this.setHealth(0);
      this.addLoss();
    }
    return this.getHealth();
  }

  addWin() {
    this.wins++;
  }

  addLoss() {
    this.losses++;
  }
}

function battle(firstFighter, secondFighter) {
  if (firstFighter.getHealth() <= 0) {
    console.log(secondFighter.getName() + ' has won!');
    return;
  } else if (secondFighter.getHealth() <= 0) {
    console.log(firstFighter.getName() + ' has won!');
    return;
  } else {
    firstFighter.attack(secondFighter);
    battle(secondFighter, firstFighter);
  }
}

let fighter1 = new Fighter({name: 'Maximus', damage: 20, strength: 20, agility: 15, hp: 100 });
let fighter2 = new Fighter({name: 'Commodus', damage: 25, strength: 25, agility: 20, hp: 90 });
battle(fighter1, fighter2);