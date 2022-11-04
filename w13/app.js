let outcome = [];
let price = [];
let i = 0;
let j = 0;
const order = document.getElementById("meal");
const finalMenu = document.getElementById("final");
const Meal = function (meal = [], price = []) {
  this.meal = meal;
  this.price = price;
};

getRandomPrice = (min, max) => {
  min = 5;
  max = 25;
  return Math.random() * (max - min) + min;
};
getRandom = (max) => {
  return Math.floor(Math.random() * max);
};

Meal.prototype.getMeal = function () {
  outcome.push(`the appetizer will be ${
    this.appetizer[getRandom()]
  } for $${getRandomPrice()} 
     the soup will be ${this.soup[getRandom(3)]} for $${getRandomPrice()}
     the main course will be ${
       this.mainCourse[getRandom(3)]
     } for $${getRandomPrice()}
     the dessert will be ${
       this.dessert[getRandom(3)]
     } for $${getRandomPrice()}`);
};

order.addEventListener("click", (e) => {
  e.preventDefault();

  let appetizer = ["chips", "bread", "nachos", "quesadilla"];
  let soup = ["clam chowder", "tortilla", "minestrone", "chicken noodle"];
  let mainCourse = ["lasagna", "braised chicken", "poke bowl", "sushi"];
  let dessert = ["key lime pie", "oreo shake", "cheese cake", "mud slide"];
  let ra = getRandom(3);
  let rs = getRandom(3);
  let rc = getRandom(3);
  let rd = getRandom(3);
  Meal.prototype.getMeal = function () {
    let rmeal = `will start of with ${[
      appetizer[ra],
      soup[rs],
      mainCourse[rc],
      dessert[rd],
    ]}`;
    outcome.push(rmeal);
  };
  Meal.prototype.getPrice = function () {
    let pmeal = getRandomPrice();
    price.push(pmeal);
  };
  let iterator = () => {
    i = i + 1;
  };
  const meal1 = new Meal("test", "test1");
  console.log(meal1.getMeal());
  console.log(meal1.getPrice());
  iterator();
  let pcalc = () => {
    j = j + 1;
  };
  pcalc();
  const final = document.createElement("h5");
  final.textContent = `${outcome[i - 1]} it will cost ${
    price[i - 1]
  } the total is ${price[j - 2] + price[i - 1]}`;
  finalMenu.appendChild(final);
});

// ,,,,
// )
