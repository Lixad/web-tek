const imgG = document.getElementById("imgGallery");
const imgBox = document.getElementById("imgbox");

const imgList = [
    "./Img/picture 1.png",
    "./Img/picture 2.webp", //list of pictures
    "./Img/picture 3.jpg",
    "./Img/picture 4.webp"


];

let normal = true; //used to see if the picture is zoomed in or not
let imgI = 1;

var imgTimer = () => { //switches the picture


    imgG.src = imgList[imgI];

    imgI++;

    if (imgI > imgList.length - 1) {
        imgI = 0;
    }


};

var interval = setInterval(imgTimer,2000);



imgG.addEventListener("click",() => { //makes all the changes to make the image bigger

    normal = false;

    clearInterval(interval);
    document.querySelectorAll("body > *:not([id*='container'])").forEach(i => { //blurs the rest of the page

        i.setAttribute("style","filter:blur(3px);");

    });


    imgBox.setAttribute("style","width:1000px; height:750px;");
    imgG.setAttribute("style","width:1000px;");

    imgG.nextElementSibling.setAttribute("style","display:inline-block");
    imgG.previousElementSibling.setAttribute("style","display:inline-block");
    



});

imgG.nextElementSibling.addEventListener("click",() => { //the right and left buttons to switch between pictures in bigger picture
    imgI++;
    if (imgI >= imgList.length) {
        imgI = 0
    }
    imgG.src = imgList[imgI];

})

imgG.previousElementSibling.addEventListener("click",() => {
    imgI--;
    if (imgI < 0) {
        imgI = imgList.length-1;
    }
    imgG.src = imgList[imgI];

})

 document.addEventListener("click",(event) => { //checks if user clicks outside of the imgbox element to revert the changes

    const clickOutside = imgBox.contains(event.target);

    if ((!clickOutside) && (normal==false)) {


        imgBox.setAttribute("style","width:400px; height:250px;");
        imgG.setAttribute("style","width:400px;");
        imgG.nextElementSibling.setAttribute("style","display:none");
        imgG.previousElementSibling.setAttribute("style","display:none");

        document.querySelectorAll("body > *:not([id*='container'])").forEach(i => {

            i.setAttribute("style","filter:blur(0px);");
        
        });



        normal = true;

        interval = setInterval(imgTimer,2000);



    }

});

