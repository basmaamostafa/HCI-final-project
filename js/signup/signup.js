function validateForm() {
  var fullName = document.forms["myForm"]["fname"].value;
  var e = document.getElementById("nameError");

  if (fullName == "") {
    // alert("Name must be filled out");
    e.innerHTML = "Name must be filled out";
    return false;
  } else {
    var nameTest = fullName.search(/^[A-Za-z]+$/);
    if (nameTest == -1) {
      e.innerHTML = "enter letters only";
      return false;
    }
  }
}
