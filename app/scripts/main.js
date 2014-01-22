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
$('.submit').focused(function (){
	console.log('focused on an input');

	$('input').each(function(){
		if($(this).val() == '') {
			$('.submit').addClass('its-off');
		}
	});
});
