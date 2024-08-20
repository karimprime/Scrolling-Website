let stars =document.getElementById('stars');
let moon =document.getElementById('moon');
let city =document.getElementById('city');
let road =document.getElementById('road');
let car =document.getElementById('car');

window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value +'px';
    moon.style.top = value * 4 +'px';
    car.style.left = value *3 +'px';
    car.style.top = value +'px';
    road.style.top = value +'px';
    city.style.top = value * 2 +'px';
    if(scrollY >= 153){
        document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)';
    }else{
        document.querySelector('.main').style.background = 'linear-gradient(#1a0415,#050126)';
    }
}