const totalQuestions = 10;
var minutes = 0;
var seconds = 0;
var stopTime = 0;
var renderedFlags = [];
var countryName = '';
var currentQuestion = 1;
var currentAnswer = '';
var finalSet = [];
var newQuestionsSet = [];
var duplicatedValue = false;

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
                "Italy", "Kenya", "Uruguay",
                "Laos", "Madagascar", "Mexico",
                "Mongolia", "Netherlands", "Nicaragua",
                "Peru", "Philippines",
                "Poland", "Portugal", "Saudi Arabia",
                "Slovakia", "South Africa", "South Korea",
                "Spain", "Sweden", "Switzerland",
                "Thailand", "Turkey"
            ];

var panelContainer = $('<div class="panel panel-default">' + 
        '<div class="panel-heading"><div id="panelText"><div id="questionTitle">' + 
        '<h4>Question # <span id="questionNumber">0</span></h4>' + 
        '<h4>Which flag belongs to <span id="countryName"></span></h4></div><div id="questionBody">' + 
        '</div></div></div><div class="panel-body"><div id="flagContainer"></div></div></div>');

var panelAnswer = $('<div class="panel panel-default">' + 
        '<div class="panel-heading"><div id="panelText"><div id="answerTitle">' + 
        '<h4></h4><h4></h4></div><div id="answerBody">' + 
        '</div></div></div><div class="panel-body"><div id="answerContainer"></div></div></div>');

startGame();

// This function is working perfectly
function getFlagSet(){
    const maxFlags = 4;
    newQuestionsSet = [];
        for(i = 0; i < maxFlags; i++){
            activeFlag = flags[Math.floor(Math.random() * (1 + flags.length - 1))];
            newQuestionsSet.push(activeFlag);
            //console.log('This is newQuestionsSet ' + newQuestionsSet);
        }
}

function stopDuplicateFlag(array){
    var sortedArray = array.slice().sort();
    //console.log(sortedArray);
            if(sortedArray[1].length === sortedArray[0].length || 
                sortedArray[2].length === sortedArray[1].length || 
                sortedArray[3].length === sortedArray[2].length){
                return true;
            }
}

function loadQuestions(){
    for(groups = 0; groups < totalQuestions; groups++){
        duplicatedValue = false;
        // if not undefined or duplicated, push to array
        getFlagSet();
        duplicatedValue = stopDuplicateFlag(newQuestionsSet);
        //console.log(duplicatedValue);
        while(duplicatedValue === true){
            newQuestionsSet = [];
            getFlagSet();
            duplicatedValue = stopDuplicateFlag(newQuestionsSet);
        }

        finalSet.push(newQuestionsSet);

    } // Parent loop ends here
}

function startGame(){
    loadQuestions();
    renderFlagsArray();
    // clock() should be at the end, once all the logic is loaded.
    clock();
} 

function showCorrectFlagInPanel(){
// Render correct flag here
    hideQuestionContainer();
    showPanelAnswer();
    $('#panelAnswer').html(panelAnswer);
    $('#answerTitle').html('<h3>The correct flag is ' + countryName + '</h3>');
    $('#answerContainer').html('<img src="assets/images/' + countryName + '.png"/>');

    flagPause();
}

function flagPause(){
        var timeoutID = window.setTimeout(renderFlagsArray, 3000);
}

function showPanelAnswer(){
    $('#panelAnswer').show();
}

function hidePanelAnswer(){
    $('#panelAnswer').hide();
}

function showQuestionContainer(){
    $('#questionContainer').show();
}

function hideQuestionContainer(){
    $('#questionContainer').hide();
}

function emptyContainers(){
    $('#flagContainer').empty();
    $('#questionTitle').empty();
    $('#questionBody').empty();
}

function getRandomCountryName(){
    countryName = finalSet[currentQuestion-1][Math.floor(Math.random() * (1 + finalSet[currentQuestion-1].length - 1))];
    return countryName;
}

function getQuestion(){
    $('#questionTitle', '<h4>').show();
    $('#questionNumber').html(currentQuestion);
    $('#countryName').html(getRandomCountryName());
    newFlagArray = finalSet[currentQuestion-1];
    console.log(newFlagArray);
    for(i = 0; i < newFlagArray.length; i++){
            $('#flagContainer').append('<img id="' + newFlagArray[i] + '" src="assets/images/' + newFlagArray[i] + '.png"/>');
    }
}

function renderFlagsArray(){
    hidePanelAnswer();
    $('#flagContainer').empty();
    showQuestionContainer();
    $('#questionContainer').html(panelContainer);
    getQuestion();
    clickNload();
}
 
 function clickNload(){
// Onclick event for flags
    $('#flagContainer').one('click', (function(e){
        console.log(e.target.id);
        currentAnswer = e.target.id;
        console.log("You've clicked on " + e.target.id);
        console.log(currentAnswer);


        if(currentAnswer === countryName){
            correctAnswers++;
            userChoices.push(currentAnswer);
            console.log("Your choices so far are..." + userChoices);
            console.log("You are correct!!");
            console.log("Correct Answers " + correctAnswers);
            randomChoices.push(countryName);
            console.log("The computer generated choices are..." + randomChoices);
        } 
        else if(currentAnswer !== countryName){
            wrongAnswers++;
            console.log("You've fucked up!!");
            console.log("Wrong answers " + wrongAnswers);
            userChoices.push(currentAnswer);
            console.log("Your choices so far are..." + userChoices);
            randomChoices.push(countryName);
            console.log("The computer generated choices are..." + randomChoices);
        }

        currentQuestion++;

        console.log('You have answered correct ' + correctAnswers);
        console.log('You have answered wrong ' + wrongAnswers);

        // Here I will make the panel dissappear and generate only the correct flag for 2 seconds...or 3. (I will compensate with extra time lol)

        showCorrectFlagInPanel();
    }));
}

    function clock(){
        //hideQuestionContainer();
    	$('#start').on('click', function(){
            stopwatch.start();
            $('#start').hide();
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
    }