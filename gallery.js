function openLightbox(src,title,desc){
  document.getElementById('lb-img').innerHTML='<img src="'+src+'" onerror="this.style.display=\'none\'"/>';
  document.getElementById('lb-title').textContent=title||'';
  document.getElementById('lb-desc').textContent=desc||'';
  document.getElementById('lightbox').classList.add('open');
}
function closeLightbox(e){if(!e||e.target===document.getElementById('lightbox'))document.getElementById('lightbox').classList.remove('open');}
const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}});},{threshold:0.1});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
