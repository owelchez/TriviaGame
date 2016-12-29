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

startGame();
             

// This function is working perfectly
function getFlagSet(){
    const maxFlags = 4;
    newQuestionsSet = [];
        for(i = 0; i < maxFlags; i++){
            activeFlag = flags[Math.floor(Math.random() * (1 + flags.length - 1))];
            newQuestionsSet.push(activeFlag);
            console.log('This is newQuestionsSet ' + newQuestionsSet);
            //debugger;
        }
}

function loadQuestions(){
    for(groups = 0; groups < totalQuestions; groups++){
        duplicatedValue = false;
        // if not undefined or duplicated, push to array
        getFlagSet();
        duplicatedValue = findDuplicates(newQuestionsSet);
        console.log(duplicatedValue);
        while(duplicatedValue === true){
            newQuestionsSet = [];
            getFlagSet();
            duplicatedValue = findDuplicates(newQuestionsSet);
        }

        finalSet.push(newQuestionsSet);

    } // Parent loop ends here
}

function startGame(){
    
    loadQuestions();
    console.log(finalSet);
    // clock() should be at the end, once all the logic is loaded.
    clock();
}  

// This is working
function findDuplicates(arrg){
    var sortedFlags = arrg.slice().sort();
    console.log('This is in findDuplicates ' + sortedFlags);
        for (i = 0; i <= arrg.length - 1; i++){
            if(sortedFlags[i+1] === sortedFlags[i]){
                console.log('Duplicate found!!');
                return true;
            } else {
                return false;
            }
        }
}  

function hidePanel(){
    $('#questionContainer').hide();
}

function showCorrectFlagInPanel(){
// Render correct flag here
    $('#questionTitle').hide();    
    $('#flagContainer').empty();
    $('#questionBody').hide();

    $('#questionTitle').html('<h3>The correct flag is ' + countryName + '</h3>');
    $('#flagContainer').html('<img src="assets/images/' + countryName + '.png"/>');

    $('#questionTitle').show();    
    $('#flagContainer').show();

    flagPause();
}

function flagPause(){
        var timeoutID = window.setTimeout(getRandomFlags, 3000);
}

function showPanel(){
    $('#questionContainer').show();
}

function emptyValues(){
    countryName = '';
    renderedFlags = [];
    currentAnswer = '';
}

function emptyContainers(){
    $('#flagContainer').empty();
    $('#questionTitle').empty();
    $('#questionBody').empty();
}

function getRandomFlags(){
    emptyValues();
    emptyContainers();
        $('#flagContainer').hide();
        $('#questionBody').hide();
    $('#questionBody').html('<h4>Which flag belongs to <span id="countryName"></span></h4>');
    for(i = 0; i < maxFlags; i++){
        activeFlag = flags[Math.floor(Math.random() * (1 + flags.length - 1))];
        renderedFlags.push(activeFlag);
    }

    console.log(renderedFlags);
    findDuplicates(function(){
        renderFlagsArray();
    });
}

function getRandomCountryName(){
    countryName = renderedFlags[Math.floor(Math.random() * (1 + renderedFlags.length - 1))];
}

function renderFlagsArray(){
        $('#flagContainer').empty();
        $('#flagContainer').hide();
        $('#questionTitle').hide();

        $('#questionTitle').html('<div><h4>Question # <span id="questionNumber">0</span></h4></div>');

    for(i = 0; i < maxFlags; i++){
        $('#flagContainer').append('<img src="assets/images/' + renderedFlags[i] + '.png" id="flagClicks" name="' + renderedFlags[i] + '"/>');
    }
        getRandomCountryName();

        $('#countryName').html(countryName);
        $('#questionNumber').html(currentQuestion);
        console.log(currentAnswer);

        $('#flagContainer').show();
        $('#questionTitle').show();

}
 
 function clickNload(){
// Onclick event for flags
    $('#flagContainer').one('click', (function(e){
        currentAnswer = e.target.name;
        //console.log("You've clicked on " + e.target.id);
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
        hidePanel();
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