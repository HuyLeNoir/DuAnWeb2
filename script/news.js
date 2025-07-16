{
const slides = document.querySelector(".news-container");
let currentIndex = 0;
const dotList = document.querySelectorAll(".dot");
// Ham chuyen slide khi an nut dieu huong ben duoi
function goTo(index){
    dotList.forEach(function(d){
        d.classList.remove("active")
    });
        dotList[index].classList.add("active");
        slides.style.transform = `translateX(-${100/3 * index}%)`;
    currentIndex = index;
};
// them su kien onlick
dotList.forEach(function(dot, index){ 
    dot.onclick = function(){
        goTo(index);
    }
});
// Lam cho news tu truot sau 5s
setInterval(function(){
    // modulo cho dotList de currentIndex quay ve 0 khi da di toi phan tu cuoi
    currentIndex = (currentIndex + 1) % dotList.length;
    goTo(currentIndex);
},5000);
}