function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $("#imagePreview").css(
        "background-image",
        "url(" + e.target.result + ")"
      );
      var path = e.target.result;
      $("#imagePreview").hide();
      $("#imagePreview").fadeIn(650);
      // var path = getBase64Image(e.target.result);
      // var url = path.toDataURL("image/png");
      sessionStorage.setItem("IMG1", path);

      // return url.replace(/^data:image\/(png|jpg);base64,/, "");
    };
    reader.readAsDataURL(input.files[0]);
  }
}
$("#imageUpload").change(function () {
  readURL(this);
});
