function validateForm() {
  var edu = document.forms["myForm"]["edutxt"].value;
  var eduP = document.getElementById("eduError");
  var bio = document.forms["myForm"]["biotxt"].value;
  var bioP = document.getElementById("bioError");
  var skill = document.getElementById("skillSpan");
  // document.forms["myForm"]["skill"].value;
  var skillP = document.getElementById("skillError");
  var college = document.forms["myForm"]["college"].value;
  var collegep = document.getElementById("collegeError");
  var date = document.forms["myForm"]["date"].value;
  var datep = document.getElementById("dateError");

  if (edu == "") {
    eduP.innerHTML = "Education level must be filled out";
    return false;
  } else if (bio == "") {
    bioP.innerHTML = "Bio must be filled out";
    return false;
  } else if (!skill) {
    skillP.innerHTML = "Skill/Tolls must be filled out";
    return false;
  } else if (college == "") {
    collegep.innerHTML = "College/University must be filled out";
    return false;
  } else if (!date) {
    datep.innerHTML = "Birthday date must be filled out";
    return false;
  } else {
    return true;
  }
}
