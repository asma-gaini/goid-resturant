class sliderMenue{
    slideIndex = 1;

    constructor(options){
        this.options = options;
        this.intialStuff();
        this.createNextAndPrevBtns();
        this.showSlides(1);
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
            <a class="prev_menue">&#10094;</a>
            <a class="next_menue">&#10095;</a>
        `);

        sliderElement.querySelector('.next_menue').addEventListener('click' , () => this.incrementSlide())
        sliderElement.querySelector('.prev_menue').addEventListener('click' , () => this.decrementSlide())
    }

    incrementSlide = () => this.showSlides(this.slideIndex += 1)
    decrementSlide = () => this.showSlides(this.slideIndex -= 1)
    
    
    showSlides(indexCounter){
        let { el : sliderElement , slideClass , currentSlider } = this.options;
        if(indexCounter > this.sliders.length) this.slideIndex = 1;
        if(indexCounter < 1 ) this.slideIndex = this.sliders.length;

        var holdIndex = [...sliderElement.children].filter(elm => elm.classList.contains('active'));
        holdIndex[0].classList.remove('active');
        let temp  = this.sliders.findIndex(elm => elm.classList.contains('active'));
        this.sliders[temp+2].classList.add('active')

        console.log(temp)
        // let target=sliderElement.querySelector(`.${slideClass}.active`).classList.remove('active');
    }
}