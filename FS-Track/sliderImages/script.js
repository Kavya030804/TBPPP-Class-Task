var imgs = document.querySelectorAll('.slider img');
var dots = document.querySelectorAll('.dot');
var currImg =0;
const interval = 3000;

function changeSlide(n){
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.opacity=0;
        dots[i] .className= dots[i].className.replace(' active', '');
        
    }
    currImg =n;
    imgs[currImg].style.opacity=1;
    dots[currImg].className += 'active';
}
var timer = setInterval(changeSlide ,interval);
currImg = (currImg+1)%imgs.length;
if(n!= undefined){
    clearInterval(timer);
    timer = setInterval(changeSlide, interval);
    currImg=n;
}
