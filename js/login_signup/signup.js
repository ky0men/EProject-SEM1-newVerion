//FORM VALLIDATION
var signUpBtn = document.querySelector(".signup-btn");
var userName = document.querySelector("#username");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var confirmPass = document.querySelector("#confirm-password");
var checkTerm = document.querySelector(".check-term");
var termMess = document.querySelector(".term-mess");
var incorrectAlert = document.querySelector(".incorrect-alert");
var signUpRight = document.querySelector(".signup-right");

function showMess(input, mess, type) {
  // input.target.nextElementSibling.className = "";
  // input.target.className = "";
  input.target.nextElementSibling.nextElementSibling.innerText = mess;
  input.target.nextElementSibling.nextElementSibling.classList.add(type);
  input.target.classList.add(type);
}

//Event click button signup
signUpBtn.addEventListener("click", checkAll);

function checkAll(e) {
  e.preventDefault();
  if (
    userName.value == "" ||
    userName.value == "" ||
    email.value == "" ||
    password.value == "" ||
    confirmPass == ""
  ) {
    incorrectAlert.classList.add("show");
    setTimeout(function () {
      incorrectAlert.classList.remove("show");
    }, 5000);
    document.body.scrollTop = 40;
    document.documentElement.scrollTop = 40;
  } else if (
    !resultCheckUserName ||
    !resultCheckEmail ||
    !resultCheckPass ||
    !resultCheckConfirmPass ||
    !resultCheckTerm
  ) {
    incorrectAlert.innerText = "Something went wrong. Please check again!";
    incorrectAlert.classList.add("show");
    setTimeout(function () {
      incorrectAlert.classList.remove("show");
    }, 5000);
    document.body.scrollTop = 40;
    document.documentElement.scrollTop = 40;
  } else {
    console.log(userName.value);
    console.log(email.value);
    console.log(password.value);

    signUpRight.innerHTML = `
        <div class="success-img text-center"><img src="./images/login_signup/success.png" alt=""></div>
        <div class="alert alert-dismissible alert-success">
          <strong>Successfully Sign Up!</strong><a href="login.html" class="alert-link"> you can login here!</a>
        </div>
        `;
    var user = userName.value;
    var userPassword = password.value;
    var userEmail = email.value;
    var addUser = {
      user: user,
      password: userPassword,
      email: userEmail,
    };
    fetch("https://fake-api-sem.herokuapp.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addUser),
    })
      .then((res) => res.json())
      .then((data) => data);
  }
}

// Check userName
var resultCheckUserName = 0;
userName.addEventListener("blur", checkUserName);

function checkUserName(e) {
  if (userName.value == "") {
    // console.log(e.target.nextElementSibling);
    showMess(e, "Username is required!", "error");
  } else if (userName.value.length > 12 || userName.value.length < 6) {
    showMess(e, "Username length > 3 charater and < 12 character!", "error");
  } else {
    showMess(e, "", "success");
    resultCheckUserName = 1;
    return resultCheckUserName;
  }
}

// Check email
var resultCheckEmail = 0;
email.addEventListener("blur", checkEmail);
function checkEmail(e) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value == "") {
    showMess(e, "Email is required!", "error");
  } else if (!re.test(email.value)) {
    showMess(e, "Email is invalid!", "error");
  } else {
    showMess(e, "", "success");
    resultCheckEmail = 1;
    return resultCheckEmail;
  }
}

//Check Password
var resultCheckPass = 0;
password.addEventListener("blur", checkPassword);

function checkPassword(e) {
  if (password.value == "") {
    showMess(e, "Password is required!", "error");
  } else if (password.value.length < 6) {
    showMess(e, "Password contains at least 6 characters!", "error");
  } else {
    showMess(e, "", "success");
    resultCheckPass = 1;
    return resultCheckPass;
  }
}

//Check vallidate confirm password
var resultCheckConfirmPass = 0;
confirmPass.addEventListener("blur", checkConfirmPassword);

function checkConfirmPassword(e) {
  if (password.value !== confirmPass.value || confirmPass.value == "") {
    showMess(e, "Password does not match!", "error");
  } else {
    showMess(e, "", "success");
    resultCheckConfirmPass = 1;
    return resultCheckConfirmPass;
  }
}

//Check term
var resultCheckTerm = 0;
checkTerm.addEventListener("blur", checkCheckTerm);

function checkCheckTerm(e) {
  if (!e.currentTarget.checked) {
    termMess.classList.remove("error");
    termMess.classList.remove("succes");
    termMess.classList.add("error");
    termMess.innerText = "You must accept the terms of Use and Privacy Policy!";
  } else {
    resultCheckTerm = 1;
    return resultCheckTerm;
  }
}
