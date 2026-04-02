/* =========================================
   TENTACIONES BRIZ — Main JavaScript
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {

  // ── SIDEBAR TOGGLE (mobile) ──
  const sidebar   = document.getElementById('sidebar');
  const overlay   = document.getElementById('sidebarOverlay');
  const hamburger = document.getElementById('hamburger');

  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('active');
    hamburger.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
  }
  hamburger?.addEventListener('click', () => {
    sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
  });
  overlay?.addEventListener('click', closeSidebar);

  // Close sidebar on nav link click (mobile)
  document.querySelectorAll('.sidebar-nav a').forEach(a => {
    a.addEventListener('click', () => {
      if (window.innerWidth <= 860) closeSidebar();
    });
  });

  // ── ACTIVE NAV LINK on scroll ──
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.sidebar-nav a[href^="#"]');
  const highlightNav = () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
  };
  window.addEventListener('scroll', highlightNav, { passive: true });
  highlightNav();

  // ── SCROLL REVEAL ──
  const reveals = document.querySelectorAll('.reveal');
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 55);
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.10 });
  reveals.forEach(el => revealObs.observe(el));

  // ── GALLERY STRIP ANIMATION ──
  const galleryItems = document.querySelectorAll('.gallery-item');
  if (galleryItems.length) {
    const galleryObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('gi-visible');
          galleryObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    galleryItems.forEach(el => galleryObs.observe(el));
  }

  // ── CATALOG FILTER ──
  window.filterCatalog = (cat, btn) => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.glass-card').forEach(card => {
      const cardCat = card.dataset.cat;
      if (cat === 'all') {
        card.style.display = '';
      } else if (card.classList.contains('featured-card')) {
        card.style.display = (cat === 'pasteles') ? '' : 'none';
      } else {
        card.style.display = (cardCat === cat) ? '' : 'none';
      }
    });
  };

  // ── SMOOTH SCROLL for anchor links ──
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = window.innerWidth <= 860 ? 70 : 0;
        window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
      }
    });
  });

  // ══════════════════════════════════════════
  // LIGHTBOX
  // ══════════════════════════════════════════

  // Crear el lightbox en el DOM
  const lb = document.createElement('div');
  lb.className = 'lightbox-backdrop';
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-modal', 'true');
  lb.setAttribute('aria-label', 'Vista ampliada de imagen');
  lb.innerHTML = `
    <div class="lightbox-inner">
      <button class="lightbox-close" aria-label="Cerrar">✕</button>
      <div class="lightbox-img-wrap">
        <img src="" alt="" id="lb-img">
      </div>
      <div class="lightbox-info">
        <p class="lightbox-badge" id="lb-badge"></p>
        <h3 class="lightbox-title" id="lb-title"></h3>
        <p class="lightbox-desc" id="lb-desc"></p>
        <a href="#" target="_blank" rel="noopener noreferrer" class="lightbox-cta" id="lb-cta">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          </svg>
          Cotizar por WhatsApp
        </a>
      </div>
    </div>
  `;
  document.body.appendChild(lb);

  const lbImg    = lb.querySelector('#lb-img');
  const lbBadge  = lb.querySelector('#lb-badge');
  const lbTitle  = lb.querySelector('#lb-title');
  const lbDesc   = lb.querySelector('#lb-desc');
  const lbCta    = lb.querySelector('#lb-cta');
  const lbClose  = lb.querySelector('.lightbox-close');

  function openLightbox(data) {
    lbImg.src    = data.src;
    lbImg.alt    = data.alt || '';
    lbBadge.textContent = data.badge || '✦ Tentaciones Briz ✦';
    lbTitle.textContent = data.title || '';
    lbDesc.textContent  = data.desc  || '';
    lbCta.href          = data.wa    || 'https://wa.me/528180651356';
    lb.classList.add('lb-open');
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }

  function closeLightbox() {
    lb.classList.remove('lb-open');
    document.body.style.overflow = '';
  }

  lbClose.addEventListener('click', closeLightbox);
  lb.addEventListener('click', e => {
    if (e.target === lb) closeLightbox();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
  });

  // ── Conectar imágenes de las tarjetas del catálogo ──
  document.querySelectorAll('.card-img-wrap').forEach(wrap => {
    wrap.addEventListener('click', () => {
      const img   = wrap.querySelector('img');
      const card  = wrap.closest('.glass-card, article');
      const badge = wrap.querySelector('.card-badge')?.textContent || '';
      const title = card?.querySelector('.card-title')?.textContent || '';
      const desc  = card?.querySelector('.card-desc')?.textContent  || '';
      const wa    = card?.querySelector('.card-cta')?.href          || 'https://wa.me/528180651356';

      openLightbox({ src: img.src, alt: img.alt, badge, title, desc, wa });
    });
  });

  // ── Conectar imágenes de la galería strip ──
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const img   = item.querySelector('img');
      const badge = item.dataset.badge  || '✦ Tentaciones Briz ✦';
      const title = item.dataset.title  || '';
      const desc  = item.dataset.desc   || '';
      const wa    = item.dataset.wa     || 'https://wa.me/528180651356';

      openLightbox({ src: img.src, alt: img.alt, badge, title, desc, wa });
    });
  });

  // ── Conectar imágenes del collage "Nosotros" ──
  document.querySelectorAll('.collage-img').forEach(col => {
    col.style.cursor = 'pointer';
    col.addEventListener('click', () => {
      const img   = col.querySelector('img');
      openLightbox({
        src:   img.src,
        alt:   img.alt,
        badge: '✦ Tentaciones Briz ✦',
        title: img.alt || 'Tentaciones Briz',
        desc:  'Elaborado con ingredientes frescos y mucho amor artesanal.',
        wa:    'https://wa.me/528180651356?text=Hola!%20Vi%20sus%20fotos%20y%20me%20gustar%C3%ADa%20hacer%20un%20pedido%20🍰'
      });
    });
  });

});
