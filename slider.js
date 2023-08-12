class slider{
   slideIndex = 1;

    // get item of resturant.js
    constructor(options) {
        this.options = options;
        this.intialStuff();
        this.createNextAndPrevBtns();
        this.showSlides(1);
        this.setInterval();

    }

    // Validation and get children  main class in  array 
    intialStuff(){
        let { el : sliderElement , slideClass , auto} = this.options;

        if(! sliderElement ) throw Error('slider element is not exists');
        Number.isInteger(auto) ? this.auto = auto :  this.auto = 0;

        this.sliders = [...sliderElement.children].filter(elm => elm.classList.contains(slideClass))
    }

    // creat Next & previous buttons and link with count slideIndex 
    createNextAndPrevBtns(){
        let { el : sliderElement } = this.options;

        sliderElement.insertAdjacentHTML('beforeend' , `
            <a class="prev">&#10094;</a>
            <a class="next">&#10095;</a>
        `);

        sliderElement.querySelector('.next').addEventListener('click' , () => this.nextAndPrevSlide(this.slideIndex += 1))
        sliderElement.querySelector('.prev').addEventListener('click' , () => this.nextAndPrevSlide(this.slideIndex -= 1))
    }

    nextAndPrevSlide = (n) => {
        this.resetInterval();
        this.showSlides(n)
    }
    currentSlide = n => {
        this.resetInterval();
        this.showSlides(this.slideIndex = n) 
    }

    showSlides(index){
        let { el : sliderElement , slideClass , currentSlider } = this.options;

        if(index > this.sliders.length) this.slideIndex = 1;
        if(index < 1 ) this.slideIndex = this.sliders.length;

        let target=sliderElement.querySelector(`.${slideClass}.active`).classList.remove('active');
        this.sliders[this.slideIndex-1].classList.add('active');

        if(currentSlider) currentSlider(this.sliders[this.slideIndex-1])
    }

    // set and reset time of aauto show slide 
    setInterval() {
        if(this.auto != 0) {
            this.intervalID = setInterval(() => this.showSlides(this.slideIndex += 1) , this.auto);
        }
    }
    resetInterval() {
        clearInterval(this.intervalID);
        this.setInterval();
    }
}
