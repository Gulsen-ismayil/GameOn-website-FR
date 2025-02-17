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
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModel = document.querySelectorAll(".close");
const tournoisLocation = document.getElementsByName("location");
const checkBox1 = document.getElementById("checkbox1");
const cpartiButton = document.querySelector(".btn-submit-cparti");
const fermer = document.querySelector(".btn-submit-fermer");
const pageMerci = document.querySelectorAll(".pagemerci");
const iconFabars = document.querySelector(".icon");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeModel.forEach((e) => e.addEventListener("click", closeModal));
// cpartiButton.forEach((e)=>e.addEventListener("click",merciModal));
formulaire.addEventListener("submit",formSubmit);
fermer.addEventListener("click",launchModalFermer);
iconFabars.addEventListener("click",responsiveIcon);


// launch modal form
function responsiveIcon() {
editNav();
}

function formSubmit(e) {
  const valid = validate();
 e.preventDefault();
 if(valid){
  formulaire.reset()
  formulaire.style.display = "none";
  pageMerci[0].style.display = "block";
 }
} 

function launchModal() {
  modalbg.style.display = "block";
  pageMerci[0].style.display = "none";
  formulaire.style.display = "block";
}

function launchModalFermer(){
  modalbg.style.display = "none";
  pageMerci[0].style.display = "none";
}

function closeModal() {
  modalbg.style.display = "none";
}

// function merciModal() {
//   if(validate()){
//     formulaire.reset()
//     formulaire.style.display = "none";
//     pageMerci[0].style.display = "block";
//   }


    // formulaire.style.display = "none";
    // pageMerci[0].style.display = "block";


// function

function validate() {
  let isValide = true;

if(validateName(formulaire.first.value)){ 
  formData[0].setAttribute("data-error-visible","false")
}else {
  formData[0].setAttribute("data-error-visible","true")
  isValide = false;
}
 
if(validateName(formulaire.last.value)){
  formData[1].setAttribute("data-error-visible","false")
}else {
  formData[1].setAttribute("data-error-visible","true")
  isValide = false;
}

if(validateEmail(formulaire.email.value)){
  formData[2].setAttribute("data-error-visible","false")
}else {
  formData[2].setAttribute("data-error-visible","true")
  isValide = false;
}

if(validateBirthdate(formulaire.birthdate.value)){
  formData[3].setAttribute("data-error-visible","false")
}else {
  formData[3].setAttribute("data-error-visible","true")
  isValide = false;
}

if(validateTournoisQuantity(formulaire.quantity.value)){
  formData[4].setAttribute("data-error-visible","false")
}else {
  formData[4].setAttribute("data-error-visible","true")
  isValide = false;
}

if(validateTournoisQuelle()){
  formData[5].setAttribute("data-error-visible","false")
}else {
  formData[5].setAttribute("data-error-visible","true")
  isValide = false;
}

if(validateCheckBoxOne(formulaire.checkbox)){
  formData[6].setAttribute("data-error-visible","false")
}else {
  formData[6].setAttribute("data-error-visible","true")
  isValide = false;
}
  return isValide;

}

function validateName(name) {
  const text = new Text(name);
  console.log(text);
  if(text.length>1  ){
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

function validateTournoisQuantity(e) { 
const number = new Number(e)

  if(number>0){
    return true;
  }else {
    return false;
  }
}

function validateTournoisQuelle(){
  

  for(i=0;i<tournoisLocation.length;i++){
   const isCheck = tournoisLocation[i].checked;

   if(isCheck){
     return true;
   }
}
return false;
}

function validateCheckBoxOne(){
  const isCheck = checkBox1.checked;

  if(isCheck) {
    return true;
  }else {
    return false;
  }
}



