setInterval(check, 1);

var list = document.getElementById('list');
var menu = document.getElementById('menu');
var show = 0;

// 0 = FALSE   ||||||   1 = TRUE

menu.addEventListener("click", function(){
  if (show === 0) {
    show = 1;
    list.style.display = 'block';
  } else {
    show = 0;
    list.style.display = 'none';
  }
});

function check() {
  if (window.innerWidth < 425 || window.innerWidth == 425 || window.innerWidth === 425) {  
    menu.style.display = 'block';
  } else if (window.innerWidth > 425) {
    menu.style.display = 'none';
  }
}