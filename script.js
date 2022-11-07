let hamburger = document.querySelector(".hamburger");
let navlinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navlinks.classList.toggle("active");
})

let username = document.getElementById("username");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let form = document.getElementById("form");
let country = document.getElementById("country");
let checkbox =document.getElementById("label");
let error = document.getElementsByClassName("error");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInput();
})

function checkInput() {
  validateUsername(username, 0, "Name must not be empty!");
  validateEmail(email, 1, "Email is invalid!");
  validatePhone(phone, 2,"Phone number is invalid!")
  validateCountry(country, 3,"Please select a country(Indonesia/Malaysia/Singapore)!");
  checker(checkbox, 4,"Cannot proceed because you didn't accept our terms and conditions!");
}

validateUsername = (id, pos, incorrect) => {
  if (id.value.trim() === ""){
    error[pos].innerHTML = incorrect;
    id.style.border = "3px solid red";
    return true;
  } 
  else{
    error[pos].innerHTML = "";
    id.style.border = "3px solid green";
    return false;
  }
}

validateEmail = (id, pos, incorrect) => {
    if (id.value.trim() === ""){
      error[pos].innerHTML = incorrect;
      id.style.border = "3px solid red";
      return true;
    } 
    else{
      error[pos].innerHTML = "";
      id.style.border = "3px solid green";
      return false;
    }
  }

  validatePhone = (id, pos, incorrect) =>  {
    var phone = document.getElementById('phone').value;
    if (phone.length != 12 || phone.length != 13) {
        error[pos].innerHTML = incorrect;
        id.style.border = "3px solid red";
        return true;
    } 
    else {
        error[pos].innerHTML = "";
        id.style.border = "3px solid green";
        return false;
    }
}

validateCountry = (id, pos, incorrect) => {
    if (id.value.trim() === ""){
      error[pos].innerHTML = incorrect;
      id.style.border = "3px solid red";
      return true;
    } 
    else{
      error[pos].innerHTML = "";
      id.style.border = "3px solid green";
      return false;
    }
}

checker = (id, pos, incorrect) => {
    var valid = false;
    if(checkbox.checked){
        valid = true;
    }
    if(valid){
        error[pos].innerHTML = "";
        return true;
    }
    else{
        error[pos].innerHTML = incorrect;
        return false;
    }
}