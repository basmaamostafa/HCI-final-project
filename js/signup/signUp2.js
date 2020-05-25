function session() {
  var signupBio = document.getElementById("signupBio").value;
  if (typeof Storage !== "undefined") {
    if (signupBio) {
      // Store
      sessionStorage.setItem("BIO", signupBio);
      // Retrieve
      document.getElementById("bio").innerHTML = sessionStorage.getItem("BIO");
    } else {
      document.getElementById("bio").innerHTML =
        "Sorry, your browser does not support Web Storage...";
    }
    //   sessionStorage.setItem("Bio", signupBio);

    //   var n = document.getElementById("bio");
    //   n.innerHTML = sessionStorage.getItem("Bio");
  }
}
