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
    var currentQuestion = 1;

$('#question1, #question2, #question3, #question4, #question5, #question6, #question7, #question8, #question9, #question10').hide();

$('#start').on('click', function(){
        	$('#start').hide();
        	$('h3').hide();
            $('#question1').show();
        })


	$('.rightAnswer1').on('click', function(){
        correctFlags++;
        $('.wrongAnswer' + currentQuestion).hide();
        currentQuestion++;
        $('#question' + currentQuestion).show();
        $('.wrongAnswer' + currentQuestion).one('click', function(){
            currentQuestion++;
            $('.wrongAnswer' + currentQuestion).hide();
            wrongFlags++;
            $('.rightAnswer' + currentQuestion).off('click');          
        })
	})



  

    

console.log(correctFlags);
console.log(wrongFlags);

