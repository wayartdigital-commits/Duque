(function () {
  'use strict';

  var translations = {

    pt: {
      nav_menu: "Menu",
      nav_sobre: "Sobre",
      nav_contactos: "Contactos",
      btn_reservar: "Reservar Mesa",
      btn_ver_carta: "Ver Carta",
      sobre_title: "Sobre Nós",
      sobre_text: "No coração de Lisboa, a poucos passos do Largo do Carmo, o Duque é um restaurante acolhedor onde a tradição portuguesa se encontra com os sabores mediterrânicos. Entre pratos principais e uma seleção de petiscos para partilhar, cada refeição é um convite a desfrutar. Visite-nos na Rua do Duque, n.os 9 e 33.",
      card1_title: "Entradas e Petiscos",
      card1_desc: "Sabores tradicionais para partilhar",
      card3_title: "Pratos Principais",
      card3_desc: "Receitas portuguesas feitas com carinho",
      feedbacks_title: "Feedbacks",
      testimonial1: "Um lugar encantador na zona alta de Lisboa; espaço original, bonito e limpo, com comida tradicional, saborosa e muito económica. Excelente atendimento e uma ótima relação custo-benefício.",
      testimonial2: "Excelente restaurante. Serviço e comida excelente, com porções incríveis pelo preço justo. O ambiente é ótimo e a decoração é original. Vamos voltar!",
      testimonial3: "Um restaurante português com um menu variado, comida deliciosa, um serviço e ambiente excecionais. Se procuras algo acessível e com comida portuguesa, este restaurante é uma ótima opção.",
      testimonial4: "O restaurante possui um interior bonito e uma atmosfera acolhedora, tornando-o perfeito para um jantar tranquilo.",
      testimonial5: "Um restaurante português com cardápio variado, comida deliciosa e atendimento e ambiente excecionais.",
      reservas_title: "Reserve a Sua Mesa",
      btn_reservar_agora: "Reservar Agora",
      map_ver_google: "Ver localização no Google Maps",
      info_morada_label: "Morada",
      info_morada_value: "Rua do Duque, n.os 9 e 33<br>1200-158 Lisboa",
      info_contacto_label: "Contacto",
      info_contacto_note: "(Rede Móvel Nacional)",
      info_localizacao_label: "Localização",
      info_localizacao_value: "Próximo do Largo do Carmo"
    },

    en: {
      nav_menu: "Menu",
      nav_sobre: "About",
      nav_contactos: "Contact",
      btn_reservar: "Book a Table",
      btn_ver_carta: "View Menu",
      sobre_title: "About Us",
      sobre_text: "In the heart of Lisbon, just steps from Largo do Carmo, Duque is a cosy restaurant where Portuguese tradition meets Mediterranean flavours. Between main courses and a selection of petiscos to share, every meal is an invitation to enjoy. Visit us at Rua do Duque, no. 9 and 33.",
      card1_title: "Starters &amp; Small Plates",
      card1_desc: "Traditional flavours to share",
      card3_title: "Main Courses",
      card3_desc: "Portuguese recipes made with care",
      feedbacks_title: "Reviews",
      testimonial1: "A charming spot in the upper part of Lisbon; an original, beautiful and clean space, with traditional, tasty and very affordable food. Excellent service and great value for money.",
      testimonial2: "Excellent restaurant. Great service and food, with amazing portions for a fair price. The atmosphere is wonderful and the décor is original. We'll be back!",
      testimonial3: "A Portuguese restaurant with a varied menu, delicious food, and exceptional service and atmosphere. If you're looking for something affordable with Portuguese food, this restaurant is a great choice.",
      testimonial4: "The restaurant has a beautiful interior and a cosy atmosphere, making it perfect for a quiet dinner.",
      testimonial5: "A Portuguese restaurant with a varied menu, delicious food, and exceptional service and atmosphere.",
      reservas_title: "Reserve Your Table",
      btn_reservar_agora: "Book Now",
      map_ver_google: "View location on Google Maps",
      info_morada_label: "Address",
      info_morada_value: "Rua do Duque, no. 9 and 33<br>1200-158 Lisbon",
      info_contacto_label: "Contact",
      info_contacto_note: "(National Mobile Network)",
      info_localizacao_label: "Location",
      info_localizacao_value: "Close to Largo do Carmo"
    },

    fr: {
      nav_menu: "Menu",
      nav_sobre: "À Propos",
      nav_contactos: "Contact",
      btn_reservar: "Réserver une Table",
      btn_ver_carta: "Voir la Carte",
      sobre_title: "À Propos de Nous",
      sobre_text: "Au cœur de Lisbonne, à quelques pas du Largo do Carmo, le Duque est un restaurant chaleureux où la tradition portugaise rencontre les saveurs méditerranéennes. Entre plats principaux et une sélection de petiscos à partager, chaque repas est une invitation à savourer. Venez nous rendre visite Rua do Duque, n° 9 et 33.",
      card1_title: "Entrées et Tapas",
      card1_desc: "Saveurs traditionnelles à partager",
      card3_title: "Plats Principaux",
      card3_desc: "Recettes portugaises préparées avec soin",
      feedbacks_title: "Avis",
      testimonial1: "Un endroit charmant dans les hauteurs de Lisbonne ; un espace original, beau et propre, avec une cuisine traditionnelle, savoureuse et très abordable. Excellent service et un très bon rapport qualité-prix.",
      testimonial2: "Excellent restaurant. Service et cuisine excellents, avec des portions incroyables pour un prix juste. L'ambiance est superbe et la décoration originale. On y retournera !",
      testimonial3: "Un restaurant portugais avec un menu varié, une cuisine délicieuse, un service et une ambiance exceptionnels. Si vous cherchez quelque chose d'abordable avec de la cuisine portugaise, ce restaurant est une excellente option.",
      testimonial4: "Le restaurant a un bel intérieur et une atmosphère chaleureuse, ce qui le rend parfait pour un dîner tranquille.",
      testimonial5: "Un restaurant portugais avec un menu varié, une cuisine délicieuse et un service et une ambiance exceptionnels.",
      reservas_title: "Réservez Votre Table",
      btn_reservar_agora: "Réserver Maintenant",
      map_ver_google: "Voir sur Google Maps",
      info_morada_label: "Adresse",
      info_morada_value: "Rua do Duque, n° 9 et 33<br>1200-158 Lisbonne",
      info_contacto_label: "Contact",
      info_contacto_note: "(Réseau Mobile National)",
      info_localizacao_label: "Emplacement",
      info_localizacao_value: "Près du Largo do Carmo"
    },

    es: {
      nav_menu: "Menú",
      nav_sobre: "Sobre",
      nav_contactos: "Contacto",
      btn_reservar: "Reservar Mesa",
      btn_ver_carta: "Ver Carta",
      sobre_title: "Sobre Nosotros",
      sobre_text: "En el corazón de Lisboa, a pocos pasos del Largo do Carmo, Duque es un restaurante acogedor donde la tradición portuguesa se encuentra con los sabores mediterráneos. Entre platos principales y una selección de petiscos para compartir, cada comida es una invitación a disfrutar. Visítenos en la Rua do Duque, n.º 9 y 33.",
      card1_title: "Entrantes y Tapas",
      card1_desc: "Sabores tradicionales para compartir",
      card3_title: "Platos Principales",
      card3_desc: "Recetas portuguesas hechas con cariño",
      feedbacks_title: "Opiniones",
      testimonial1: "Un lugar encantador en la zona alta de Lisboa; un espacio original, bonito y limpio, con comida tradicional, sabrosa y muy económica. Excelente atención y una gran relación calidad-precio.",
      testimonial2: "Excelente restaurante. Servicio y comida excelentes, con raciones increíbles a un precio justo. El ambiente es genial y la decoración es original. ¡Volveremos!",
      testimonial3: "Un restaurante portugués con un menú variado, comida deliciosa, un servicio y ambiente excepcionales. Si buscas algo asequible y con comida portuguesa, este restaurante es una gran opción.",
      testimonial4: "El restaurante tiene un interior precioso y un ambiente acogedor, lo que lo hace perfecto para una cena tranquila.",
      testimonial5: "Un restaurante portugués con un menú variado, comida deliciosa y un servicio y ambiente excepcionales.",
      reservas_title: "Reserve su Mesa",
      btn_reservar_agora: "Reservar Ahora",
      map_ver_google: "Ver en Google Maps",
      info_morada_label: "Dirección",
      info_morada_value: "Rua do Duque, n.º 9 y 33<br>1200-158 Lisboa",
      info_contacto_label: "Contacto",
      info_contacto_note: "(Red Móvil Nacional)",
      info_localizacao_label: "Ubicación",
      info_localizacao_value: "Cerca del Largo do Carmo"
    },

    it: {
      nav_menu: "Menu",
      nav_sobre: "Chi Siamo",
      nav_contactos: "Contatti",
      btn_reservar: "Prenota un Tavolo",
      btn_ver_carta: "Vedi il Menu",
      sobre_title: "Chi Siamo",
      sobre_text: "Nel cuore di Lisbona, a pochi passi dal Largo do Carmo, il Duque è un ristorante accogliente dove la tradizione portoghese incontra i sapori mediterranei. Tra piatti principali e una selezione di petiscos da condividere, ogni pasto è un invito a gustare. Venite a trovarci in Rua do Duque, n. 9 e 33.",
      card1_title: "Antipasti e Stuzzichini",
      card1_desc: "Sapori tradizionali da condividere",
      card3_title: "Piatti Principali",
      card3_desc: "Ricette portoghesi fatte con cura",
      feedbacks_title: "Recensioni",
      testimonial1: "Un posto incantevole nella parte alta di Lisbona; uno spazio originale, bello e pulito, con cucina tradizionale, gustosa e molto economica. Ottimo servizio e un ottimo rapporto qualità-prezzo.",
      testimonial2: "Ristorante eccellente. Servizio e cibo eccellenti, con porzioni incredibili a un prezzo giusto. L'atmosfera è fantastica e l'arredamento è originale. Ci torneremo!",
      testimonial3: "Un ristorante portoghese con un menu variegato, cibo delizioso, servizio e atmosfera eccezionali. Se cerchi qualcosa di accessibile con cucina portoghese, questo ristorante è un'ottima scelta.",
      testimonial4: "Il ristorante ha un interno bellissimo e un'atmosfera accogliente, che lo rende perfetto per una cena tranquilla.",
      testimonial5: "Un ristorante portoghese con un menu variegato, cibo delizioso e servizio e atmosfera eccezionali.",
      reservas_title: "Prenota il Tuo Tavolo",
      btn_reservar_agora: "Prenota Ora",
      map_ver_google: "Vedi su Google Maps",
      info_morada_label: "Indirizzo",
      info_morada_value: "Rua do Duque, n. 9 e 33<br>1200-158 Lisbona",
      info_contacto_label: "Contatto",
      info_contacto_note: "(Rete Mobile Nazionale)",
      info_localizacao_label: "Posizione",
      info_localizacao_value: "Vicino al Largo do Carmo"
    }

  };

  var STORAGE_KEY = 'duque-lang';
  var supported = ['pt', 'en', 'fr', 'es', 'it'];

  function getSavedLang() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    return supported.indexOf(saved) !== -1 ? saved : 'pt';
  }

  function applyLanguage(lang) {
    if (supported.indexOf(lang) === -1) lang = 'pt';
    var dict = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    document.documentElement.lang = lang;

    var current = document.getElementById('langCurrent');
    if (current) current.textContent = lang.toUpperCase();

    document.querySelectorAll('.lang-switch__option').forEach(function (opt) {
      opt.classList.toggle('is-active', opt.getAttribute('data-lang') === lang);
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  var langSwitch = document.getElementById('langSwitch');
  var langToggle = document.getElementById('langToggle');

  function closeMenu() {
    if (!langSwitch) return;
    langSwitch.classList.remove('is-open');
    langToggle.setAttribute('aria-expanded', 'false');
  }

  if (langToggle) {
    langToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = langSwitch.classList.toggle('is-open');
      langToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  document.querySelectorAll('.lang-switch__option').forEach(function (opt) {
    opt.addEventListener('click', function () {
      applyLanguage(opt.getAttribute('data-lang'));
      closeMenu();
    });
  });

  document.addEventListener('click', function (e) {
    if (langSwitch && !langSwitch.contains(e.target)) closeMenu();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  applyLanguage(getSavedLang());

})();
