
//console.log("Hello Francisco");

//Fetch API with web dev simplified



//console.log(fetch("https://reqres.in/api/users"));


//fetch("https://reqres.in/api/users")
//.then(res => console.log(res))


//fetch("https://reqres.in/api/users")
//.then(res => res.json())
//.then(data => console.log(data))




/*
fetch("https://reqres.in/api/users/33")
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.log("totalmente erroneo"))
*/



/*
fetch("https://reqres.in/api/users/33")
.then(res => {
 if (res.ok) {
  console.log("success");
} else {
   console.log("error");
}

})
.then(data => console.log(data))
.catch(error => console.log("totalmente erroneo"))
*/


/*
fetch("https://reqres.in/api/users/3")
.then(res => {
 if (res.ok) {
  console.log("success");
} else {
   console.log("error");
}

})
*/


//basics Object manipulation from a fake API (JSON object) adding a new user and provide an ID


fetch("https://reqres.in/api/users/", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
name: "Francisco", id: 547
})


}).then(res => {
return res.json() 
})
.then(data => console.log(data))
.catch(error => console.log("totalmente erroneo"))



































