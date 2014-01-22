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
$('.left').click(function() {
  $('.try7').siblings('.shade').animate({
  	opacity: 1,
  	top: "-=50",
  	height: "toggle"
  }, 5000, function(){
    // Animation complete.
  });
});

// Try 8 

