class sliderMenue{
    slideIndex = 1;

    constructor(options){
        this.options = options;
        this.intialStuff();
        this.createNextAndPrevBtns();
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
        console.log(sliderElement)
        sliderElement.insertAdjacentHTML('beforeend' , `
            <a class="prev_menue">&#10094;</a>
            <a class="next_menue">&#10095;</a>
        `);

    }
}