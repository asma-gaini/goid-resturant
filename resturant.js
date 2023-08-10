
new slider({
    el : document.querySelector('.slide-show'),
    slideClass : 'slide-show_slider',
    currentSlider : (slider) => {
        console.log(slider);
    },
    auto : 3000
})