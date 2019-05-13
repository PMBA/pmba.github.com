var animation = bodymovin.loadAnimation({
  container: document.getElementById('pmbaAnim'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: '../anim/pmba.json'
});

// document.getElementById('pmbaAnim').addEventListener('mouseover', function(){ animation.play(); })