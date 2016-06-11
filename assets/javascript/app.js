var countryArray = ['Argentina', 'Belgium', 'Bolivia', 'Brazil', 'Canada', 'Chile', 'China', 'Colombia',
                'Cuba', 'Dominican Republic', 'Ecuador', 'El Salvador', 'France', 'Germany', 'Greece',
                'Guatemala', 'Honduras', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Mexico', 'Netherlands',
                'Nicaragua', 'Panama', 'Peru', 'Philippines', 'Poland', 'Portugal', 'South Africa', 'South Korea',
                'Spain', 'Sweden', 'Switzerland', 'Thailand', 'Turkey', 'Uruguay', 'USA']; 

var flagsArray = newArray("../images/flagArgentina.png", "../images/flagBelgium.png", "../images/flagBolivia.png");

var randomNumber = Math.floor(Math.random() * newArray.length);

$('.flagsGroup').append('<div class="randomFlag">' newArray[randomNumber]'</div>');

// Fix this shit dude!!!

	var randomCountry = countryArray[Math.floor(Math.random() * countryArray.length)];
	console.log(randomCountry);

 $('#question1').append('<span id="question1">' + randomCountry + '</span>');


$('.panel-body').append('<div id="flags1">' + '</div>');



