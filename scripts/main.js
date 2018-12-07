
var hand_value = -100;
var display_text = "There was an error.";

window.onload = function() {
  document.getElementById("message").innerHTML = "Click the icons above to add cards to the hand.  Clicking a card in the hand removes it.";
};

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

var hand = ["","","","","","",""];


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
    remove_images();
    hand_value = -100;
    shuffleArray(dl);

    var j;
        for (j = 0; j < hn.length; j++) {
            hn[j] = dl[j];
            
    }
    draw_hand(hn);
    document.getElementById("message").innerHTML = display_text +  " <br /> " + " Hand Score = " + hand_value;
    return(hn);
}



function show_image(src, width, height, alt) {
    //javascript to imput picture into html
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;


    

    img.addEventListener("click",function(){
        var list = document.getElementById("download");
        //on click removes card from hand
        for (var i = hand.length - 1; i > -1; i--) {
            if (hand[i] == this.alt){
                hand[i] = "";

                remove_images()

                hand_value = -100;
                draw_hand();
                document.getElementById("message").innerHTML = display_text +  " <br /> " + " Hand Score = " + hand_value;
                break;


            }
        }


    })
    

// This next line will just add it to the <body> tag


    document.getElementById("download").appendChild(img);
}


function remove_images() {
    //removes the pictures of cards in hand
    var list = document.getElementById("download");
    while (list.childNodes[3] == "[object HTMLImageElement]"){
        list.removeChild(list.childNodes[3]);

    }

    


}




function draw_hand(hn){

    //loops though each element of the hand, literaly drawing the hand and scoreing it.
    var handsize = 0;
    for (var i = 0; i < 8; i++) {
        
        if (hand[i] == ""){
            
            handsize ++;
        }
    

    }
    handsize = 7-handsize;
    

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
                
                }
                dredger_count ++;

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
                
                }
            if (stink_check == 0){
                hand_value += 10;
                stink_check = 1;
                }
                dredger_count ++;
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
                    
                }
                dredger_count ++;
              }

            if (hand[i] == "Faithless Looting") {
                show_image("img/faithless-looting.jpg", 223, 311, "Faithless Looting");
                hand_value += 50;
                looting_check = 1;
                if (enabler_count == 0){
                    hand_value += 15
                    
                }
                if (enabler_count == 1){
                    hand_value += 10;
                }
                enabler_count ++;

              }

            if (hand[i] == "Cathartic Reunion") {
                show_image("img/cathartic-reunion.jpg", 223, 311, "Cathartic Reunion");
                hand_value += 10;
                reunion_check = 1;
                if (enabler_count == 0){
                    hand_value += 15
                    
                }
                if (enabler_count == 1){
                    hand_value += 5;
                }
                enabler_count ++;
              }

            if (hand[i] == "Life from the Loam") {
                show_image("img/life-from-the-loam.jpg", 223, 311, "Life from the Loam");
                hand_value += 5;
                
                if (dredger_count == 0){
                    hand_value += 20;
                    
                }
                loam_check = 1;
                dredger_count ++;
            }
              

            if (hand[i] == "Creeping Chill") {
                show_image("img/creeping-chill.jpg", 223, 311, "Creeping Chill");
                hand_value -= 20;
              }

            if (hand[i] == "Shriekhorn") {
                show_image("img/shriekhorn.jpg", 223, 311, "Shriekhorn");
                hand_value += 15;
                horn_check = 1;
                
                if (enabler_count == 0){
                    hand_value += 15
                    
                }
                if (enabler_count == 1){
                    hand_value += 5;
                }
                enabler_count ++;
              }

            if (hand[i] == "Blood Crypt") {
                show_image("img/blood-crypt.jpg", 223, 311, "Blood Crypt");
                hand_value += 2;
                
                if (land_count == 0){
                    hand_value += 40;
                    
                }
                if (land_count == 1){
                    hand_value += 20;
           
                }
                if (land_count == 2){
                    hand_value += 5;
                    
                }
                land_count ++;
              }

            if (hand[i] == "Bloodstained Mire") {
                show_image("img/bloodstained-mire.jpg", 223, 311, "Bloodstained Mire");
                hand_value += 2;

                if (land_count == 0){
                    hand_value += 40;
                    
                }
                if (land_count == 1){
                    hand_value += 20;
                    
                }
                if (land_count == 2){
                    hand_value += 5;
                    
                }
                if (green_land_check == 0){
                    hand_value += 40;
                    green_land_check = 1;
                }
               land_count ++;
              }

            if (hand[i] == "City of Brass") {
                show_image("img/city-of-brass.jpg", 223, 311, "City of Brass");
                hand_value += 2;
                if (land_count == 0){
                    hand_value += 40;
                    
                }
                if (land_count == 1){
                    hand_value += 20;
                    
                }
                if (land_count == 2){
                    hand_value += 5;
                    
                }
                if (green_land_check == 0){
                    hand_value += 40;
                    green_land_check = 1;
                }
                land_count ++;
              }

            if (hand[i] == "Copperline Gorge") {
                show_image("img/copperline-gorge.jpg", 223, 311, "Copperline Gorge");
                hand_value += 3;
                if (land_count == 0){
                    hand_value += 40;
                    
                }
                if (land_count == 1){
                    hand_value += 20;
                    
                }
                if (land_count == 2){
                    hand_value += 5;
                    
                }
                if (green_land_check == 0){
                    hand_value += 40;
                    green_land_check = 1;
                }
                land_count ++;
              }

            if (hand[i] == "Gemstone Mine") {
                show_image("img/gemstone-mine.jpg", 223, 311, "Gemstone Mine");
                hand_value += 1;
                if (land_count == 0){
                    hand_value += 40;
                    
                }
                if (land_count == 1){
                    hand_value += 20;
                    
                }
                if (land_count == 2){
                    hand_value += 5;
                    
                }
                if (green_land_check == 0){
                    hand_value += 40;
                    green_land_check = 1;
                }
                land_count ++;
              }

            if (hand[i] == "Scalding Tarn") {
                show_image("img/scalding-tarn.jpg", 223, 311, "Scalding Tarn");
                hand_value += 2;
                if (land_count == 0){
                    hand_value += 40;
                    
                }
                if (land_count == 1){
                    hand_value += 20;
                    
                }
                if (land_count == 2){
                    hand_value += 5;
                    
                }
                if (green_land_check == 0){
                    hand_value += 40;
                    green_land_check = 1;
                }
                land_count ++;
              }

            if (hand[i] == "Stomping Ground") {
                show_image("img/stomping-ground.jpg", 223, 311, "Stomping Ground");
                hand_value += 2;
                if (land_count == 0){
                    hand_value += 40;
                    
                }
                if (land_count == 1){
                    hand_value += 20;
                    
                }
                if (land_count == 2){
                    hand_value += 5;
                    
                }
                if (green_land_check == 0){
                    hand_value += 40;
                    green_land_check = 1;
                }
                land_count ++;
              }

            if (hand[i] == "Mountain") {
                show_image("img/mountain.jpg", 223, 311, "Mountain");
                hand_value += 2;
                if (land_count == 0){
                    hand_value += 40;
                    
                }
                if (land_count == 1){
                    hand_value += 20;
                    
                }
                if (land_count == 2){
                    hand_value += 5;
                    
                }
              land_count ++;
            }

        }

        //bonus

        if (looting_check == 0 && reunion_check== 0 && loam_check > 0 && land_count > 1) {
            hand_value += 25;
        }
        if (loam_check > 0 && fetch_check == 1){
            hand_value += 5;
        }
        if (dredger_count == 0 && horn_check == 1) {
            hand_value += 45;
        }
        if (dredger_count == 0 && horn_check == 1 && enabler_count > 1) {
            hand_value += 50;
        }
        if (land_count == 1 && horn_check == 1 && enabler_count > 1){
            hand_value += 25;
        }

        if (looting_check == 1 && enabler_count > 1 && land_count == 1 && dredger_count > 0){
            hand_value += 10;
        }

        if (horn_check == 1 && reunion_check == 1 && land_count >1){
            hand_value += 10;
        }

        if (enabler_count > 1 && land_count > 1 && horn_check == 1  && dredger_count == 0){
            hand_value += 20;
        }

        if (looting_check == 0 && reunion_check == 0 && conflagrate_check == 1 && land_count > 1 ){
            hand_value += 40;
        }
        if (reunion_check > 0 && land_count > 1 && dredger_count > 1){
            hand_value += 40;
        }
        if (reunion_check > 0 && land_count > 1 && dredger_count == 1){
            hand_value += 10;
        }
        if (looting_check > 0 && land_count > 0){
            hand_value += 10;
        }

        if (dredger_count == 0 && amalghast_count > 1 && looting_check == 1 && land_count > 0){
            hand_value += 30;
        }
        if (looting_check == 0 && dredger_count == 0 && amalghast_count > 1 && reunion_check == 1 && land_count > 1){
            hand_value += 25;
        }
        if (looting_check == 1 && reunion_check == 1 && land_count > 1){
            hand_value += 70;
        }
        if (enabler_count == 1 && horn_check == 1 && looting_check ==1 && land_count > 1 && green_land_check ==1){
            hand_value += 50;
        }
        if (enabler_count > 1 && dredger_count == 0 && land_count > 1 && reunion_check == 0 && looting_check == 0){
            hand_value += 40;
        }
        if (enabler_count > 1 && horn_check == 0 && reunion_check == 0 && land_count > 0){
        hand_value += 50;
        }
        if (enabler_count > 2 && dredger_count == 0 && land_count > 1 && reunion_check == 1 && looting_check == 0){
        hand_value += 60;
        }
        if (looting_check == 1 && horn_check == 1 && dredger_count == 0){
        hand_value += 50;   
        }
        if (reunion_check == 1 && horn_check == 1 && dredger_count == 0 && land_count > 1){
            hand_value += 30;
        }
        if (reunion_check == 1 && enabler_count ==1 && dredger_count >1 && land_count >1 && green_land_check == 1){
            hand_value += 100;
        }
        if (enabler_count >1 && land_count >1 && green_land_check == 1){
            hand_value += 50;
        }
        if (enabler_count > 1 && reunion_check == 1 && looting_check == 1 && loam_check == 1 && dredger_count == 1){
            hand_value += 50;
        }
        if (enabler_count > 1 && reunion_check == 1 && horn_check == 1 && loam_check == 1 && dredger_count == 1){
            hand_value += 50;
        }
        if (enabler_count > 1 && reunion_check == 1 && looting_check == 1 && dredger_count == 0){
            hand_value += 30;
        }
        if (enabler_count >2 && land_count == 1 && horn_check == 1){
            hand_value += 30;
        }
        if (enabler_count == 2 && looting_check == 1 && horn_check == 1 && land_count >1 && dredger_count == 0){
            hand_value += 70;
        }
        if (looting_check == 1 && enabler_count == 1 && amalghast_count > 1 && land_count > 1){
            hand_value +20;
        }
        if (looting_check == 1 && land_count > 0 && stink_check == 1 && dredger_count > 1){
            hand_value += 60;
        }

    
        //alert(enabler_count);



        //penalties

        if (enabler_count == 0){
            hand_value -=  150;
        }
        if (dredger_count == 0){
            hand_value -= 100;
        }
        if (land_count ==1){
            hand_value -= 30;
        }

        if (land_count == 0){
            hand_value -= 200;
        }

        if (reunion_check == 1 && looting_check == 0 && land_count == 1){
            hand_value -= 40;
        }
        if (land_count < 2 && looting_check == 0){
            hand_value -= 30;
        }

        if (enabler_count == 1 && horn_check == 1 && loam_check == 0 && land_count > 1 && green_land_check == 1){
            hand_value -= 50;
        }

        if (dredger_count == 1 && loam_check == 1){
            hand_value -= 25;
        }

        if (enabler_count == 1 && dredger_count == 0){
            hand_value -= 40;
        }

        if (enabler_count > 1 && looting_check == 0 && horn_check == 0){
            hand_value -= 30;
        }
        if (enabler_count == 1 && reunion_check == 1 && dredger_count == 1 && loam_check == 1){
            hand_value -= 60;
        }
        if (enabler_count == 1 && reunion_check == 1 && dredger_count == 1 && loam_check == 0 && stink_check == 0){
            hand_value -= 40;
        }
        if (enabler_count == 1 && horn_check == 1){
            hand_value -= 45;
        }
        if (enabler_count == 1 && dredger_count == 0){
            hand_value -= 30;
        }
        if (land_count > 1 && enabler_count > 1 && green_land_check == 0){
            hand_value -= 50;
        }
        if (land_count > 1 && enabler_count == 1 && green_land_check == 0){
            hand_value -= 25;
        }
        if (land_count > 1 && enabler_count > 1 && dredger_count == 1 && stink_check == 0){
            hand_value -30;
        }
        if (enabler_count == 2 && looting_check == 1 && horn_check == 1 && dredger_count == 0){
            hand_value -= 100;
        }





        //mulls

 

            hand_value = (hand_value / (8-handsize));
            hand_value = Math.round(hand_value);


        if (handsize == 2){

            if (land_count == 1)
            {
                hand_value += 70;
            }
            if (land_count == 2){
                hand_value += 95;
            }
            if (enabler_count > 0){
                 hand_value += 50;
            }
            if (looting_check == 1 && land_count == 0){
                hand_value += 30;
            }
        }


        if (handsize == 3){

            if (land_count > 0)
            {
                hand_value += 50;
                if (loam_check == 1 && green_land_check == 1){
                    hand_value += 50;
                }
            }
            if (land_count == 0){
                hand_value -= 12;
            }
            if (enabler_count > 0){
                 hand_value += 50;
            }
            if (enabler_count > 1 && horn_check == 0 && reunion_check == 0){
                hand_value += 25;
            }

        }

        if (handsize == 4){

            if (land_count > 0)
            {
                hand_value += 30;
                if (loam_check == 1 && green_land_check == 1 && enabler_count == 0){
                    hand_value += 40;
                }
            }
            if (land_count == 0){
                hand_value -= 12;
            }
            if (enabler_count > 0){
                 hand_value += 40;
            }
            if (enabler_count > 1 && horn_check == 0 && reunion_check == 0){
                hand_value += 25;
            }
        }

        if (handsize == 5){

            if (land_count > 0)
            {
                hand_value += 40;
                if (loam_check == 1 && green_land_check == 1 && enabler_count == 0){
                    hand_value += 30;
                }
            }
            if (land_count == 0){
                hand_value -= 22;
            }
            if (enabler_count > 0){
                 hand_value += 50;
            }
        }


        if (handsize == 6){



            if (land_count > 0)
            {
                hand_value += 40;
                if (land_count > 1 && green_land_check == 1){
                    hand_value += 40;
                }
            }
            if (land_count == 0){
                hand_value -= 80;
            }
            if (enabler_count > 0){
                 hand_value += 20;
            }
            for (var i = 0; i < 8; i++) {
                if (hand[i] == "Narcomoeba" || hand[i] == "Creeping Chill") {
                    hand_value -= 25;
                }
            }

        }



        change_text(hand_value);

        if (handsize == 0){
            hand_value = 1;
            display_text = "No Choice but to Keep";
        }

        if (handsize == 1){
            for (var i = 0; i < 8; i++) {
                if (hand[i] == "Narcomoeba" || hand[i] == "Creeping Chill") {
                    hand_value = -25;
                    display_text = "That's Better In the Deck";

           }
       }
           if (hand_value != -25) {

            hand_value += 84;
            display_text = "Can't do Better on Zero";

           }
       


    }
}


function change_text(hv){
    //sets the phrase output baised on hand score
    if (hv <= 700){
        display_text = "The BOOGYMAN!";
    }


    if (hv <= 280){
        display_text = "Flip the Deck Over";
    }

    if (hv <= 220){
        display_text = "Snap Keep";
    }

    if (hv <= 170){
        display_text = "Easy Keep";
    }

    if (hv <= 90){
        display_text = "Should Be Good Enough"
    }


    if (hv <= 65){
        display_text = "Humm, I'll Keep";
    }

    if (hv <= 30){
        display_text = "Shrug.. Keep";
    }

    if (hv <= -0){
        display_text = "'I'd Mull, but I'd be Theatrical'";
    }
    if (hv <= -40){
        display_text = "We Can Do Better";
    }
    if (hv <= -100){
        display_text = "Snap Mull";
    }
    if (hv <= -220){
        display_text = "OoooF!";
    }
    if (hv < -300){
        display_text = "That's A Yikes From Me";
    } 




}




function addCardToHand(card) {
    remove_images();

    //check if there are 4 copies of card in hand
    var count = 0;
    for (var i = hand.length - 1; i > -1; i--) { 
        if (hand[i] == card) {
            count ++
        }

    }

    if (count <= 3){
        if (hand[0] == ""){
            hand[0] = card;
        }
        else if (hand[1] == ""){
            hand[1] = card;
        }
        else if (hand[2] == ""){
            hand[2] = card;
        }
        else if (hand[3] == ""){
            hand[3] = card;
        }
        else if (hand[4] == ""){
            hand[4] = card;
        }
        else if (hand[5] == ""){
            hand[5] = card;
        }
        else if (hand[6] == ""){
            hand[6] = card;
        }

    }




}


function clearHand(){
    remove_images();
    hand = ["","","","","","",""];
    hand_value = -100;
    draw_hand(hand);
    document.getElementById("message").innerHTML = display_text +  " <br /> " + " Hand Score = " + hand_value;


}

function removeLastCard(){
    
    var lastCard;
   if (hand[0] == ""){
        lastCard = 0;
    }
    else if (hand[1] == ""){
        lastCard = 0;
    }
    else if (hand[2] == ""){
       lastCard = 1;
    }
    else if (hand[3] == ""){
        lastCard = 2;
    }
    else if (hand[4] == ""){
        lastCard = 3;
    }
    else if (hand[5] == ""){
        lastCard = 4;
    }
    else if (hand[6] == ""){
        lastCard = 5;
    }
    else {
        lastCard = 6;
    }
    hand[lastCard] = "";



}





function mulligan(){
    var emptycount = 1;
    for (var i = 0; i < 8; i++) {
        if (hand[i] == ""){
            emptycount ++;
        }

    }
    generateHand(decklist,hand);
    while (emptycount > 0){
        removeLastCard();
        emptycount--;
       
    }

  remove_images();
  hand_value = -100;
  draw_hand(hand);
  document.getElementById("message").innerHTML = display_text +  " <br /> " + " Hand Score = " + hand_value;

}
