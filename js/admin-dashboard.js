let sideBar = document.querySelector('.side-bar');
let sideBarBtn = document.querySelector('.side-bar-btn');
let x = document.getElementsByClassName('gridItem');

let overview = document.getElementById('overview');
let myKids = document.getElementById('myKids');
let paymentHistory = document.getElementById('paymentHistory');
let schoolCalendar = document.getElementById('schoolCalendar');
let timetable = document.getElementById('timetable');
let myClassmates = document.getElementById('myClassmates');
let counseling = document.getElementById('counseling');
let duty = document.getElementById('duty');
let complaints = document.getElementById('complaints');

let academicSession = document.getElementById('academicSession');
let dropdownContent = document.querySelector(".dropdown-content");
let dropdownContent2 = document.querySelector(".dropdown-content2");
let session24 = document.getElementById('session24');
let session23 = document.getElementById('session23');
let session22 = document.getElementById('session22');
let ss1 = document.getElementById('ss1');
let ss2 = document.getElementById('ss2');

// Get the scroll-to-top button
let mybutton = document.getElementById("myBtn");

// date and time information
const d = new Date();
h = d.getHours();
dd = d.getDay();
if (h < 12) {
  document.getElementById('greet').innerHTML = "Good morning,"
} else if (h < 17) {
  document.getElementById('greet').innerHTML = "Good afternoon,"
} else if (h < 21) {
  document.getElementById('greet').innerHTML = "Good evening,"
} 
else {
  document.getElementById('greet').innerHTML = "Good night,"
}
if (dd == 6 || dd == 1) {
  document.getElementById("lessonSchedule").innerHTML = "<h3>It's weekend! <br> Take time to rest and prepare for the week ahead.. <br> Have a wonderful weekend! </h3>"
} else {
  document.getElementById("lessonSchedule").innerHTML = document.getElementById("lessonSchedule").innerHTML;
}
document.getElementById("showDate").innerHTML = d.toDateString();
setInterval(myTimer, 1000);
function myTimer() {
  const d = new Date();
  document.getElementById("showTime").innerHTML = d.toLocaleTimeString();
}

function showSideBar() {
  sideBarBtn.style.display = "none";
  sideBar.style.display = "block";
}

//close sidebar for small screens
function closeSideBar() {
  let windowWidth = window.innerWidth;
  if (windowWidth < 500) {
   sideBarBtn.style.display = "block";
   sideBar.style.display = "none";
 } else {
   sideBarBtn.style.display = "none";
   sideBar.style.display = "block";
 }
}

//scroll to top
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//side-menu functions
function showMyKids() {
  closeSideBar();
  topFunction();
  for (i = 0; i < x.length; i++) {
  x[i].classList.remove("gridItem-active");
  x[1].classList.add("gridItem-active");
  }
  paymentHistory.style.display = "none";
  schoolCalendar.style.display = "none";
  overview.style.display = "none";
  counseling.style.display = "none";
  complaints.style.display = "none";
  duty.style.display = "none";
  timetable.style.display = "none";
  myClassmates.style.display = "none";
  myKids.style.display = "block";
  myKids.style.opacity = "0.1";
  setTimeout(function() {
    myKids.style.opacity = "1.0";
  }, 500);
}
function showPaymentHistory() {
  closeSideBar();
  topFunction();
  for (i = 0; i < x.length; i++) {
  x[i].classList.remove("gridItem-active");
  x[5].classList.add("gridItem-active");
  }
  myKids.style.display = "none";
  schoolCalendar.style.display = "none";
  overview.style.display = "none";
  counseling.style.display = "none";
  complaints.style.display = "none";
  duty.style.display = "none";
  timetable.style.display = "none";
  myClassmates.style.display = "none";
  paymentHistory.style.display = "block";
  paymentHistory.style.opacity = "0.1";
  setTimeout(function() {
    paymentHistory.style.opacity = "1.0";
  }, 500);
}
function showCalendar() {
  topFunction();
  closeSideBar();
  for (i = 0; i < x.length; i++) {
  x[i].classList.remove("gridItem-active");
  x[6].classList.add("gridItem-active");
  }
  paymentHistory.style.display = "none";
  myKids.style.display = "none";
  overview.style.display = "none";
  counseling.style.display = "none";
  complaints.style.display = "none";
  duty.style.display = "none";
  timetable.style.display = "none";
  myClassmates.style.display = "none";
  schoolCalendar.style.display = "block";
  schoolCalendar.style.opacity = "0.1";
  setTimeout(function() {
    schoolCalendar.style.opacity = "1.0";
  }, 500);
}
function showCounseling() {
  closeSideBar();
  topFunction();
  for (i = 0; i < x.length; i++) {
  x[i].classList.remove("gridItem-active");
  x[7].classList.add("gridItem-active");
  }
  paymentHistory.style.display = "none";
  schoolCalendar.style.display = "none";
  overview.style.display = "none";
  myKids.style.display = "none";
  complaints.style.display = "none";
  duty.style.display = "none";
  timetable.style.display = "none";
  myClassmates.style.display = "none";
  counseling.style.display = "block";
  counseling.style.opacity = "0.1";
  setTimeout(function() {
    counseling.style.opacity = "1.0";
  }, 500);
}
function showMyClassmates() {
  closeSideBar();
  topFunction();
  for (i = 0; i < x.length; i++) {
  x[i].classList.remove("gridItem-active");
  x[4].classList.add("gridItem-active");
  }
  paymentHistory.style.display = "none";
  schoolCalendar.style.display = "none";
  overview.style.display = "none";
  myKids.style.display = "none";
  complaints.style.display = "none";
  duty.style.display = "none";
  timetable.style.display = "none";
  counseling.style.display = "none";
  myClassmates.style.display = "block";
  myClassmates.style.opacity = "0.1";
  setTimeout(function() {
    myClassmates.style.opacity = "1.0";
  }, 500);
}
function showOverview() {
  closeSideBar();
  topFunction();
  for (i = 0; i < x.length; i++) {
  x[i].classList.remove("gridItem-active");
  x[0].classList.add("gridItem-active");
  }
  paymentHistory.style.display = "none";
  schoolCalendar.style.display = "none";
  myClassmates.style.display = "none";
  myKids.style.display = "none";
  complaints.style.display = "none";
  duty.style.display = "none";
  timetable.style.display = "none";
  counseling.style.display = "none";
  overview.style.display = "block";
  overview.style.opacity = "0.1";
  setTimeout(function() {
    overview.style.opacity = "1.0";
  }, 500);
}
function showTimetable() {
  closeSideBar();
  topFunction();
  for (i = 0; i < x.length; i++) {
  x[i].classList.remove("gridItem-active");
  x[2].classList.add("gridItem-active");
  }
  paymentHistory.style.display = "none";
  schoolCalendar.style.display = "none";
  myClassmates.style.display = "none";
  myKids.style.display = "none";
  complaints.style.display = "none";
  overview.style.display = "none";
  duty.style.display = "none";
  counseling.style.display = "none";
  timetable.style.display = "block";
  timetable.style.opacity = "0.1";
  setTimeout(function() {
    timetable.style.opacity = "1.0";
  }, 500);
}
function showDuty() {
  closeSideBar();
  topFunction();
  for (i = 0; i < x.length; i++) {
  x[i].classList.remove("gridItem-active");
  x[3].classList.add("gridItem-active");
  }
  paymentHistory.style.display = "none";
  schoolCalendar.style.display = "none";
  myClassmates.style.display = "none";
  myKids.style.display = "none";
  complaints.style.display = "none";
  overview.style.display = "none";
  timetable.style.display = "none";
  counseling.style.display = "none";
  duty.style.display = "block";
  duty.style.opacity = "0.1";
  setTimeout(function() {
    duty.style.opacity = "1.0";
  }, 500);
}
function showComplaints() {
  closeSideBar();
  topFunction();
  for (i = 0; i < x.length; i++) {
  x[i].classList.remove("gridItem-active");
  x[8].classList.add("gridItem-active");
  }
  paymentHistory.style.display = "none";
  schoolCalendar.style.display = "none";
  myClassmates.style.display = "none";
  myKids.style.display = "none";
  duty.style.display = "none";
  overview.style.display = "none";
  timetable.style.display = "none";
  counseling.style.display = "none";
  complaints.style.display = "block";
  complaints.style.opacity = "0.1";
  setTimeout(function() {
    complaints.style.opacity = "1.0";
  }, 500);
}

//dropdown to switch session
function toggleDropdown() {
   if (dropdownContent.style.display == "block") {
    dropdownContent.style.display = "none"
  } else {
    dropdownContent.style.display = "block"
  }
}
function toggle22() {
  session23.style.display = "none";
  session24.style.display = "none";
  session22.style.display = "block";
  dropdownContent.style.display = "none";
  academicSession.innerHTML = "2021/2022"
}
function toggle23() {
  session24.style.display = "none";
  session22.style.display = "none";
  session23.style.display = "block";
  dropdownContent.style.display = "none";
  academicSession.innerHTML = "2022/2023"
}
function toggle24() {
  session22.style.display = "none";
  session23.style.display = "none";
  session24.style.display = "block";
  dropdownContent.style.display = "none";
  academicSession.innerHTML = "2023/2024"
}

//dropdown to switch classes
function toggleDropdown2() {
   if (dropdownContent2.style.display == "block") {
    dropdownContent2.style.display = "none"
  } else {
    dropdownContent2.style.display = "block"
  }
}
function toggleSS2() {
  ss1.style.display = "none";
  ss2.style.display = "block";
  dropdownContent2.style.display = "none";
}
function toggleSS1() {
  ss2.style.display = "none";
  ss1.style.display = "block";
  dropdownContent2.style.display = "none";
}


// search staff details
function search_staff() {
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase();
  let x = document.getElementsByClassName('staff-details');
  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
    x[i].style.display = "none";
    }
    else {
      x[i].style.display = "table-row";
    }
  }
}

// search classmates
function search_classmates() {
  let input = document.getElementById('searchClassmate').value
  input = input.toLowerCase();
  let x = document.getElementsByClassName('student-1');
  let y = document.getElementsByClassName('student-name-1');
  for (i = 0; i < x.length; i++) {
    if (!y[i].innerHTML.toLowerCase().includes(input)) {
    x[i].style.display = "none";
    }
    else {
      x[i].style.display = "table-row";
    }
  }
}

// staff star rating
let oneStarRating = document.querySelector(".oneStar");
let twoStarRating = document.querySelector(".twoStar");
let threeStarRating = document.querySelector(".threeStar");
let fourStarRating = document.querySelector(".fourStar");
let fiveStarRating = document.querySelector(".fiveStar");

function oneStar() {
  oneStarRating.style.color = "#a51f04";
  twoStarRating.style.color = "gray";
  threeStarRating.style.color = "gray";
  fourStarRating.style.color = "gray";
  fiveStarRating.style.color = "gray";
}
function twoStar() {
  oneStarRating.style.color = "#a51f04";
  twoStarRating.style.color = "#a51f04";
  threeStarRating.style.color = "gray";
  fourStarRating.style.color = "gray";
  fiveStarRating.style.color = "gray";
}
function threeStar() {
  oneStarRating.style.color = "#a51f04";
  twoStarRating.style.color = "#a51f04";
  threeStarRating.style.color = "#a51f04";
  fourStarRating.style.color = "gray";
  fiveStarRating.style.color = "gray";
}
function fourStar() {
  oneStarRating.style.color = "#a51f04";
  twoStarRating.style.color = "#a51f04";
  threeStarRating.style.color = "#a51f04";
  fourStarRating.style.color = "#a51f04";
  fiveStarRating.style.color = "gray";
}
function fiveStar() {
  oneStarRating.style.color = "#a51f04";
  twoStarRating.style.color = "#a51f04";
  threeStarRating.style.color = "#a51f04";
  fourStarRating.style.color = "#a51f04";
  fiveStarRating.style.color = "#a51f04";
}
function clearStarRating() {
  oneStarRating.style.color = "gray";
  twoStarRating.style.color = "gray";
  threeStarRating.style.color = "gray";
  fourStarRating.style.color = "gray";
  fiveStarRating.style.color = "gray";
}
// report staff modal
var modal = document.getElementById('id01');
var modal2 = document.getElementById('id02');
var classmateCard = document.getElementsByClassName("classmate-card");
function closeModal() {
  modal2.style.display = "none";
  clearStarRating()
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
        clearStarRating();
    }
}

function reqAppointment() {
let appointmentModal = document.getElementById('appointmentModal');
let countDownLine = document.querySelector(".modal-line-countdown");
let width = 100;

  appointmentModal.style.display = "block";
  setTimeout(function() {
    appointmentModal.style.display = "none";
  }, 3500);
  setInterval(function() {
    width--;
    countDownLine.style.width = width + "%";
  }, 35);
}
function submitReport() {
let reportModal = document.getElementById('reportModal');
let reportField = document.getElementById('reportField');
let response = document.getElementById('response');
let revealID = document.getElementById('revealID');
let noID = document.getElementById('noID');

reportModal.style.display = "block";
if (reportField.value == "") {
  reportModal.classList.remove("w3-khaki");
  reportModal.classList.add("w3-red");
  response.innerHTML = "Please type something"
}
else if (!revealID.checked && !noID.checked) {
  response.innerHTML = "Set your privacy"
}
else {
  reportModal.classList.remove("w3-red");
  reportModal.classList.add("w3-khaki");
  response.innerHTML = "The Management has received your note. Thank you!"
}
  
  setTimeout(function() {
    reportModal.style.display = "none";
  }, 1500);
}

function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}