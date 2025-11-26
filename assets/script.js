var main = document.querySelector('.main-circle');
var main_bg = document.querySelector('.menu-bg');
var details = document.querySelector('.details');
var head1 = document.querySelector('.header');
var head2 = document.querySelector('.section-header1');
var para1 = document.querySelector('.paragraph1');
var head3 = document.querySelector('.section-header2');
var para2 = document.querySelector('.paragraph2');
var nb = document.querySelector('.nav-button');
var i = 1;
var leftArrow = document.querySelector(".left-arrow");
var rightArrow = document.querySelector('.right-arrow');
var mainHome = document.querySelector('.main-home');

function showHome() {

  main.classList.remove('act1','act2', 'act3');
  main_bg.classList.remove('act1', 'act2', 'act3');
  details.classList.remove('act1', 'act2', 'act3');
  main.classList.toggle('active');
  main_bg.classList.toggle('active')
  nb.classList.remove('active');
  
}

function showRight() {
  i = i + 1;

  if(i==1) {
    return showContent1();
    
  }
    
  else if (i==2){
    return showContent2();
  } 
    
  else if (i==3){
    return showContent3();
  }
  else
    {
      i=3;
    }
}
function showLeft() {
  i = i - 1;
  if(i==1) {
    return showContent1();
    
  }
    
  else if (i==2){
    return showContent2();
  } 
    
  else if (i==3){
    return showContent3();
  } 
  else
    {
      i=1;
    }
    
}


function showContent1() {
  i=1;
  main.classList.remove('act2','act3', 'active');
  main_bg.classList.remove('act2','act3', 'active');
  details.classList.remove('act2','act3', 'active');
  details.classList.add('act1');
  main.classList.add('act1');
  main_bg.classList.add('act1');
  nb.classList.add('active');
  leftArrow.setAttribute('src','assets/images/left-arrow-light.png');
  rightArrow.setAttribute('src','assets/images/right-arrow.png');
}
function showContent2() {
  i=2;
  main.classList.remove('act1', 'act3', 'active');
  main_bg.classList.remove('act1', 'act3', 'active')
  details.classList.remove('act1', 'act3', 'active');
  details.classList.add('act2');
  main.classList.add('act2');
  main_bg.classList.add('act2');
  nb.classList.add('active');
  leftArrow.setAttribute('src','assets/images/left-arrow.png');
  rightArrow.setAttribute('src','assets/images/right-arrow.png')
}
function showContent3() {
  i=3;
  main.classList.remove('act2','act1', 'active');
  main_bg.classList.remove('act2','act1', 'active');
  details.classList.remove('act2','act1', 'active');
  details.classList.add('act3');
  main.classList.add('act3');
  main_bg.classList.add('act3');
  nb.classList.add('active');
  leftArrow.setAttribute('src','assets/images/left-arrow.png');
  rightArrow.setAttribute('src','assets/images/right-arrow-light.png')

}


