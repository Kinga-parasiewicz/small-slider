const slidesItem = document.querySelectorAll(".item");
const prevBtn = document.querySelector(".left");
const nextBtn = document.querySelector(".right");
let totalSlides = slidesItem.length;
let index = 0;
prevBtn.addEventListener("click", () => {

    if (index <= 0) {
        index = totalSlides - 1;
    } else { index--; }
    for (i = 0; i < slidesItem.length; i++) {
        slidesItem[i].classList.remove("active")

    } slidesItem[index].classList.add("active");
})

nextBtn.addEventListener("click", () => {
    index++;
    if (index == totalSlides) {
        index = 0;
    }
    for (i = 0; i < slidesItem.length; i++) {
        slidesItem[i].classList.remove("active")

    } slidesItem[index].classList.add("active");

});







