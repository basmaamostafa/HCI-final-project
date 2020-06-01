$("button").click(function () {
  swal({
    title: "Are you sure?",
    text: "It will permanently deleted !",
    type: "success",
    icon: "#000",
    confirmButtonColor: "#000",
    confirmButtonText: "yes",
    closeOnConfirm: false,
  }).then(function (result) {
    window.location = "./test.html";
  });
});
