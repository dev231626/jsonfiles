

// psuedo code for getting the dom
// selecting the dom (next = id, prev = id, coarousel = class, list = carousel list)

let nextDom = document.getElementById("next")
let prevDom = document.getElementById('prev')

let carousel = document.querySelector('.carousel')

let sliderDom = carousel.querySelector('.carousel .list')
let thumbnail = document.querySelector('.carousel .thumbnail')
let thumbnailItem = thumbnail.querySelector('.item')

let time = document.querySelector('.carousel .time')

// now write the function for slider to slide when clicking next and previous button

nextDom.addEventListener('click', function () {

    sliderDom('next')

})
prevDomDom.addEventListener('click', function () {

    sliderDom('prev')

})
// now write the function for the slider to slide when clicking buttons
let timeRunning = 7000;
let autoNExtTime = 3000;
let runtimeOut;
let nextAuto = setTimeout(() => {
    nextDom.click()
}, autoNExtTime)
function sliderDom(n) {
    let mainSliderItems = sliderDom.querySelectorAll('.carousel .list .item')
    let thumbnailDomItems = thumbnail.querySelectorAll('.item')

    // now write the condition if next or prev clicked append or prepend the mainslider and thumbnail

    if (n === 'next') {
        // if the next button is clicked move the current item in the main slider to end
        sliderDom.appendChild(mainSliderItems[0])
        //  if next clicked move the thumbnail image item to end of the list
        thumbnail.appendChild(thumbnailDomItems[0])
        // and also add next class name to carousel div to for the transition to take place.
        // when next class is added to carousel whole mode changes from default to transition mode
        // and you will remove the class after the transition effect timed out to restore to default mode
        carousel.classList.add('next')

    } else {
        // if prev move the item from the last of an item to first lenght - 1 (if whole actual lenght 6 starting from zero the array length is 5 counting from zero or  binary which represents 6 elements in the array  )
        sliderDom.prepend(mainSliderItems[mainSliderItems.length - 1])
        // now get prepend the last thumbnail item to first 
        thumbnail.prepend(thumbnailDomItems[thumbnailDomItems - 1])
    }


    // now settimeout function for the added next and prev classes to be romoved after certain delay time
    clearTimeout(runtimeOut)
    runtimeOut = setTimeout(() => {
        carousel.classList.remove('next')
        carousel.classList.remove('prev')

    }, timeRunning)
//  write the function timeout for automatic sliding to the next slide without next button to be clicked
    clearTimeout(nextAuto)
    nextAuto = setTimeout(() => {

        nextDom.click()

    }, autoNExtTime);


}
















