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


jQuery(function() {
  
  var selectOptionImgId = $("#ProductSelect-product-customizable-template option:first").data('image-id');
  
  function checkVisibility(optionId) {
    jQuery('.product-slide img').each(function( index ) {
      var imgId = $(this).data('id');

      if(optionId == imgId) {
          $(this).addClass('image-visible');
      } else {
          $(this).removeClass('image-visible');
      }
    });
  }
  
  checkVisibility(selectOptionImgId)
  
  jQuery('.swatches-container .swatch :radio').change(function(e) {
    e.preventDefault();
    var optionIndex = jQuery(this).closest('.swatch').attr('data-option-index');
    var optionValue = jQuery(this).val();
    
    jQuery(this)
      .closest('form')
      .find('.single-option-selector')
      .eq(optionIndex)
      .val(optionValue)
      .trigger('change');
    
    var selectOptionIndex;
    var selectOptionValue;
    
    jQuery( "#ProductSelect-product-customizable-template option" ).each(function( index ) {
      var colorSelected = $(this).text().trim();
      if (optionValue == colorSelected) {
        selectOptionIndex = index;
        selectOptionValue = $(this).val();
        selectOptionImgId = $(this).data('image-id');
        checkVisibility(selectOptionImgId);
      }
    });
    
    
    jQuery(this)
      .closest('form')
      .find('#ProductSelect-product-customizable-template')
      .val(selectOptionValue)
  });
  
  jQuery('#custom-text').on('keyup', function(){
  	var newValueText = $(this).val();
    var newRadiusText = 400;
    
    if (newValueText.length > 12) {
    	newRadiusText = 360;
    }
    
    if (newValueText.length > 16) {
    	newRadiusText = 320;
      	$('.input-customizable-text').css('top', '55%');
    } else {
    	$('.input-customizable-text').css('top', '65%');
    }
    
    $(".custom-init").css("display", "none");
    
    $(".custom-after").css("display", "block");
    
    $('#customizable-text-on-image-two').text(newValueText);
    var circleType = new CircleType(document.getElementById('customizable-text-on-image-two'));
  	circleType.radius(newRadiusText).dir(-1);
  });
  
  
  
  jQuery('.swatch-element-get-color').on('click tap', function(){
  	var newValueColor = $(this).data('hex');
    if(newValueColor === '#' || newValueColor == undefined) {
    	newValueColor = '#000000';
    }
    $('#customizable-text-on-image').css('color', newValueColor);
  });
  
  
  
  var circleType = new CircleType(document.getElementById('customizable-text-on-image'));
  circleType.radius(400).dir(-1);
  $(circleType.element).fitText(0.85, { minFontSize: '40px', maxFontSize: '140px' });
  
});
  