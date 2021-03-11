let scoreJoueur = 0
let firstCard = 0
let secondCard = 0



function cardAce (messageAlert){   
    let alertAce = parseInt(prompt(messageAlert));
    if(alertAce === 11){
         card = 11;
         return 11;        
        }
        return 1;
}
function draw(){
    var min=1; 
    var max=10;  
    return Math.floor(Math.random() * (max - min)) + min;
}
   
let playGame = confirm("Do you want to play? (yes or no)");

if (playGame === true){
     let card = draw();
    
    if(card === 1){
        card = cardAce(`Your first card is a ace! Do you want 1 or 11 ?`)       
    }

     firstCard = card;
     card = draw();

    if(card === 1){
        card = cardAce(`Your second card is a ace! Do you want 1 or 11 ?`)
        
    }
     secondCard = card;
     scoreJoueur = scoreJoueur + (firstCard + secondCard)
        if(scoreJoueur > 21){
            alert(`DUMB ASS you have ${scoreJoueur}`)
            var Loose = true;
        }
         else if(scoreJoueur === 21){
             alert(`BLACKJACK   YOU WIN`);
             var Win = true;           
            }
            else{
                alert(`your cards are : ${firstCard} and ${secondCard}. your total score is ${scoreJoueur}`);}
}
 if(Win === true || Loose === true){
     alert(`END GAME`);
 }
 else{
    let scoreDealer = draw();
    if(scoreDealer === 1){
        scoreDealer = 11;
        alert(`Dealer get an Ace!!!`);
    }

alert(`Score Dealer : ${scoreDealer}`)

let addCard = confirm("Do you want a new card? (ok or cancel)")
while(addCard === true){
     card = draw();
    alert(`The card is : ${card}`)
    if(card === 1){
        card = cardAce('You get an Ace!! Do you want a 1 or 11 ?')
        }
    
    scoreJoueur = scoreJoueur + card;
        if(scoreJoueur > 21){
            alert(`YOU LOOSE`)
            var joueurLOOSE = true;
            break;
        }else {
            alert(`Your score is : ${scoreJoueur}`)
            addCard = confirm("Do you want a new card? (ok or cancel)")
        }

        
    }
if(joueurLOOSE === true){
    alert(`GAME OVER`);
     
}
else{    
        while (scoreDealer < 17){
            let dealerNewCard = draw();
            scoreDealer = scoreDealer + dealerNewCard;
            alert(`New Dealer's Card is : ${dealerNewCard} And the Dealer's Score is : ${scoreDealer}`);
        }
        if(scoreDealer > 21){
            alert(`YOU WIN`);
            
        }
    else if(scoreJoueur > scoreDealer){
            alert(`Your score is : ${scoreJoueur}  Dealer's Score is : ${scoreDealer}  YOU WIN`);
        }
        else if (scoreJoueur === scoreDealer){
            alert(`Draw : no winner, you get back your money ! `)
        }
    else{
            alert(`Your score is : ${scoreJoueur}  Dealer's Score is : ${scoreDealer}  YOU LOOSE`);
        }
        

}
 }
 
