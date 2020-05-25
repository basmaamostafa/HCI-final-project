function validateForm() {
  var edu = document.forms["myForm"]["edutxt"].value;
  var eduP = document.getElementById("eduError");

  if (edu == "") {
    eduP.innerHTML = "Education level must be filled out";
    return false;
  }

  var bio = document.forms["myForm"]["biotxt"].value;
  var bioP = document.getElementById("bioError");
  if (bio == "") {
    bioP.innerHTML = "Bio must be filled out";
    return false;
  }

  var skill = document.forms["myForm"]["skill"].value;
  var skillP = document.getElementById("skillError");
  if (skill == "") {
    skillP.innerHTML = "Skill/Tolls must be filled out";
    return false;
  }

  var college = document.forms["myForm"]["college"].value;
  var collegep = document.getElementById("collegeError");
  if (college == "") {
    collegep.innerHTML = "College/University must be filled out";
    return false;
  }

  var date = document.forms["myForm"]["date"].value;
  var datep = document.getElementById("dateError");
  if (date == "") {
    datep.innerHTML = "Birthday date must be filled out";
    return false;
  }
}
