//LOGIN CHECK
var userName = document.querySelector("#name");
var password = document.querySelector("#password");
var loginBtn = document.querySelector("#login-btn");
var loginRight = document.querySelector(".login-right");
var incorrectAlert = document.querySelector(".incorrect-alert");

loginBtn.addEventListener("click", checkUser);
function checkUser(e) {
  var login = 0;
  if (userName.value == "" || password.value == "") {
    incorrectAlert.innerHTML = `<strong>All fields has not filled. </strong>Please try again!`;
    incorrectAlert.classList.add("show");
    setTimeout(function () {
      incorrectAlert.classList.remove("show");
    }, 5000);
  } else {
    fetch("https://fake-api-sem.herokuapp.com/users")
      .then((respone) => respone.json())
      .then((data) => {
        // console.log(data);
        data.forEach(function (user) {
          // console.log(userName.value);
          // console.log(password.value);
          if (userName.value == user.user && password.value == user.password) {
            // console.log("Thanh cong");
            login = 1;
            return login;
          }
        });
        // console.log(login);
        if (login) {
          loginRight.innerHTML = `
          <div class="success-img text-center"><img src="./images/login_signup/success.png" alt=""></div>
          <div class="alert alert-dismissible alert-success">
            <strong>Successfully Login!</strong><a href="index.html" class="alert-link"> back to home page!</a>
          </div>
          `;
        } else {
          userName.value = "";
          password.value = "";
          incorrectAlert.classList.add("show");
          setTimeout(function () {
            incorrectAlert.classList.remove("show");
          }, 5000);
        }
      });
  }

  e.preventDefault();
}
