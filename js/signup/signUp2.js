function session() {
  var printBio = document.getElementById("bio");

  var signupBio = document.getElementById("signupBio").value;
  if (typeof Storage !== "undefined") {
    if (signupBio) {
      // Store
      sessionStorage.setItem("BIO", signupBio);
      // Retrieve
      printBio.innerHTML = sessionStorage.getItem("BIO");
    } else {
      document.getElementById("bio").innerHTML =
        "Sorry, your browser does not support Web Storage...";
    }
    //   sessionStorage.setItem("Bio", signupBio);

    //   var n = document.getElementById("bio");
    //   n.innerHTML = sessionStorage.getItem("Bio");
  }
}
// var bio = printBio.innerHTML;
