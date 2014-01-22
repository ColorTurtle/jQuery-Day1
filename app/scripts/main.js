$('.activate-box').click(function(){
	console.log('the button was clicked');

	$('.box').addClass('active');
});

$('.submit').click(function (){
	console.log('focused on an input');

	$('input').each(function(){
		if($(this).val() == '') {
			$(this).addClass('error');
		}
	});
});

// Try 1
$('.try1').click(function(){
	console.log('You can do this!');

	$(this).addClass('active');

});

// Try 2
$('.try2').hover(function(){
	console.log('You can do this!');

	$(this).addClass('active');

});

// Try 3
$('.try3').click(function(){
	console.log('You can do this!');

	$(this).addClass('expand');

});

// Try 4
$('.submit').click(function (){
	console.log('focused on an input');

	$('input').each(function(){
		if($(this).val() == '') {
			$('.rumbler').addClass('its-on');
		}
	});
});

// Try 5
$('.center-btn').click(function() {
  $('.try5').siblings('.shade').toggle( "slow", function() {
    // Animation complete.
  });
});

// Try 6
$('.right').click(function() {
  $('.try6').siblings('.shade').animate({
  	opacity: 1,
  	right: "-=50",
  	width: "toggle"
  }, 5000, function(){
    // Animation complete.
  });
});

// Try 7
$('.try7').siblings('.left').click(function() {
  $('.try7').siblings('.shade').animate({
  	opacity: 1,
  	top: "-=50",
  	height: "toggle"
  }, 5000, function(){
    // Animation complete.
  });
});

// Try 8 
$('.try8').siblings('.shade').hover(function(){
	console.log('You can do this!');

	$('.try8').addClass('active');

});

// Try 9
$('.try9').click(function(){
	$(this).fadeOut(500);
});

// Try10
$('.row4 img').click(function(){
	$('.try10').toggle( "slow", function() {
    // Animation complete.
  });
});

// Try 11
$('.row4 img').click(function(){
	$('.try11').css('border', '5px solid blue')
});


// Try 12
$('.row4 img').click(function(){
	$('.try12 h6').css('color', 'blue')
});

// Try 13
$('.try13').hover(
  function() {
    $(this).append( $( "<span> for it (13)</span>" ) );
  }, function() {
    $(this).find( "span:last" ).remove();
  }
);

// Try 14
$('.try14').hover(function() {
  $('.fade-this').fadeOut(100);
  $('.fade-this').fadeIn(500);
  $('.fade-this').fadeOut(100);
  $('.fade-this').fadeIn(500);
  $('.fade-this').fadeOut(100);
  $('.fade-this').fadeIn(500);
});

// Try15 
$('.try15').dblclick(function() {
  $(this).toggleClass('dbl');
});

// Try16
$('.try16').dblclick(function() {
  $('.container').toggleClass('neon');
});

// Try17
$('.box-by-dan.try17').click(function() {
  $('.box-by-dan').toggleClass('light-it-up');
});

// Try18
$('.box-by-dan.try18').hover(function() {
  $('.container').toggleClass('blackout');
});

// Try19
$('.box-by-dan.try19').hover(function() {
  $('.box-by-dan').not(this).toggleClass('light-it-up');
});

// Try20
$('.try20').click(function() {
  $('.box-by-dan').each(function() {
    $( this ).toggleClass('fire-words');
  });
});

// Try21 - from http://api.jquery.com/each/
$('.try21').click(function() {
  $('.box-by-dan').each(function( index, element ) {
    // element == this
    $(element).toggleClass('light-it-up');
    if ( $( this ).is( '.try21' ) ) {
      return false;
    }
  });
});



// example
$( "li.fade" ).hover(function() {
  $( this ).fadeOut( 100 );
  $( this ).fadeIn( 500 );
});

// example from class today - using .not(this)
$('.box').click(function(){
	$('.box').not(this).addClass('.not-the-one-that-was-clicked')
});

// example from class today - fadeOut - there is also a fadeIn
$('.box').click(function(){
	$(this).fadeOut(500);
});

// example from class - using parent to select a border
$('.box').click(function(){
	$(this).parent().css('border', '1px solid blue')
});

// example from class - Using object syntax to select the border
$('.box').click(function(){
	$(this).parent().css({borderLeft: '1px solid blue'})
});

// example from class - Using object syntax to select an item w/multiple classes
$('.box.first').click(function(){
	$(this).parent().css({borderLeft: '1px solid blue'})
});

// example from class - Using object syntax to select an element within a class
$('.box a').click(function(){
	$(this).parent().css({borderLeft: '1px solid blue'})
});

