console.log('Greetings From Sound-Effects, TX!')

var stage = new pb.Stage();
var ctx = stage.getContext();
var board = new pb.Board(ctx);
    stage.setBoard(board);
var overdrive = new pb.stomp.Overdrive(ctx);
var reverb = new pb.stomp.Reverb(ctx);
var volume = new pb.stomp.Volume(ctx);
board.addPedals([overdrive]);

// overdrive.setDrive(.5);
// overdrive.setTone(.4);
// overdrive.setLevel(.6);

var overdriveButton = document.querySelector('#overdrive-effect');
var overdriveOff = document.querySelector('#overdrive-off');
var overdriveResume = document.querySelector('#overdrive-resume'); 

var play = function() {
    stage.play('guitar.m4a');
    overdrive.setDrive(.5);
	overdrive.setTone(.4);
	overdrive.setLevel(.6);
}

var stop = function(){
	!overdrive.bypassSwitch.getState() && overdrive.bypassSwitch.toggle();
	overdrive.setDrive(0);
	overdrive.setTone(0);
	overdrive.setLevel(0);
		
}

var resume = function(){
	!overdrive.bypassSwitch.getState();
	overdrive.setDrive(.5);
	overdrive.setTone(.4);
	overdrive.setLevel(.6);
}


overdriveButton.addEventListener("click", play);
overdriveOff.addEventListener("click", stop);
overdriveResume.addEventListener("click", resume);
