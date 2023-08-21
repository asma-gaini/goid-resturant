class sliderComment{
    slideIndex = 0;
    // carouselounter = comment_show_carousel.que

    constructor(options){
        this.options = options;
        this.intialStuff();
        this.changeSlide();
        // this.changeCarousel();
        this.setInterval();

    }

    intialStuff(){
        let { el : sliderElement , slideClass , elCarousel , auto} = this.options;
        this.sliders = [...sliderElement.children].filter(elm => elm.classList.contains(slideClass));
        // console.log(this.sliders);
        this.carouselcounter = [...elCarousel.children];
        console.log(this.carouselcounter);
    }

    changeSlide(){
        let { el : sliderElement , slideClass , elCarousel , auto} = this.options;

        console.log("ghabl ezafe kardan  "+this.slideIndex)

        if (this.slideIndex<0) {
            this.slideIndex = (this.sliders.length-1);
        }
        if (this.slideIndex >= this.sliders.length) {
            this.slideIndex = 0;
        }
        this.sliders[this.slideIndex].classList.remove('active');
        this.carouselcounter[this.slideIndex].classList.remove('active');
        this.slideIndex +=1;
        if (this.slideIndex >= this.sliders.length) {
            this.slideIndex = 0;
        }
        this.sliders[this.slideIndex].classList.add('active');
        this.carouselcounter[this.slideIndex].classList.add('active');
        console.log(this.slideIndex)
    }

    // changeCarousel(){
    //     let { el : sliderElement , slideClass , auto} = this.options;

    //     // this.counter = [...]

    // }

    setInterval() {
        this.intervalID = setInterval(() => this.changeSlide(), 5000);
    }

}