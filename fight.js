class Fighter {

	constructor(name = 'fighter', power = 1, health = 100) {

		this.name = name;

		this.power = power;

		this.health = health;

	}

	setDamage(damage = 10) {

		this.health -= damage;

		console.log(`${this.name}'s health: ${this.health}`);

	}

	hit(enemy, point = 10) {

		enemy.setDamage(point * this.power);

	}

}

class ImprovedFighter extends Fighter {

	doubleHit(enemy, point = 10) {

		super.hit(enemy, point * 2);

	}

}

var fighter = new Fighter('Fighter', 5, 200);

var improvedFighter = new ImprovedFighter('ImprovedFighter', 7, 500);

function fight (fighter, improvedFighter, ...point) {

	let pointSize = point.length;

	if (pointSize && fighter instanceof Fighter && improvedFighter instanceof ImprovedFighter) {

		let oneIteration = (i) => {

			if ( (i % 2) == 0) {

				fighter.hit(improvedFighter, point[i]);

				if (improvedFighter.health <= 0) {

					console.log(`Game over. ${fighter.name} wins`);

				}

			} else {

				improvedFighter.doubleHit(fighter, point[i]);

		    	if (fighter.health <= 0) {

					console.log(`Game over. ${improvedFighter.name} wins`);

				}

			}

		}

		for(let i = 0; i < pointSize; i++) {

			if (fighter.health > 0 && improvedFighter.health > 0) {

				oneIteration(i);

			} else {

				break;

			}

		}

		if (fighter.health > 0 && improvedFighter.health > 0) {

			console.log('Nobody wins');

			console.log(`${fighter.name}'s health: ${fighter.health}`);

			console.log(`${improvedFighter.name}'s health: ${improvedFighter.health}`);

		}

	}

}

fight(fighter, improvedFighter, 25, 13, 45);