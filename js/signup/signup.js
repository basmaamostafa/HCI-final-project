function validateForm() {
  var fullName = document.forms["myForm"]["fname"].value;
  if (fullName == "") {
    // alert("Name must be filled out");
    var e = document.getElementById("nameError");
    e.innerHTML = "Name must be filled out";
    return false;
  } else {
    var nameTest = fullName.search(/[a-zA-Z]/g);
    if (nameTest == -1) {
      alert("Please enter only letters in this field.");
    }
  }
}
