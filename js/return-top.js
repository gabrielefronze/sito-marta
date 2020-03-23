var call = 0;
var top;

function goTop() {
  if (call === 0){
    top = document.getElementById("top");
  }

  tophide.classList.remove("top-hide-visible")
  container.classList.remove("shift-container")
  container.classList.add("hide-container")

  setTimeout(function(){location.hash = "top";}, 900);

  call++;
}
