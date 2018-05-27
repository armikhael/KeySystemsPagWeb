// funcion para usar animate.css
/*
    Ejemplo

    <div class="flip1"></div>

    Efectos

    https://daneden.github.io/animate.css/?

*/

$(document).ready(function() {
  
    animationClick('.rotateIn1','rotateIn'); 
    animationClick('.flip1','flip'); 
    animationClick('.hinge1','hinge'); 
    animationClick('.jackInTheBox1','shake'); 

      
    
            
    function animationClick(element, animation){
      element = $(element);
      element.click(
        function() {
          element.addClass('animated ' + animation);
          //wait for animation to finish before removing classes
          window.setTimeout( function(){
              element.removeClass('animated ' + animation);
          }, 1000);
        }
      );
    };     
            
            
    });