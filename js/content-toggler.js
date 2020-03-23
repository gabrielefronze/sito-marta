var placeholder;
var container;
var contents;
var btns;
var tophide;

function toggleContent(id) {
  content_to_toggle = document.getElementById(id);
  btn_to_toggle = document.getElementById(id+"btn");

  if(!placeholder) placeholder = document.getElementsByClassName("placeholder")[0];
  if(!container) container = document.getElementsByClassName("container")[0];
  if(!contents) contents = document.getElementsByClassName("content");
  if(!btns) btns = document.getElementsByClassName("dropbtn");
  if(!tophide) tophide = document.getElementsByClassName("top-hide")[0];

  for(var i = 0; i < contents.length; i++)
  {
    if(contents[i]!==content_to_toggle) contents[i].classList.remove("visible-content");
    else content_to_toggle.classList.add("visible-content");
  }

  for(var j = 0; j < btns.length; j++)
  {
    if(btns[j]!==btn_to_toggle) btns[j].classList.remove("activebtn");
    else btn_to_toggle.classList.add("activebtn");
  }

  container.classList.remove("hide-container");
  container.classList.add("shift-container");
  tophide.classList.add("top-hide-visible");

  if(id!=='') history.pushState(null,null,'#'+id)

  // setTimeout(function(){location.hash = id;}, 900);
}

$(document).ready(
  function() {
    if(!placeholder) placeholder = document.getElementsByClassName("placeholder")[0];
    if(!container) container = document.getElementsByClassName("container")[0];
    if(!contents) contents = document.getElementsByClassName("content");
    if(!btns) btns = document.getElementsByClassName("dropbtn");
    if(!tophide) tophide = document.getElementsByClassName("top-hide")[0];

    var id = location.hash.replace('#','');    
    goTop();
    if(id!=="top") {
      toggleContent(id);
    }
  }
);
