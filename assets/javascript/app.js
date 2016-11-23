var correctFlags = 0;
var wrongFlags = 0;
var totalFlags = 20;
var minutes = 0;
var seconds = 0;
var stopTime = 0;
var $questions = 0;
var activeFlag = '';
var renderedFlags = [];
var countryName = '';
var currentQuestion = 1;

var flags = [  "Honduras", "Japan", "Jamaica",
                "USA", "Panama", "Germany",
                "Argentina", "Austria", "Barbados",
                "Belgium", "Belize", "Bolivia",
                "Brazil", "Bulgaria", "Canada",
                "Chile", "China", "Colombia",
                "Cuba", "Dominican Republic", "Ecuador",
                "Egypt", "El Salvador", "Estonia",
                "France", "Greece", "Guatemala",
                "India", "Ireland", "Israel",
                "Italy", "Jamaica", "Kenya",
                "Laos", "Madagascar", "Mexico",
                "Mongolia", "Netherlands", "Nicaragua",
                "Panama", "Peru", "Philippines",
                "Poland", "Portugal", "Saudi Arabia",
                "Slovakia", "South Africa", "South Korea",
                "Spain", "Sweden", "Switzerland",
                "Thailand", "Turkey", "Uruguay",
                "USA"
            ];

function getRandomFlag(){
    activeFlag = flags[Math.floor(Math.random() * (1 + flags.length - 1))];
};

function getRandomCountryName(){
    countryName = renderedFlags[Math.floor(Math.random() * (1 + renderedFlags.length - 1))];
};

function flagsArray(){
    for(i = 0; i < 4; i++){
        getRandomFlag()
        renderedFlags.push(activeFlag);
    }
        getRandomCountryName();
        console.log(countryName);
};

function renderFlagsArray(renderedFlags){
    for(i = 0; i < 4; i++){
        $('#flagContainer').append("<img src='assets/images/" + renderedFlags[i] + ".png' value=" + renderedFlags[i] + "/>");
    }
    $('#countryName').after(countryName);
};

function selectRandomCountry(){

};

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
    flagsArray(); 
    renderFlagsArray(renderedFlags);