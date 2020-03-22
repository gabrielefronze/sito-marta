var call = 0;
var container;
var contents;

function doScrolling(elementY, duration) { 
  var startingY = window.pageYOffset;
  var diff = elementY - startingY;
  var start;

  // Bootstrap our animation - it will get called right before next frame shall be rendered.
  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp;
    // Elapsed milliseconds since start of scrolling.
    var time = timestamp - start;
    // Get percent of completion in range [0, 1].
    var percent = Math.min(time / duration, 1);

    window.scrollTo(0, startingY + diff * percent);

    // Proceed with animation as long as we wanted it to.
    if (time < duration) {
      window.requestAnimationFrame(step);
    }
  })
}

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

  location.hash = id;

  call++;
}

$(document).ready(
  function() {
    var id = location.hash.replace('#','');
    toggleContent(id)
  }
)
