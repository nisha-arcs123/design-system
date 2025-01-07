function accordionIconChange() {
  const accordionIcons = document.querySelector('#accordionIconChange');
  accordionIcons.classList.toggle('show');
}

$('.carousel').carousel({
  interval: 1000,
  pause: "false"
})

$(document).ready(function(){
	var slideNum = $('.carousel-inner .carousel-item').length;
	var randomNum = Math.floor(Math.random() * slideNum) + 1;
	var randomNumIndex = randomNum - 1;
	$('.carousel').carousel( randomNumIndex );
	$('.carousel-item').removeClass('transparent');
});
