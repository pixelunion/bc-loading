# BigCommerce Loading Overlay Module

Scope an overlay to a specific area, or cover the whole page (for use while waiting on API response).

### Installation

```
jspm install --save bc-loading=bitbucket:pixelunion/bc-loading
```


### Usage

```
import $ from 'jquery';
import Loading from 'bc-loading';

const loadingOptions = {
  loadingSelector: '.loading',
  loadingMarkup: '<div class="loading"><span class="loading-spinner"></span></div>',
  visibleClass: 'visible',
  scrollLockClass: 'scroll-locked',
};

const cartTotalsOverlay = new Loading(loadingOptions, false, '[data-cart-totals]');

const shippingCalculator = new ShippingCalculator({
  willUpdate: () => cartTotalsOverlay.show(),
  didUpdate: () => cartTotalsOverlay.hide(),
});
```


### Options

Instantiate with:
`new Loading(options, scrollLock, scope);`

**loadingSelector:** Top-level selector of your loadingMarkup

**loadingMarkup:** Simple markup comprsing your loading overlay.

**visibleClass:** Class to be applied to show overlay (e.g, `'visible'`).

**scrollLockClass** Class to be applied to stop the body from scrolling (e.g, `'scroll-locked'`).

**scrollLock** Pass a boolean value into each instance of the loading overlay to dictate whether or not the scroll lock should be used.

**scope** Pass an element selector into each instance of the loading overlay to scope the overlay to a particular area (defaults to `'body'`).
