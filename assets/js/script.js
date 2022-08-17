window.addEventListener('scroll', function()  {
    let elements = document.getElementsByClassName('scroll-content');
    let screenSize = window.innerHeight;
    
          for(var i = 0; i < elements.length; i++) {
          var element = elements[i];
  
          if(element.getBoundingClientRect().top < screenSize) {
            element.classList.add('visible');
          } else {
            element.classList.remove('visible');
          }
  
        }
  });


  $(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 500);
    });
    



   
function prev(){
  document.getElementById('slider-container').scrollLeft -= 270;
}

function next()
{
  document.getElementById('slider-container').scrollLeft += 270;
}


$(".slide img").on("click" , function(){
$(this).toggleClass('zoomed');
$(".overlay").toggleClass('active');
})

//tooltip

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})



