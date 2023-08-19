class sliderMenue{
    slideIndex = 0;
    min =0;
    max =0;

    constructor(options){
        this.options = options;
        this.intialStuff();
        this.createNextAndPrevBtns();
        this.primaryComputing();
        this.right();
        // this.showSlides();
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

    primaryComputing(){
        let { el : sliderElement , slideClass , currentSlider } = this.options;
        let holdIndex = [];
       //peymash az ax aval ta akhar bra peyda kardan index activ ha va rikhtan mode index ha dar array holdIndex
        for (let index = 0; index < this.sliders.length; index++) {
            if(this.sliders[index].classList.contains('active')){
                let modeIndex = index % this.sliders.length;
                holdIndex.push(modeIndex);
                console.log(index);
                console.log(modeIndex);
            }
        }
        console.log(holdIndex);
        this.min = Math.min(...holdIndex);
        console.log(this.min);
        this.max = Math.max(...holdIndex);
        console.log(this.max);
    }
    

}