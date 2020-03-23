function goTop() {
  if (call === 0){
    
  }

  for(var j = 0; j < btns.length; j++)
  {
    btns[j].classList.remove("activebtn");
  }

  tophide.classList.remove("top-hide-visible")
  container.classList.remove("shift-container")
  container.classList.add("hide-container")

  setTimeout(function(){location.hash = "top";}, 900);
}

$(document).ready(
  function() {
    top = document.getElementById("top");
  }
)
