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
  var nameTest = fullName.search(/^[a-z,',-]+(\s)[a-z,',-]+$/i);
  var emailTest = email.search(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  var passTest = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(
    password
  );

  if (fullName == "") {
    // alert("Name must be filled out");
    n.innerHTML = "Name must be filled out";
    return false;
  } else if (nameTest) {
    n.innerHTML = "Please enter letters only";
    return false;
  } else {
    sessionStorage.setItem("FULLNAME", fullName);
  }

  if (email == "") {
    // alert("Name must be filled out");
    e.innerHTML = "E-Mail must be filled out";
    return false;
  } else if (emailTest == -1) {
    e.innerHTML = "Please enter a valid email";
    return false;
  } else if (password == "") {
    // alert("Name must be filled out");
    p.innerHTML = "Password must be filled out";
    return false;
    // } else if (!passTest) {
    //   p.innerHTML = "Please enter a stronger password";
    //   return false;
  } else if (confirmPassword == "") {
    cp.innerHTML = "Password must be filled out";
    return false;
  } else if (confirmPassword !== password) {
    cp.innerHTML = "Please enter a the same password";
    return false;
  } else if (!termsofuse) {
    checkerror.innerHTML = "Please accept terms of use";
    return false;
  } else {
    // window.location.href = "./sign_up2.html";
    return true;
  }

  // document.getElementById("myForm").action = "./sign_up2.html";
  // return true;
  // var fullName = document.getElementById("fname");
  // if (typeof Storage !== "undefined") {
  //   if (fullName) {
  //     essionStorage.setItem("FULLNAME", fullName);
  //     document.getElementById("fullNameP") = sessionStorage.getItem("FULLNAME");
  //   }
  // }
}
// // window.location.href = "./html/sign_up2.html";
// var form = document.getElementById("myForm");
// form.action = "./sign_up2.html";
// // form.submit()
