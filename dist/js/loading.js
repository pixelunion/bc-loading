import $ from 'jquery';
import 'jquery-trend';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var LoadingUtils = function () {
  function LoadingUtils(options, scrollLock, el) {
    classCallCheck(this, LoadingUtils);

    this.scrollLock = scrollLock;
    this.$body = $(document.body);
    this.$el = el ? $(el) : this.$body;

    this.options = $.extend({
      loadingMarkup: '<div class="loading"><span class="loading-spinner"></span></div>',
      visibleClass: 'visible',
      scrollLockClass: 'scroll-locked'
    }, options);

    this.$loading = $(this.options.loadingMarkup);
  }

  createClass(LoadingUtils, [{
    key: 'show',
    value: function show() {
      var _this = this;

      if (this.scrollLock) {
        this.$body.addClass(this.options.scrollLockClass);
      }

      var elementPositioning = this.$el.css('position');

      if (elementPositioning !== 'relative' && elementPositioning !== 'absolute') {
        this.$el.css('position', 'relative');
      }

      this.$el.prepend(this.$loading);

      setTimeout(function () {
        _this.$loading.addClass(_this.options.visibleClass);
      }, 10);
    }
  }, {
    key: 'hide',
    value: function hide() {
      var _this2 = this;

      if (this.scrollLock) {
        this.$body.removeClass(this.options.scrollLockClass);
      }

      this.$loading.removeClass(this.options.visibleClass).one('trend', function () {
        _this2.$loading.remove();
      });
    }
  }]);
  return LoadingUtils;
}();

export default LoadingUtils;