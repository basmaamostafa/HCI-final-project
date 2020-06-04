function validateForm() {
  // var f = document.forms["myForm"];
  var fullName = document.forms["myForm"]["fname"].value;
  var n = document.getElementById("nameError");
  var email = document.forms["myForm"]["mail"].value;
  var e = document.getElementById("mailError");
  var password = document.forms["myForm"]["pass"].value;
  var p = document.getElementById("passError");
  var confirmPassword = document.forms["myForm"]["confirm"].value;
  var cp = document.getElementById("cpassError");
  var termsofuse = document.getElementById("check").checked;
  var checkerror = document.getElementById("checkError");
  var nameTest = fullName.search(/^[a-zA-Z ]+$/);
  var emailTest = email.search(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  var passTest = /^[0-9a-zA-Z]+$/.test(password);

  if (fullName == "") {
    n.innerHTML = "Name must be filled out";
    return false;
  } else if (nameTest) {
    n.innerHTML = "Please enter letters only";
    return false;
  } else {
    sessionStorage.setItem("FULLNAME", fullName);
  }

  if (email == "") {
    e.innerHTML = "E-Mail must be filled out";
    return false;
  } else if (emailTest) {
    e.innerHTML = "Please enter a valid email";
    return false;
  } else {
    sessionStorage.setItem("EMAIL", email);
  }
  if (password == "") {
    p.innerHTML = "Password must be filled out";
    return false;
  } else if (!passTest) {
    p.innerHTML = "You can't enter symbol";
    return false;
  } else if (confirmPassword == "") {
    cp.innerHTML = "Password must be filled out";
    return false;
  } else if (confirmPassword !== password) {
    cp.innerHTML = "Please enter a the same password";
    return false;
  } else {
    sessionStorage.setItem("PASS", confirmPassword);
  }
  if (termsofuse == "") {
    checkerror.innerHTML = "Please accept terms of use";
    return false;
  } else {
    return true;
  }
}
