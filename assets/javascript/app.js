const totalQuestions = 10;
var minutes = 0;
var seconds = 0;
var countryName = '';
var currentQuestion = 1;
var currentAnswer = '';
var finalSet = [];
var newQuestionsSet = [];
var duplicatedValue = false;
var timeoutID;

/*******************************************************/
                 /*User inputs' variables*/
/*******************************************************/

var correctAnswers = 0;
var wrongAnswers = 0;
var userChoices = [];
var randomChoices = [];

/*******************************************************/

var flags = [  "Honduras", "Japan", "Jamaica", "Angola",
                "USA", "Panama", "Germany", "Oman", "Aruba",
                "Argentina", "Austria", "Barbados", "Paraguay",
                "Belgium", "Belize", "Bolivia", "Zimbabwe",
                "Brazil", "Bulgaria", "Canada", "Ukraine",
                "Chile", "China", "Colombia", "Vietnam",
                "Cuba", "Dominican Republic", "Ecuador",
                "Egypt", "El Salvador", "Estonia", "Lebanon",
                "France", "Greece", "Guatemala", "Bahamas",
                "India", "Ireland", "Israel", "Zambia",
                "Italy", "Kenya", "Uruguay", "Syria", "Puerto Rico",
                "Laos", "Madagascar", "Mexico", "Norway",
                "Mongolia", "Netherlands", "Nicaragua",
                "Peru", "Philippines", "Belarus", "Yemen",
                "Poland", "Portugal", "Saudi Arabia", "Bahrain", 
                "Slovakia", "South Africa", "South Korea",
                "Spain", "Sweden", "Switzerland", "Botswana",
                "Thailand", "Turkey", "American Samoa", "Afghanistan",
                "Trinidad and Tobago", "Senegal", "Sudan", "Armenia", 
                "Sri Lanka", "Nepal", "Nigeria", "Morocco", "Hungary",
                "Iceland", "Macedonia", "Luxembourg", "Malaysia", 
                "Russia", "Croatia", "Ghana", "Guyana", "Benin", 
                "Burkina Faso", "Bhutan", "Brunei", "Cambodia", "Gambia", "Iran",
                "Ivory Coast", "Hong Kong", "Lithuania", "Costa Rica",
                "Iraq", "North Korea", "Australia", "Azerbaijan", "Romania",
                "Serbia and Montenegro", "Suriname", "Slovenia", 
                "Bosnia", "Denmark", "Cape Verde", "Bangladesh", "Pakistan",
                "Czech Republic", "Cameroon", "Ethiopia", "Dominica", "Qatar",
                "Taiwan", "Cyprus", "Burundi", "Albania", "Antigua and Barbuda",
                "Algeria", "Finland", "Uzbekistan", "Andorra", "Kosovo" 
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
        
function startGame(){
    clock();
    hideChosenFlags();
}

function getFlagSet(){
    const maxFlags = 4;
    newQuestionsSet = [];
        for(i = 0; i < maxFlags; i++){
            activeFlag = flags[Math.floor(Math.random() * (1 + flags.length - 1))];
            newQuestionsSet.push(activeFlag);
        }
}

function stopDuplicateFlag(array){
    var sortedArray = array.slice().sort();
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

function prepareGame(){
    loadQuestions();
    renderFlagsArray();
} 

function showCorrectFlagInPanel(){
// Render correct flag here
    hideQuestionContainer();
    showPanelAnswer();
    $('#panelAnswer').html(panelAnswer);
    $('#answerTitle').html('<h3>The correct flag is ' + countryName + '</h3>');
    $('#answerContainer').html('<img src="assets/images/' + countryName + '.png"/>');

    if(currentQuestion <= totalQuestions){
        flagPause();
    } else {
        timeoutID = window.setInterval(hidePanelAnswer, 3000);
        timeoutID1 = window.setInterval(showChosenFlags, 3000);
        timeoutID1 = window.setTimeout(renderResults, 3000);
    }
}

function showCorrectFlagInPanelTimeout(){
// Render correct flag here
    hideQuestionContainer();
    showPanelAnswer();
    $('#panelAnswer').html(panelAnswer);
    $('#answerTitle').html('<h3>The correct flag is ' + countryName + '</h3>');
    $('#answerContainer').html('<img src="assets/images/' + countryName + '.png"/>');

    currentQuestion++;
    wrongAnswers++;
    userChoices.push('Incorrect');
    randomChoices.push(countryName);

    console.log(wrongAnswers);
    console.log(' These are my choices ' + userChoices);
    console.log('These are the computer choices ' + randomChoices);

    if(currentQuestion <= totalQuestions){
        flagPause();
    }

    if(currentQuestion > totalQuestions){
        hideQuestionContainer();
        timeoutID = window.setTimeout(hidePanelAnswer, 3000);
        timeoutID = window.setTimeout(showChosenFlags, 3000);
        timeoutID1 = window.setTimeout(renderResults, 3000);
    }
}

function flagPause(){
    timeoutID = window.setTimeout(renderFlagsArray, 3000);
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

function hideChosenFlags(){
    $('#yourChoicesContainer').hide();
    $('#correctContainer').hide();
}

function showChosenFlags(){
    $('#yourChoicesContainer').show();
    $('#correctContainer').show();
}

function getRandomCountryName(){
    if(currentQuestion <= totalQuestions){
        countryName = finalSet[currentQuestion-1][Math.floor(Math.random() * (1 + finalSet[currentQuestion-1].length - 1))];
            return countryName;
    }
}

function getQuestion(){
    $('#questionTitle', '<h4>').show();
    $('#questionNumber').html(currentQuestion);
    $('#countryName').html(getRandomCountryName());
    newFlagArray = finalSet[currentQuestion-1];
    for(i = 0; i < newFlagArray.length; i++){
            $('#flagContainer').append('<img id="' + newFlagArray[i] + '" src="assets/images/' + newFlagArray[i] + '.png"/>');
    }
}

function renderFlagsArray(){
    hidePanelAnswer();
    stopwatch.start();
    $('#flagContainer').empty();

    showQuestionContainer();

    if(currentQuestion > totalQuestions){
        hideQuestionContainer();
    }
    
    $('#questionContainer').html(panelContainer);
    if(currentQuestion <= totalQuestions){
        getQuestion();
    }
    
    clickNload();

    timeoutID = window.setTimeout(showCorrectFlagInPanelTimeout, 5000);
}

function renderResults(){
    showChosenFlags();

    for(i = userChoices.length - 1; i >= 0; i--){
        $('#yourFlags').append('<div id="' + i + '"><img id="' + userChoices[i] + '" src="assets/images/' + userChoices[i] + '.png"/>');
        $('#yourFlags').append('<strong>' + userChoices[i] + '</strong></div>')
    }

    for(i = randomChoices.length - 1; i >= 0; i--){
        $('#correctFlags').append('<div id="' + i + '"><img id="' + randomChoices[i] + '" src="assets/images/' + randomChoices[i] + '.png"/>');
        $('#correctFlags').append('<strong>' + randomChoices[i] + '</strong></div>')
    }
 
    if(correctAnswers === 10){
        $('#lastMessage').append($('<div class="area">' + correctAnswers + '/' + totalQuestions + ' Perfect!!</div>'));
    } else if(correctAnswers > 7 && correctAnswers <= 9){
        $('#lastMessage').append($('<div class="area">' + correctAnswers + '/' + totalQuestions + ' Excellent!!</div>'));
    } else if(correctAnswers > 5 && correctAnswers <= 7){
        $('#lastMessage').append($('<div class="area">' + correctAnswers + '/' + totalQuestions + ' Decent!!</div>'));
    } else {
        $('#lastMessage').append($('<div class="area">' + correctAnswers + '/' + totalQuestions + ' Go back to school!!</div>'));
    }

    $('#playAgain').append($('<button id="startGame">PLAY AGAIN</button>'));

    $('#startGame').on('click', function(){
        window.location.reload();
    })

}
 
    function clickNload(){
        // Onclick event for flags
        $('img').one('click', (function(e){
            window.clearTimeout(timeoutID); // Here I disable onclick events after some time (timeoutID value)
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

            if(currentQuestion <= (totalQuestions + 1)){
                stopwatch.stop();
                stopwatch.reset();
                showCorrectFlagInPanel();
            }
        }));
    }

    function clock(){
    	$('#start').on('click', function(){
            $('#start').hide();
            $('#intro').hide();
            prepareGame();
        });
    }

    var stopwatch = {
        time:5,

        start: function(){
            counter = setInterval(stopwatch.count, 1000);
        },

        stop: function(){
            clearInterval(counter);
        },

        reset: function(){
            stopwatch.time = 5;
            $('#timer').html('5');
        },
        
        count: function(){
            stopwatch.time--;
            var converted = stopwatch.timeConverter(stopwatch.time);
            $('#timer').html(converted);
            if(stopwatch.time === 0){
                stopwatch.stop();
                stopwatch.reset();
            }
        },

        timeConverter: function(t){
            minutes = Math.floor(t/60);
            seconds = t - (minutes * 60);
            if (seconds < 10){
                seconds = seconds;
            }
            return seconds;
        }
    }
