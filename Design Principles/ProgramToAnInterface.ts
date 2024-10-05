
/**
 * Program to an interface, not an implementation. 
 * 
 * Depend on abstractions, not on concrete classes
 */

// any food must have a `getNutrition()` function
interface IFood {
    getNutrition();
}

class Cat {
    private energy;

    // Cat needs to eat food, it doesn't care what kind of food, as long as it has the `getNutrition()` function
    public eat(food: IFood) {
        this.energy = food.getNutrition();
    }

    public getEnergy(): void {
        console.log(this.energy);
    }
}

// Since sausage is a food, it must implement the `IFood` interface
class Sausage implements IFood {
    getNutrition() {
        //return nutrition
    }

    getColor() {
        // ...
    }

    getExpiration() {
        // ...
    }
}

// Milk is another type of food, it must impletent the `IFood` interface aswell 
class Milk implements IFood {
    getNutrition() {
        // return nutrition
    }
}

const sausage = new Sausage();
const milk = new Milk();
const tom = new Cat()

// tom can eat any kind of food, not only sausages
tom.eat(sausage);
tom.eat(milk);