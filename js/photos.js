//declaring dom elements
const imgWrapper = document.getElementsByClassName('imgGallery_wrapper');
const imgGallery = document.getElementsByClassName('imgGallery_img');
const photos_row = document.getElementById('photos-row');


//declaring a few important variables
const imgList = [];
let images = photos_row.children;
<<<<<<< HEAD
let imgI = 0; 

//makes a list of all the imge links
for (let i = 0;i <= images.length-1;i++) {
    let newImg = images.item(i);

    imgList.push(newImg.src);
}



//adds eventlisteners to each of the photos to check if they have been clicked(initiates the zoom)
photos.forEach((imgG) => {
    imgG.addEventListener('click',() => {


        imgWrapper[0].setAttribute('style','opacity:1;pointer-events:all;');
        imgGallery[0].src = imgG.src;
        imgI = parseInt(imgG.alt);



    })

=======
let imgI = 0;

//The number of pictures present
const numberOfPictures = 19;
 
//makes a list of all the img links and create the childelements and adds them to the div with photos-row
for (let i = 1;i<numberOfPictures;i++) {

  let newImg = document.createElement('img');
  newImg.src = (`./img/photos_page/pic${i}.jpg`)
  newImg.alt = i
  newImg.className = 'photos'
  imgList.push(newImg.src)
  photos_row.appendChild(newImg);

}




//adds eventlisteners to each of the photos to check if they have been clicked(initiates the zoom)

const photos = document.querySelectorAll('.photos');
photos.forEach((imgG) => {
  imgG.addEventListener('click',() => {
  imgWrapper[0].setAttribute('style','opacity:1;pointer-events:all;');
  imgGallery[0].src = imgG.src;
  imgI = parseInt(imgG.alt);
  });
>>>>>>> main
});

//browses the images to the right
imgGallery[0].nextElementSibling.addEventListener('click',() => {
<<<<<<< HEAD
    ++imgI;
    if (imgI >= imgList.length) {
        imgI = 0;
    }
    imgGallery[0].src = imgList[imgI];

=======
  ++imgI;
  if (imgI >= imgList.length) {
    imgI = 0;
  }
  imgGallery[0].src = imgList[imgI];
>>>>>>> main
});

//browses the images to the left
imgGallery[0].previousElementSibling.addEventListener('click',() => {
<<<<<<< HEAD
    --imgI;
    if (imgI < 0) {
        imgI = imgList.length-1;
    }
    imgGallery[0].src = imgList[imgI];

});


//event listner which sees if you clicked outside the wrapper
document.getElementsByClassName('invisible_div')[0].addEventListener('click', ()=> {
    imgWrapper[0].setAttribute('style','opacity:0;pointer-events:none;');

    imgGallery[0].src = imgList[imgI];
    imgG[0].src = imgList[imgI];


});


=======
  --imgI;
  if (imgI < 0) {
    imgI = imgList.length-1;
  }
  imgGallery[0].src = imgList[imgI];
});

//event listner which sees if you clicked outside the wrapper
document.getElementsByClassName('invisible_div')[0].addEventListener('click', ()=> {
  imgWrapper[0].setAttribute('style','opacity:0;pointer-events:none;');
  imgGallery[0].src = imgList[imgI];
});
>>>>>>> main
