(function() {
  $('.gallery-link').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: true,
      titleSrc: function(item) {
        return item.el.find('figcaption').text() || item.el.attr('title');
      }
    },
    zoom: {
      enabled: true
    },
    gallery: {
      enabled: true,
      navigateByImgClick: false,
      tCounter: ''
    },
    disableOn: function() {
      if ($(window).width() < 640) {
        return false;
      }
      return true;
    }
  });
}).call(this);

/*
(function() {
  $("a.link").click(function(){
      $("a.link").css("background-color", "transparent");
      $(this).css("background-color", "#fffb89");
      $(this).css("box-sizing", "border-box");
      $(this).css("border", "solid 1px #5e5936");
  });
}).call(this);*/