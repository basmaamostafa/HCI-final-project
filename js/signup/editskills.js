function validateForm() {
  var skill = document.getElementById("skillSpan");

  if (!skill) {
  } else {
    sessionStorage.setItem("SKILL", JSON.stringify(skillarr));
  }
}
