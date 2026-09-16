(function () {
  'use strict';

  var FADE_MS = 220;
  var STORAGE_KEY = 'duque-lang';
  var supported = ['pt', 'en', 'fr', 'es', 'it'];
  var PAGES = [
    { index: 0, href: 'carta-entradas.html' },
    { index: 1, href: 'carta-bar.html' },
    { index: 2, href: 'carta-pratos.html' }
  ];

  document.body.classList.add('carta-fade-init');
  setTimeout(function () {
    document.body.classList.remove('carta-fade-init');
  }, 30);

  function getSavedLang() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    return supported.indexOf(saved) !== -1 ? saved : 'pt';
  }

  function el(tag, className, text) {
    var e = document.createElement(tag);
    if (className) e.className = className;
    if (text !== undefined) e.textContent = text;
    return e;
  }

  function renderItem(item) {
    var wrap = el('div', 'menu-item');
    var row = el('div', 'menu-item__row');
    row.appendChild(el('span', 'menu-item__name', item.n));
    row.appendChild(el('span', 'menu-item__leader'));
    row.appendChild(el('span', 'menu-item__price', item.p + '€'));
    wrap.appendChild(row);
    if (item.d) wrap.appendChild(el('p', 'menu-item__desc', item.d));
    return wrap;
  }

  function renderCategory(cat) {
    var block = el('div', 'menu-category' + (cat.wide ? ' menu-category--wide' : ''));
    block.appendChild(el('h2', 'menu-category__title', cat.name));

    if (cat.items) {
      cat.items.forEach(function (item) {
        block.appendChild(renderItem(item));
      });
    }
    if (cat.groups) {
      cat.groups.forEach(function (group) {
        var g = el('div', 'menu-subgroup');
        g.appendChild(el('h3', 'menu-subgroup__title', group.name));
        group.items.forEach(function (item) {
          g.appendChild(renderItem(item));
        });
        block.appendChild(g);
      });
    }
    return block;
  }

  function renderDivision(division) {
    var wrap = el('div', 'menu-division');
    var grid = el('div', 'menu-division__grid menu-division__grid--compact');
    division.categories.forEach(function (cat) {
      grid.appendChild(renderCategory(cat));
    });
    wrap.appendChild(grid);
    return wrap;
  }

  function renderJumpNav(data) {
    var nav = document.getElementById('cartaJumpNav');
    nav.innerHTML = '';
    PAGES.forEach(function (page) {
      var division = data.divisions[page.index];
      var isCurrent = page.index === window.CARTA_DIVISION_INDEX;
      var link = el('a', 'btn btn--ghost carta-jumpnav__btn' + (isCurrent ? ' is-active' : ''), division.name);
      link.href = page.href;
      if (!isCurrent) {
        var dir = page.index > window.CARTA_DIVISION_INDEX ? 'next' : 'prev';
        link.addEventListener('click', function (e) {
          e.preventDefault();
          switchDivision(page.index, page.href, dir);
        });
      }
      nav.appendChild(link);
    });
  }

  function renderContent(lang) {
    if (supported.indexOf(lang) === -1) lang = 'pt';
    var data = MENU_DATA[lang];
    var division = data.divisions[window.CARTA_DIVISION_INDEX];

    document.documentElement.lang = lang;
    document.title = 'Restaurante Duque — ' + division.name;

    var content = document.getElementById('cartaContent');
    content.innerHTML = '';
    content.appendChild(renderDivision(division));

    renderJumpNav(data);

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function switchDivision(newIndex, href, dir) {
    document.body.classList.add(dir === 'prev' ? 'carta-leave-prev' : 'carta-leave-next');
    setTimeout(function () {
      window.CARTA_DIVISION_INDEX = newIndex;
      try { history.pushState({ division: newIndex }, '', href); } catch (e) {}
      renderContent(getSavedLang());
      document.body.classList.remove('carta-leave-next', 'carta-leave-prev');
      document.body.classList.add(dir === 'prev' ? 'carta-enter-prev' : 'carta-enter-next');
      setTimeout(function () {
        document.body.classList.remove('carta-enter-next', 'carta-enter-prev');
      }, 30);
    }, FADE_MS);
  }

  window.addEventListener('popstate', function (e) {
    window.CARTA_DIVISION_INDEX = (e.state && typeof e.state.division === 'number') ? e.state.division : window.CARTA_DIVISION_INDEX;
    renderContent(getSavedLang());
  });

  renderContent(getSavedLang());

  var cartaHero = document.getElementById('cartaHero');

  function updateHeaderVisibility() {
    cartaHero.classList.toggle('is-hidden', window.scrollY > 25);
  }
  window.addEventListener('scroll', updateHeaderVisibility, { passive: true });
  updateHeaderVisibility();
})();
