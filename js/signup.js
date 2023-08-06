
function validateEmail() {
  var email = document.getElementById("email").value;
  var rel = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  if (!rel.test(email)) {
    document.getElementById("valid-email").innerHTML =
      "Valid email Required";
    document.getElementById("email").style.border = "0.5px solid red";
    document.getElementById("email").style.color = "red";
    // return false;
  } else {
    document.getElementById("valid-email").innerHTML = "";
    document.getElementById("email").style.border =
      "0.5px solid rgba(0,0,0,0.3)";
  }
}
function buttonValidateEmail() {
  var email = document.getElementById("email").value;
  var rel = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  if (!rel.test(email)) {
    document.getElementById("valid-email").innerHTML =
      "Valid email Required";
    document.getElementById("email").style.border = "0.5px solid red";
    document.getElementById("email").style.color = "red";

  } else {
    document.getElementById("valid-email").innerHTML = "";
    document.getElementById("email").style.border =
      "0.5px solid rgba(0,0,0,0.3)";

    localStorage.setItem("email-name",email);
    window.location.href = "success.html";
  }
}
