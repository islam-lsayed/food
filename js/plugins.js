$(document).ready(function(){
  /* starting on navbar remove active from siblings*/
  $("#navbar-holder .navbar .collapse a ").on("click",function(){
    $(this).addClass('active').parent().siblings().find('a').removeClass('active');
    
  })

  /* starting to scroll to selected section */
  $('#navbar-holder li a').click(function(e){
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $("#"+ $(this).data('scroll')).offset().top - 70
    },1800)
    
  });

  /* sync navbar with section */
  $(window).scroll(function(){
    $('.block').each(function(){
      if($(window).scrollTop() > $(this).offset().top - 90){
        
        var blockID = $(this).attr('id');

        $('#navbar-holder .navbar .collapse a').parent().siblings().find('a').removeClass('active');

        $('#navbar-holder li a[data-scroll="' + blockID + '"]').addClass('active');
      }
    })
  })


  /* autoplay events plugin */
  $( ".responsive" ).each(function() {
    //events
    $(this).slick({
      dots: false,
      infinite: false,
      speed: 250,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay:true,
      

      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            autoplay:true,
            slidesToScroll: 1,
            infinite: true,
            dots:false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            autoplay:true,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 578,
          settings: {
            slidesToShow: 1,
            autoplay:true,
            slidesToScroll: 1,
            dots:true
          }
        },
      {
        breakpoint: 340,
          settings: {
            slidesToShow: 1,
            autoplay:true,
            slidesToScroll: 1,
            dots:false
          }
        }
       
      ]
    });
  
    //blogs
    $('.newblog').slick({
      dots: false,
      infinite: false,
      speed: 250,
      slidesToShow: 2,
      autoplay:true,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            autoplay:true,
            dots:false
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            autoplay:true,
            slidesToScroll: 1,
            autoplay:true,

          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            autoplay:true,
            slidesToScroll: 1,
            autoplay:true,

          }
        }
       
      ]
    });
        
  
   
    });

    /* loading */
  $(function(){
      $('img').imgPreload()
  })

     

  /* date picker input type */
  // $( "#datepicker" ).datepicker();

  // $('#timepicker').timepicker();


  


});

$(window).load(function() {
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");;
});

