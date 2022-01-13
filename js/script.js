
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    dots:false,
    animateIn : 'fadeIn',
    animateOut : 'fadeOut',
    mouseDrag : false,
    touchDrag : false,
});

$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[5000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
});
$('.next').on('click',function(){
    owl.trigger('next.owl.carousel')
})
$('.prev').on('click',function(){
    owl.trigger('prev.owl.carousel',[300])
});
$(window).scroll(function() {
    let position = $(this).scrollTop();
    if (position >= 200) {
        $('.nv-custom').addClass('sticky-nav');
    } else{
        $('.nv-custom').removeClass('sticky-nav');
    }
});

$(document).ready(function() {
    lightbox.option({
        'wrapAround': true,
    })
});

// bootstrap custom dropdown

const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});