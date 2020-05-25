function validateForm() {
  var fullName = document.forms["myForm"]["fname"].value;
  var n = document.getElementById("nameError");

  if (fullName == "") {
    // alert("Name must be filled out");
    n.innerHTML = "Name must be filled out";
    return false;
  } else {
    var nameTest = fullName.search(/^[A-Za-z]+$/);
    if (nameTest == -1) {
      n.innerHTML = "Please enter letters only";
      return false;
    }
  }

  var email = document.forms["myForm"]["mail"].value;
  var e = document.getElementById("mailError");

  if (email == "") {
    // alert("Name must be filled out");
    e.innerHTML = "E-Mail must be filled out";
    return false;
  } else {
    var emailTest = email.search(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );
    if (emailTest == -1) {
      e.innerHTML = "Please enter a valid email";
      return false;
    }
  }

  var password = document.forms["myForm"]["pass"].value;
  var p = document.getElementById("passError");

  if (password == "") {
    // alert("Name must be filled out");
    p.innerHTML = "Password must be filled out";
    return false;
  } else {
    var passTest = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );

    if (passTest == -1) {
      p.innerHTML = "Please enter a another password";
      return false;
    }
  }

  var confirmPassword = document.forms["myForm"]["confirm"].value;
  var cp = document.getElementById("passError");

  if (confirmPassword == "") {
    // alert("Name must be filled out");
    cp.innerHTML = "Password must be filled out";
    return false;
  } else {
    var conpassTest == passTest);

    if (conpassTest == -1) {
      cp.innerHTML = "Please enter a the same password";
      return false;
    }
  }
}
