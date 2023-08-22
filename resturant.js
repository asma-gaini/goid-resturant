
new slider({
    el : document.querySelector('.slide-show'),
    slideClass : 'slide-show_slider',
    currentSlider : (slider) => {
        console.log(slider);
    },
    auto : 3000
})

new sliderMenue({
    el : document.querySelector('.whats-hot_section_menue-slideShow'),
    slideClass : 'whats-hot_section_menue-slideShow_slider',
    currentSlider : (slider) => {
        console.log(slider);
    },
    auto : 3000
})

new sliderComment({
    el: document.querySelector('.comment_show'),
    elCarousel : document.querySelector('.comment_show_carousel'),
    slideClass : 'slide_show',
    auto : 3000
})