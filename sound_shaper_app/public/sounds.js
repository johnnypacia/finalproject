console.log('Greetings from Sounds-View, TX!');

var stage = new pb.Stage();
var ctx = stage.getContext();
var board = new pb.Board(ctx);
    stage.setBoard(board);
var overdrive = new pb.stomp.Overdrive(ctx);
var reverb = new pb.stomp.Reverb(ctx);
var volume = new pb.stomp.Volume(ctx);
var delay = new pb.stomp.Delay(ctx);

board.addPedals([overdrive, reverb]);

var piano = new Howl({
  urls: ['piano1.m4a'],
  buffer: true
});

var guitar = new Howl({
  urls: ['guitar.m4a'],
  buffer: true
});

var bass = new Howl({
  urls: ['bass.m4a'],
  buffer: true
});


var drums = new Howl({
  urls: ['drums.m4a'],
  buffer: true
});

var playButton = document.querySelector('#play-all');
var pauseButton = document.querySelector('#pause-all');
var stopButton = document.querySelector('#reset-all');
var muteGuitarButton = document.querySelector('#mute-guitar');
var mutePianoButton = document.querySelector('#mute-piano');
var muteDrumsButton = document.querySelector('#mute-drums');
var muteBassButton = document.querySelector('#mute-bass');
var unmuteGuitarButton = document.querySelector('#unmute-guitar');
var unmutePianoButton = document.querySelector('#unmute-piano');
var unmuteDrumsButton = document.querySelector('#unmute-drums');
var unmuteBassButton = document.querySelector('#unmute-bass');
var fadeInGuitarButton = document.querySelector('#fade-in-guitar');
var fadeInPianoButton = document.querySelector('#fade-in-piano');
var fadeInDrumsButton = document.querySelector('#fade-in-drums');
var fadeInBassButton = document.querySelector('#fade-in-bass');
var fadeOutGuitarButton = document.querySelector('#fade-out-guitar');
var fadeOutPianoButton = document.querySelector('#fade-out-piano');
var fadeOutDrumsButton = document.querySelector('#fade-out-drums');
var fadeOutBassButton = document.querySelector('#fade-out-bass');

var playBack = function(){
	guitar.unmute();
	guitar.play();
	bass.unmute();
	bass.play();
	piano.unmute();
	piano.play();
	drums.unmute();
	drums.play();
	stage.play('guitar.m4a');
    overdrive.setDrive(0);
	overdrive.setTone(0);
	overdrive.setLevel(0);
	volume.setLevel(1);
};

var pausePlayBack = function (){
	guitar.pause();
	bass.pause();
	piano.pause();
	drums.pause();
}

var stopPlayBack = function(){
	guitar.stop();
	bass.stop();
	piano.stop();
	drums.stop();
};

var muteBass = function(){
	bass.mute();
}

var mutePiano = function(){
	piano.mute();
}

var muteGuitar = function(){
	!overdrive.bypassSwitch.getState() && overdrive.bypassSwitch.toggle();
	overdrive.setDrive(0);
	overdrive.setTone(0);
	overdrive.setLevel(0);
	volume.setLevel(0);
	guitar.mute();
}

var muteDrums = function(){
	drums.mute();
}

var unmuteBass = function(){
	bass.unmute();
}

var unmutePiano = function(){
	piano.unmute();
}

var unmuteGuitar = function(){
	guitar.unmute();
}

var unmuteDrums = function(){
	drums.unmute();
}

var fadeInBass = function(){
	bass.fadeIn(1, 10000);
}

var fadeInPiano = function(){
	piano.fadeIn(1, 10000);
}

var fadeInGuitar = function(){
	guitar.fadeIn(1, 10000);
}

var fadeInDrums = function(){
	drums.fadeIn(1, 10000);
}
var fadeOutBass = function(){
	bass.fadeOut(0, 10000, fadeInBass);
}

var fadeOutPiano = function(){
	piano.fadeOut(0, 10000);
}

var fadeOutGuitar = function(){
	guitar.fadeOut(0, 10000);
}

var fadeOutDrums = function(){
	drums.fadeOut(0, 10000);
}

//Play/Stop global functionality

playButton.addEventListener("click", playBack);
stopButton.addEventListener("click", stopPlayBack);
pauseButton.addEventListener("click", pausePlayBack);

//Mute/Unmute on individual tracks
muteBassButton.addEventListener("click", muteBass);
mutePianoButton.addEventListener("click", mutePiano);
muteGuitarButton.addEventListener("click", muteGuitar);
muteDrumsButton.addEventListener("click", muteDrums);
unmuteBassButton.addEventListener("click", unmuteBass);
unmutePianoButton.addEventListener("click", unmutePiano);
unmuteGuitarButton.addEventListener("click", unmuteGuitar);
unmuteDrumsButton.addEventListener("click", unmuteDrums);

//FadeIn/FadeOut on individual tracks
fadeInGuitarButton.addEventListener("click", fadeInGuitar);
fadeInBassButton.addEventListener("click", fadeInBass);
fadeInPianoButton.addEventListener("click", fadeInPiano);
fadeInDrumsButton.addEventListener("click", fadeInDrums);
fadeOutGuitarButton.addEventListener("click", fadeOutGuitar);
fadeOutBassButton.addEventListener("click", fadeOutBass);
fadeOutPianoButton.addEventListener("click", fadeOutPiano);
fadeOutDrumsButton.addEventListener("click", fadeOutDrums);


