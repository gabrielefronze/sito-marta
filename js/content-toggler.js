var call = 0;
var placeholder;
var container;
var contents;
var btns;
var tophide;

function toggleContent(id) {
  content_to_toggle = document.getElementById(id);
  btn_to_toggle = document.getElementById(id+"btn")

  for(var i = 0; i < contents.length; i++)
  {
    contents[i].classList.remove("visible-content");
  }

  for(var j = 0; j < btns.length; j++)
  {
    btns[j].classList.remove("activebtn");
  }

  content_to_toggle.classList.add("visible-content")
  container.classList.remove("hide-container")
  container.classList.add("shift-container")
  tophide.classList.add("top-hide-visible")
  btn_to_toggle.classList.add("activebtn")

  setTimeout(function(){location.hash = id;}, 900);
}

$(document).ready(
  function() {
    var id = location.hash.replace('#','');

    placeholder = document.getElementsByClassName("placeholder")[0];
    container = document.getElementsByClassName("container")[0];
    contents = document.getElementsByClassName("content");
    btns = document.getElementsByClassName("dropbtn");
    tophide = document.getElementsByClassName("top-hide")[0];
    
    setTimeout(goTop(), 900);
    if(id!=="top") setTimeout(toggleContent(id), 900);
  }
)
