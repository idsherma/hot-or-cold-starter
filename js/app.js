$(document).ready(function(){
	var count = 0;
	
	/*---Random Number creation method ---*/
	var randomNum = Math.floor(Math.random() * 100) + 1;
	$('#guessButton').click(function(){
		var userChoice = parseInt( $('#userGuess').val() );
		count++;
		$('#count').text(count);	

		/*--- Number Guessing (Too low, Too high, etc.) ---*/
		var guessNumber = function (i) {
			if (i < randomNum) {
				setFeedback('Too Low! Go Higher!'); 
			}
			else if (i > randomNum) {
				setFeedback('Too high! Go Lower!'); 
			}
			else if (i == randomNum) {
				setFeedback('Congrats! You win!');
			}
			else {
				setFeedback(i);
			}
		}
		guessNumber(userChoice);

		function setFeedback(feedback) {
			$('#feedback').text(feedback);
		}

		/*--- Log the numbers user guessed ---*/
		$(function() {		
		$('ul#guessList').append("<li>" + userGuess.value + "<li>");
		})

		/*--- Display information modal box ---*/
	  	$(".what").click(function(){
	    	$(".overlay").fadeIn(1000);
	  	});

	  	/*--- Hide information modal box ---*/
	  	$("a.close").click(function(){
	  		$(".overlay").fadeOut(1000);
	  	});	  		
	});	 
});	

