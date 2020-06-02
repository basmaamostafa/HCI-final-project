function validateForm() {
  // var f = document.forms["myForm"];
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

  // var skill = document.getElementById("skillSpan");
  // var skillP = document.getElementById("skillError");

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

  // if (!skill) {
  // } else {
  //   sessionStorage.setItem("SKILL", JSON.stringify(skillarr));
  // }
}

// function readURL(input) {
//   if (input.files && input.files[0]) {
//     var reader = new FileReader();
//     reader.onload = function (e) {
//       $("#imagePreview").css(
//         "background-image",
//         "url(" + e.target.result + ")"
//       );
//       $("#imagePreview").hide();
//       $("#imagePreview").fadeIn(650);
//       var path = getBase64Image(e.target.result);
//       var url = path.toDataURL("image/png");
//       localStorage.setItem("IMG1", url);

//       return url.replace(/^data:image\/(png|jpg);base64,/, "");
//     };
//     reader.readAsDataURL(input.files[0]);
//   }
// }
// $("#imageUpload").change(function () {
//   readURL(this);
// });
