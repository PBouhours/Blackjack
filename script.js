let scoreJoueur = 0


let playGame = confirm("Do you want to play? (yes or no)");

function carte(){
    var min=1; 
    var max=10;  
    return Math.floor(Math.random() * (max - min)) + min;}
    

if (playGame === true){
    let firstcard = carte();
    
    if(firstcard === 1){
        let alertAce = parseInt(prompt(`Your first card is a ace! Do you want 1 or 11?`));
        if(alertAce === 11){
            firstcard = 11;
        }
    }
    let secondcard = carte();

    if(secondcard === 1){
        let alertAce = parseInt(prompt(`Your second card is a ace! Do you want 1 or 11?`));
        if(alertAce === 11){
            secondcard = 11;
        }
    }

     scoreJoueur = scoreJoueur + (firstcard + secondcard)
         if(scoreJoueur === 21){
             alert(`BLACKJACK   YOU WIN`);
             var Win = true;           
            }
            else{
                alert(`your cards are : ${firstcard} and ${secondcard}. your total score is ${scoreJoueur}`);}
}
 if(Win === true){
     alert(`END GAME`);
 }
 else{
    let scoreDealer = carte();
    if(scoreDealer === 1){
        scoreDealer = 11;
        alert(`Dealer get an Ace!!!`);
    }

alert(`Score Dealer : ${scoreDealer}`)

let addCard = confirm("Do you want a new card? (ok or cancel)")
while(addCard === true){
    let card = carte();
    alert(`The card is : ${card}`)
    if(card === 1){
        let alertAce = parseInt(prompt(`Your  have a ace! Do you want 1 or 11?`));
        if(alertAce === 11){
            card = 11;
        }
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
            let dealerNewCard = carte();
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




