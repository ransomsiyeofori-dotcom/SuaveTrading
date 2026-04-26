// toggle menu //
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");


let open = false;

menu.addEventListener("click", () => {
  open = !open;

  nav.classList.toggle("active");

  // change icon
  menu.textContent = open ? "close" : "menu";
});

  const input = document.querySelector("#phone");

  window.intlTelInput(input, {
    initialCountry: "ng",
    separateDialCode: true,
    preferredCountries: ["ng", "us", "gb"],
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@23.8.0/build/js/utils.js"
  });
  
  // full form validation //
  const form = document.getElementById("signupForm");

form.addEventListener("submit", function(e){
e.preventDefault();

let valid = true;

// FULL NAME
const name = document.getElementById("fullName").value.trim();
if(name.length < 3){
document.getElementById("nameError").textContent = "Enter a valid full name";
valid = false;
} else {
document.getElementById("nameError").textContent = "";
}

// EMAIL
const email = document.getElementById("email").value.trim();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!emailPattern.test(email)){
document.getElementById("emailError").textContent = "Invalid email";
valid = false;
} else {
document.getElementById("emailError").textContent = "";
}

// DOB (must be 18+)
const dob = document.getElementById("dob").value;
if(!dob){
document.getElementById("dobError").textContent = "Select date of birth";
valid = false;
} else {
const age = new Date().getFullYear() - new Date(dob).getFullYear();
if(age < 18){
document.getElementById("dobError").textContent = "You must be 18+";
valid = false;
} else {
document.getElementById("dobError").textContent = "";
}
}

// PASSWORD
const password = document.getElementById("password").value;
if(password.length < 6){
document.getElementById("passwordError").textContent = "Password too weak";
valid = false;
} else {
document.getElementById("passwordError").textContent = "";
}

// TERMS
const terms = document.getElementById("terms").checked;
if(!terms){
document.getElementById("termsError").textContent = "You must agree to terms";
valid = false;
} else {
document.getElementById("termsError").textContent = "";
}

// PHONE (intl-tel-input check)
const phoneInput = window.intlTelInputGlobals.getInstance(
document.querySelector("#phone")
);

if(phoneInput && !phoneInput.isValidNumber()){
document.getElementById("phoneError").textContent = "Invalid phone number";
valid = false;
} else {
document.getElementById("phoneError").textContent = "";
}


// FINAL CHECK
if(valid){
  alert("Form submitted successfully 🚀");
}

});
 