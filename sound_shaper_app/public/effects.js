console.log('Greetings From Sound-Effects, TX!')

var stage = new pb.Stage();
var ctx = stage.getContext();

var board = new pb.Board(ctx);
    stage.setBoard(board);

var overdrive = new pb.stomp.Overdrive(ctx);
  

board.addPedals([overdrive]);
// overdrive.setDrive(.5);
// overdrive.setTone(.4);
// overdrive.setLevel(.6);

var OverdriveButton = document.querySelector('#overdrive-effect');

var play = function() {
        stage.play('guitar.m4a');
        overdrive.setDrive(.5);
		overdrive.setTone(.4);
		overdrive.setLevel(.6);
}

OverdriveButton.addEventListener("click", play);