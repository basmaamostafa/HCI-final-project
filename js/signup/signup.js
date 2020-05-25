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
}
