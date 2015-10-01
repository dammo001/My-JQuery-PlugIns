(function ($) {
  $.Tabs = function (el) {
    this.$el = $(el);
    this.$contentTabs = $(".content-tabs");
    this.$active = $(".tabs .active");
    this.$el.on('click', 'a', this.clickTab.bind(this));
  };

  $.Tabs.prototype.clickTab = function(e) {
    e.preventDefault();

    $(".content-tabs .transitioning").removeClass("transitioning");
    this.$active.removeClass("active");
    $(e.currentTarget).addClass("active");
    this.$active = $(e.currentTarget);

    var $activeContent = $('.content-tabs .active');
    $activeContent.removeClass("active");
    $activeContent.addClass("transitioning");
    var currentDog = e.currentTarget.text;
    var $newContent = $(".content-tabs #"+currentDog);
    $newContent.addClass("active");
  };

  $.fn.tabs = function () {
    return this.each(function () {
      new $.Tabs(this);
    });
  };
})(jQuery);
