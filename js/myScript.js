(function($) {

	var	clickCount = 0,
		$itButton = $('.main button');

	console.log($itButton);

	$itButton.click(function(e) {
		clickCount++;		
		$itButton.html(clickCount + ' clicks');
	});


})(jQuery);