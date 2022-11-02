let outcome = [];
const order = document.getElementById("meal");
const finalMenu = document.getElementById("final")
const Meal = function (
  appetizer = [],
  soup = [],
  mainCourse = [],
  dessert = []
) {
  this.appetizer = appetizer;
  this.soup = soup;
  this.mainCourse = mainCourse;
  this.dessert = dessert;
};
const menu = () => {
  obj={
     appetizer: ["chips", "bread", "nachos", "quesadilla"],
   soup: ["clam chowder", "tortilla", "minestrone", "chicken noodle"],
   mainCourse: ["lasagna", "braised chicken", "poke bowl", "sushi"],
   dessert: ["key lime pie", "oreo shake", "cheese cake", "mud slide"],
  }
};

const getRandomPrice = (min, max) => {
  min = 5;
  max = 25;
  return Math.random() * (max - min) + min;
};
const getRandom = (max) => {
  return Math.floor(Math.random() * max);
};
randomMeal = (menu) => {
  outcome.push(`the appetizer will be ${
    obj.appetizer[getRandom(3)]
  } for $${getRandomPrice()} 
     the soup will be ${obj.soup[getRandom(3)]} for $${getRandomPrice()}
     the main course will be ${
       obj.mainCourse[getRandom(3)]
     } for $${getRandomPrice()}
     the dessert will be ${obj.dessert[getRandom(3)]} for $${getRandomPrice()}`);
};

order.addEventListener("click",(e) => {
    e.preventDefault()
    randomMeal()
    const final = document.createElement("h5")
    final.textContent = outcome[0]
    finalMenu.appendChild(final)


})