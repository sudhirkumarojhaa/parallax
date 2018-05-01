$("#overlay").show();

setTimeout(function () {
  $("#overlay").fadeOut();
  $("body").show(300);
}, 10000);

//menu css
function openNav() {
  document.getElementById("myNav").style.width = "102%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

