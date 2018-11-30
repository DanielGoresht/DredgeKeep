
var decklist = ["Bloodghast", "Golgari Thug", "Narcomoeba", "Prized Amalgam", "Stinkweed Imp", "Conflagrate", "Darkblast", "Faithless Looting", "Cathartic Reunion", "Life from the Loam", "Creeping Chill", "Shriekhorn", "Bloodstained Mire", "City of Brass", "Copperline Gorge", "Gemstone Mine", "Mountain", "Scalding Tarn", "Stomping Ground", "Blood Crypt"];


var hand = ["", "", "", "", "", "", ""];


//generates hand from decklist




function generateHand(dl,hn){

	var j;
		for (j = 0; j < hn.length; j++) {

			hn[j] = dl[Math.floor(Math.random()*dl.length)];
			

	}
	return(hn);
}


generateHand(decklist, hand)