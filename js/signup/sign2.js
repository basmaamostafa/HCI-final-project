function validateForm() {
  var bio = document.forms["myForm"]["biotxt"].value;
  var bioP = document.getElementById("bioError");

  if (bio == "") {
    bioP.innerHTML = "Name must be filled out";
    return false;
  } else {
    var bioTest = bio.search("/^[A-Za-z]+$/");
    if (bioTest == -1) {
      bioP.innerHTML = "Please enter letters only";
      return false;
    }
  }
}
var test = document.getElementById("test");
test.innerHTML = "Please enter letters only";
