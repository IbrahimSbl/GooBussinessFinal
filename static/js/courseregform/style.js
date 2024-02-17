
function scrollToEnroll(e) {

    e.preventDefault();
    const element = document.getElementById("register");
    if (element) {
        const offset = element.offsetTop  - 67; // Offset to account for the fixed navbar
        window.scrollTo({
            top: offset,
            behavior: "smooth"
        });
    }

}

document.addEventListener('DOMContentLoaded', function() {
  // Enable "other" input field when selected
  document.getElementById('education').addEventListener('change', function() {
    if (this.value === 'other') {
      document.getElementById('education_other').disabled = false;
    } else {
      document.getElementById('education_other').disabled = true;
    }
  });
  
  let pos = document.getElementsByClassName("hero");
  document.addEventListener("scroll",()=>{
    let nav = document.getElementsByClassName("nav")[0];
    if(pos[0].getClientRects()[0].top < 67){
      nav.classList.add("nav-shadow");
    }else{
      nav.classList.remove("nav-shadow");
    }
  })


});


// Get input fields and select
var nameInput = document.getElementById("name");
var phoneInput = document.getElementById("phone");
var emailInput = document.getElementById("email");
var ageInput = document.getElementById("age");
var genderInput = document.getElementById("gender");
var courseInput = document.getElementById("course");
var educationInput = document.getElementById("education");
var specificEducationInput = document.getElementById("education_other");
//Get .form-group for email and name
var groupForm = document.querySelectorAll(".form-group");
// Flag to check if the user has submitted valid data
let nameIsValid = true;
let emailIsValid = true;
let phoneIsValid = true;
let ageIsValid = true;
let genderIsValid = true;
let courseIsValid = true;
let educationIsValid = true;
//onsubmit validate the input fields
function validateInputs(event) {
  checkName();
  checkEmail();
  checkCourse();
  checkAge();
  checkEducation();
  checkGender();
  checkPhone();
  //if any field is invalid prevent submission or the form
  if (!nameIsValid || !emailIsValid || !phoneIsValid
     || !courseIsValid || !ageIsValid
     || !educationIsValid || !genderIsValid) {
    event.preventDefault();
  }
}

function checkName() {
  let nameValue = nameInput.value.trim();
  //If there is no data and there is no already an error message
  //Show an error message
  if (nameValue === "" && groupForm[0].childElementCount <= 2) {
    var newElement = document.createElement("span");
    newElement.innerHTML =
      '<label id="name-error" class="error" for="name">Please enter a name</label>';
    groupForm[0].appendChild(newElement);
    // raise the  flag that there is an error
    nameIsValid = false;
  } else if (nameValue !== "") {
    //else if there is no error remove error message if any
    let nameError = groupForm[0].querySelector("#name-error");
    if (nameError !== null) {
      nameError.parentElement.remove();
      //release the flag when removing the error
      nameIsValid = true;
    }
  }
}

function checkPhone() {
  let value = phoneInput.value.trim();
  var phoneRegex = /\+?[0-9]+$/;
  let test = phoneRegex.test(value);
  //If there is no data and there is no already an error message
  //Show an error message
  if ((value === "" || !test) && groupForm[1].childElementCount <= 2) {
    var newElement = document.createElement("span");
    newElement.innerHTML =
      '<label id="phone-error" class="error" for="phone">Please enter a valid phone number</label>';
    groupForm[1].appendChild(newElement);
    // raise the  flag that there is an error
    phoneIsValid = false;
  } else if (value !== '') {
    //else if there is no error remove error message if any
    let error = groupForm[1].querySelector("#phone-error");
    if (error !== null) {
      error.parentElement.remove();
      //release the flag when removing the error
      phoneIsValid = true;
    }
  }
}

function checkEmail() {
  let emailValue = emailInput.value;
  let check = true;
  try {
    check = isValidEmail(emailValue.trim());
  } catch (e) {
    console.log(e);
  }
  //If there is no data or email invalid there is no already an error message
  //Show an error message
  if (!check && groupForm[2].childElementCount <= 2) {
    var newElement = document.createElement("span");
    newElement.innerHTML =
      '<label id="email-error" class="error" for="email">Please enter a valid email address</label>';
    groupForm[2].appendChild(newElement);
    // raise the  flag that there is an error
    emailIsValid = false;
  } else if (check) {
    //else if there is no error remove error message if any
    let emailError = groupForm[2].querySelector("#email-error");
    if (emailError !== null) {
      emailError.parentElement.remove();
      //release the flag when removing the error
      emailIsValid = true;
    }
  }
}

function checkAge() {
  let value = ageInput.value.trim();
  //If there is no data and there is no already an error message
  //Show an error message
  if (value === "" && groupForm[3].childElementCount <= 2) {
    var newElement = document.createElement("span");
    newElement.innerHTML =
      '<label id="age-error" class="error" for="age">Please enter your age</label>';
    groupForm[3].appendChild(newElement);
    // raise the  flag that there is an error
    ageIsValid = false;
  } else if (value !== "") {
    //else if there is no error remove error message if any
    let error = groupForm[3].querySelector("#age-error");
    if (error !== null) {
      error.parentElement.remove();
      //release the flag when removing the error
      ageIsValid = true;
    }
  }
}

function checkCourse() {
  let value = courseInput.value.trim();
  //If there is no data and there is no already an error message
  //Show an error message
  if (value === "" && groupForm[5].childElementCount <= 2) {
    var newElement = document.createElement("span");
    newElement.innerHTML =
      '<label id="course-error" class="error" for="course">Please enter the course name</label>';
    groupForm[5].appendChild(newElement);
    // raise the  flag that there is an error
    courseIsValid = false;
  } else if (value !== "") {
    //else if there is no error remove error message if any
    let error = groupForm[5].querySelector("#course-error");
    if (error !== null) {
      error.parentElement.remove();
      //release the flag when removing the error
      courseIsValid = true;
    }
  }
}

function checkGender() {
  let value = genderInput.value;
  //If there is no data and there is no already an error message
  //Show an error message
  if (value === "" && groupForm[4].childElementCount <= 2) {
    var newElement = document.createElement("span");
    newElement.innerHTML =
      '<label id="gender-error" class="error" for="gender">Please choose your gender</label>';
    groupForm[4].appendChild(newElement);
    // raise the  flag that there is an error
    genderIsValid = false;
  } else if (value !== "") {
    //else if there is no error remove error message if any
    let error = groupForm[4].querySelector("#gender-error");
    if (error !== null) {
      error.parentElement.remove();
      //release the flag when removing the error
      genderIsValid = true;
    }
  }
}

function checkEducation() {
  let valueDropdown = educationInput.value;
  let value = specificEducationInput.value.trim();
  //If there is no data and there is no already an error message
  //Show an error message
  if (valueDropdown === "other" && value === '' &&  groupForm[7].childElementCount < 2) {
    var newElement = document.createElement("span");
    newElement.innerHTML =
      '<label id="education-error" class="error" for="education">Please insert your education</label>';
    groupForm[7].appendChild(newElement);
    // raise the  flag that there is an error
    educationIsValid = false;
  } else if (valueDropdown !== "other" || value !== '') {
    //else if we choose other then there is no error remove error message if any
    let error = groupForm[7].querySelector("#education-error");
    if (error !== null) {
      error.parentElement.remove();
      //release the flag when removing the error
      educationIsValid = true;
    }
  }
}

function isValidEmail(email) {
  var emailRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;
  return emailRegex.test(email);
}
