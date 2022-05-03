let img = document.querySelector('img');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');

btn1.addEventListener('click', () =>{
    img.src = 'images/foto1.jpg';
})

btn2.addEventListener('click', () =>{
    img.src = 'images/foto2.jpg';
})

btn3.addEventListener('click', () =>{
    img.src = 'images/foto3.jpg';
})

var slider_img = document.querySelector('.slider-img');
var images = ['foto.jpg','foto1.jpg','foto2.jpg','foto3.jpg'];
var i = 0;

function prev(){
    if(i <= 0) i = images.length;
    i--;
    return setImg();
}

function next(){
    if(i >= images.length -1) i = -1;
    i++;
    return setImg();
}

function setImg(){
    return slider_img.setAttribute('src', 'images/' + images[i]);
}

