  // help pages navigation 
    function helpSlider() {
    $(".related-items__grid").slick({
      speed: 300,
      centerMode: true,
      dots: true,
      prevArrow: $(".prev"),
      nextArrow: $(".next"),
      mobileFirst: true,
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: "unslick",
        },
        {
          breakpoint: 850,
          settings: "unslick",
        }
      ],
    });
  }

  helpSlider();
       
 
       

 $(window).resize(function () {
    var $windowWidth = $(window).width();
   
  
   
            
     if ($windowWidth < 850) {
      helpSlider();
    }
  });
  


//  $(".single-option-selector-0").change(function(){
   
//         var productSlide = $( ".product-slide" ).attr( "data-alt" );
   
//         $(this).find("option:selected").each(function(){
//             var optionValue = $(this).attr("value");
//             if(optionValue){
//                 console.log(optionValue)
//             } else{
//                console.log("none")
//             }
//         });
   
   
//     }).change();



 $('#SingleOptionSelector-0').on('change', function(){
    	var demovalue = $(this).val(); 
   		console.log(demovalue);
   
         if(demovalue) {
          var pdpImage = $('.product-slide').hide().filter('[data-alt="' + demovalue + '"]');
               
          pdpImage.show();     
        } else {
            $('..product-slide').show();
        }         
    });



(function() {
   var selectVal = $("#SingleOptionSelector-0").val();

    if(selectVal) {
      var slideImg = $('.product-slide').hide().filter('[data-alt="' + selectVal + '"]');

      slideImg.show();  

    } else {
        $('.product-slide').show();
    }
  
})();



// $('#CartContainer').children(".ajaxcart__product").wrapAll( "<div class='new2' />");