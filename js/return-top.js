var call = 0;
var top;

function goTop() {
  if (call === 0){
    top = document.getElementById("top");
  }

  doScrolling(0, 800);

  setTimeout(function(){location.hash = "top";}, 801);

  call++;
}
