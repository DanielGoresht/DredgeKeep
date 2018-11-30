
var hand_value = -100;
var display_text = "There was an error.";

var decklist = ["Bloodghast", "Bloodghast", "Bloodghast", "Bloodghast", 
"Golgari Thug","Golgari Thug",  
"Narcomoeba", "Narcomoeba", "Narcomoeba", "Narcomoeba", 
"Prized Amalgam", "Prized Amalgam", "Prized Amalgam", "Prized Amalgam", 
"Stinkweed Imp","Stinkweed Imp","Stinkweed Imp","Stinkweed Imp", 
"Conflagrate", "Conflagrate", 
"Darkblast", 
"Faithless Looting", "Faithless Looting", "Faithless Looting", "Faithless Looting",
"Cathartic Reunion", "Cathartic Reunion", "Cathartic Reunion", "Cathartic Reunion", 
"Life from the Loam", "Life from the Loam", "Life from the Loam", "Life from the Loam", 
"Creeping Chill", "Creeping Chill", "Creeping Chill", "Creeping Chill", 
"Shriekhorn",  "Shriekhorn", "Shriekhorn", "Shriekhorn", 
"Blood Crypt", "Blood Crypt", 
"Bloodstained Mire", "Bloodstained Mire", "Bloodstained Mire", "Bloodstained Mire", 
"City of Brass", 
"Copperline Gorge", "Copperline Gorge", "Copperline Gorge", "Copperline Gorge", 
"Mountain", "Mountain", 
"Gemstone Mine",
"Scalding Tarn", "Scalding Tarn", "Scalding Tarn", 
"Stomping Ground", "Stomping Ground"];

var hand = ["", "", "", "", "", "", ""];


//generates hand from decklist


function shuffleArray(array) {
	//used in generteHand() to shuffle the deck before drawing the hand
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function generateHand(dl,hn){
	//picks up 7 cards from the top of the randomized deck to generate a hand
	shuffleArray(dl);

	var j;
		for (j = 0; j < hn.length; j++) {

			hn[j] = dl[j];
			
	}
	return(hn);
}



function show_image(src, width, height, alt) {
	//javascript to imput picture into html
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
}




function draw_hand(hn){

	//loops though each element of the hand, literaly drawing the hand and scoreing it.


	var dredger_count = 0;
	var enabler_count = 0;
	var land_count = 0;
	var amalghast_count = 0;

	var green_land_check = 0;
	var loam_check = 0;
	var fetch_check = 0;
	var stink_check = 0;	
	var conflagrate_check = 0;
	var reunion_check = 0;
	var looting_check = 0;
	var horn_check = 0;

	for (var i = 0; i < 8; i++) {
		if (hand[i] == "Bloodghast") {
                show_image("img/bloodghast.jpg", 223, 311, "Bloodghast");
                hand_value += 4;
                amalghast_count += 1;

              }

        if (hand[i] == "Golgari Thug") {
            show_image("img/golgari-thug.jpg", 223, 311, "Golgari Thug");
            hand_value += 5;
            if (dredger_count == 0){
                hand_value += 20;
                dredger_count ++;
                }

              }


        if (hand[i] == "Narcomoeba") {
            show_image("img/narcomoeba.jpg", 223, 311, "Narcomoeba");
            hand_value -= 20;
              }

        if (hand[i] == "Prized Amalgam") {
            show_image("img/prized-amalgam.jpg", 223, 311, "Prized Amalgam");
            hand_value += 4;
            amalghast_count += 1;
              }

        if (hand[i] == "Stinkweed Imp") {
            show_image("img/stinkweed-imp.jpg", 223, 311, "Stinkweed Imp");
            hand_value += 6;
            if (dredger_count == 0){
                hand_value += 20;
                dredger_count ++;
                }
            if (stink_check == 0){
                hand_value += 10;
                stink_check = 1;
                }
              }


            if (hand[i] == "Conflagrate") {
                show_image("img/conflagrate.jpg", 223, 311, "Conflagrate");
                hand_value += 2;
                conflagrate_check = 1;
              }

            if (hand[i] == "Darkblast") {
                show_image("img/darkblast.jpg", 223, 311, "Darkblast");
               	hand_value += 4;
                if (dredger_count == 0){
                	hand_value += 20;
                	dredger_count ++;
                }
              }

            if (hand[i] == "Faithless Looting") {
                show_image("img/faithless-looting.jpg", 223, 311, "Faithless Looting");
                hand_value += 15;
                looting_check = 1;
                if (enabler_count == 0){
                	hand_value += 15
                	enabler_count ++;
                }
                if (enabler_count == 1){
                	hand_value += 5;
                }

              }

            if (hand[i] == "Cathartic Reunion") {
                show_image("img/cathartic-reunion.jpg", 223, 311, "Cathartic Reunion");
                hand_value += 5;
                reunion_check = 1;
                if (enabler_count == 0){
                	hand_value += 15
                	enabler_count ++;
                }
                if (enabler_count == 1){
                	hand_value += 5;
                }
              }

            if (hand[i] == "Life from the Loam") {
                show_image("img/life-from-the-loam.jpg", 223, 311, "Life from the Loam");
                hand_value += 5;
                if (dredger_count == 0){
                	hand_value += 20;
                	dredger_count ++;
                }
                loam_check = 1;
            }
              

            if (hand[i] == "Creeping Chill") {
                show_image("img/creeping-chill.jpg", 223, 311, "Creeping Chill");
                hand_value -= 20;
              }

            if (hand[i] == "Shriekhorn") {
                show_image("img/shriekhorn.jpg", 223, 311, "Shriekhorn");
                hand_value += 4;
                horn_check = 1;
                if (enabler_count == 0){
                	hand_value += 15
                	enabler_count ++;
                }
                if (enabler_count == 1){
                	hand_value += 5;
                }
              }

            if (hand[i] == "Blood Crypt") {
                show_image("img/blood-crypt.jpg", 223, 311, "Blood Crypt");
                hand_value += 2;
                if (land_count == 0){
                	hand_value += 40;
                	land_count ++;
                }
                if (land_count == 1){
                	hand_value += 20;
                	land_count ++;
                }
                if (land_count == 2){
                	hand_value += 5;
                	land_count ++;
                }
              }

            if (hand[i] == "Bloodstained Mire") {
                show_image("img/bloodstained-mire.jpg", 223, 311, "Bloodstained Mire");
                hand_value += 2;
                if (land_count == 0){
                	hand_value += 40;
                	land_count ++;
                }
                if (land_count == 1){
                	hand_value += 20;
                	land_count ++;
                }
                if (land_count == 2){
                	hand_value += 5;
                	land_count ++;
                }
              }

            if (hand[i] == "City of Brass") {
                show_image("img/city-of-brass.jpg", 223, 311, "City of Brass");
                hand_value += 2;
                if (land_count == 0){
                	hand_value += 40;
                	land_count ++;
                }
                if (land_count == 1){
                	hand_value += 20;
                	land_count ++;
                }
                if (land_count == 2){
                	hand_value += 5;
                	land_count ++;
                }
                if (green_land_check == 0){
                	hand_value += 20;
                	green_land_check = 1;
                }
              }

            if (hand[i] == "Copperline Gorge") {
                show_image("img/copperline-gorge.jpg", 223, 311, "Copperline Gorge");
                hand_value += 2;
                if (land_count == 0){
                	hand_value += 40;
                	land_count ++;
                }
                if (land_count == 1){
                	hand_value += 20;
                	land_count ++;
                }
                if (land_count == 2){
                	hand_value += 5;
                	land_count ++;
                }
                if (green_land_check == 0){
                	hand_value += 20;
                	green_land_check = 1;
                }
              }

            if (hand[i] == "Gemstone Mine") {
                show_image("img/gemstone-mine.jpg", 223, 311, "Gemstone Mine");
                hand_value += 2;
                if (land_count == 0){
                	hand_value += 40;
                	land_count ++;
                }
                if (land_count == 1){
                	hand_value += 20;
                	land_count ++;
                }
                if (land_count == 2){
                	hand_value += 5;
                	land_count ++;
                }
                if (green_land_check == 0){
                	hand_value += 20;
                	green_land_check = 1;
                }
              }

            if (hand[i] == "Scalding Tarn") {
                show_image("img/scalding-tarn.jpg", 223, 311, "Scalding Tarn");
                hand_value += 2;
                if (land_count == 0){
                	hand_value += 40;
                	land_count ++;
                }
                if (land_count == 1){
                	hand_value += 20;
                	land_count ++;
                }
                if (land_count == 2){
                	hand_value += 5;
                	land_count ++;
                }
                if (green_land_check == 0){
                	hand_value += 20;
                	green_land_check = 1;
                }
              }

            if (hand[i] == "Stomping Ground") {
                show_image("img/stomping-ground.jpg", 223, 311, "Stomping Ground");
                hand_value += 2;
                if (land_count == 0){
                	hand_value += 40;
                	land_count ++;
                }
                if (land_count == 1){
                	hand_value += 20;
                	land_count ++;
                }
                if (land_count == 2){
                	hand_value += 5;
                	land_count ++;
                }
                if (green_land_check == 0){
                	hand_value += 20;
                	green_land_check = 1;
                }
              }

            if (hand[i] == "Mountain") {
                show_image("img/mountain.jpg", 223, 311, "Mountain");
                hand_value += 2;
                if (land_count == 0){
                	hand_value += 40;
                	land_count ++;
                }
                if (land_count == 1){
                	hand_value += 20;
                	land_count ++;
                }
                if (land_count == 2){
                	hand_value += 5;
                	land_count ++;
                }
              
			}

        }

        //bonus

        if (looting_check == 0 && reunion_check== 0 && loam_check > 0 && land_count > 1) {
        	hand_value += 25;
        }
        if (loam_check > 0 && fetch_check == 1){
        	hand_value += 3;
        }
        if (dredger_count == 0 && horn_check == 1) {
        	hand_value += 15;
        }

        if (looting_check == 0 && reunion_check == 0 && conflagrate_check == 1 && land_count > 1 ){
        	hand_value += 50;
        }
        if (reunion_check > 0 && land_count > 1 && dredger_count > 1){
        	hand_value += 40;
        }
        if (reunion_check > 0 && land_count > 1 && dredger_count == 1){
        	hand_value += 20;
        }
        if (looting_check > 0 && land_count > 0){
        	hand_value += 20;
        }

        if (dredger_count == 0 && amalghast_count > 1 && looting_check == 1 && land_count > 0){
        	hand_value += 30;
        }
        if (looting_check == 0 && dredger_count == 0 && amalghast_count > 1 && reunion_check == 1 && land_count > 1){
        	hand_value += 30;
        }

        //penalties

        if (enabler_count == 0){
        	hand_value -=  50;
        }
        if (dredger_count == 0){
        	hand_value -= 30;
        }
        if (looting_check == 0 && horn_check == 0 && reunion_check == 1 ){
        	hand_value -= 30;
        }
        if (reunion_check == 1 && looting_check == 0 && land_count == 1){
        	hand_value -= 45;
        }
        if (land_count < 2 && looting_check == 0){
        	hand_value -= 70;
        }

        change_text(hand_value);
        //change_text(hand_value);


	}


function change_text(hv){
	//sets the phrase output baised on hand score
	if (hv > 0){
		display_text = "Keep.";
	} 
	if (hv <= 0){
		display_text = "Mull.";
	}

}






generateHand(decklist, hand)


