function validateFormsignin() {
  var email = document.forms["myForm"]["mail"].value;
  var e = document.getElementById("mailError");
  var password = document.forms["myForm"]["pass"].value;
  var p = document.getElementById("passError");
  var emailTest = email.search(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  var passTest = /^[0-9a-zA-Z]+$/.test(password);

  var error = document.getElementById("Error");
  var storedemail = sessionStorage.getItem("EMAIL");
  var storedpass = sessionStorage.getItem("PASS");

  if (email == "") {
    e.innerHTML = "E-Mail must be filled out";
    return false;
  } else if (emailTest == -1) {
    e.innerHTML = "Please enter a valid email";
    return false;
  } else if (email !== storedemail) {
    error.innerHTML = "Please enter correct email or password";
    return false;
  }
  // else {
  //   return true;
  // }

  if (password == "") {
    p.innerHTML = "Password must be filled out";
    return false;
  } else if (!passTest) {
    p.innerHTML = "You can't enter symbol";
    return false;
  } else if (password !== storedpass) {
    error.innerHTML = "Please enter correct email or password";
    return false;
  } else {
    return true;
  }
}
