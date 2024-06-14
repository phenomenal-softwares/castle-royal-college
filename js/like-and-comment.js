let commentInput = document.getElementById('commentInput');
let newComment = document.getElementById('newComment');
let sendBtn = document.querySelector('.sendBtn');
let likeCount = document.getElementById('likeCount').textContent;
let likeStat = document.querySelector('.like-stat');
let commentCount = document.getElementById('commentCount').textContent;
let commentStat = document.querySelector('.comment-stat');
let hideShowComment = document.querySelector('.hide-and-show-comment');
let commentArea = document.querySelector('.comment-area');
let likeIcon = document.getElementById('likeIcon');
let isLiked = false;
function like() {
 if (isLiked == true) {
   isLiked = false;
   likeStat.innerHTML = Number(likeCount) + " likes";
   likeIcon.style.color = "black"
 } else {
   isLiked = true;
   likeStat.innerHTML = Number(likeCount) + 1 + " likes";
  likeIcon.style.color = "#a51f04"
 }
}

//time and date for comment area
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
function checkHour(i) {
  if (i > 12) {
    i = i - 12;
  };  // use 12hour time
  return i;
}

function comment() {
const today = new Date();
let h = today.getHours();
let m = today.getMinutes();
let t;
let showTime;
if (h >= 12) {
  t = "pm"
} else {
  t = "am"
}
h = checkHour(h);
m = checkTime(m);
time =  h + ":" + m + t;
date = today.toDateString();
showTime = "<span class='time-and-date'>" + time + " -- " + date + "</span>";
Number(commentCount++);
commentStat.innerHTML = Number(commentCount) + " comments";
//display full comment
newComment.innerHTML += "<div class='indivComment'>" + "<p> <img class='userIcon' src='images/userIcon.png' width='100%' /> </p>" + "<p class='userComment'> <b>unregistereduser</b>" + "<br>" + commentInput.value + "<br/>" + showTime + "</p> </div>";
//erase input area
commentInput.value = "";
sendBtn.style.display = "none"
 }
//input change hides and shows send button
commentInput.addEventListener("input", function() {
  if (commentInput.value == "") {
    sendBtn.style.display = "none"
  } else {
    sendBtn.style.display = "block"
  }
}
  )
  //toggle hide and show comments
  hideShowComment.addEventListener("click", function() {
  if (commentArea.style.display != "none") {
    commentArea.style.display = "none";
    hideShowComment.innerHTML = "show comments"
  } else {
    commentArea.style.display = "grid";
    hideShowComment.innerHTML = "hide comments"
  }
}
  )