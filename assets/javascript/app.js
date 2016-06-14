var correctFlags = 0;
var wrongFlags = 0;
var stopTime;


function clock()
{
	$('#start').on('click', stopwatch.start);
};

var stopwatch = 
{
	time:0,

    start: function()
    {
        counter = setInterval(stopwatch.count, 1000);
    },

    stop: function()
    {
        clearInterval(counter);
    },
    
    count: function()
    {
        stopwatch.time++;
        var converted = stopwatch.timeConverter(stopwatch.time);
        $('#timer').html(converted);
    },

    timeConverter: function(t)
    {
        var minutes = Math.floor(t/60);
        var seconds = t - (minutes * 60);
        if (seconds < 10){
            seconds = "0" + seconds;
        }
        if (minutes === 0){
            minutes = "00";
        } else if (minutes < 10){
            minutes = "0" + minutes;
        }
        return minutes + ":" + seconds;
    }
};

	clock();

	correctFlags = 0;
	wrongFlags = 0;

$('#question1, #question2, #question3, #question4, #question5, #question6, #question7, #question8, #question9, #question10').hide();

$('#start').on('click', function(){
        	$('#start').hide();
        	$('h3').hide();
            $('#question1, #question2, #question3, #question4, #question5, #question6, #question7, #question8, #question9, #question10').show();

        	//$('#question1').show();
        })


	$('.rightAnswer1').on('click', function(){
        correctFlags++;
        $('.wrongAnswer1').one('click', function(){
            $('.wrongAnswer1').hide();
            wrongFlags++;
            $('.rightAnswer1').off('click');          
        })
	})

    $('.rightAnswer2').one('click', function(){
        correctFlags++;
    })

    $('.rightAnswer3').one('click', function(){
        correctFlags++;
    })

    $('.rightAnswer4').one('click', function(){
        correctFlags++;
    })

    $('.rightAnswer5').one('click', function(){
        correctFlags++;
    })

    $('.rightAnswer6').one('click', function(){
        correctFlags++;
    })

    $('.rightAnswer7').one('click', function(){
        correctFlags++;
    })

    $('.rightAnswer8').one('click', function(){
        correctFlags++;
    })

    $('.rightAnswer9').one('click', function(){
        correctFlags++;
    })

    $('.rightAnswer10').one('click', function(){
        correctFlags++;
    })

		

  

    

console.log(correctFlags);
console.log(wrongFlags);











  /*$('.rightAnswer2').one('click', function()
    {
        $('.wrongAnswer2').hide();
        correctFlags++;
        console.log(correctFlags + " corret flags");
        console.log(wrongFlags + " wrong flags");
        alert('You got that right!');
    })*/
    
/*
    The two key methods to use with JavaScript are:

setTimeout(function, milliseconds)
Executes a function, after waiting a specified number of milliseconds.
setInterval(function, milliseconds)
Same as setTimeout(), but repeats the execution of the function continuously.

How to Stop the Execution?
The clearTimeout() method stops the execution of the function specified in setTimeout().

window.clearTimeout(timeoutVariable)
The window.clearTimeout() method can be written without the window prefix.

The clearTimeout() method uses the variable returned from setTimeout():

myVar = setTimeout(function, milliseconds);
clearTimeout(myVar);
If the function has not already been executed, you can stop the execution by calling the clearTimeout() method:
*/