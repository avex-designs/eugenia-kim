//define modal
var modal = $('[data-remodal-id=modal__quick-shop]').remodal();

//initialize quick shop slider
$(document).ready(function(){
  $('.quick-shop__slider').slick({
  	arrows: true,
  	prevArrow: "<button type='button' class='slick-prev pull-left quick-shop__arrow-left'></button>",
  	nextArrow: "<button type='button' class='slick-next pull-left quick-shop__arrow-right'></button>",
  	dots: true
  }); 

  //remove quick shop on mobile
  if ($(window).width() < 850) {
     $('.product-card__quick-view').removeAttr('data-remodal-target');
  }

  $(window).resize(function(){
      if ($(window).width() < 850) {
      	$('.product-card__quick-view').removeAttr('data-remodal-target');
      }
      else {
      	$('.product-card__quick-view').attr('data-remodal-target', 'modal__quick-shop');
      }
  });

});
 
$(function () {
	//loading styling
	$(document).ajaxStart(function () {
	    $('.remodal-wrapper').css('background-color', 'rgba(0,0,0,0.4)');
	    $('.remodal').css('visibility', 'hidden');
	});

	//remove loading styling
	$(document).ajaxStop(function () {
		if($(".slick-dots li").length <= 1 ){
		  $(".slick-dots").hide();
		}
	    $('.remodal-wrapper').css('background-color', 'transparent');
	    $('.remodal').css('visibility', 'visible');
	});


	//open quick view modal
	$('.product-card__quick-view').click(function(){

		//inject product data into modal
		$.getJSON('/products/' + $(this).attr("data-handle") + '.js', function(product) {
		  $('.quick-shop__title').html(product.title);
		  //show compare at price
		  if(product.compare_at_price > 0){
		  	$('.quick-shop__compare-at-price').html(theme.Currency.formatMoney(product.compare_at_price, theme.moneyFormat));
		  }
		  else {
		  	$('.quick-shop__compare-at-price').html('');
		  }
		  //if item is sold out, disable add to cart button
		  if(product.available != true){
		  	$('.quick-shop__add').attr('disabled', 'disabled');
		  	$('.quick-shop__add span').html('Sold out');
		  	$('.quantity-selector').hide();
		  }
		  else {
		  	$('.quantity-selector').show();
		  	$('.quick-shop__add').removeAttr('disabled');
		  	$('.quick-shop__add span').html('Add To Cart');
		  }

		  $('.quick-shop__price').html(theme.Currency.formatMoney(product.price, theme.moneyFormat));
		  $('.quick-shop__description').html(product.description);
		  $('.quick-shop__link').attr('href', product.url);
		  $('.quick-shop__id').val(product.variants[0].id);
		  $('.quick-shop__slide').remove();
		  var imageResized;
		  //add image slides
		  for(var i=0; i < product.images.length; i++){
		  	imageResized = product.images[i].split('.jpg');
		  	$('.quick-shop__slider').slick('slickAdd','<div class="quick-shop__slide"><img src="'+ imageResized[0] + '_large.jpg' + imageResized[1] + '"></div>');
		  }
		});

	});

	//close quick shop modal
	$('.quick-shop__add, .quick-shop__link').click(function(){
		modal.close();
	});

});