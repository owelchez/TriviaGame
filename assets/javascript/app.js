const totalQuestions = 20;
var minutes = 0;
var seconds = 0;
var stopTime = 0;
var renderedFlags = [];
var countryName = '';
var currentQuestion = 1;
var currentAnswer = '';
const maxFlags = 4;

/*******************************************************/
                 /*User inputs' variables*/
/*******************************************************/

var correctAnswers = 0;
var wrongAnswers = 0;
var userChoices = [];
var randomChoices = [];

/*******************************************************/

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

startGame();

function startGame(){
    clock();
};       

function hidePanel(){
    $('#questionContainer').hide();
};

function showCorrectFlagInPanel(callback){
// Render correct flag here
    $('#questionTitle').empty();    
    $('#flagContainer').empty();
    $('#questionBody').empty();

    $('#questionTitle').append('<h3>The correct flag is ' + countryName + '</h3>');
    $('#flagContainer').append('<img src="assets/images/' + countryName + '.png"/>');

    callback();
};

function flagPause(){
      var timeoutID = window.setTimeout(getRandomFlags, 3000);
};

function showPanel(){
    $('#questionContainer').show();
};

function emptyValues(){
    countryName = '';
    renderedFlags = [];

        $('#flagContainer').empty();
        $('#questionTitle').empty();
};

function getRandomFlags(){
    emptyValues();
    for(i = 0; i < maxFlags; i++){
        activeFlag = flags[Math.floor(Math.random() * (1 + flags.length - 1))];
        renderedFlags.push(activeFlag);
    }
        $('#flagContainer').empty();
        $('#questionTitle').empty();

        /*$('#questionTitle').append('<div><h4>Question # <span id="questionNumber">0</span></h4></div>');
        $('#questionTitle').append('<div><h4>Question # <span id="questionNumber">0</span></h4></div>');
        $('#questionBody').append('<h4>Which flag belongs to <span id="countryName"></span></h4>');*/
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
        $('#flagContainer').empty();
        $('#questionTitle').empty();



    for(i = 0; i < maxFlags; i++){
        $('#flagContainer').append('<img src="assets/images/' + renderedFlags[i] + '.png" id="' + renderedFlags[i] + '"/>');
    }
        getRandomCountryName();

        $('#questionTitle').append('<div><h4>Question # <span id="questionNumber">0</span></h4></div>');
        $('#questionBody').append('<h4>Which flag belongs to <span id="countryName"></span></h4>');

        $('#countryName').html(countryName);
        $('#questionNumber').html(currentQuestion);
};

// Onclick event for flags
$('#flagContainer').click(function(e){
    currentAnswer = e.target.id;
    //console.log("You've clicked on " + e.target.id);
    console.log(currentAnswer);

    if(currentAnswer === countryName){
        correctAnswers++;
        userChoices.push(currentAnswer);
        console.log("Your choices so far are..." + userChoices);
        console.log("You are correct!!");
        console.log("Correct Answers " + correctAnswers);
        randomChoices.push(countryName);
        console.log("The computer generated choices are..." + countryName);
    } else {
        wrongAnswers++;
        console.log("You've fucked up!!");
        console.log("Wrong answers " + wrongAnswers);
        userChoices.push(currentAnswer);
        console.log("Your choices so far are..." + userChoices);
        randomChoices.push(countryName);
        console.log("The computer generated choices are..." + countryName);
    }

    currentQuestion++;

    // Here I will make the panel dissappear and generate only the correct flag for 2 seconds...or 3. (I will compensate with extra time lol)
    showCorrectFlagInPanel(function(){
        flagPause();

    });
});

function disableClicks(){
    $('#flagContainer').click(function(){
        $('#flagContainer').off();
    })
};

function enableClicks(){
    $('#flagContainer').click(function(){
        $('#flagContainer').on();
    })
};

    function clock(){
        hidePanel();
    	$('#start').on('click', function(){
            stopwatch.start();
            $('#start').hide();
            getRandomFlags();
            showPanel();
            disableClicks();
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