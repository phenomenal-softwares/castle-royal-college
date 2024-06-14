let stuBtn = document.getElementById("stuBtn");
let parBtn = document.getElementById("parBtn");
let staBtn = document.getElementById("staBtn");
let text = document.querySelector(".text");
let form = document.getElementById("form");
let inputLabel = document.getElementById('inputLabel');


//tab buttons
function switchStu() {
  form.action = "student-dashboard.html";
  staBtn.classList.remove("active");
  parBtn.classList.remove("active");
  stuBtn.classList.add("active");
  text.innerHTML = "Student portal";
  inputLabel.innerHTML = "Student ID"
}
function switchPar() {
  form.action = "parent-dashboard.html";
  stuBtn.classList.remove("active");
  staBtn.classList.remove("active");
  parBtn.classList.add("active");
  text.innerHTML = "Parent portal";
  inputLabel.innerHTML = "Parent ID"
}
function switchSta() {
  form.action = "staff-dashboard.html";
  stuBtn.classList.remove("active");
  parBtn.classList.remove("active");
  staBtn.classList.add("active");
  text.innerHTML = "Staff portal";
  inputLabel.innerHTML = "Staff ID"
}

function passSwitch() {
  let passInput = document.getElementById('password');
  let eyeLock = document.getElementById('eyeLock');
  if (passInput.type === "password") {
    passInput.type = "text";
    eyeLock.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'
  } else {
    passInput.type = "password";
    eyeLock.innerHTML = '<i class="fa-solid fa-eye"></i>'
  }
}