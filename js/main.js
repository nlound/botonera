

let hellodarkness = 'hellodarkness';
let multiplehorn = 'multiplehorn';
let pasystem = 'pasystem';
let rimshot = 'rimshot';
let sadmusic = 'sadmusic';
let singlehorn = 'singlehorn';
let stadiumorgan = 'stadiumorgan';
let sexysax = 'sexysax';
let turndown = 'turndown';

createjs.Sound.registerSound('mp3/hellodarkness.mp3', hellodarkness ); 
createjs.Sound.registerSound('mp3/multiplehorn.mp3', multiplehorn ); 
createjs.Sound.registerSound('mp3/pasystem.mp3', pasystem ); 
createjs.Sound.registerSound('mp3/rimshot.mp3', rimshot ); 
createjs.Sound.registerSound('mp3/sadmusic.mp3', sadmusic ); 
createjs.Sound.registerSound('mp3/singlehorn.mp3', singlehorn ); 
createjs.Sound.registerSound('mp3/stadiumorgan.mp3', stadiumorgan ); 
createjs.Sound.registerSound('mp3/sexysax.mp3', sexysax );
createjs.Sound.registerSound('mp3/turndown.mp3', turndown );


createjs.Sound.play(hellodarkness);
createjs.Sound.play(multiplehorn);
createjs.Sound.play(pasystem);
createjs.Sound.play(rimshot);
createjs.Sound.play(sadmusic);
createjs.Sound.play(singlehorn);
createjs.Sound.play(stadiumorgan);
createjs.Sound.play(sexysax);
createjs.Sound.play(turndown);
 




 $('.btn').click( ev => {
  createjs.Sound.stop();
  if (ev.target.dataset.sound){
    createjs.Sound.play(ev.target.dataset.sound);
  }
 });