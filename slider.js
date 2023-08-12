class slider{
   slideIndex = 1;

    constructor(options) {
        this.options = options;
        this.intialStuff();
        this.createNextAndPrevBtns();
        this.showSlides(1);
    }

    intialStuff(){
        let { el : sliderElement , slideClass , auto} = this.options;

        if(! sliderElement ) throw Error('slider element is not exists');
        Number.isInteger(auto) ? this.auto = auto :  this.auto = 0;

        this.sliders = [...sliderElement.children].filter(elm => elm.classList.contains(slideClass))
    }

    createNextAndPrevBtns(){
        let { el : sliderElement } = this.options;

        sliderElement.insertAdjacentHTML('beforeend' , `
            <a class="prev">&#10094;</a>
            <a class="next">&#10095;</a>
        `);

        sliderElement.querySelector('.next').addEventListener('click' , () => this.incrementSlide())
        sliderElement.querySelector('.prev').addEventListener('click' , () => this.decrementSlide())
    }

    incrementSlide = () => this.showSlides(this.slideIndex += 1)
    decrementSlide = () => this.showSlides(this.slideIndex -= 1)


    showSlides(index){
        let { el : sliderElement , slideClass , currentSlider } = this.options;

        if(index > this.sliders.length) this.slideIndex = 1;
        if(index < 1 ) this.slideIndex = this.sliders.length;

        let target=sliderElement.querySelector(`.${slideClass}.active`).classList.remove('active');
        this.sliders[this.slideIndex-1].classList.add('active');

        if(currentSlider) currentSlider(this.sliders[this.slideIndex-1])

    }
}
