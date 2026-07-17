/* Portfolio Margarita Naluanga — interacciones
   Animaciones inspiradas en bepatrickdavid.com:
   letras que suben, skew por velocidad de scroll, cursor propio. */

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const canHover = window.matchMedia('(hover: hover)').matches;

// ---------- Modo claro / oscuro persistente ----------
document.getElementById('theme-toggle').addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  localStorage.setItem('theme', next);
});

// ---------- Idioma ES / EN ----------
const EN = {
  'nav.proyectos': '<span class="mono">01</span> Projects',
  'nav.sobre': '<span class="mono">02</span> About',
  'nav.tray': '<span class="mono">03</span> Journey',
  'nav.contacto': '<span class="mono">04</span> Contact',
  'hero.l1': 'I compose digital',
  'hero.l2': 'solutions for a more',
  'hero.l3': '<em>human world.</em>',
  'hero.sub': 'I\'m <strong>Margarita Naluanga</strong>, a singer and Junior Full Stack web developer. Music taught me to listen, create and connect with people. Today I bring that same outlook to building digital products, using code and artificial intelligence to craft useful solutions, automate processes and bring purpose-driven projects to life.',
  'hero.btn1': 'View projects <span aria-hidden="true">↓</span>',
  'hero.btn2': 'Contact',
  'status.ok': '● available',
  'status.loc': 'Barcelona, Spain',
  'status.dim': 'en · UTF-8',
  'marquee': 'React · Next.js · Laravel · n8n · Generative AI · SQL · Vibe Coding · Scrum · ',
  'kick.proyectos': 'projects',
  'kick.sobre': 'about',
  'kick.tray': 'journey',
  'kick.stack': 'stack',
  'kick.contacto': 'contact',
  'h2.proyectos': 'Selected <em>projects</em>',
  'lede.proyectos': '<em>"Every project is born from a human need. I don\'t just deliver code, I build systems that sustain identities and values."</em>',
  'moaba.bar': 'moaba — coming soon',
  'moaba.badge': 'in production',
  'moaba.sub': 'A window to African cinema',
  'moaba.human': '<em>An exciting project of great cultural value that seeks to bring African cinema — with special attention to Equatorial Guinea — closer to new audiences through a digital platform.</em>',
  'moaba.desc': 'As part of the team, I collaborate on building the digital ecosystem that will bring this platform to life and help the stories, talent and creativity of our cinema reach any screen.',
  'moaba.chips': '<li>Streaming</li><li>Co-creation</li><li>Cultural Heritage</li>',
  'afrolab.sub': 'Music &amp; Networking Lab',
  'afrolab.human': '<em>A project born in Barcelona in 2021 to connect artists of African descent and creators influenced by <strong>Afrobeats, Hip Hop, Rap</strong> and other urban music. Afrolab Basement brings together musicians, DJs, producers and music lovers in a space where talent, collaboration and community take centre stage.</em>',
  'afrolab.desc': 'As the creator and Product Owner of the project, I lead the experience design, the organisation of initiatives and the development of the digital platform that powers the community, combining creativity, technology and strategic vision to give visibility to new talent and create opportunities for connection.',
  'afrolab.chips': '<li>Community</li><li>Music</li><li>Networking</li><li>Product Builder</li>',
  'aliada.sub': 'Lead Generation Engineering &amp; Strategy',
  'aliada.human': '<em>A startup validated in the <strong>Ruta Emprendimiento</strong> programme of <strong>Phimister School</strong> (Barcelona Chamber of Commerce).</em>',
  'aliada.desc': 'Technical development of a sales infrastructure for women entrepreneurs. It includes high-conversion forms and an automated switchboard with up to 20 simultaneous lines, so that no small business loses clients.',
  'aliada.chips': '<li>Entrepreneurship</li><li>AI</li><li>Next.js</li><li>n8n</li>',
  'eseyasa.human': '<em>One of the first booking agencies in Spain managed entirely by people of African descent.</em>',
  'eseyasa.desc': 'Professionalising talent through digital assets. We combine traditional management with technical optimisation (SEO and automation) so that the African heartbeat travels to global stages.',
  'eseyasa.chips': '<li>Booking</li><li>Management</li><li>Inclusion</li>',
  'dada.human': '<em>May artists\' work live online as well as it does in the exhibition room.</em>',
  'dada.desc': 'Development and maintenance of a digital environment where artists\' work lives with the same intensity as in an exhibition room. We use advanced WordPress and multimedia management to ensure the digital presence is a faithful reflection of the artistic quality.',
  'h2.sobre': 'Coding is another way of <em>composing</em>',
  'about.p1': 'I\'m a singer, Junior Full Stack web developer and Product Builder. My journey in music taught me that technique only makes sense when it serves to connect people, convey ideas and solve real needs.',
  'about.p2': 'Today I apply that same mindset to building digital products. After more than <strong>2,500 hours of training</strong> and hands-on experience, I enjoy creating apps, automations and platforms that simplify processes, boost projects and have a positive impact on the people and communities who use them.',
  'about.p3': 'I love combining creativity, technology and artificial intelligence to turn ideas into functional, scalable, people-centred solutions. To me, building software is another way of creating: listening to a need, designing a solution and building it with the same dedication with which a song is composed.',
  'h2.tray': 'git log <em>--learning</em>',
  'lede.tray': 'Years tuning the instrument, from the web to data.',
  't26.commit': '<span class="hash">a3f9c2e</span> feat(data): official level 3',
  't26.h3': 'IFCD0112 Certificate: Object-Oriented Programming and Databases',
  't24.commit': '<span class="hash">f47a1c9</span> feat(content): digital creation',
  't24.h3': 'Digital Content Creation',
  't24.org': 'Phimister School · Barcelona Chamber of Commerce',
  't23.commit': '<span class="hash">7b1d04f</span> feat(fullstack): intensive bootcamp',
  't23.h3': 'Full Stack Web Developer Bootcamp',
  't22.commit': '<span class="hash">c58e91a</span> feat(growth): marketing + AI',
  't22.h3': 'Digital Marketing and AI Automations',
  't21.commit': '<span class="hash">e04b7d3</span> feat(web): first line of code',
  't21.h3': 'IFCD0110 Certificate: Website Development and Publishing',
  't09.commit': '<span class="hash">1a0b2c3</span> init: professional foundations',
  't09.h3': 'Diploma in Tourism',
  't09.org': 'Universitat de Girona · The foundations of my early professional career',
  'h2.stack': 'Composition <em>tools</em>',
  'st.h.backend': 'backend-and-data/',
  'st.h.auto': 'automation-and-ai/',
  'st.backend': '<li>PHP (Laravel)</li><li>Python (Django)</li><li>SQL Server</li><li>MySQL</li><li>Relational Design</li>',
  'st.auto': '<li>n8n</li><li>API Integration</li><li>Generative AI</li><li>Prompt Engineering</li>',
  'stack.note': '<em>"Just as a musician explores new harmonies, my tech stack is constantly expanding. My training allows me to adopt any new language or framework a project requires, with agility. <a href="#contacto">Shall we talk about your next challenge?</a>"</em>',
  'h2.contacto': 'Shall we compose <em>something</em>?',
  'lede.contacto': 'Open to purpose-driven projects: digital product, automation and social impact.',
  'footer.commit': 'git commit -m <span class="c-str">"available for new projects"</span>',
  'footer.copy': '© 2026 Margarita Naluanga · Barcelona · Composed with code, AI and a good ear.',
  'mind.1': '"Creativity"',
  'mind.2': '"Product"',
  'mind.3': '"Technology"',
  'cv.warn': 'To care for the environment, the CV is generated in light mode only, with ink-saving colours. In the print dialog, choose "Save as PDF".',
  'cv.cancel': 'Cancel',
  'cv.go': 'Continue',
};

const esTexts = {};
document.querySelectorAll('[data-i18n]').forEach((el) => {
  const k = el.dataset.i18n;
  if (!(k in esTexts)) esTexts[k] = el.innerHTML;
});

const langBtn = document.getElementById('lang-toggle');
const setLang = (lang) => {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const k = el.dataset.i18n;
    const txt = lang === 'en' ? EN[k] : esTexts[k];
    if (txt !== undefined) el.innerHTML = txt;
  });
  document.documentElement.lang = lang;
  document.title = lang === 'en'
    ? 'Margarita Naluanga — Full Stack Developer & Product Builder'
    : 'Margarita Naluanga — Desarrolladora Full Stack & Product Builder';
  langBtn.querySelectorAll('.lt-op').forEach((s) => {
    s.classList.toggle('on', s.dataset.l === lang);
  });
  localStorage.setItem('lang', lang);
};
if ((localStorage.getItem('lang') || 'es') === 'en') setLang('en');
langBtn.addEventListener('click', () => {
  setLang(document.documentElement.lang === 'en' ? 'es' : 'en');
});

// ---------- CV en PDF: desplegable de idioma + aviso eco ----------
const cvBtn = document.getElementById('cv-btn');
const cvDrop = document.getElementById('cv-drop');
const cvModal = document.getElementById('cv-modal');
let cvLang = 'es';

cvBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  cvDrop.hidden = !cvDrop.hidden;
  cvBtn.setAttribute('aria-expanded', String(!cvDrop.hidden));
});
document.addEventListener('click', () => { cvDrop.hidden = true; cvBtn.setAttribute('aria-expanded', 'false'); });

cvDrop.querySelectorAll('[data-cvlang]').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    cvLang = btn.dataset.cvlang;
    cvDrop.hidden = true;
    cvModal.hidden = false;
  });
});
document.getElementById('cv-cancel').addEventListener('click', () => { cvModal.hidden = true; });
document.getElementById('cv-go').addEventListener('click', () => {
  cvModal.hidden = true;
  const url = `cv.html?lang=${cvLang}&print=1`;
  const win = window.open(url, '_blank');
  if (!win) location.assign(url); // popup bloqueado → misma pestaña
});
cvModal.addEventListener('click', (e) => { if (e.target === cvModal) cvModal.hidden = true; });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') cvModal.hidden = true; });

// ---------- Hero: reveal letra a letra ----------
document.querySelectorAll('.split').forEach((line, lineIndex) => {
  let charIndex = 0;
  const walk = (node) => {
    [...node.childNodes].forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) {
        const frag = document.createDocumentFragment();
        // Agrupa las letras por palabra: el salto de línea solo ocurre
        // entre palabras, nunca dejando letras sueltas
        child.textContent.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) {
            frag.appendChild(document.createTextNode(part));
            return;
          }
          const word = document.createElement('span');
          word.className = 'word';
          [...part].forEach((ch) => {
            const span = document.createElement('span');
            span.className = 'ch';
            span.textContent = ch;
            span.style.animationDelay = `${lineIndex * 0.16 + charIndex * 0.022}s`;
            charIndex++;
            word.appendChild(span);
          });
          frag.appendChild(word);
        });
        child.replaceWith(frag);
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        walk(child);
      }
    });
  };
  if (!reducedMotion) walk(line);
});

// ---------- Terminal: escritura del comando ----------
const typed = document.getElementById('typed');
if (typed && !reducedMotion) {
  const full = 'whoami → dev full stack & product builder';
  typed.textContent = '';
  let i = 0;
  const tick = () => {
    typed.textContent = full.slice(0, ++i);
    if (i < full.length) setTimeout(tick, i < 7 ? 90 : 34);
  };
  setTimeout(tick, 600);
}

// ---------- Aparición al hacer scroll ----------
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !reducedMotion) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add('visible'));
}

// ---------- Skew por velocidad de scroll ----------
if (!reducedMotion) {
  const skewEls = document.querySelectorAll('[data-skew]');
  let lastY = window.scrollY;
  let velocity = 0;

  const loop = () => {
    const y = window.scrollY;
    velocity += (y - lastY - velocity) * 0.08;
    lastY = y;
    const skew = Math.max(-2.5, Math.min(2.5, velocity * 0.09));
    skewEls.forEach((el) => {
      el.style.transform = Math.abs(skew) < 0.05 ? '' : `skewY(${skew}deg)`;
    });
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
}

// ---------- Cursor propio ----------
const cursor = document.querySelector('.cursor');
if (cursor && canHover && !reducedMotion) {
  let cx = -100, cy = -100, tx = -100, ty = -100;

  window.addEventListener('pointermove', (e) => {
    tx = e.clientX;
    ty = e.clientY;
    cursor.classList.add('on');
  });
  document.documentElement.addEventListener('pointerleave', () => cursor.classList.remove('on'));

  const follow = () => {
    cx += (tx - cx) * 0.14;
    cy += (ty - cy) * 0.14;
    cursor.style.left = cx + 'px';
    cursor.style.top = cy + 'px';
    requestAnimationFrame(follow);
  };
  requestAnimationFrame(follow);

  document.querySelectorAll('a, button').forEach((el) => {
    el.addEventListener('mouseenter', () => cursor.classList.add('grow'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('grow'));
  });
}

// ---------- Vídeos: reproducir solo cuando están en pantalla ----------
const videos = document.querySelectorAll('.project video');
if ('IntersectionObserver' in window) {
  const vio = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const v = entry.target;
      if (entry.isIntersecting) v.play().catch(() => {});
      else v.pause();
    });
  }, { threshold: 0.25 });
  videos.forEach((v) => vio.observe(v));
}
