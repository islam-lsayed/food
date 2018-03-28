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
      if($(window).scrollTop() > $(this).offset().top){
        
        var blockID = $(this).attr('id');

        $('#navbar-holder a').removeClass('active')

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
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay:true,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            autoplay:true,
            slidesToScroll: 1,
            infinite: true,
            dots:false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            autoplay:true,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            autoplay:true,
            slidesToScroll: 1,
            dots:true
          }
        }
       
      ]
    });
  
    //blogs
    $('.newblog').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 2,
      autoplay:true,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            autoplay:true,
            dots:false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            autoplay:true,
            slidesToScroll: 1,
            autoplay:true,

          }
        },
        {
          breakpoint: 480,
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

     

  /* date picker input type */
  // $( "#datepicker" ).datepicker();

  // $('#timepicker').timepicker();


  


});

