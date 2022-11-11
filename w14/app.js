output = []
error = [];
let i = 0 
let j = 1
const order = document.getElementById("checkout");
const finalMenu = document.getElementById("final");
class cafe {
  constructor(order, total, tracker = [],history= []) {
    this.order = order;
    this.total = total;
    this.tracker = tracker;
    this.history = history 
  }
  getOrder() {
   output.push(`order #${this.order} and your total is $${this.total} you have spent in total $${i}`)
  }
}

order.addEventListener("click", (e) => {
  e.preventDefault();
  let  order = 0
  if (lq.value === "0" && tq.value === "0") {
    error.push(" please select how many drinks you would like");
  }
 if (error.length !== 0) {
    const errorEl = document.createElement("div");
    errorEl.textContent = `${error.join(" , ")}`;
    document.getElementById("error").appendChild(errorEl);
    error = ""
  } else {
  if (tea.value === "4" && latte.value === "0") {
    order = order + 4;
    order = order * tq.value
    
  }
  if (latte.value === "5" && tea.value === "0") {
    order = order + 5;
    order = order * lq.value 
  }
  if (tea.value === "4" && latte.value === "5"){
    order = order + tq.value * 4 + lq.value * 5
    
  }
 

let x = new cafe(j,order,[order],[i])
  j = j + 1
  i = i + order
console.log(x.getOrder())
const final = document.createElement("h5");
const newline = document.createElement("br")
final.textContent = `${output[j-2]}`;
newline.textContent= " "
finalMenu.appendChild(final);
finalMenu.appendChild(newline)
}});



