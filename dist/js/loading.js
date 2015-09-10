import $ from 'jquery';
import trend from 'jquery-trend';

export default class LoadingUtils {
  constructor(options, scrollLock, el) {
    this.options = options;
    this.scrollLock = scrollLock;
    this.$body = $(document.body);
    this.$el = el ? $(el) : this.$body;
  }

  show() {
    if (this.scrollLock) {
      this.$body.addClass(this.options.scrollLockClass);
    }

    const elementPositioning = this.$el.css('position');

    if (elementPositioning !== 'relative' && elementPositioning !== 'absolute') {
      this.$el.css('position', 'relative')
    }

    this.$el.prepend(this.options.loadingMarkup);

    const $loading = this.$el.children(this.options.loadingSelector);

    setTimeout(() => {
      $loading.addClass(this.options.visibleClass);
    }, 10);
  }

  hide() {
    if (this.scrollLock) {
      this.$body.removeClass(this.options.scrollLockClass);
    }

    const $loading = this.$el.children(this.options.loadingSelector);

    $loading.removeClass(this.options.visibleClass).one('trend', () => {
      $loading.remove();
    });
  }
}
