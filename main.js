let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let road = document.getElementById('road');
let car = document.getElementById('car');

let prime = document.querySelector('.kp');

onscroll = function () {
    let value = this.scrollY;
    stars.style.left = value + 'px';
    moon.style.top = (value * 5) + 'px';
    mountains3.style.top = (value * 2) + 'px';
    mountains4.style.top = (value * 1.5) + 'px';
    road.style.top = value + 'px';
    car.style.top = value + 'px';
    car.style.left = (value * 3) + 'px';
    prime.style.fontSize = value + 'px';

    if (scrollY >= 67) {
        prime.style.fontSize = 67 + 'px';
        prime.style.position = 'fixed';

        if (scrollY >= 578) {
            prime.style.display = 'none';
        }
        else {
            prime.style.display = 'block';
        }

        if (scrollY >= 127) {
            document.querySelector('.main').style.background = 'linear-gradient(#200016,transparent)';

        }
        else{
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)';
        }
    }

}