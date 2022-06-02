function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const formulaire = document.querySelector("form");
console.log(formulaire);
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
console.log(formData)
const closeModel = document.querySelectorAll(".close");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeModel.forEach((e) => e.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function closeModal() {
  modalbg.style.display = "none";
}

// function

function validate() {

if(validateName(formulaire.first.value)){ 
  formData[0].setAttribute("data-error-visible","false")
}else {
  formData[0].setAttribute("data-error-visible","true")
}

if(validateName(formulaire.last.value)){
  formData[1].setAttribute("data-error-visible","false")
}else {
  formData[1].setAttribute("data-error-visible","true")
}

if(validateEmail(formulaire.email.value)){
  formData[2].setAttribute("data-error-visible","false")
}else {
  formData[2].setAttribute("data-error-visible","true")
}

if(validateBirthdate(formulaire.birthdate.value)){
  formData[3].setAttribute("data-error-visible","false")
}else {
  formData[3].setAttribute("data-error-visible","true")
}

if(validateTournois(formulaire.quantity.value)){
  formData[4].setAttribute("data-error-visible","false")
}else {
  formData[4].setAttribute("data-error-visible","true")
}

}

function validateName(name) {
  const text = new Text(name);
  console.log(text);
  if(text.length>2){
    return true;
  }else {
    return false;
  }
}

function validateEmail(input) {
  const validRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (input.match(validRegex)) {
    return true;
  } else {
    return false;
}
}

function validateBirthdate(e) {
  const date = new Date(e);
  
  if(date.getTime() < Date.now()){
    return true;
  }else {
    return false;
  }
}

function validateTournois() {
  if(quantity>0){
    return true;
  }else {
    return false;
  }
}





