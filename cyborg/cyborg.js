let hamburger=document.getElementById('hamburger');
let list = document.querySelector('nav');
hamburger.addEventListener('click',()=>{
  hamburger.classList.toggle('show');
  list.classList.toggle('show');
})
window.addEventListener('scroll',function(){
  let head=document.querySelector("header");
  
  head.classList.toggle('sticky', window.scrollY > 0);
})








const carousel = document.querySelector('.carousel'),
firstImg=carousel.querySelectorAll('img')[0];
arrowIcons = document.querySelectorAll('.wrapper i');
let firstImgWidth =firstImg.clientWidth + 14;

arrowIcons.forEach(icon => {
  icon.addEventListener('click',()=>{
  carousel.scrollLeft+= icon.id == 'left' ? -firstImgWidth:firstImgWidth;
  });
  
});
let isDragStart=false , prevPageX,prevScrollLeft;
const dragStart =(e)=>{
  isDragStart=true;
  prevPageX = e.pageX;
  prevScrollLeft=carousel.scrollLeft;
}
const dragStop=()=>{
    isDragStart=false;
    carousel.classList.remove('dragging');
}
const dragging= (e)=>{
  if(!isDragStart) return;
  e.preventDefault();
  carousel.classList.add('dragging');
  let positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft= prevScrollLeft - positionDiff;
}
carousel.addEventListener("mousedown",dragStart);
carousel.addEventListener("mousemove",dragging);
carousel.addEventListener("mouseup",dragStop);
