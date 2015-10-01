(function ($) {
  $.Carousel = function (el) {
    this.$el = $(el);
    this.activeIdx = 0;
    this.$active = $(".carousel .active");
    this.$el.on('click', '.slide-left', this.slideLeft.bind(this));
    this.$el.on('click', '.slide-right', this.slideRight.bind(this));

    // $("ul.items :first-child").addClass("active");

  };

  $.fn.carousel = function() {
    return this.each(function () {
    new $.Carousel(this);
  });
};

  $.Carousel.prototype.slideLeft = function(e) {
    e.preventDefault();
    this.$active.removeClass("active");
    this.activeIdx -= 1;
    var $current = $("img").eq(this.activeIdx);
    $current.addClass("active");
   //  $("#" + this.activeIdx.toString()).addClass("active");
    this.$active = $current;



  };

   $.Carousel.prototype.slideRight = function(e) {
     e.preventDefault();
     this.$active.removeClass("active");
     this.activeIdx += 1;
    //  debugger;
     var $current = $("img").eq(this.activeIdx);
     $current.addClass("active");
    //  $("#" + this.activeIdx.toString()).addClass("active");
    this.$active = $current;


   };









})(jQuery);
