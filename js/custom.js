$("#overlay").show();

setTimeout(function () {
  $("#overlay").fadeOut();
  $("body").show(300);
}, 9000);

//menu css
function openNav() {
  document.getElementById("myNav").style.width = "110%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

