function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

let computerMove = `kamień`;

printMessage('Zagrałem' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');



function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

