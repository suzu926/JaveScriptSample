// buttonSet1
$( function() {

  $( '#buttonHeader' ).click( function() {
    $( 'h1' ).text( 'こんにちは、杉本です。' );
  });

  $( '#buttonArticle' ).click( function() {
    $( 'article' ).css({
      'color': 'white',
      'background-color': 'green'
    });
  });

  $( '#buttonFooter' ).click( function() {
    $( 'footer' ).html('<p><a href="https://www.kyusan-u.ac.jp">Kyushu zoukei University</a></p>' );
    $( 'footer a' ).css( 'color','red' );
  });

});

// buttonSet2
$( function() {

  $( '#buttonNormal' ).click( function() {
    $('main').css( 'flex-direction','row' );
  });

  $( '#buttonReverse' ).click( function() {
    $('main').css( 'flex-direction','row-reverse' );
  });

  $( '#buttonVertical' ).click( function() {
    $('main').css( 'flex-direction','column' );
  });
 
  $( '#buttonAside' ).click( function() {
    $('main').css( 'flex-direction','column-reverse' );
  });


});

// buttonSet3
$( function() {

  $( '#mene1' ).click( function() {
    $('.mene1').text( 'ホーム' );
  });

  $( '#mene2' ).click( function() {
    $('.mene2').text( '概要' );
  });

  $( '#mene3' ).click( function() {
    $('.mene3').text( '作品' );
  });
 
  $( '#mene4' ).click( function() {
    $('.mene4').text( 'リンク' );
  });


 

});

