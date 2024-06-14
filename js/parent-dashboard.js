let myKids = document.getElementById('myKids');
let checkResults = document.getElementById('checkResults');
let paymentHistory = document.getElementById('paymentHistory');
let staffDirectory = document.getElementById('staffDirectory');
let schoolCalendar = document.getElementById('schoolCalendar');
let pta = document.getElementById('pta');
let counseling = document.getElementById('counseling');
let academicSession = document.getElementById('academicSession');
let dropdownContent = document.querySelector(".dropdown-content");
let dropdownContent2 = document.querySelector(".dropdown-content2");
let session24 = document.getElementById('session24');
let session23 = document.getElementById('session23');
let session22 = document.getElementById('session22');
  let child1 = document.getElementById('child1');
  let child2 = document.getElementById('child2');
// Get the scroll-to-top button
let mybutton = document.getElementById("myBtn");

// date and time information
const d = new Date();
h = d.getHours();
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
document.getElementById("showDate").innerHTML = d.toDateString();
setInterval(myTimer, 1000);
function myTimer() {
  const d = new Date();
  document.getElementById("showTime").innerHTML = d.toLocaleTimeString();
}

function showMyKids() {
  checkResults.style.display = "none";
  paymentHistory.style.display = "none";
  schoolCalendar.style.display = "none";
  pta.style.display = "none";
  staffDirectory.style.display = "none";
  counseling.style.display = "none";
  myKids.style.display = "block";
  myKids.style.opacity = "0.1";
  document.location = "#myKids"
  setTimeout(function() {
    myKids.style.opacity = "1.0";
  }, 500);
}
function showCheckResults() {
  myKids.style.display = "none";
  checkResults.style.display = "block";
  checkResults.style.opacity = "0.1";
  setTimeout(function() {
    checkResults.style.opacity = "1.0";
  }, 500);
}
function showPaymentHistory() {
  myKids.style.display = "none";
  checkResults.style.display = "none";
  staffDirectory.style.display = "none";
  schoolCalendar.style.display = "none";
  pta.style.display = "none";
  counseling.style.display = "none";
  paymentHistory.style.display = "block";
  paymentHistory.style.opacity = "0.1";
  document.location = "#paymentHistory";
  setTimeout(function() {
    paymentHistory.style.opacity = "1.0";
  }, 500);
}
function showStaffDirectory() {
  myKids.style.display = "none";
  checkResults.style.display = "none";
  paymentHistory.style.display = "none";
  schoolCalendar.style.display = "none";
  pta.style.display = "none";
  counseling.style.display = "none";
  staffDirectory.style.display = "block";
  staffDirectory.style.opacity = "0.1";
  document.location = "#staffDirectory";
  setTimeout(function() {
    staffDirectory.style.opacity = "1.0";
  }, 500);
}
function showCalendar() {
  myKids.style.display = "none";
  checkResults.style.display = "none";
  paymentHistory.style.display = "none";
  staffDirectory.style.display = "none";
  pta.style.display = "none";
  counseling.style.display = "none";
  schoolCalendar.style.display = "block";
  schoolCalendar.style.opacity = "0.1";
  document.location = "#schoolCalendar";
  setTimeout(function() {
    schoolCalendar.style.opacity = "1.0";
  }, 500);
}
function showPta() {
  myKids.style.display = "none";
  checkResults.style.display = "none";
  paymentHistory.style.display = "none";
  staffDirectory.style.display = "none";
  schoolCalendar.style.display = "none";
  counseling.style.display = "none";
  pta.style.display = "block";
  pta.style.opacity = "0.1";
  document.location = "#pta";
  setTimeout(function() {
    pta.style.opacity = "1.0";
  }, 500);
}
function showCounseling() {
  myKids.style.display = "none";
  checkResults.style.display = "none";
  paymentHistory.style.display = "none";
  staffDirectory.style.display = "none";
  schoolCalendar.style.display = "none";
  pta.style.display = "none";
  counseling.style.display = "block";
  counseling.style.opacity = "0.1";
  document.location = "#counseling";
  setTimeout(function() {
    counseling.style.opacity = "1.0";
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
//dropdown to switch children
function toggleDropdown2() {
   if (dropdownContent2.style.display == "block") {
    dropdownContent2.style.display = "none"
  } else {
    dropdownContent2.style.display = "block"
  }
}
function toggleChild2() {
  child1.style.display = "none";
  child2.style.display = "block";
  dropdownContent2.style.display = "none";
}
function toggleChild1() {
  child2.style.display = "none";
  child1.style.display = "block";
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

//student photo modal
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}