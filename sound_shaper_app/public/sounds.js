console.log('greetings from Sounds, TX!');

var guitar = new Howl({
  urls: ['guitar.m4a'],
  buffer: true
});

var bass = new Howl({
  urls: ['bass.m4a'],
  buffer: true
});

var piano = new Howl({
  urls: ['pianos.m4a'],
  buffer: true
});

var drums = new Howl({
  urls: ['drums.m4a'],
  buffer: true
});

var playButton = document.querySelector('#play-all');
var muteGuitarButton = document.querySelector('#mute-guitar');
var mutePianoButton = document.querySelector('#mute-piano');
var muteDrumsButton = document.querySelector('#mute-drums');
var muteBassButton = document.querySelector('#mute-bass');


var playBack = function(){
	guitar.play();
	bass.play();
	piano.play();
	drums.play();
};

var muteBass = function(){
	bass.mute();
}

var mutePiano = function(){
	piano.mute();
}

var muteGuitar = function(){
	guitar.mute();
}

var muteDrums = function(){
	drums.mute();
}

playButton.addEventListener("click", playBack);
muteBassButton.addEventListener("click", muteBass);
mutePianoButton.addEventListener("click", mutePiano);
muteGuitarButton.addEventListener("click", muteGuitar);
muteDrumsButton.addEventListener("click", muteDrums);







