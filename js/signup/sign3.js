function validateForm() {
  var edu = document.forms["myForm"]["edutxt"].value;
  var eduP = document.getElementById("eduError");

  var img = document.forms["myForm"]["file"].value;
  var imgp = document.getElementById("imgError");

  if (img == "") {
    imgp.innerHTML = "You must choose an image";
    return false;
  } else {
    sessionStorage.setItem("IMG", img);
  }
}
