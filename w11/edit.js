edit = document.getElementById("edit");
edit.addEventListener("click", function () {
  location.assign(`index.html`);
});

let crossCheck = outcome.find(function(id){
    return outcome === id
})

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    
   crossCheck = form.elements.question.value

    
  
    if (question.value === " ") {
      message.push(" please select if you want to change your vehicle or not");
    }
}
  );