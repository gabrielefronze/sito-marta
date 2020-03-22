var call = 0;
var container;
var contents;

function toggleContent(id) {
  if (call === 0){
    container = document.getElementsByClassName("container")[0];
    contents = document.getElementsByClassName("content");
  }

  content_to_toggle = document.getElementById(id);

  for(var i = 0; i < contents.length; i++)
  {
    contents[i].classList.remove("visible-content");
  }

  content_to_toggle.classList.add("visible-content")

  doScrolling(container.offsetTop, 800);

  setTimeout(function(){location.hash = id;}, 801);

  call++;
}

$(document).ready(
  function() {
    var id = location.hash.replace('#','');
    if(id !== "top") toggleContent(id)
  }
)
