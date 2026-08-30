/* ---------- 1. El nombre se "descifra" al cargar ---------- */
(function(){
  const el = document.querySelector('.decode');
  if(!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const final = el.dataset.text || el.textContent.trim();
  const pool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&@?';
  let frame = 0;
  el.textContent = '';
  const id = setInterval(() => {
    let out = '';
    for(let i = 0; i < final.length; i++){
      if(final[i] === ' '){ out += ' '; continue; }
      out += (i < frame / 3) ? final[i] : pool[Math.floor(Math.random() * pool.length)];
    }
    el.textContent = out;
    frame++;
    if(frame / 3 > final.length){ clearInterval(id); el.textContent = final; }
  }, 35);
})();

/* ---------- 2. Aparición al hacer scroll ---------- */
(function(){
  const items = document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){
    items.forEach(i => i.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){ e.target.classList.add('is-in'); io.unobserve(e.target); }
    });
  }, {threshold:.12});
  items.forEach(i => io.observe(i));
})();

/* ---------- 3. Enlace activo en la navegación ---------- */
(function(){
  const links = [...document.querySelectorAll('.nav__links a')];
  const secs  = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        links.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === '#' + e.target.id));
      }
    });
  }, {rootMargin:'-45% 0px -50% 0px'});
  secs.forEach(s => io.observe(s));
})();

/* ---------- 4. Demo Vigenère ---------- */
(function(){
  const txt = document.getElementById('v-txt');
  const key = document.getElementById('v-key');
  const out = document.getElementById('v-out');
  if(!txt || !key || !out) return;

  const A = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const norm = s => s.toUpperCase()
                     .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
                     .replace(/[^A-Z ]/g,'');

  function vigenere(){
    const m = norm(txt.value);
    const k = norm(key.value).replace(/ /g,'');
    if(!k){ out.textContent = 'Escribe una clave con letras.'; return; }
    let j = 0, res = '';
    for(const ch of m){
      if(ch === ' '){ res += ' '; continue; }
      const shift = A.indexOf(k[j % k.length]);
      res += A[(A.indexOf(ch) + shift) % 26];
      j++;
    }
    out.textContent = res || '—';
  }
  txt.addEventListener('input', vigenere);
  key.addEventListener('input', vigenere);
  vigenere();
})();
