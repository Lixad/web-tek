const imgG = document.getElementsByClassName('imgSlide');
const imgWrapper = document.getElementsByClassName('imgGallery_wrapper');
const imgGallery = document.getElementsByClassName('imgGallery_img');
const imgGallery_box = document.getElementsByClassName('imgGallery_box');

const x = 0; //

const imgList = [
    './Img/Picture 1.png'
    ,'./Img/picture 2.webp'
    ,'./Img/picture 3.jpg'
    ,'./Img/picture 4.webp'


];

let imgI = 0;



let imgTimer = () => { //sets interval for picture change




    ++imgI;

    if (imgI > imgList.length-1) {
        imgI = 0;
    }

    imgG[x].src = imgList[imgI]; 

};


let interval = setInterval(imgTimer,2000);


imgG[x].addEventListener('click',() => {

    clearInterval(interval);
    imgWrapper[x].setAttribute('style','opacity:1;pointer-events:all;') //changes opacity and changes pointer-events

    imgGallery[x].src = imgList[imgI];


});



imgGallery[x].nextElementSibling.addEventListener('click',() => { //right arrow to switch picture
    ++imgI;
    if (imgI >= imgList.length) {
        imgI = 0;
    }
    imgGallery[x].src = imgList[imgI];

});

imgGallery[x].previousElementSibling.addEventListener('click',() => { //left arrow to switch picture
    --imgI;
    if (imgI < 0) {
        imgI = imgList.length-1;
    }
    imgGallery[x].src = imgList[imgI];

});

document.getElementsByClassName('invisible_div')[0].addEventListener('click', ()=> { //goes back to normal by clicking invisible div
    imgWrapper[x].setAttribute('style','opacity:0;pointer-events:none;');

    imgGallery[x].src = imgList[imgI];
    imgG[x].src = imgList[imgI];

    interval = setInterval(imgTimer,2000);

});

