{
  const playGame = function(playerInput) {

    function clearMessages() {

    }

    const getMoveName = function(argMoveId) {
      if (argMoveId == 1) {
        return 'kamień';
      }
      else if (argMoveId == 2) {
        return 'papier';
      }
      else if (argMoveId == 3) {
        return 'nożyce';
      }

      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch'; z
    }

    const displayResult = function(argComputerMove, argPlayerMove) {
      console.log('moves:', argComputerMove, argPlayerMove)

      if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
        printMessage('Ty wygrywasz!');
      }

      else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
        printMessage('Przegrywasz!');
      }

      else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
        printMessage('Remis!');
      }

      else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
        printMessage('Przegrywasz!');
      }

      else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
        printMessage('Remis!');
      }

      else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        printMessage('Wygrywasz!');
      }

      else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
        printMessage('Remis!');
      }

      else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        printMessage('Wygrywasz!');
      }

      else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
        printMessage('Przegrałeś!');
      }

      else if (argPlayerMove == 'nieznany ruch') {
        printMessage('Nie czaruj tylko graj z zasadami');
      }
    }
    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    const argComputerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + argComputerMove);

    console.log('Gracz wpisał: ' + playerInput);

    const argPlayerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + argPlayerMove);

    displayResult(argComputerMove, argPlayerMove);

  }

  document.getElementById('play-rock').addEventListener('click', function () {
    playGame(1);
  });

  document.getElementById('play-scisors').addEventListener('click', function () {
    playGame(3);
  });

  document.getElementById('play-paper').addEventListener('click', function () {
    playGame(2);
  });
}