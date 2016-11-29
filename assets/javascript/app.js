var totalFlags = 20;
var minutes = 0;
var seconds = 0;
var stopTime = 0;
var $questions = 0;
var renderedFlags = [];
var countryName = '';
var currentQuestion = 1;
const maxFlags = 4;

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
    for(i = 0; i < maxFlags; i++){
        activeFlag = flags[Math.floor(Math.random() * (1 + flags.length - 1))];
        renderedFlags.push(activeFlag);
    }
    console.log(renderedFlags);
    getRandomCountryName();
    checkDuplicates();
};

function getRandomCountryName(){
    countryName = renderedFlags[Math.floor(Math.random() * (1 + renderedFlags.length - 1))];
    console.log(countryName);
};

function checkDuplicates(){
   for(index = 0; index < renderedFlags.length; index++){
    if(renderedFlags[index] === (renderedFlags[index+1] 
        || renderedFlags[index+2] 
        || renderedFlags[index+3]
        || renderedFlags[index+4])){
        console.log("Duplicates found!!");
        console.log(renderedFlags);
        renderedFlags.splice(0);
        getRandomFlag();
        console.log("Duplicates found!!");
    }
   }
};

/*var indexToRemove = 0;
var numberToRemove = 1;

arr.splice(indexToRemove, numberToRemove);*/

function renderFlagsArray(renderedFlags){
    for(i = 0; i < maxFlags; i++){
        $('#flagContainer').append("<img src='assets/images/" + renderedFlags[i] + ".png' value=" + renderedFlags[i] + "/>");
    }
    getRandomCountryName();
    console.log(countryName);
    $('#countryName').after(countryName);
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
    getRandomFlag(function(){
        checkDuplicates();
    });

    // After letter found, remove dash from iterated index
                        //dashes.splice(i, 0);
                        // Then insert letter inputed by user
                        //dashes.splice(i, 1, userInput);