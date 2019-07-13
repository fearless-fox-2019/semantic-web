//INIT
$("#page-halaman-utama").show();
$("#btn-halaman-utama a").addClass("active");
$("#page-sejarah").hide();

$("#btn-halaman-utama").click(function(event){
    event.preventDefault();
    $("#page-halaman-utama").show();
    $("#btn-halaman-utama a").addClass("active");
    //==
    $("#page-sejarah").hide();
    $("#page-destinasi").hide();
    $("#btn-sejarah a").removeClass("active");
    $("#btn-destinasi a").removeClass("active");
});

$("#btn-sejarah").click(function(event){
    event.preventDefault();
    $("#page-sejarah").show();
    $("#btn-sejarah a").addClass("active");
    //==
    $("#page-halaman-utama").hide();
    $("#page-destinasi").hide();
    $("#btn-halaman-utama a").removeClass("active");
    $("#btn-destinasi a").removeClass("active");
});

$("#btn-destinasi").click(function(event){
    event.preventDefault();
    $("#page-destinasi").show();
    $("#btn-destinasi a").addClass("active");
    //==
    $("#page-halaman-utama").hide();
    $("#page-sejarah").hide();
    $("#btn-halaman-utama a").removeClass("active");
    $("#btn-sejarah a").removeClass("active");
});












//SLIDESHOW=====================================================
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function slideNavigate(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
//ENDSLIDESHOW====================================================