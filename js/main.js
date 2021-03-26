const cards = document.querySelectorAll('.card');
const title = document.querySelector('.hero__title');
const heroBlock = document.querySelector('.hero');
const titleText = title.textContent;

cards.forEach((value)=>{
  value.addEventListener('mouseover', ()=>{
    title.textContent = value.textContent;
    let backImg = value.getAttribute('style');
    heroBlock.setAttribute('style', backImg);
  });
  value.addEventListener('mouseout', ()=>{
    title.textContent = titleText;
    heroBlock.removeAttribute('style');
  });
})

$('.products-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  prevArrow: '<button type="button" class="products-slider__btn products-slider__btn-prev"></button>',
  nextArrow: '<button type="button" class="products-slider__btn products-slider__btn-next"></button>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
});