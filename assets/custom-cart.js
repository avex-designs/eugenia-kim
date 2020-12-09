function initGift(cart) {
  let giftWrap = false;
  const giftProductId = jQuery('[data-gift-id]').attr('data-gift-id');

  jQuery(cart.items).each(function() {
    if(this.variant_id == giftProductId) {
      giftWrap = true;
    }

    if(this.variant_id == giftProductId && cart.items.length == 1 ) {
      CartJS.clear();
    }
  });

  if(giftWrap === true) {
    jQuery('[data-gift-product]').prop('checked', true);
  } else {
    jQuery('[data-gift-product]').prop('checked', false);
  }
}

function initEditToggle() {
  const toggleButtons = jQuery('.js-editor-toggle');
  toggleButtons.off();

  toggleButtons.click(function() {
    const parent = jQuery(this).closest('.cart__row');
    parent.toggleClass('cart__update--show');
  });
}

function initCheckPrice() {
  const priceParents = jQuery('.js-item-price');

  priceParents.each(function() {
    const originalPrice = jQuery(this).find('[data-original_line_price]');
    const originalPriceValue = originalPrice.attr('data-original_line_price');
    const linePrice = jQuery(this).find('[data-line_price]').attr('data-line_price');

    if(originalPriceValue === linePrice) {
      originalPrice.addClass('display-custom');
    } else {
      originalPrice.removeClass('display-custom');
    }
  });
}

(function () {
  const cartCount = jQuery('[data-cart-count]');
  const cartFull = jQuery('[data-full-cart-content]');
  const cartEmpty = jQuery('[data-empty-cart-content]');

  jQuery(document).on('cart.ready', function(event, cart) {
    initGift(cart);
    initCheckPrice();
    initEditToggle();
  });

  jQuery(document).on('cart.requestStarted', function() {
    jQuery('[data-gift-product]').prop('disabled', true);
  });

  jQuery(document).on('cart.requestComplete', function(event, cart) {
    cartCount.html(cart.item_count);
    jQuery('[data-gift-product]').prop('disabled', false);

    if (cart.item_count === 0) {
      cartFull.addClass('display-custom');
      cartEmpty.removeClass('display-custom');
    } else {
      cartFull.removeClass('display-custom');
      cartEmpty.addClass('display-custom');
    }

    initCheckPrice();
    initGift(cart);
    initEditToggle();
  });
})();

(function () {
  const giftCheckbox = jQuery('[data-gift-product]');

  giftCheckbox.change(function() {
    jQuery('.cart__row').removeClass('cart__update--show');
  });
})();
