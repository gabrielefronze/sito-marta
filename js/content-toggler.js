var call = 0;
var placeholder;
var container;
var contents;
var tophide;

function toggleContent(id) {
  if (call === 0){
    placeholder = document.getElementsByClassName("placeholder")[0];
    container = document.getElementsByClassName("container")[0];
    contents = document.getElementsByClassName("content");
    tophide = document.getElementsByClassName("top-hide")[0];
  }

  content_to_toggle = document.getElementById(id);

  for(var i = 0; i < contents.length; i++)
  {
    contents[i].classList.remove("visible-content");
  }

  content_to_toggle.classList.add("visible-content")
  container.classList.remove("hide-container")
  container.classList.add("shift-container")
  tophide.classList.add("top-hide-visible")

  // doScrolling(container.offsetTop, 800);

  setTimeout(function(){location.hash = id;}, 900);

  call++;
}

$(document).ready(
  function() {
    var id = location.hash.replace('#','');
    if(id !== "top") toggleContent(id)
  }
)
