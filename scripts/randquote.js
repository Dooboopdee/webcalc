// RANDOM QUOTE c JOHN GARRISON
$('#getQuoteBtn').click(function() {
	// Get random color for background-color of button
	function getRandomColor() {
    	var letters = '0123456789ABCDEF'.split('');
    	var color = '#';
    	for (var i = 0; i < 6; i++ ) {
        	color += letters[Math.floor(Math.random() * 16)];
   		}

    	return color;
    }
    // Get random color that doesn't match bg color of btn
    function getQuoteTxtColor() {
    	var backGColor = getRandomColor();

    	var letters = '0123456789ABCDEF'.split('');
    	var color = '#';
    	for (var i = 0; i < 6; i++ ) {
        	color += letters[Math.floor(Math.random() * 16)];
   		}

   		if (backGColor == color) {
   			getQuoteTxtColor();
   		} else {
   			return color;
   		}
    }
    // Get random quote from API
    var quote = 'This is still under construction yo ;)';

    // JQuery to reassign the values from above to the correct css properties
    $(this).css('background-color',getRandomColor());
    $('#getQuoteTxt').css('color', getQuoteTxtColor());
    $('#getQuoteBtn:hover').css('box-shadow: 0px 0px ', getRandomColor());
    $('#getQuoteBtn:active').css('box-shadow: 0px 0px ', getRandomColor());
    // Put quote in screen display div for output
    $('.screenQuote').append(quote);
});
