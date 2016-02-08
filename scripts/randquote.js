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

    function randomQuote() {
      var beginningWords = [
      'The', 'a'
      ];
      var beginningWord = beginningWords[Math.floor(Math.random() * beginningWords.length)];

      var connectingWords = [
      'was', 'could', 'so', 'nigga be', 'then'
      ];
      var connectedWord = connectingWords[Math.floor(Math.random() * connectingWords.length)];

      var nouns = [
      'house','car','bowl','cup','paper','mouse','camel','coffee pot','leaf','goldfish','straw',
      'laptop', 'life journey', 'adventure', 'cupholder', 'tree', 'plant', 'elephant', 'sheep',
      'mushroom', 'carrot', 'potato', 'aqaurium', 'shark', 'fish', 'tuna', 'table', 'chair'
      ];
      var noun = nouns[Math.floor(Math.random() * nouns.length)];

      var begAdjectives = [
      'mystical', 'radical', 'suplendous', 'splendid', 'terrific', 'groovy'
      ];
      var begAdjective = begAdjectives[Math.floor(Math.random() * begAdjectives.length)];

      var verbs = [
      'hardcore sprinted', 'slippin and ate shit. ', 'legendary galloped like a terrific G.', 'hopped and popped,',
      'ride real eazy like. ', 'lacking smacking, ripping and dippin.'
      ];
      var verb = verbs[Math.floor(Math.random() * verbs.length)];

      var endAdjectives = [
      'radical crazy stuff. yeah.', '- crazy', '- sick nasty.',' rad.', 'magically', 'mystically', 'crazy yo.'
      ];
      var endAdjective = endAdjectives[Math.floor(Math.random() * endAdjectives.length)];

      var sentence = ' ' + beginningWord + ' ' + begAdjective + ' ' + noun + ' ' + connectedWord + ' ' + verb + ' ' + endAdjective + '.  ';

      return sentence;
    }

    // JQuery to reassign the values from above to the correct css properties
    $(this).css('background-color',getRandomColor());
    $('#getQuoteTxt').css('color', getQuoteTxtColor());
    $('#getQuoteBtn:hover').css('box-shadow: 0px 0px ', getRandomColor());
    $('#getQuoteBtn:active').css('box-shadow: 0px 0px ', getRandomColor());
    // Put quote in screen display div for output
    $('.screenQuote').append(randomQuote());
});
