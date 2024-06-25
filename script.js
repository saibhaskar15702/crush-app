var no = document.querySelector('#no');
var yes = document.querySelector('#yes');
var image = document.querySelector('img');
var music = document.querySelector('#music');
var main = document.querySelector('h5');
var cursor = document.querySelector('#cursor');
var body = document.querySelector('#body');

no.addEventListener('mouseenter', function(){
  gsap.to('#no', {
    x: '+=70', // Move 70 pixels to the right
    duration: -1 // Duration for each move
  });
  image.src='https://media1.tenor.com/images/a5291aeaf0075ee44425e8f5d342e5c9/tenor.gif?itemid=15849691'
  main.innerHTML="please dont do this 😥"
});

yes.addEventListener('click', function(){
  image.src='https://media1.tenor.com/images/eb884277a5fd501aacffcdd54b12200d/tenor.gif?itemid=15522289'
  music.play();
  main.innerHTML="hurrahhhhhhhhhhhhh 😍❤️"
  main.style.scale=2
  no.style.display='none';
  yes.style.display='none'
})

body.addEventListener('mousemove', function(dets){
  gsap.to(cursor, {
    x:dets.x,
    y:dets.y
  })  
})


/*touch.addEventListener('mouseenter', function(){
  var viewportWidth = window.innerWidth;
  var viewportHeight = window.innerHeight;

  var randomX = Math.random() * (viewportWidth - touch.offsetWidth);
  var randomY = Math.random() * (viewportHeight - touch.offsetHeight);
  console.log(viewportWidth)
  console.log(viewportHeight)

  gsap.to('#no', {
    x: randomX,
    y: randomY
  });
});*/

