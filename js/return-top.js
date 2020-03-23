var top;

function goTop(deactivatebtn = true) {
  if(!btns) btns = document.getElementsByClassName("dropbtn");
  if(!top) top = document.getElementById("top");
  if(!tophide) tophide = document.getElementsByClassName("top-hide")[0];
  if(!container) container = document.getElementsByClassName("container")[0];

  if(deactivatebtn){
    for(var j = 0; j < btns.length; j++)
    {
      btns[j].classList.remove("activebtn");
    }
  }

  tophide.classList.remove("top-hide-visible");
  container.classList.remove("shift-container");
  container.classList.add("hide-container");

  history.pushState(null,null,"#top")

  // setTimeout(function(){location.hash = "top";}, 900);
}

$(document).ready(
  function() {
    if(!btns) btns = document.getElementsByClassName("dropbtn");
    if(!top) top = document.getElementById("top");
    if(!tophide) tophide = document.getElementsByClassName("top-hide")[0];
    if(!container) container = document.getElementsByClassName("container")[0];
  }
);