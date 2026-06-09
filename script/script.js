const header = document.querySelector('[data-scroll]');
const revealTargets = document.querySelectorAll('.section, .feature-image, .local-images figure, .plan-main, .data-block');
revealTargets.forEach(el => el.setAttribute('data-reveal',''));
const io = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){ entry.target.classList.add('visible'); }
  });
},{threshold:.12});
revealTargets.forEach(el=>io.observe(el));
window.addEventListener('scroll',()=>{
  header.classList.toggle('is-scrolled', window.scrollY > 40);
});

// Subtle parallax / premium motion
const heroBg = document.querySelector('.hero-bg');
let ticking = false;
function updateMotion(){
  const y = window.scrollY || 0;
  if(heroBg){
    const offset = Math.min(44, y * 0.035);
    heroBg.style.setProperty('--scrollShift', offset + 'px');
  }
  ticking = false;
}
window.addEventListener('scroll',()=>{
  if(!ticking){
    requestAnimationFrame(updateMotion);
    ticking = true;
  }
},{passive:true});
