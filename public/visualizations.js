console.log('visualizer linked');

var dancer = new Dancer ();

var a = new Audio();

a.setVolume = function (){
	this.mute;
}

  //  kick = dancer.createKick({
  //     onKick: function ( mag ) {
  //       console.  log('Kick!');
  //     },
  //     offKick: function ( mag ) {
  //       console.log('no kick :(');
  //     }
  //   });

  // kick.on();

// (function(){

//   'use strict';
  
//   function Anaglyph( options ) {
//     this.options = options;
    
//     this.width = 250;
//     this.height = 250;
    
//     this.canvas = document.createElement( 'canvas' );
//     this.ctx = this.canvas.getContext( '2d' );
//     this.canvas.width = this.width;
//     this.canvas.height = this.height;
//     document.body.appendChild( this.canvas );
    
//     this.orbRed = {};
//     this.orbCyan = {};
    
//     this.shake = 0;
//     this.shakeDecay = 0.9;
//   this.shakeMax = 30;
//     this.tick = 0;
        
//     this.setupDancer();
//     this.reset();
//     //this.bindEvents();
//     this.step();
//   }
  
//   Anaglyph.prototype.setupDancer = function() {
//     var self = this;
//     this.dancer = new Dancer();
//     this.kick = this.dancer.createKick({
//       onKick: function() {
//         self.shake = self.shakeMax;
//       },
//       offKick: function() {
//       }
//     }).on();
//     this.dancer.bind( 'loaded', function() {
//       self.bindEvents();
//       document.body.className = 'loaded';
//     });
//     this.dancer.load( { src: 'drums.m4a' } );
//   };
  
//   Anaglyph.prototype.reset = function() {
//     this.orbRed.radiusBase = 3;
//     this.orbRed.radius = this.orbRed.radiusBase;
//     this.orbRed.xBase = this.orbRed.x = this.width / 2;
//     this.orbRed.yBase = this.orbRed.y = this.height / 2;
//     this.orbRed.hue = 0;
//   this.orbRed.alpha = 0.1;
    
//     this.orbCyan.radiusBase = 5;
//     this.orbCyan.radius = this.orbCyan.radiusBase;
//     this.orbCyan.xBase = this.orbCyan.x = this.width / 2;
//     this.orbCyan.yBase = this.orbCyan.y = this.height / 2;
//     this.orbCyan.hue = 180;
//   this.orbCyan.alpha = 0.1;
//   };
  
//   Anaglyph.prototype.update = function() {
//     if( this.shake > 0 ) {
//       this.shake *= this.shakeDecay;
//     }
    
//     var xShake = this.rand( -this.shake / 2, this.shake / 2 );
//     var yShake = this.rand( -this.shake / 2, this.shake / 2 );
    
//     this.orbRed.x = this.orbRed.xBase + xShake;
//     this.orbCyan.x = this.orbCyan.xBase -xShake;
//     this.orbRed.y = this.orbRed.yBase + yShake;
//     this.orbCyan.y = this.orbCyan.yBase -yShake;
//     this.orbRed.radius = this.orbRed.radiusBase + this.shake * 2;
//     this.orbCyan.radius = this.orbCyan.radiusBase + this.shake * 2;
//   this.orbRed.alpha = 0.1 + ( this.shake / this.shakeMax ) * 0.9;
//     this.orbCyan.alpha = 0.1 + ( this.shake / this.shakeMax ) * 0.9;
//   };
  
//   Anaglyph.prototype.render = function() {
//     this.ctx.globalCompositeOperation = 'source-over';
//     this.ctx.fillStyle = 'rgba(0, 0, 0, 0.75)';
//     this.ctx.fillRect( 0, 0, this.width, this.height )
    
//     this.ctx.globalCompositeOperation = 'lighter';
    
//     this.ctx.shadowBlur = 10;
    
//     this.ctx.shadowColor = 'hsla(' + this.orbRed.hue + ', 100%, 50%, ' + this.orbRed.alpha + ')';
//     this.ctx.fillStyle = 'hsla(' + this.orbRed.hue + ', 100%, 50%, ' + this.orbRed.alpha + ')';
//     this.ctx.beginPath();
//     this.ctx.arc( this.orbRed.x, this.orbRed.y, this.orbRed.radius, 0, Math.PI * 2 );
//     this.ctx.fill();
    
//     this.ctx.shadowColor = 'hsla(' + this.orbCyan.hue + ', 100%, 50%, ' + this.orbCyan.alpha + ')';
//     this.ctx.fillStyle = 'hsla(' + this.orbCyan.hue + ', 100%, 50%, ' + this.orbCyan.alpha + ')';
//     this.ctx.beginPath();
//     this.ctx.arc( this.orbCyan.x, this.orbCyan.y, this.orbCyan.radius, 0, Math.PI * 2 );
//     this.ctx.fill();
 
//     this.ctx.shadowBlur = 0;
    
//     this.ctx.globalCompositeOperation = 'source-over';
//     this.ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
//     for( var i = 0; i < ~~this.height / 2; i++ ) {
//       this.ctx.fillRect( 0, i * 2, this.width, 1 );
//     }
//   };
  
//   Anaglyph.prototype.mousedownCallback = function( e ) {
//     if( this.dancer.isPlaying() ){
//       this.dancer.pause();
//     } else {
//       this.dancer.play();
//     }    
//   };
  
//   Anaglyph.prototype.bindEvents = function() {
//     window.addEventListener( 'mousedown', this.mousedownCallback.bind( this ), false )
//   };
  
//   Anaglyph.prototype.rand = function( min, max ){
//     return Math.random() * (max - min) + min;
//   }
  
//   Anaglyph.prototype.step = function() {
//     requestAnimationFrame( this.step.bind( this ) );
//     this.update();
//     this.render();
//     this.tick++;
//   };
  
//   window.Anaglyph = Anaglyph;
  
// }());


// new Anaglyph({});



