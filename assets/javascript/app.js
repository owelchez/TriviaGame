var totalQuestions = 20;
var minutes = 0;
var seconds = 0;
var stopTime = 0;
var $questions = 0;
var renderedFlags = [];
var countryName = '';
var currentQuestion = 1;
const maxFlags = 4;
var questionContainer = $('#questionContainer');

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

function startGame(){
    questionContainer = $('#questionContainer');
    questionContainer.hide();
};

function getRandomFlags(){
    for(i = 0; i < maxFlags; i++){
        activeFlag = flags[Math.floor(Math.random() * (1 + flags.length - 1))];
        renderedFlags.push(activeFlag);
    }
        $('#flagContainer').empty();
        $('#countryName').empty();
    console.log(renderedFlags);
    getRandomCountryName();
    renderFlagsArray();
    findDuplicates();
};

function findDuplicates(){
    var sortedFlags = renderedFlags.slice().sort();
        for (var i = 0; i < renderedFlags.length - 1; i++){
            if (sortedFlags[i + 1] === sortedFlags[i]){
                console.log('We have a duplicate! Randomizing again!');
                renderedFlags = [];
                countryName = '';
                getRandomFlags();
            }
        }
};


function getRandomCountryName(){
    countryName = renderedFlags[Math.floor(Math.random() * (1 + renderedFlags.length - 1))];
};

function renderFlagsArray(){
    for(i = 0; i < maxFlags; i++){
        $('#flagContainer').append("<img src='assets/images/" + renderedFlags[i] + ".png' id='banderas' value=" + renderedFlags[i] + "/>");
    }
    console.log(countryName);
    $('#countryName').html(countryName);
};

// onclick event for flags
$('#flagContainer').on('click', function(e){
    console.log(e);
});

    function clock(){
    	$('#start').on('click', function(){
            stopwatch.start();
            $('#start').hide();
            getRandomFlags();
            questionContainer.show();
        });
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
    startGame();
