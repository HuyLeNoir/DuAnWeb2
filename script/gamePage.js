const buttonLeft = document.getElementById("left");
const buttonRight = document.getElementById("right");
const container = document.getElementById("picContainer");
let currentTranslate = 0;
let currentIndex = 0;
let length = container.childElementCount - 5; //5 la so luong toi da hien thi o gallery
buttonRight.onclick = function() {
    if (currentIndex != length) {
        currentTranslate -= 20;
        currentIndex++;
        container.style.translate = `${currentTranslate}%`
    }
};
buttonLeft.onclick = function() {
    if (currentIndex != 0) {
        currentTranslate += 20;
        container.style.translate = `${currentTranslate}%`
        currentIndex--;
    }
};

const picFrame = document.getElementById("image");
const pictureList = document.querySelectorAll(".picture > img");
pictureList.forEach(function(pic){
    pic.onclick = function(){
        picFrame.src = pic.src;
        pictureList.forEach(function(pic){
            pic.style.border = "";
        })
        pic.style.border = "3px solid white"
    }
});