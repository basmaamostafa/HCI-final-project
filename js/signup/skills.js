document.querySelector("#add").onclick = function () {
  "use strict";
  if (document.querySelector("#input-add").value === "") {
    document.querySelector("#input-add").onclick = function () {};
  } else {
    var span = document.createElement("span"),
      times = document.createElement("i");
    times.setAttribute("class", "fas fa-times");
    span.textContent = document.querySelector("#input-add").value;
    span.appendChild(times);
    document.querySelector(".items").appendChild(span);
    document.querySelector("#input-add").value = "";
    times.onclick = function () {
      this.parentElement.style.display = "none";
    };
  }
};
