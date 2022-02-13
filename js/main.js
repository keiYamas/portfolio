$(function () {
  $('.main_visual__image').fadeIn(2600);

  $( '.page_top' ).click(
    function()
    {
      $( 'html,body' ).animate( {scrollTop:0} , 'slow' ) ;
    }
  ) ;
});
