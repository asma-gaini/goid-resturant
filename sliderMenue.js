class sliderMenue{
    slideIndex = 0;
    holdIndex = [];
    min =0;
    max =0;

    constructor(options){
        this.options = options;
        this.intialStuff();
        this.createNextAndPrevBtns();
        this.primaryComputing();
        this.right();
        this.left();
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

        sliderElement.querySelector('.next_menue').addEventListener('click' , () => this.right())
        sliderElement.querySelector('.prev_menue').addEventListener('click' , () => this.left())
    }

    primaryComputing(){
        let { el : sliderElement , slideClass , currentSlider } = this.options;
       //peymash az ax aval ta akhar bra peyda kardan index activ ha va rikhtan mode index ha dar array holdIndex
        for (let index = 0; index < this.sliders.length; index++) {
            if(this.sliders[index].classList.contains('active')){
                let modeIndex = index % this.sliders.length;
                this.holdIndex.push(modeIndex);
                // console.log(index);
                // console.log(modeIndex);
            }
        }
        // console.log(this.holdIndex);
        this.min = Math.min(...this.holdIndex);
        // console.log(this.min);
        this.max = Math.max(...this.holdIndex);
        // console.log(this.max);
    }
    
    right(){
        let { el : sliderElement , slideClass , currentSlider } = this.options;
        // console.log(this.min);
        // console.log(this.max);
        if((this.min % this.sliders.length)<0){
            this.sliders[(this.min % this.sliders.length) + this.sliders.length].classList.remove('active');
        }
        else{
            this.sliders[(this.min % this.sliders.length)].classList.remove('active');
        }
        this.min++;
        this.max++;
        this.holdIndex = [];
        for (let i = this.min; i <= this.max; i++) {
            let modeIndex = i % this.sliders.length;
            this.sliders[modeIndex].classList.add('active');
            this.holdIndex.push(modeIndex);
        }
        // console.log(this.holdIndex);
        // console.log(this.min);
        // console.log(this.max);
    }
    
    left(){
        // let { el : sliderElement , slideClass , currentSlider } = this.options;
        // console.log(this.min);
        // console.log(this.max);
        if((this.max % this.sliders.length)<0){
            this.sliders[(this.max % this.sliders.length) + this.sliders.length].classList.remove('active');
        }
        else{
            this.sliders[(this.max % this.sliders.length)].classList.remove('active');
        }
        this.min--;
        this.max--;
        // console.log(this.min);
        // console.log(this.max);
        // console.log("bad kam kardan");

        this.holdIndex = [];
        for (let i = this.min; i <= this.max; i++) {
            let modeIndex = i % this.sliders.length;
            if (modeIndex < 0) {
                modeIndex += this.sliders.length;
            }
            this.sliders[modeIndex].classList.add('active');
            this.holdIndex.push(modeIndex);
        }
        // console.log(this.holdIndex);
        // console.log(this.min);
        // console.log(this.max);
        // console.log("dor tamom shod");

    }

}