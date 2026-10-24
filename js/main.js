/**
 * BRASA STUDIO — MAIN JAVASCRIPT
 * Interações nativas, sem dependências externas.
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileDrawer();
  initPortfolioStackingCards();
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
    '.result-card, .diff-card, .service-package-card, .plano-card, .testimonial-card, .gallery-card, .cta-card'
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

/**
 * Efeito Stacking Cards com Scroll Progress Bar dinâmico
 * Conforme o usuário faz a rolagem:
 * - Cada cartão fica fixo no topo com position: sticky.
 * - À medida que o cartão seguinte sobe e se sobrepõe, o anterior sofre escala suave (1 para 0.94) e atenuação tridimensional.
 * - A barra de progresso horizontal em degradê laranja/âmbar se preenche em tempo real baseada no progresso da rolagem.
 */
function initPortfolioStackingCards() {
  const stack = document.querySelector('.portfolio-panoramic-stack');
  const cards = Array.from(document.querySelectorAll('.panoramic-card'));
  if (!stack || cards.length === 0) return;

  const offsetStep = 18; // Deslocamento em px entre topos de cartões empilhados
  cards.forEach((card, index) => {
    card.style.setProperty('--stack-offset', `${index * offsetStep}px`);
  });

  let ticking = false;

  const updateStack = () => {
    const stickyTopBase = 90;

    cards.forEach((card, i) => {
      const rect = card.getBoundingClientRect();
      const fillBar = card.querySelector('.progress-bar-fill');
      const stickyTop = stickyTopBase + (i * offsetStep);
      const isPinned = rect.top <= stickyTop + 2;

      const nextCard = cards[i + 1];

      let progress = 0;
      let scale = 1;
      let brightness = 1;

      if (nextCard) {
        const nextRect = nextCard.getBoundingClientRect();
        const nextStickyTop = stickyTopBase + ((i + 1) * offsetStep);

        if (isPinned) {
          // Distância restante para o próximo cartão alcançar sua posição fixa
          const distanceToNext = nextRect.top - nextStickyTop;
          // Intervalo de transição correspondente à altura do cartão mais margem
          const scrollSpan = Math.max(150, card.offsetHeight + 40);

          // Fator de sobreposição de 0 a 1
          const factor = Math.min(1, Math.max(0, 1 - (distanceToNext / scrollSpan)));
          progress = factor;

          // Redução suave de escala (1 para ~0.94) e atenuação sutil de brilho (1 para ~0.70)
          scale = 1 - (factor * 0.055);
          brightness = 1 - (factor * 0.30);
        } else {
          progress = 0;
          scale = 1;
          brightness = 1;
        }
      } else {
        // Último cartão da pilha: preenche durante a permanência no topo
        if (isPinned) {
          const parentRect = stack.getBoundingClientRect();
          const remainingScroll = parentRect.bottom - (stickyTop + card.offsetHeight);
          const scrollSpan = Math.max(120, card.offsetHeight * 0.6);

          if (remainingScroll <= 0) {
            progress = 1;
          } else {
            progress = Math.min(1, Math.max(0, 1 - (remainingScroll / scrollSpan)));
          }
        } else {
          progress = 0;
        }
        scale = 1;
        brightness = 1;
      }

      // Atualiza largura da barra de progresso em gradiente
      if (fillBar) {
        fillBar.style.width = `${Math.min(100, Math.max(0, progress * 100)).toFixed(1)}%`;
      }

      // Aplica escala e iluminação (respeitando acessibilidade)
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        card.style.transform = `scale(${scale.toFixed(4)})`;
        card.style.filter = brightness < 1 ? `brightness(${brightness.toFixed(3)})` : 'none';
      }
    });
  };

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateStack();
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  updateStack();
}



