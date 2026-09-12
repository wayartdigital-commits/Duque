(function () {
  'use strict';

  /* ---------------------------------------------------------
     Ponto de quebra "mobile" — telemóveis, e tablets em vertical
     (para corresponder às media queries do CSS)
  --------------------------------------------------------- */
  var MOBILE_QUERY = '(max-width:760px), (min-width:761px) and (max-width:1024px) and (orientation:portrait)';

  /* ---------------------------------------------------------
     Altura de ecrã fixa — evita que o layout "salte" quando a
     barra de endereço do telemóvel aparece/desaparece no scroll
  --------------------------------------------------------- */
  var lastViewportWidth = window.innerWidth;
  var sobreGrid = document.querySelector('#sobre > .sobre__grid');
  var sobreHeightMQ = window.matchMedia(MOBILE_QUERY);

  function setViewportHeight() {
    document.documentElement.style.setProperty('--vh', window.innerHeight * 0.01 + 'px');
  }

  function lockSobreHeight() {
    if (!sobreGrid) return;
    if (sobreHeightMQ.matches) {
      sobreGrid.style.height = (window.innerHeight - 90) + 'px';
    } else {
      sobreGrid.style.height = '';
    }
  }

  /* ---------------------------------------------------------
     Arrastar com o rato (para testar em computador) — os
     carrosséis já respondem ao dedo em ecrãs táteis reais
  --------------------------------------------------------- */
  function enableMouseDrag(viewport) {
    if (!viewport) return;
    var isDown = false;
    var dragged = false;
    var startX = 0;
    var startScrollLeft = 0;

    viewport.addEventListener('mousedown', function (e) {
      if (e.target.closest('.btn')) return;
      isDown = true;
      dragged = false;
      startX = e.clientX;
      startScrollLeft = viewport.scrollLeft;
    });

    window.addEventListener('mousemove', function (e) {
      if (!isDown) return;
      var delta = e.clientX - startX;
      if (Math.abs(delta) > 6) {
        if (!dragged) viewport.style.scrollSnapType = 'none';
        dragged = true;
      }
      if (dragged) viewport.scrollLeft = startScrollLeft - delta;
    });

    window.addEventListener('mouseup', function () {
      if (!isDown) return;
      isDown = false;
      if (dragged) {
        viewport.style.scrollSnapType = '';
        viewport.dispatchEvent(new Event('scroll'));
      }
    });

    viewport.addEventListener('click', function (e) {
      if (dragged) {
        e.preventDefault();
        e.stopPropagation();
        dragged = false;
      }
    }, true);
  }

  setViewportHeight();
  lockSobreHeight();
  window.addEventListener('resize', function () {
    if (window.innerWidth === lastViewportWidth) return;
    lastViewportWidth = window.innerWidth;
    setViewportHeight();
    lockSobreHeight();
  });

  var topbar = document.getElementById('topbar');
  var snap = document.getElementById('snapContainer');

  /* ---------------------------------------------------------
     Mantém a secção atual ao dar refresh (não volta à secção 1)
  --------------------------------------------------------- */
  var SCROLL_KEY = 'duque-scroll-section';
  (function restoreScrollPosition() {
    var savedId = sessionStorage.getItem(SCROLL_KEY);
    if (!savedId || savedId === 'hero') return;
    var target = document.getElementById(savedId);
    if (!target) return;
    snap.scrollTop += target.getBoundingClientRect().top - snap.getBoundingClientRect().top;
  })();

  /* A barra do topo mantém-se sempre visível ao fazer scroll */

  /* ---------------------------------------------------------
     Secções: aparecem/desaparecem ao entrar e sair do ecrã
  --------------------------------------------------------- */
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      entry.target.classList.toggle('is-visible', entry.isIntersecting);
      if (entry.isIntersecting) {
        sessionStorage.setItem(SCROLL_KEY, entry.target.id);
      }
      if (entry.target.id === 'menu') {
        menuVisible = entry.isIntersecting;
        if (menuVisible && cardsMQ.matches) goToCard(0, false);
        refreshCardAutoplay();
      }
    });
  }, { root: snap, threshold: 0.35 });
  document.querySelectorAll('.section').forEach(function (section) {
    revealObserver.observe(section);
  });

  /* ---------------------------------------------------------
     Menu mobile
  --------------------------------------------------------- */
  var navToggle = document.getElementById('navToggle');
  navToggle.addEventListener('click', function () {
    var isOpen = topbar.classList.toggle('nav-open');
    navToggle.classList.toggle('is-open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  document.querySelectorAll('#siteNav a, .topbar__actions a').forEach(function (a) {
    a.addEventListener('click', function () {
      topbar.classList.remove('nav-open');
      navToggle.classList.remove('is-open');
    });
  });

  /* ---------------------------------------------------------
     Slider de portfólio (secção "Sobre")
  --------------------------------------------------------- */
  var sliderViewport = document.getElementById('sliderViewport');
  enableMouseDrag(sliderViewport);
  var sliderTrack = document.getElementById('sliderTrack');
  var slides = document.querySelectorAll('#sliderTrack .slider__slide');
  var dotsWrap = document.getElementById('sliderDots');
  var sliderIndex = 0;
  var sliderTimer = null;
  var sliderMQ = window.matchMedia(MOBILE_QUERY);

  slides.forEach(function (_, i) {
    var dot = document.createElement('span');
    if (i === 0) dot.classList.add('is-active');
    dot.addEventListener('click', function () { goToSlide(i); restartSlider(); });
    dotsWrap.appendChild(dot);
  });
  var sliderDots = dotsWrap.querySelectorAll('span');

  function goToSlide(i, smooth) {
    sliderDots[sliderIndex].classList.remove('is-active');
    sliderIndex = i;
    if (sliderMQ.matches) {
      sliderViewport.scrollTo({
        left: sliderIndex * sliderViewport.clientWidth,
        behavior: smooth === false ? 'auto' : 'smooth'
      });
    } else {
      sliderTrack.style.transform = 'translateX(-' + (sliderIndex * 100) + '%)';
    }
    sliderDots[sliderIndex].classList.add('is-active');
  }

  function nextSlide() {
    goToSlide((sliderIndex + 1) % slides.length);
  }

  function prevSlide() {
    goToSlide((sliderIndex - 1 + slides.length) % slides.length);
  }

  function restartSlider() {
    clearInterval(sliderTimer);
    sliderTimer = setInterval(nextSlide, 5000);
  }
  if (slides.length) restartSlider();

  var sliderPrevBtn = document.getElementById('sliderPrev');
  var sliderNextBtn = document.getElementById('sliderNext');
  if (sliderPrevBtn) sliderPrevBtn.addEventListener('click', function () { prevSlide(); restartSlider(); });
  if (sliderNextBtn) sliderNextBtn.addEventListener('click', function () { nextSlide(); restartSlider(); });

  /* Arrastar com o dedo no mobile — scroll nativo */
  var sliderScrollDebounce = null;
  if (sliderViewport) {
    sliderViewport.addEventListener('scroll', function () {
      if (!sliderMQ.matches) return;
      clearTimeout(sliderScrollDebounce);
      sliderScrollDebounce = setTimeout(function () {
        var newIndex = Math.round(sliderViewport.scrollLeft / sliderViewport.clientWidth);
        if (newIndex !== sliderIndex) {
          sliderDots[sliderIndex].classList.remove('is-active');
          sliderIndex = newIndex;
          sliderDots[sliderIndex].classList.add('is-active');
        }
        restartSlider();
      }, 120);
    }, { passive: true });
  }

  function updateSliderMode(mq) {
    if (mq.matches) {
      sliderTrack.style.transform = '';
      sliderViewport.scrollLeft = sliderIndex * sliderViewport.clientWidth;
    } else {
      sliderViewport.scrollLeft = 0;
      sliderTrack.style.transform = 'translateX(-' + (sliderIndex * 100) + '%)';
    }
  }
  if (slides.length) {
    updateSliderMode(sliderMQ);
    sliderMQ.addEventListener('change', updateSliderMode);
  }

  /* ---------------------------------------------------------
     Testemunhos (secção "Feedbacks") — autoplay 5s + setas
  --------------------------------------------------------- */
  var tViewport = document.getElementById('tViewport');
  enableMouseDrag(tViewport);
  var tTrack = document.getElementById('tTrack');
  var tItems = tTrack ? tTrack.querySelectorAll('.testimonial') : [];
  var tPrev = document.getElementById('tPrev');
  var tNext = document.getElementById('tNext');
  var tIndex = 0;
  var tTimer = null;
  var tMQ = window.matchMedia(MOBILE_QUERY);

  function goToTestimonial(i, smooth) {
    tIndex = (i + tItems.length) % tItems.length;
    if (tMQ.matches) {
      tViewport.scrollTo({
        left: tIndex * tViewport.clientWidth,
        behavior: smooth === false ? 'auto' : 'smooth'
      });
    } else {
      tTrack.style.transform = 'translateX(-' + (tIndex * 100) + '%)';
    }
  }

  function restartTestimonials() {
    clearInterval(tTimer);
    tTimer = setInterval(function () { goToTestimonial(tIndex + 1); }, 5000);
  }

  if (tPrev) tPrev.addEventListener('click', function () { goToTestimonial(tIndex - 1); restartTestimonials(); });
  if (tNext) tNext.addEventListener('click', function () { goToTestimonial(tIndex + 1); restartTestimonials(); });
  if (tItems.length) restartTestimonials();

  /* Arrastar com o dedo no mobile — scroll nativo */
  var tScrollDebounce = null;
  if (tViewport) {
    tViewport.addEventListener('scroll', function () {
      if (!tMQ.matches) return;
      clearTimeout(tScrollDebounce);
      tScrollDebounce = setTimeout(function () {
        tIndex = Math.round(tViewport.scrollLeft / tViewport.clientWidth);
        restartTestimonials();
      }, 120);
    }, { passive: true });
  }

  function updateTestimonialsMode(mq) {
    if (mq.matches) {
      tTrack.style.transform = '';
      tViewport.scrollLeft = tIndex * tViewport.clientWidth;
    } else {
      tViewport.scrollLeft = 0;
      tTrack.style.transform = 'translateX(-' + (tIndex * 100) + '%)';
    }
  }
  if (tItems.length) {
    updateTestimonialsMode(tMQ);
    tMQ.addEventListener('change', updateTestimonialsMode);
  }

  /* ---------------------------------------------------------
     Cartões da secção "Menu" — um de cada vez no mobile, autoplay 10s
  --------------------------------------------------------- */
  var cardsViewport = document.getElementById('cardsViewport');
  enableMouseDrag(cardsViewport);
  var cardsTrack = document.getElementById('cardsTrack');
  var cardItems = cardsTrack ? cardsTrack.querySelectorAll('.card') : [];
  var cardIndex = 0;
  var cardTimer = null;
  var cardsMQ = window.matchMedia(MOBILE_QUERY);
  var menuVisible = false;

  function goToCard(i, smooth) {
    cardIndex = (i + cardItems.length) % cardItems.length;
    cardsViewport.scrollTo({
      left: cardIndex * cardsViewport.clientWidth,
      behavior: smooth === false ? 'auto' : 'smooth'
    });
  }

  function startCardAutoplay() {
    clearInterval(cardTimer);
    cardTimer = setInterval(function () { goToCard(cardIndex + 1); }, 10000);
  }

  function refreshCardAutoplay() {
    if (cardsMQ.matches && menuVisible) {
      startCardAutoplay();
    } else {
      clearInterval(cardTimer);
    }
  }

  function updateCardsMode(mq) {
    if (mq.matches) goToCard(0, false);
    refreshCardAutoplay();
  }

  var cardsPrevBtn = document.getElementById('cardsPrev');
  var cardsNextBtn = document.getElementById('cardsNext');
  if (cardsPrevBtn) cardsPrevBtn.addEventListener('click', function () { goToCard(cardIndex - 1); startCardAutoplay(); });
  if (cardsNextBtn) cardsNextBtn.addEventListener('click', function () { goToCard(cardIndex + 1); startCardAutoplay(); });

  /* Arrastar com o dedo — scroll nativo do browser (fiável em qualquer telemóvel) */
  var cardsScrollDebounce = null;
  if (cardsViewport) {
    cardsViewport.addEventListener('scroll', function () {
      if (!cardsMQ.matches) return;
      clearTimeout(cardsScrollDebounce);
      cardsScrollDebounce = setTimeout(function () {
        cardIndex = Math.round(cardsViewport.scrollLeft / cardsViewport.clientWidth);
        startCardAutoplay();
      }, 120);
    }, { passive: true });
  }

  if (cardItems.length) {
    updateCardsMode(cardsMQ);
    cardsMQ.addEventListener('change', updateCardsMode);
  }

})();
