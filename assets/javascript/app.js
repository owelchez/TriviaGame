var correctFlags = 0;
var wrongFlags = 0;
var totalFlags = 20;
var minutes = 0;
var seconds = 0;
var stopTime = 0;
var $questions = 0;
var activeFlag = '';

var flags = [  "flagHonduras", "flagJapan", "flagJamaica",
                "flagUSA", "flagPanama", "flagGermany",
                "flagArgentina", "flagAustria", "flagBarbados",
                "flagBelgium", "flagBelize", "flagBolivia",
                "flagBrazil", "flagBulgaria", "flagCanada",
                "flagChile", "flagChina", "flagColombia",
                "flagCuba", "flagDominicanRepublic", "flagEcuador",
                "flagEgypt", "flagElSalvador", "flagEstonia",
                "flagFrance", "flagGreece", "flagGuatemala",
                "flagIndia", "flagIreland", "flagIsrael",
                "flagItaly", "flagJamaica", "flagKenya",
                "flagLaos", "flagMadagascar", "flagMexico",
                "flagMongolia", "flagNetherlands", "flagNicaragua",
                "flagPanama", "flagPeru", "flagPhilippines",
                "flagPoland", "flagPortugal", "flagSaudiArabia",
                "flagSlovakia", "flagSouthAfrica", "flagSouthKorea",
                "flagSpain", "flagSweden", "flagSwitzerland",
                "flagThailand", "flagTurkey", "flagUruguay",
                "flagUSA"
            ];

function getRandomFlag(){
    activeFlag = flags[Math.floor(Math.random() * (1 + flags.length - 1))];
}

getRandomFlag();
console.log(activeFlag);
$('#flagContainer').append('<img src="assets/images/' + activeFlag + '.png"/>');

    function clock(){
    	$('#start').on('click', stopwatch.start);
    };

    var stopwatch = {
    	time:0,

        start: function(){
            counter = setInterval(stopwatch.count, 1000);
        },

        stop: function(){
            clearInterval(counter);
        },
        
        count: function(){
            stopwatch.time++;
            var converted = stopwatch.timeConverter(stopwatch.time);
            $('#timer').html(converted);
        },

        timeConverter: function(t){
            minutes = Math.floor(t/60);
            seconds = t - (minutes * 60);
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

$('#questions').hide();

$('#start').on('click', function(){
        	$('#start').hide();
        	$('#intro').hide();
            $('#questions').show();
        })






  

    

console.log(correctFlags);
console.log(wrongFlags);