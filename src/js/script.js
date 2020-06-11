let slide = 0;
sliderTop = function(id){ 
    //Variable
    let slides = document.querySelectorAll('#slides > div');
    let numSlides = slides.length;
    let pagginations = document.querySelectorAll('#number > li');
    //Functions!!
    currentSlide = function() {
      let itemToShow = Math.abs(slide % numSlides);
      [].forEach.call(slides, function(el) {
        el.classList.remove('slideActive')
      });
      slides[itemToShow].classList.add('slideActive');

      let pagginationActive = Math.abs(slide % numSlides);
      [].forEach.call(slides, function(el) {
        el.classList.remove('active')
      });
      pagginations[pagginationActive].classList.add('active');
    },

    //Buttons
    first = function(){
        slide = 0;
        currentSlide();
    }
    second = function(){
        slide = 1;
        currentSlide();
    }
    third = function(){
        slide = 2;
        currentSlide();
    }
    fourth = function(){
        slide = 3;
        currentSlide();
    }
    //Function from id
    eval(id)();
}
sliderProjects = function(id){
    let slides = document.querySelectorAll('#projects > div');
    let numSlides = slides.length;
    let pagginations = document.querySelectorAll('#image > div');
    let numPagginations = pagginations.length
    //Functions!!
    currentSlide = function() {
      let itemToShow = Math.abs(slide % numSlides);
      [].forEach.call(slides, function(el) {
        el.classList.remove('slideActive')
      });
      slides[itemToShow].classList.add('slideActive');

      let pagginationActive = Math.abs(slide % numPagginations);
      [].forEach.call(pagginations, function(el) {
        el.classList.remove('active')
      });
      pagginations[pagginationActive].classList.add('active');
    };

    //Buttons
    next = function() {
        slide++;
        currentSlide();
      };
    prev = function() {
        slide--;
        currentSlide();
      };  
    first = function(){
        slide = 0;
        currentSlide();
    }
    second = function(){
        slide = 1;
        currentSlide();
    }
    third = function(){
        slide = 2;
        currentSlide();
    }
    fourth = function(){
        slide = 3;
        currentSlide();
    }
    //Function from id
    eval(id)();
}

searchActive = function(){
    const form = document.getElementById('search');
    form.classList.toggle('search');
}
 