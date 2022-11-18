


document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    let test = form.employee.value 
    let x = test *1
    let y = x +1 
    employeeInfo((error, users)=> {
        if(error){
            console.log(`error${error}`)
        }else{
            document.querySelector("#output").innerHTML = ""
    if(users[test].id === y){
        const ul = document.createElement("h5")
        const br = document.createElement("br")
        const el = document.createElement("h5")
        ul.textContent = `${users[test].name} user name is:  ${users[test].username}` 
        br.textContent=``
        el.textContent= `${users[test].name} email is:    ${users[test].email}`
        document.querySelector("#output").appendChild(ul)
        document.querySelector("#output").appendChild(br)
        document.querySelector("#output").appendChild(el)
        }
    }
    })
 
    

})
