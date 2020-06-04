function validateForm() {
  var fullName = document.forms["myForm"]["fname"].value;
  var n = document.getElementById("nameError");
  var nameTest = fullName.search(/^[a-zA-Z ]+$/);
  var email = document.forms["myForm"]["mail"].value;
  var e = document.getElementById("mailError");
  var emailTest = email.search(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  var edu = document.forms["myForm"]["edutxt"].value;
  var eduP = document.getElementById("eduError");
  var eduTest = edu.search(/^[a-zA-Z ]+$/);
  var bio = document.forms["myForm"]["biotxt"].value;
  var bioP = document.getElementById("bioError");

  var college = document.forms["myForm"]["college"].value;
  var collegep = document.getElementById("collegeError");
  var colgTest = college.search(/^[a-zA-Z ]+$/);
  var date = document.forms["myForm"]["date"].value;


  if (fullName == "") {
  } else if (nameTest) {
    n.innerHTML = "Please enter letters only";
    return false;
  } else {
    sessionStorage.setItem("FULLNAME", fullName);
  }

  if (email == "") {
  } else if (emailTest) {
    e.innerHTML = "Please enter a valid email";
    return false;
  } else {
    sessionStorage.setItem("EMAIL", email);
  }

  if (edu == "") {
  } else if (eduTest == -1) {
    eduP.innerHTML = "Please enter letters only";
    return false;
  } else {
    sessionStorage.setItem("EDUCATION", edu);
  }

  if (bio == "") {
  } else {
    sessionStorage.setItem("BIO", bio);
  }

  if (college == "") {
  } else if (colgTest == -1) {
    collegep.innerHTML = "Please enter letters only";
    return false;
  } else {
    sessionStorage.setItem("COLLEGE", college);
  }

  if (!date) {
  } else {
    sessionStorage.setItem("BOD", date);
  }
