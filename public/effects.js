console.log('Greetings From Effects-Script, TX!')

// PEDALBOARD JS SETTINGS

	// Stage & Context

var stage = new pb.Stage();
var ctx = stage.getContext();

	// Board & Effects(Pedals) 

var board = new pb.Board(ctx);

stage.setBoard(board);


    // Boxes (Effects)

var overdrive = new pb.stomp.Overdrive(ctx);
var volume = new pb.stomp.Volume(ctx);

board.addPedals([overdrive]);


//OVERDRIVE 
	//guitar

var overdriveGuitarButton = document.querySelector('#overdrive-guitar'); 

var stopGuitar = function(){
	!overdrive.bypassSwitch.getState() && overdrive.bypassSwitch.toggle();
	overdrive.setDrive(0);
	overdrive.setTone(0);
	overdrive.setLevel(0);
	removeStopGuitarListener();
}

var resumeGuitar = function(){
	!overdrive.bypassSwitch.getState();
	overdrive.setDrive(.5);
	overdrive.setTone(.4);
	overdrive.setLevel(.6);
	removeResumeGuitarListener();
}

var removeStopGuitarListener = function () {
	overdriveGuitarButton.removeEventListener('click',stopGuitar);
	overdriveGuitarButton.addEventListener('click', resumeGuitar);
}

var removeResumeGuitarListener = function () {
	overdriveGuitarButton.removeEventListener('click',resumeGuitar);
	overdriveGuitarButton.addEventListener('click', stopGuitar);
}

overdriveGuitarButton.addEventListener("click", resumeGuitar);


