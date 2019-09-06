function playGame(playerInput) {

  function clearMessages(){

  }

  function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    }
    else if(argMoveId == 2){
        return 'papier';
    }
    else if(argMoveId == 3){
        return 'nożyce';
    }
  
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

  function displayResult(argComputerMove, argPlayerMove){
    console.log('moves:', argComputerMove, argPlayerMove)
    
    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
      }
    
    else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Przegrywasz!');
      }
    
    else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        printMessage('Remis!');
      }
    
    else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Przegrywasz!');
      }
    
    else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
        printMessage('Remis');
      }
    
    else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Wygrywasz!');
      }
    
    else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
        printMessage('Remis');
      }
    
    else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Wygrywasz!');
      }
    
    else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Przegrałeś!');
      }
    
    else if( argPlayerMove == 'nieznany ruch') {
        printMessage('Nie czaruj tylko graj z zasadami');
      }
  }
  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let argComputerMove = getMoveName(randomNumber);
/*
 if(randomNumber == 1){
    computerMove = 'kamień';
}

else if(randomNumber == 2){
    computerMove = 'papier'
}

else if(randomNumber == 3) {
    computerMove = 'nożyce'
}
*/
  printMessage('Mój ruch to: ' + argComputerMove);

// let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

  console.log('Gracz wpisał: ' + playerInput);

  let argPlayerMove = getMoveName(playerInput);
/*
if(playerInput == '1'){
  playerMove = 'kamień';
}

else if(playerInput == '2'){
    playerMove = 'papier';
}

else if(playerInput == '3'){
    playerMove = 'nożyce'
}
*/
  printMessage('Twój ruch to: ' + argPlayerMove);

/*
if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }

else if( computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Przegrywasz!');
  }

else if( computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis!');
  }

else if( computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Przegrywasz!');
  }

else if( computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Remis');
  }

else if( computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Wygrywasz!');
  }

else if( computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis');
  }

else if( computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Wygrywasz!');
  }

else if( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Przegrałeś!');
  }

else if( playerMove == 'nieznany ruch') {
    printMessage('Nie czaruj tylko graj z zasadami');
  }
  */

  displayResult(argComputerMove, argPlayerMove);

}

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});

document.getElementById('play-scisors').addEventListener('click', function(){
  playGame(3);
});

document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});