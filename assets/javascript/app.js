var flagArray = ['Argentina', 'Belgium', 'Bolivia', 'Brazil', 'Canada', 'Chile', 'China', 'Colombia',
                'Cuba', 'Dominican Republic', 'Ecuador', 'El Salvador', 'France', 'Germany', 'Greece',
                'Guatemala', 'Honduras', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Mexico', 'Netherlands',
                'Nicaragua', 'Panama', 'Peru', 'Philippines', 'Poland', 'Portugal', 'South Africa', 'South Korea',
                'Spain', 'Sweden', 'Switzerland', 'Thailand', 'Turkey', 'Uruguay', 'USA'];  

	var randomFlag = flagArray[Math.floor(Math.random() * flagArray.length)];
	console.log(randomFlag);

 $('#question1').append('<span id="question1">' + randomFlag + '</span>')






