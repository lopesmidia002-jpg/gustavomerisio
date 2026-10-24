/**
 * BRASA STUDIO — MAIN JAVASCRIPT
 * Interações nativas, sem dependências externas.
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileDrawer();
  initGalleryLightbox();
  initFaqAccordion();
  initBackToTop();
  initFormsFeedback();
  initScrollReveal();
});

/**
 * Controle de scroll do cabeçalho
 */
function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/**
 * Controle de abertura e fechamento do menu mobile / drawer
 */
function initMobileDrawer() {
  const menuToggle = document.getElementById('menuToggle');
  const drawerClose = document.getElementById('drawerClose');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('drawerOverlay');
  const drawerLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuToggle || !drawer || !overlay) return;

  const openDrawer = () => {
    drawer.classList.add('is-active');
    overlay.classList.add('is-active');
    drawer.setAttribute('aria-hidden', 'false');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('is-active');
    overlay.classList.remove('is-active');
    drawer.setAttribute('aria-hidden', 'true');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  menuToggle.addEventListener('click', openDrawer);

  if (drawerClose) {
    drawerClose.addEventListener('click', closeDrawer);
  }

  overlay.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-active')) {
      closeDrawer();
    }
  });
}

/**
 * Controle de Lightbox da Galeria de Detalhes
 */
function initGalleryLightbox() {
  const modal = document.getElementById('gallery-lightbox');
  const modalImg = document.getElementById('lightbox-img');
  const modalCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementById('lightbox-close');
  const cards = document.querySelectorAll('.gallery-card');

  if (!modal || !modalImg || !modalCaption) return;

  const openLightbox = (card) => {
    const img = card.querySelector('img');
    const caption = card.getAttribute('data-caption') || (img ? img.alt : '');
    if (!img) return;

    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modalCaption.textContent = caption;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  cards.forEach(card => {
    card.addEventListener('click', () => openLightbox(card));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(card);
      }
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeLightbox);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeLightbox();
    }
  });
}

/**
 * Controle de Acordeão do FAQ com Acessibilidade (WAI-ARIA)
 */
function initFaqAccordion() {
  const faqButtons = document.querySelectorAll('.faq-question-btn');
  if (!faqButtons.length) return;

  faqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const parentItem = btn.closest('.faq-item');
      if (!parentItem) return;

      const isOpen = parentItem.classList.contains('is-open');

      // Opcional: fechar outros itens abertos para manter acordeão limpo
      document.querySelectorAll('.faq-item.is-open').forEach(item => {
        if (item !== parentItem) {
          item.classList.remove('is-open');
          const otherBtn = item.querySelector('.faq-question-btn');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      if (isOpen) {
        parentItem.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
      } else {
        parentItem.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/**
 * Rolagem suave para o topo
 */
function initBackToTop() {
  const backBtn = document.getElementById('backToTop');
  if (!backBtn) return;

  backBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * Feedback amigável para envio de formulários sem reload
 */
function initFormsFeedback() {
  const ctaForm = document.getElementById('ctaForm');
  const ctaMsg = document.getElementById('ctaFeedbackMsg');
  if (ctaForm && ctaMsg) {
    ctaForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = ctaForm.querySelector('input[type="email"]');
      if (input && input.value) {
        ctaMsg.textContent = '✦ Perfeito! Entraremos em contato em até 1 dia útil.';
        ctaMsg.classList.add('is-visible');
        ctaForm.reset();
        setTimeout(() => ctaMsg.classList.remove('is-visible'), 6000);
      }
    });
  }

  const newsForm = document.getElementById('newsletterForm');
  const newsMsg = document.getElementById('newsFeedbackMsg');
  if (newsForm && newsMsg) {
    newsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsForm.querySelector('input[type="email"]');
      if (input && input.value) {
        newsMsg.textContent = '✦ Inscrição confirmada na carta semanal.';
        newsMsg.classList.add('is-visible');
        newsForm.reset();
        setTimeout(() => newsMsg.classList.remove('is-visible'), 5000);
      }
    });
  }
}

/**
 * Animação de revelação gradual com IntersectionObserver
 */
function initScrollReveal() {
  // Respeita preferência do usuário de movimento reduzido
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const elementsToReveal = document.querySelectorAll(
    '.result-card, .diff-card, .panoramic-card, .service-package-card, .plano-card, .testimonial-card, .gallery-card, .cta-card'
  );

  if (!('IntersectionObserver' in window)) {
    elementsToReveal.forEach(el => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1
  });

  elementsToReveal.forEach(el => {
    el.classList.add('reveal-on-scroll');
    observer.observe(el);
  });
}



