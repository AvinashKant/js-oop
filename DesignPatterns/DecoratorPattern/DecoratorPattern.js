/**
 * Step 1: Base Component
 * Step 2: Decorator Base
 * Step 3: Concrete Decorators
 * Step 4: Use It
 */

class Coffee {
  cost() {
    return 5;
  }
}

class CoffeeDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost();
  }
}

class MilkDecorator extends CoffeeDecorator {
  cost() {
    return super.cost() + 1;
  }
}

class SugarDecorator extends CoffeeDecorator {
  cost() {
    return super.cost() + 0.5;
  }
}


let coffee = new Coffee();
coffee = new MilkDecorator(coffee);   // Add milk
coffee = new SugarDecorator(coffee);  // Add sugar

console.log(coffee.cost()); // 5 + 1 + 0.5 = 6.5