
var slideIndex = 0;
function showSlide(idx){
  var slides = document.querySelectorAll('.slide')
  if (idx >= 0 && idx < slides.length) {
    for (var i = 0; i < slides.length; i++) {
      var elm = slides[i];
      elm.style.display = i === idx ? 'block' : 'none';
    }
    slideIndex = idx;
    if (idx === 0) {
      history.replaceState('', '', location.pathname);
    } else {
      history.replaceState('', '', '#' + idx);
    }
  }
};

function nextSlide() {
  showSlide(slideIndex + 1);
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

function printView() {
  var slides = document.querySelectorAll('.slide')
  for (var i = 0; i < slides.length; i++) {
    var elm = slides[i];
    elm.style.display = 'block';
  }
}

window.addEventListener('load', function() {
  var initialSlide = 0;
  var matched = location.hash.match(/^#(\d+)$/);
  if (matched) {
    initialSlide = Number(matched[1]);
  }
  showSlide(initialSlide);
  document.querySelector('#print-button').addEventListener('click', function(){ printView(); });
  document.querySelector('#next-button').addEventListener('click', function(){ nextSlide(); });
  document.querySelector('#prev-button').addEventListener('click', function(){ prevSlide(); });
  window.addEventListener('keydown', function(e){
    switch(e.keyCode){
      case 39:
        nextSlide();
        break;
      case 37:
        prevSlide();
        break;
    }
  });
});
