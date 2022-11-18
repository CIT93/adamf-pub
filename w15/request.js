
const employeeInfo = (callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', (e) => {
      if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        callback(undefined, data);
      } else if (e.target.readyState === 4) {
        callback('ERROR', undefined);
      }
    });
    request.open('GET', 'https://jsonplaceholder.typicode.com/users');
    request.send();
  };
  
  const getEmail = () => {
    document.querySelector("#output").innerHTML = ""
    if(users.id === e){
        const el = document.createElement("h5")
        el.textContent = user.id
        document.querySelector("#output").appendChild(el)
    }
  }