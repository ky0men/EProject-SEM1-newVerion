var inputName = document.querySelector("#name");
var inputEmail = document.querySelector("#email");
var inputMess = document.querySelector("#mess");
var sendMessBtn = document.querySelector("#contact-btn");
var incorrectAlert = document.querySelector(".incorrect-alert");
var formSection = document.querySelector("#form-section");

function showMess(input, mess, type) {
  input.target.nextElementSibling.nextElementSibling.innerText = mess;
  input.target.nextElementSibling.nextElementSibling.classList.add(type);
  input.target.classList.add(type);
}
//Contact BTN click event
sendMessBtn.addEventListener("click", sendMess);
function sendMess(e) {
  e.preventDefault();
  if (
    inputName.value == "" ||
    inputEmail.value == "" ||
    inputMess.value == ""
  ) {
    incorrectAlert.classList.add("show");
    setTimeout(function () {
      incorrectAlert.classList.remove("show");
    }, 5000);
    document.body.scrollTop = 40;
    document.documentElement.scrollTop = 40;
  } else if (!resultCheckEmail || !resultCheckinputName || !resultCheckMess) {
    incorrectAlert.innerText = "Something went wrong. Please check again!";
    incorrectAlert.classList.add("show");
    setTimeout(function () {
      incorrectAlert.classList.remove("show");
    }, 5000);
    document.body.scrollTop = 40;
    document.documentElement.scrollTop = 40;
  } else {
    formSection.innerHTML = `
        <div class="success-img text-center"><img src="./images/login_signup/success.png" alt=""></div>
        <div class="alert alert-dismissible alert-success">
          <strong>Successfully send messenger!</strong><a href="index.html" class="alert-link"> back to homepage!</a>
        </div>
        `;
    var username = inputName.value;
    var useremail = inputEmail.value;
    var usermess = inputMess.value;
    var addContentMess = {
      username: username,
      useremail: useremail,
      usermess: usermess,
    };
    fetch("https://fake-api-sem.herokuapp.com/mess", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addContentMess),
    })
      .then((res) => res.json())
      .then((data) => data);
  }
}
// Check Name
var resultCheckinputName = 0;
inputName.addEventListener("blur", checkinputName);

function checkinputName(e) {
  if (inputName.value == "") {
    // console.log(e.target.nextElementSibling);
    showMess(e, "Name is required!", "error");
  } else {
    showMess(e, "", "success");
    resultCheckinputName = 1;
    return resultCheckinputName;
  }
}

// Check email
var resultCheckEmail = 0;
inputEmail.addEventListener("blur", checkEmail);
function checkEmail(e) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (inputEmail.value == "") {
    showMess(e, "Email is required!", "error");
  } else if (!re.test(inputEmail.value)) {
    showMess(e, "Email is invalid!", "error");
  } else {
    showMess(e, "", "success");
    resultCheckEmail = 1;
    return resultCheckEmail;
  }
}

//Check mess
var resultCheckMess = 0;
inputMess.addEventListener("blur", checkMess);
function checkMess(e) {
  if (inputMess.value == "") {
    showMess(e, "Please input message!", "error");
  } else {
    showMess(e, "", "success");
    resultCheckMess = 1;
    return resultCheckMess;
  }
}
