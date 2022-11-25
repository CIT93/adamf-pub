
const employeeInfo = async() => {
    const request = await fetch( 'https://jsonplaceholder.typicode.com/users')
    if(request.status === 200){
      const users = await request.json()
      return users;
    }else{
      console.log('Error could not fetch api data')
    }
    
  };
  
  const getEmail = () => {
    document.querySelector("#output").innerHTML = ""
    if(users.id === e){
        const el = document.createElement("h5")
        el.textContent = user.id
        document.querySelector("#output").appendChild(el)
    }
  }