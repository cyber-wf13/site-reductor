const cards = document.querySelectorAll('.card');
const title = document.querySelector('.hero__title');
const heroBlock = document.querySelector('.hero');
const titleText = title.textContent;

let backImgHero = heroBlock.getAttribute('style');
cards.forEach((value)=>{
  value.addEventListener('mouseover', ()=>{
    title.textContent = value.textContent;
    let backImgCard = value.getAttribute('style');
    heroBlock.setAttribute('style', backImgCard);
  });
  value.addEventListener('mouseout', ()=>{
    title.textContent = titleText;
    heroBlock.setAttribute('style', backImgHero);
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
      breakpoint: 993,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 577,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
});