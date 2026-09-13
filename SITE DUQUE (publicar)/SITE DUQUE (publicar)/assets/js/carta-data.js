var MENU_DATA = {

  pt: {
    pageTitle: "A Nossa Carta",
    back: "Voltar ao site",
    note: "Preços em euros com IVA incluído à taxa legal em vigor. Nenhum prato, produto alimentar ou bebida, incluindo o couvert, pode ser cobrado se não for solicitado pelo cliente ou por este não for utilizado.",
    divisions: [
      { name: "Entradas e Petiscos", categories: [
        { name: "Couvert", wide: true, items: [
          { n: "Mix: Pão, Azeitonas e Azeite", p: "4.50" },
          { n: "Pão", p: "2.50" },
          { n: "Azeitonas", p: "2.00" },
          { n: "Azeite", p: "2.00" },
          { n: "Queijo seco", p: "4.00" },
          { n: "Presunto", p: "9.50" }
        ]},
        { name: "Entradas", items: [
          { n: "Caldo Verde", p: "7.00", d: "Sopa com couve portuguesa e uma rodela de chouriço" },
          { n: "Creme de Camarão", p: "8.50", d: "Com croutons e raspas de ovo cozido" },
          { n: "Charuto de Queijo de Cabra", p: "9.50", d: "Queijo de cabra envolvido em massa filó com frutos secos e compota" },
          { n: "Ceviche de Peixe Branco", p: "14.00", d: "Com batata-doce, cebola, milho frito e sumo de limão" },
          { n: "Atum Braseado", p: "15.50", d: "Com batata-doce e cebola caramelizada" },
          { n: "Camarão ao Alho", p: "19.00", d: "Com alecrim e citrinos" },
          { n: "Amêijoas à Bulhão Pato", p: "20.00", d: "Com molho de azeite, alho e coentros" },
          { n: "Mexilhão à Duque", p: "15.00", d: "Com pimentos, cebola, coentros e alho" }
        ]},
        { name: "Petiscos", items: [
          { n: "Bolinhas de Alheira — 1 unidade", p: "2.00" },
          { n: "Pastéis de Bacalhau — 4 unidades", p: "9.00" },
          { n: "Xerém de Ameijoas (papas de milho)", p: "10.00" },
          { n: "Morcela Grelhada com Doce de Maçã", p: "9.00" },
          { n: "Escabeche de Galo", p: "8.50" },
          { n: "Moelas à moda do Norte com Malagueta", p: "11.00" },
          { n: "Salada de Polvo", p: "12.00", d: "Com pimentos, coentros e cebola" },
          { n: "Salada de Bacalhau", p: "12.00", d: "Com grão, salsa e cebola" },
          { n: "Prego", p: "13.50", d: "Bife de vaca em pão 'bolo do caco'" },
          { n: "Arroz de Tomate", p: "3.50" },
          { n: "Batatas Fritas", p: "3.50" }
        ]}
      ]},
      { name: "Bar", categories: [
        { name: "Bebidas", groups: [
          { name: "Águas", items: [
            { n: "Água sem gás (0.75L)", p: "2.50" },
            { n: "Água com gás (0.75L)", p: "3.00" }
          ]},
          { name: "Refrigerantes", items: [
            { n: "Coca-Cola / Coca-Cola Zero", p: "3.50" },
            { n: "Sprite", p: "3.50" },
            { n: "Fanta", p: "3.50" },
            { n: "Água tónica", p: "3.50" },
            { n: "Ginger Ale", p: "3.50" }
          ]},
          { name: "Sumos Naturais", items: [
            { n: "Laranja", p: "4.50" },
            { n: "Limonada", p: "2.50" }
          ]},
          { name: "Cervejas", items: [
            { n: "Super Bock Lager (0.30L)", p: "3.50" },
            { n: "Super Bock Lager (0.50L)", p: "6.00" },
            { n: "Super Bock Preta (0.33L)", p: "3.50" },
            { n: "Super Bock s/ álcool (0.33L)", p: "3.50" },
            { n: "Sidra (0.33L)", p: "3.50" },
            { n: "Artesanal Portuguesa — IPA (0.33L)", p: "5.00" }
          ]},
          { name: "Sangria", items: [
            { n: "Tinta ou Branca (1L)", p: "20.00" }
          ]},
          { name: "Cafetaria", items: [
            { n: "Café", p: "1.50" },
            { n: "Café com Leite", p: "3.00" },
            { n: "Capuccino", p: "4.00" },
            { n: "Chá", p: "2.50" }
          ]}
        ]},
        { name: "Bar Português", groups: [
          { name: "Gins Tónicos Portugueses", items: [
            { n: "Amicis (herbal)", p: "12.00" },
            { n: "Sharish (frutado)", p: "12.00" }
          ]},
          { name: "Licores e Vinhos Doces", items: [
            { n: "Ginja — shot", p: "2.50" },
            { n: "Licor Beirão (ervas)", p: "8.50" },
            { n: "Amarguinha (amêndoa)", p: "8.50" },
            { n: "Moscatel de Setúbal", p: "7.50" },
            { n: "Porto (Tawny, Ruby, White Dry)", p: "7.50" },
            { n: "Porto 10 anos", p: "10.00" }
          ]},
          { name: "Aguardentes e Brandys", items: [
            { n: "Medronho", p: "6.00" },
            { n: "Aguardente S. Domingos", p: "6.00" },
            { n: "Brandy Macieira 5 Estrelas", p: "7.00" },
            { n: "Aguardente CRF Reserva", p: "10.00" }
          ]}
        ]},
        { name: "O Outro Bar", groups: [
          { name: "Cocktails", items: [
            { n: "Mojito", p: "12.00" },
            { n: "Caipirinha", p: "12.00" },
            { n: "Margarita", p: "12.00" },
            { n: "Aperol Spritz", p: "11.00" },
            { n: "Cuba Libre", p: "10.00" }
          ]},
          { name: "Whisky", items: [
            { n: "Johnnie Walker Red Label", p: "9.00" },
            { n: "Jameson", p: "9.00" },
            { n: "Cardhu", p: "10.00" }
          ]},
          { name: "Outras", items: [
            { n: "Shot Rum", p: "3.50" },
            { n: "Shot Tequilla", p: "3.50" },
            { n: "Shot Cachaça", p: "3.50" }
          ]}
        ]}
      ]},
      { name: "Pratos Principais", categories: [
        { name: "Peixes", items: [
          { n: "Peixe da Lota Grelhado (1 pessoa)", p: "17.00", d: "Salmão, dourada, robalo ou atum com legumes e batatas" },
          { n: "Misto de Peixe (2 pessoas)", p: "37.50", d: "Três variedades de peixe com legumes e batatas" },
          { n: "Camarão Tigre Grelhado", p: "25.00", d: "Com esparguete, salteado em manjericão e hortelã" },
          { n: "Polvo Assado no Forno", p: "19.00", d: "Com puré de batata-doce e palha de alho francês" },
          { n: "Bacalhau à Duque", p: "19.00", d: "Com batata a murro, esparregado e azeite de chouriço" },
          { n: "Bacalhau Gratinado", p: "19.00", d: "Com espinafres, natas, cebola e batatas" },
          { n: "Lombo de Peixe da Lota", p: "18.00", d: "Com arroz de bivalves, limão e hortelã" },
          { n: "Arroz do Mar", p: "19.00", d: "Com peixe, ameijoa, mexilhão e camarão" }
        ]},
        { name: "Carnes", items: [
          { n: "Naco de Alcatra Grelhado", p: "18.00", d: "Com batata frita e esparregado" },
          { n: "Bife da Vazia à Duque", p: "21.00", d: "Grelhado, com molho de alho e salsa. Com batata frita" },
          { n: "Ossobuco Estufado", p: "17.00", d: "Com puré de batata" },
          { n: "Bochecha de Porco", p: "18.00", d: "Cozida a baixa temperatura. Com arroz de alho e coentros" },
          { n: "Perna de Pato Confitada", p: "18.00", d: "Confitada em vinho do Porto. Com arroz de enchidos" },
          { n: "Costeleta de Borrego", p: "19.00", d: "Grelhada, com molho cítrico. Com batatas fritas" }
        ]},
        { name: "Saladas e Vegetariano", items: [
          { n: "Salada de Peito de Frango Grelhado", p: "14.00", d: "Alface, tomate, croutons, molho caeser" },
          { n: "Salada de Camarão", p: "17.00", d: "Alface, tomate, cebola roxa, molho de iogurte e orégãos" },
          { n: "Salada de Atum Fresco", p: "16.00", d: "Alface, tomate, ovo e molho caeser" },
          { n: "Salada de Couscous e Queijo de Cabra", p: "13.50", d: "Couscous, alface, legumes e queijo de cabra" },
          { n: "Braz de Legumes com Azeite Trufado", p: "14.00", d: "Com legumes, batata palha e ovo" },
          { n: "Risotto de Cogumelos", p: "16.00" }
        ]},
        { name: "Sobremesas", items: [
          { n: "Sobremesas do Dia", p: "7.50" }
        ]}
      ]}
    ]
  },

  en: {
    pageTitle: "Our Menu",
    back: "Back to the site",
    note: "Prices in Euros with VAT included at the legal rate in force in Portugal. No dish, food or drink, including the couvert, can be charged if it is not requested by the customer or if it is unused by the customer.",
    divisions: [
      { name: "Starters & Small Plates", categories: [
        { name: "Couvert", wide: true, items: [
          { n: "Mix: Bread, Olives and Olive Oil", p: "4.50" },
          { n: "Bread", p: "2.50" },
          { n: "Olives", p: "2.00" },
          { n: "Olive Oil", p: "2.00" },
          { n: "Dry Cheese", p: "4.00" },
          { n: "Iberian Ham", p: "9.50" }
        ]},
        { name: "Starters", items: [
          { n: "'Caldo Verde' Soup", p: "7.00", d: "Soup of portuguese cabbage and a slice of chorizo" },
          { n: "Prawns Cream Soup", p: "8.50", d: "With croutons and grated egg" },
          { n: "Goat Cheese Cigar", p: "9.50", d: "Goat cheese wrapped in filo pastry with dried fruits and jam" },
          { n: "White Fish Ceviche", p: "14.00", d: "With sweet potato, onion, fried corn and lemon juice" },
          { n: "Braised Tuna", p: "15.50", d: "With sweet potato and caramelized onion" },
          { n: "Fried Prawns", p: "19.00", d: "With rosemary and citrus" },
          { n: "Clams 'Bulhão Pato'", p: "20.00", d: "Clams with typical olive oil, garlic and coriander sauce" },
          { n: "Mussels by Duque", p: "15.00", d: "With sweet peppers, onion, coriander and garlic" }
        ]},
        { name: "'Petiscos' (Portuguese Snacks)", items: [
          { n: "Croquette of Alheira — 1 unit", p: "2.00" },
          { n: "Codfish Croquettes — 4 units", p: "9.00" },
          { n: "Clams Xerém (similar to polenta)", p: "10.00" },
          { n: "Grilled Black Pudding w/ Apple Jam", p: "9.00" },
          { n: "Rooster 'Escabeche'", p: "8.50" },
          { n: "'Moelas' with Chilli (chicken gizzards)", p: "11.00" },
          { n: "Octopus Salad", p: "12.00", d: "With sweet peppers, coriander and onion" },
          { n: "Codfish Salad", p: "12.00", d: "With chickpeas, parsley and onion" },
          { n: "'Prego Português'", p: "13.50", d: "Steak served in typical 'Bolo do Caco' bread" },
          { n: "Tomato Rice", p: "3.50" },
          { n: "French Fries", p: "3.50" }
        ]}
      ]},
      { name: "Bar", categories: [
        { name: "Drinks", groups: [
          { name: "Water", items: [
            { n: "Still Water (0.75L)", p: "2.50" },
            { n: "Sparkling Water (0.75L)", p: "3.00" }
          ]},
          { name: "Soft Drinks", items: [
            { n: "Coca-Cola / Coca-Cola Zero", p: "3.50" },
            { n: "Sprite", p: "3.50" },
            { n: "Fanta", p: "3.50" },
            { n: "Tonic Water", p: "3.50" },
            { n: "Ginger Ale", p: "3.50" }
          ]},
          { name: "Natural Juices", items: [
            { n: "Orange", p: "4.50" },
            { n: "Lemonade", p: "2.50" }
          ]},
          { name: "Beer", items: [
            { n: "Sagres Lager (0.30L)", p: "3.50" },
            { n: "Sagres Lager (0.50L)", p: "6.00" },
            { n: "Sagres Black (0.33L)", p: "3.50" },
            { n: "Sagres Non-alcoholic (0.33L)", p: "3.50" },
            { n: "Cider (0.33L)", p: "3.50" },
            { n: "Portuguese Craft Beer — IPA (0.33L)", p: "5.00" }
          ]},
          { name: "Sangria", items: [
            { n: "Red or White (1L)", p: "20.00" }
          ]},
          { name: "Coffees and Teas", items: [
            { n: "Coffee", p: "1.50" },
            { n: "Coffee with milk", p: "3.00" },
            { n: "Capuccino", p: "4.00" },
            { n: "Tea", p: "2.50" }
          ]}
        ]},
        { name: "Portuguese Bar", groups: [
          { name: "Portuguese Tonic Gins", items: [
            { n: "Amicis (herbal)", p: "12.00" },
            { n: "Sharish (fruity)", p: "12.00" }
          ]},
          { name: "Portuguese Liquors", items: [
            { n: "Ginja — shot", p: "2.50" },
            { n: "Licor Beirão (herbs)", p: "8.50" },
            { n: "Amarguinha (almond)", p: "8.50" },
            { n: "Moscatel de Setúbal", p: "7.50" },
            { n: "Porto (Tawny, Ruby, White Dry)", p: "7.50" },
            { n: "Porto 10 anos", p: "10.00" }
          ]},
          { name: "Portuguese Brandys", items: [
            { n: "Medronho", p: "6.00" },
            { n: "Aguardente S. Domingos", p: "6.00" },
            { n: "Brandy Macieira 5 Estrelas", p: "7.00" },
            { n: "Aguardente CRF Reserva", p: "10.00" }
          ]}
        ]},
        { name: "The Other Bar", groups: [
          { name: "Cocktails", items: [
            { n: "Mojito", p: "12.00" },
            { n: "Caipirinha", p: "12.00" },
            { n: "Margarita", p: "12.00" },
            { n: "Aperol Spritz", p: "11.00" },
            { n: "Cuba Libre", p: "10.00" }
          ]},
          { name: "Whisky", items: [
            { n: "Johnnie Walker Red Label", p: "9.00" },
            { n: "Jameson", p: "9.00" },
            { n: "Cardhu", p: "10.00" }
          ]},
          { name: "Others", items: [
            { n: "Shot Rum", p: "3.50" },
            { n: "Shot Tequilla", p: "3.50" },
            { n: "Shot Cachaça", p: "3.50" }
          ]}
        ]}
      ]},
      { name: "Main Courses", categories: [
        { name: "Fishes", items: [
          { n: "Fresh Grilled Fish (for one person)", p: "17.00", d: "Salmon, sea bream, sea bass or tuna with veggies & potatoes" },
          { n: "Fish Mix (for two persons)", p: "37.50", d: "Three different fishes with veggies & potatoes" },
          { n: "Grilled Tiger Prawn", p: "25.00", d: "With spaghetti, sautéed in basil and mint" },
          { n: "Oven Roasted Octopus", p: "19.00", d: "With sweet potato purée and shoestring leek" },
          { n: "Duque's Cod", p: "19.00", d: "With roasted potatoes, creamy vegetables and chorizo olive oil" },
          { n: "Cod Gratin", p: "19.00", d: "With spinach, cream, onions and potatoes" },
          { n: "White Fish Filet", p: "18.00", d: "With bivalve's rice, lemon and mint" },
          { n: "Sea Rice", p: "19.00", d: "Moist rice with fish, clams, mussels and prawns" }
        ]},
        { name: "Meats", items: [
          { n: "Grilled Rump Steak", p: "18.00", d: "With french fries and creamy vegetables" },
          { n: "Duque's Sirloin Steak", p: "21.00", d: "Grilled, with garlic and parsley sauce. With chips" },
          { n: "Stewed Ossobuco", p: "17.00", d: "With mashed potatoes" },
          { n: "Iberian Pork Cheek", p: "18.00", d: "Slowly cooked. With garlic and coriander rice" },
          { n: "Confit Duck Leg", p: "18.00", d: "Confit in port wine. With portuguese sausages rice" },
          { n: "Lamb Chop", p: "19.00", d: "Grilled with citrus sauce. With French fries" }
        ]},
        { name: "Salads and Vegetarian", items: [
          { n: "Grilled Chicken Breast Salad", p: "14.00", d: "Lettuce, tomato, croutons and caeser sauce" },
          { n: "Prawns Salad", p: "17.00", d: "Lettuce, tomato, onion, sauce of yoghurt and oregano" },
          { n: "Fresh Tuna Salad", p: "16.00", d: "Lettuce, tomato, grated egg and caeser sauce" },
          { n: "Couscous and Goat Cheese Salad", p: "13.50", d: "Couscous, lettuce, vegetables and goat cheese" },
          { n: "Vegetable 'Braz' with Truffled Olive Oil", p: "14.00", d: "Vegetables mixed with egg and shoestring potatoes" },
          { n: "Mushroom Risotto", p: "16.00" }
        ]},
        { name: "Desserts", items: [
          { n: "Daily Desserts", p: "7.50" }
        ]}
      ]}
    ]
  },

  es: {
    pageTitle: "Nuestra Carta",
    back: "Volver al sitio",
    note: "Precios en euros con IVA incluido a la tasa legal vigente. No se podrá cobrar ningún plato, producto alimenticio o bebida, incluido el couvert, si no lo solicita el cliente o no se puede utilizar.",
    divisions: [
      { name: "Entrantes y Tapas", categories: [
        { name: "Couvert", wide: true, items: [
          { n: "Mezcla: Pan, Aceitunas y Aceite de Oliva", p: "4.50" },
          { n: "Pan", p: "2.50" },
          { n: "Aceitunas", p: "2.00" },
          { n: "Aceite de Oliva", p: "2.00" },
          { n: "Queso Seco", p: "4.00" },
          { n: "Jamón", p: "9.50" }
        ]},
        { name: "Entrantes", items: [
          { n: "Caldo Verde", p: "7.00", d: "Sopa con col portuguesa y una rodaja de chorizo" },
          { n: "Crema de Gambas", p: "8.50", d: "Con picatostes y huevo duro picado" },
          { n: "Cigarro de Queso de Cabra", p: "9.50", d: "Queso de cabra y frutos secos en masa filo, servido con mermelada" },
          { n: "Ceviche de Pescado Blanco", p: "14.00", d: "Con boniato, cebolla, maíz frito y zumo de limón" },
          { n: "Atún Braseado", p: "15.50", d: "Con puré de boniato y cebolla caramelizada" },
          { n: "Gambas al Ajillo", p: "19.00", d: "Con romero y cítricos" },
          { n: "Almejas 'Bulhão Pato'", p: "20.00", d: "Con salsa de aceite de oliva, ajo y cilantro" },
          { n: "Mejillón del Duque", p: "15.00", d: "Con pimientos, cebolla, cilantro y ajo" }
        ]},
        { name: "Petiscos (Tapas)", items: [
          { n: "Croqueta de 'Alheira' — 1 unidad", p: "2.00" },
          { n: "Croquetas de Bacalao — 4 unidades", p: "9.00" },
          { n: "Xerém de Almejas (similar a polenta)", p: "10.00" },
          { n: "Morcilla a la Parrilla con Dulce de Manzana", p: "9.00" },
          { n: "Gallo en Escabeche", p: "8.50" },
          { n: "Mollejas a la Norteña con Guindillas", p: "11.00" },
          { n: "Ensalada de Pulpo", p: "12.00", d: "Con pimientos, cilantro y cebolla" },
          { n: "Ensalada de Bacalao", p: "12.00", d: "Con garbanzo, cebolla y salsa" },
          { n: "Prego Portugués", p: "13.50", d: "Sándwich de filete de vaca en pan 'bolo do caco'" },
          { n: "Arroz con Tomate", p: "3.50" },
          { n: "Patatas Fritas", p: "3.50" }
        ]}
      ]},
      { name: "Bar", categories: [
        { name: "Bebidas", groups: [
          { name: "Aguas", items: [
            { n: "Agua sin gas (0.75L)", p: "2.50" },
            { n: "Agua con gas (0.75L)", p: "3.00" }
          ]},
          { name: "Refrescos", items: [
            { n: "Coca Cola / Coca Cola Cero", p: "3.50" },
            { n: "Sprite", p: "3.50" },
            { n: "Fanta", p: "3.50" },
            { n: "Agua tónica", p: "3.50" },
            { n: "Ginger Ale", p: "3.50" }
          ]},
          { name: "Zumos Naturales", items: [
            { n: "Naranja", p: "4.50" },
            { n: "Limonada", p: "2.50" }
          ]},
          { name: "Cervezas", items: [
            { n: "Sagres Lager (0.30L)", p: "3.50" },
            { n: "Sagres Lager (0.50L)", p: "6.00" },
            { n: "Sagres Negra (0.33L)", p: "3.50" },
            { n: "Sagres s/ alcohol (0.33L)", p: "3.50" },
            { n: "Sidra (0.33L)", p: "3.50" },
            { n: "Artesanal Portuguesa — IPA (0.33L)", p: "5.00" }
          ]},
          { name: "Sangría", items: [
            { n: "Tinta o Blanca (1L)", p: "20.00" }
          ]},
          { name: "Cafés", items: [
            { n: "Café", p: "1.50" },
            { n: "Café con Leche", p: "3.00" },
            { n: "Capuccino", p: "4.00" },
            { n: "Té", p: "2.50" }
          ]}
        ]},
        { name: "Bar Portugués", groups: [
          { name: "Gins Tónicos", items: [
            { n: "Amicis (herbal)", p: "12.00" },
            { n: "Sharish (frutado)", p: "12.00" }
          ]},
          { name: "Licores y Vinos Dulces", items: [
            { n: "Ginja", p: "2.50" },
            { n: "Licor Beirão (hierbas)", p: "8.50" },
            { n: "Amarguinha (almendras)", p: "8.50" },
            { n: "Moscatel de Setúbal", p: "7.50" },
            { n: "Porto (Tawny, Ruby, White Dry)", p: "7.50" },
            { n: "Porto 10 años", p: "10.00" }
          ]},
          { name: "Aguardientes, Brandy & Bagaceira", items: [
            { n: "Medronho", p: "6.00" },
            { n: "Aguardiente S. Domingos", p: "6.00" },
            { n: "Brandy Macieira 5 Estrelas", p: "7.00" },
            { n: "Aguardiente CRF Reserva", p: "10.00" }
          ]}
        ]},
        { name: "El Otro Bar", groups: [
          { name: "Cócteles", items: [
            { n: "Mojito", p: "12.00" },
            { n: "Caipirinha", p: "12.00" },
            { n: "Margarita", p: "12.00" },
            { n: "Aperol Spritz", p: "11.00" },
            { n: "Cuba Libre", p: "10.00" }
          ]},
          { name: "Whisky", items: [
            { n: "Johnnie Walker Red Label", p: "9.00" },
            { n: "Jameson", p: "9.00" },
            { n: "Cardhu", p: "10.00" }
          ]},
          { name: "Otras", items: [
            { n: "Shot Ron", p: "3.50" },
            { n: "Shot Tequilla", p: "3.50" },
            { n: "Shot Cachaça", p: "3.50" }
          ]}
        ]}
      ]},
      { name: "Platos Principales", categories: [
        { name: "Pescados", items: [
          { n: "Pescado a la Parrilla (1 persona)", p: "17.00", d: "Salmón, dorada, lubina o tuna con verduras y patatas" },
          { n: "Parrillada de Pescado (2 personas)", p: "37.50", d: "Tres variedades de pescado con verduras y patatas" },
          { n: "Gamba Tigre a la Parrilla", p: "25.00", d: "Con pasta salteada en albahaca y menta" },
          { n: "Pulpo Al Horno", p: "19.00", d: "Con puré de boniato y paja de puerro" },
          { n: "Bacalao al Duque", p: "19.00", d: "Con patatas al horno, puré de verduras y aceite de chorizo" },
          { n: "Bacalao Gratinado", p: "19.00", d: "Con espinacas, crema, cebolla y patatas" },
          { n: "Filete de Pescado Blanco", p: "18.00", d: "Con arroz de bivalvos, limón y menta" },
          { n: "Arroz de Mar", p: "19.00", d: "Con pescado, almejas, mejillones y gambas" }
        ]},
        { name: "Carnes", items: [
          { n: "Filete de Cadera de Vaca", p: "18.00", d: "A la parrilla, con patatas fritas y puré de verduras" },
          { n: "Solomillo de Vaca al Duque", p: "21.00", d: "A la parrilla con salsa de ajo y perejil. Con patatas fritas" },
          { n: "Ossobuco Guisado", p: "17.00", d: "Con puré de patata" },
          { n: "Carrilleras de Cerdo Ibérico", p: "18.00", d: "Cocción a baja temperatura. Con arroz de ajo y cilantros" },
          { n: "Muslo de Pato en Confit", p: "18.00", d: "Confitado en vino de Oporto. Con arroz de embutidos" },
          { n: "Chuleta de Cordero", p: "19.00", d: "A la parrilla, con salsa de cítricos y patatas fritas" }
        ]},
        { name: "Ensaladas y Vegetariano", items: [
          { n: "Ensalada de Pechuga de Pollo a la Parrilla", p: "14.00", d: "Lechuga, tomate, picatostes, salsa césar" },
          { n: "Ensalada de Gambas", p: "17.00", d: "Lechuga, tomate, cebolla y salsa de yogur con orégano" },
          { n: "Ensalada de Atún Fresco", p: "16.00", d: "Lechuga, tomate, huevo rallado y salsa césar" },
          { n: "Ensalada de Cuscús y Queso de Cabra", p: "13.50", d: "Cuscús, lechuga, verduras y queso de cabra" },
          { n: "Verduras a Brás con Aceite de Trufa", p: "14.00", d: "Con verduras, patatas paja y huevo" },
          { n: "Risotto de Setas", p: "16.00" }
        ]},
        { name: "Postres", items: [
          { n: "Postres del Día", p: "7.50" }
        ]}
      ]}
    ]
  },

  fr: {
    pageTitle: "Notre Carte",
    back: "Retour au site",
    note: "Prix en Euros avec TVA au taux légal en vigueur au Portugal. Aucun plat, nourriture ou boisson, y compris le couvert, ne peut être facturé s'il n'a pas été demandé par le client ou s'il n'est pas utilisé par le client.",
    divisions: [
      { name: "Entrées et Tapas", categories: [
        { name: "Couvert", wide: true, items: [
          { n: "Mix : Pain, Olives, Huile d'Olive", p: "4.50" },
          { n: "Pain", p: "2.50" },
          { n: "Olives", p: "2.00" },
          { n: "Huile d'Olive", p: "2.00" },
          { n: "Fromage Sec", p: "4.00" },
          { n: "Jambon Ibérique", p: "9.50" }
        ]},
        { name: "Entrées", items: [
          { n: "Soupe 'Caldo Verde'", p: "7.00", d: "Au chou frisé, avec une tranche de chorizo" },
          { n: "Soupe de Crevettes", p: "8.50", d: "Avec croûtons et œuf râpé" },
          { n: "Cigare au Fromage de Chèvre", p: "9.50", d: "Pâte filo au fromage de chèvre, fruits secs et compote" },
          { n: "Ceviche de Poisson Blanc", p: "14.00", d: "Avec patates douces, oignon, maïs frit et jus de citron" },
          { n: "Thon Braisé", p: "15.50", d: "Avec patates douces et oignon caramélisé" },
          { n: "Crevettes à l'Ail", p: "19.00", d: "Avec romarin et agrumes" },
          { n: "Palourdes 'Bulhão Pato'", p: "20.00", d: "Sauce à l'huile d'olive, coriandre et ail" },
          { n: "Moules du Duque", p: "15.00", d: "Avec poivrons, oignons, coriandre et ail" }
        ]},
        { name: "'Petiscos' (Snacks Portugais)", items: [
          { n: "Croquette d'Alheira — 1 unité", p: "2.00" },
          { n: "Croquettes de Morue — 4 unités", p: "9.00" },
          { n: "Xerém de Palourdes (similaire à une polenta)", p: "10.00" },
          { n: "Boudin Noir Grillé avec Compote de Pomme", p: "9.00" },
          { n: "Escabèche de Coq", p: "8.50" },
          { n: "Gésiers au Piment à la Mode du Nord", p: "11.00" },
          { n: "Salade de Poulpe", p: "12.00", d: "Avec poivrons, coriandre et oignons" },
          { n: "Salade de Morue", p: "12.00", d: "Avec pois chiches, persil et oignons" },
          { n: "'Prego Português'", p: "13.50", d: "Steak servi dans le pain 'Bolo do Caco'" },
          { n: "Riz à la Tomate", p: "3.50" },
          { n: "Pommes de Terre Frites", p: "3.50" }
        ]}
      ]},
      { name: "Bar", categories: [
        { name: "Boissons", groups: [
          { name: "Eau", items: [
            { n: "Eau Plate (0.75L)", p: "2.50" },
            { n: "Eau Gazeuse (0.75L)", p: "3.00" }
          ]},
          { name: "Boissons Non-Alcoolisées", items: [
            { n: "Coca Cola / Coca Cola Zero", p: "3.50" },
            { n: "Sprite", p: "3.50" },
            { n: "Fanta", p: "3.50" },
            { n: "Eau Tonique", p: "3.50" },
            { n: "Ginger Ale", p: "3.50" }
          ]},
          { name: "Jus Naturels", items: [
            { n: "Orange", p: "4.50" },
            { n: "Limonade", p: "2.50" }
          ]},
          { name: "Bières", items: [
            { n: "Sagres Lager (0.30L)", p: "3.50" },
            { n: "Sagres Lager (0.50L)", p: "6.00" },
            { n: "Sagres Noire (0.33L)", p: "3.50" },
            { n: "Sagres Sans Alcool (0.33L)", p: "3.50" },
            { n: "Cidre (0.33L)", p: "3.50" },
            { n: "Bière Artisanale Portugaise — IPA (0.33L)", p: "5.00" }
          ]},
          { name: "Sangria", items: [
            { n: "Pichet Blanche ou Rouge (1L)", p: "20.00" }
          ]},
          { name: "Cafés et Thés", items: [
            { n: "Café", p: "1.50" },
            { n: "Café au Lait", p: "3.00" },
            { n: "Capuccino", p: "4.00" },
            { n: "Thé", p: "2.50" }
          ]}
        ]},
        { name: "Bar Portugais", groups: [
          { name: "Gins Toniques Portugais", items: [
            { n: "Amicis (herbes)", p: "12.00" },
            { n: "Sharish (fruité)", p: "12.00" }
          ]},
          { name: "Liqueurs Portugaises", items: [
            { n: "Ginja — shot", p: "2.50" },
            { n: "Licor Beirão (herbes)", p: "8.50" },
            { n: "Amarguinha (amande)", p: "8.50" },
            { n: "Moscatel de Setúbal", p: "7.50" },
            { n: "Porto (Tawny, Ruby, White Dry)", p: "7.50" },
            { n: "Porto 10 ans", p: "10.00" }
          ]},
          { name: "Brandys & Eaux de Vie Portugais", items: [
            { n: "Medronho", p: "6.00" },
            { n: "Aguardente S. Domingos", p: "6.00" },
            { n: "Brandy Macieira 5 Estrelas", p: "7.00" },
            { n: "Aguardente CRF Reserva", p: "10.00" }
          ]}
        ]},
        { name: "L'Autre Bar", groups: [
          { name: "Cocktails", items: [
            { n: "Mojito", p: "12.00" },
            { n: "Caipirinha", p: "12.00" },
            { n: "Margarita", p: "12.00" },
            { n: "Aperol Spritz", p: "11.00" },
            { n: "Cuba Libre", p: "10.00" }
          ]},
          { name: "Whisky", items: [
            { n: "Johnnie Walker Red Label", p: "9.00" },
            { n: "Jameson", p: "9.00" },
            { n: "Cardhu", p: "10.00" }
          ]},
          { name: "Autres", items: [
            { n: "Shot Rhum", p: "3.50" },
            { n: "Shot Tequilla", p: "3.50" },
            { n: "Shot Cachaça", p: "3.50" }
          ]}
        ]}
      ]},
      { name: "Plats Principaux", categories: [
        { name: "Poissons", items: [
          { n: "Poisson Grillé (1 personne)", p: "17.00", d: "Saumon, dorade, bar ou thon aux légumes et pommes de terre" },
          { n: "Mix de Poissons Grillés (2 personnes)", p: "37.50", d: "Trois types de poisson aux légumes et pommes de terre" },
          { n: "Crevette Tigrée Grillée", p: "25.00", d: "Avec spaghetti sauté au basilic et à la menthe" },
          { n: "Poulpe Rôti au Four", p: "19.00", d: "Avec purée de patates douces et paille de poireau" },
          { n: "Morue du Duque", p: "19.00", d: "Avec pommes de terre, purée de légumes et huile de chorizo" },
          { n: "Morue Gratinée", p: "19.00", d: "Avec épinards, crème, oignons et pommes de terre" },
          { n: "Filet de Poisson Blanc", p: "18.00", d: "Avec riz aux bivalves, citron et menthe" },
          { n: "Riz de la Mer", p: "19.00", d: "Avec poisson, palourdes, moules et crevettes" }
        ]},
        { name: "Viandes", items: [
          { n: "Rumsteck de Bœuf Grillé", p: "18.00", d: "Avec frites et épinards à la crème" },
          { n: "Surlonge de Bœuf du Duque", p: "21.00", d: "Grillé avec sauce d'ail et persil. Avec frites" },
          { n: "Ossobuco Mijoté", p: "17.00", d: "Avec purée de pommes de terre" },
          { n: "Joues de Porc Ibérique", p: "18.00", d: "Cuit à basse température. Avec riz à l'ail et coriandre" },
          { n: "Confit de Cuisse de Canard", p: "18.00", d: "Confit au Porto. Avec riz aux saucisses" },
          { n: "Côtelette d'Agneau Grillée", p: "19.00", d: "Avec sauce d'agrumes et frites" }
        ]},
        { name: "Salades et Végétariens", items: [
          { n: "Salade à la Poitrine de Poulet Grillée", p: "14.00", d: "Laitue, tomate, croûtons et sauce caeser" },
          { n: "Salade de Crevettes", p: "17.00", d: "Laitue, tomate, oignon, sauce au yaourt et origan" },
          { n: "Salade de Thon Frais", p: "16.00", d: "Laitue, tomate, œuf et sauce caeser" },
          { n: "Salade de Couscous au Fromage de Chèvre", p: "13.50", d: "Couscous, laitue, légumes et fromage de chèvre" },
          { n: "'Braz' aux Légumes avec Huile d'Olive Truffée", p: "14.00", d: "Légumes avec œuf et pommes de terre paille" },
          { n: "Risotto aux Champignons", p: "16.00" }
        ]},
        { name: "Desserts", items: [
          { n: "Desserts du Jour", p: "7.50" }
        ]}
      ]}
    ]
  },

  it: {
    pageTitle: "Il Nostro Menu",
    back: "Torna al sito",
    note: "Prezzi in euro con IVA inclusa all'aliquota legale in vigore. Nessuna pietanza, prodotto alimentare o bevanda, incluso il coperto, può essere addebitato se non richiesto dal cliente o se non è stato da questo consumato.",
    divisions: [
      { name: "Antipasti e Stuzzichini", categories: [
        { name: "Coperto", wide: true, items: [
          { n: "Mix: Pane, Olive e Olio d'Oliva", p: "4.50" },
          { n: "Pane", p: "2.50" },
          { n: "Olive", p: "2.00" },
          { n: "Olio d'Oliva", p: "2.00" },
          { n: "Formaggio Stagionato", p: "4.00" },
          { n: "Prosciutto Crudo", p: "9.50" }
        ]},
        { name: "Antipasti", items: [
          { n: "Zuppa Caldo Verde", p: "7.00", d: "Zuppa con cavolo e una fettina di chouriço" },
          { n: "Crema di Gamberi", p: "8.50", d: "Con crostini e uovo sodo tritato" },
          { n: "Rustico di Formaggio di Capra", p: "9.50", d: "Formaggio di capra avvolto in pasta filo con frutti secchi e marmellata" },
          { n: "Ceviche di Pesce Bianco", p: "14.00", d: "Con patate dolci, cipolla, mais fritto e succo di limone" },
          { n: "Tonno Brasato", p: "15.50", d: "Con patate dolci e cipolla caramellata" },
          { n: "Gamberi con Aglio", p: "19.00", d: "Con rosmarino e agrumi" },
          { n: "Vongole alla Bulhão Pato", p: "20.00", d: "Con olio d'oliva, aglio e coriandolo" },
          { n: "Cozze Duque", p: "15.00", d: "Con peperone, cipolle, coriandolo e aglio" }
        ]},
        { name: "'Petiscos' (Stuzzichini)", items: [
          { n: "Crocchetta di 'Alheira' — 1 unità", p: "2.00" },
          { n: "Crocchette di Baccalà — 4 unità", p: "9.00" },
          { n: "Xerém di Vongole (simile a una polenta)", p: "10.00" },
          { n: "'Morcela' alla Griglia con Mela", p: "9.00" },
          { n: "Galletto Rustico in Scapece", p: "8.50" },
          { n: "Ventrigli con Peperoncino", p: "11.00" },
          { n: "Insalata di Polpo", p: "12.00", d: "Con peperone, cipolle e coriandolo" },
          { n: "Insalata di Baccalà", p: "12.00", d: "Con ceci, cipolle e prezzemolo" },
          { n: "'Prego Português'", p: "13.50", d: "Fettina di manzo nel pane 'Bolo do Caco'" },
          { n: "Riso al Pomodoro", p: "3.50" },
          { n: "Patate Fritte", p: "3.50" }
        ]}
      ]},
      { name: "Bar", categories: [
        { name: "Bevande", groups: [
          { name: "Acqua", items: [
            { n: "Acqua Minerale Naturale (0.75L)", p: "2.50" },
            { n: "Acqua Minerale Gassata (0.75L)", p: "3.00" }
          ]},
          { name: "Bibite", items: [
            { n: "Coca-Cola / Coca-Cola Zero", p: "3.50" },
            { n: "Sprite", p: "3.50" },
            { n: "Fanta", p: "3.50" },
            { n: "Acqua Tonica", p: "3.50" },
            { n: "Ginger Ale", p: "3.50" }
          ]},
          { name: "Succhi Naturali", items: [
            { n: "Arancia", p: "4.50" },
            { n: "Limonata", p: "2.50" }
          ]},
          { name: "Birre", items: [
            { n: "Sagres Lager (0.30L)", p: "3.50" },
            { n: "Sagres Lager (0.50L)", p: "6.00" },
            { n: "Sagres Nero (0.33L)", p: "3.50" },
            { n: "Sagres senza Alcool (0.33L)", p: "3.50" },
            { n: "Sidro (0.33L)", p: "3.50" },
            { n: "Artigianale Portoghese — IPA (0.33L)", p: "5.00" }
          ]},
          { name: "Sangria", items: [
            { n: "Bianca o Rossa (1L)", p: "20.00" }
          ]},
          { name: "Caffetteria", items: [
            { n: "Caffè", p: "1.50" },
            { n: "Caffè con Latte", p: "3.00" },
            { n: "Cappuccino", p: "4.00" },
            { n: "Tè e Infusioni", p: "2.50" }
          ]}
        ]},
        { name: "Il Bar Portoghese", groups: [
          { name: "Gin Tonici Portoghesi", items: [
            { n: "Amicis (erbaceo)", p: "12.00" },
            { n: "Sharish (fruttato)", p: "12.00" }
          ]},
          { name: "Liquori Portoghesi", items: [
            { n: "Ginja — shot", p: "2.50" },
            { n: "Licor Beirão (erbe)", p: "8.50" },
            { n: "Amarguinha (mandorla)", p: "8.50" },
            { n: "Moscatel de Setúbal", p: "7.50" },
            { n: "Porto (Tawny, Ruby, White Dry)", p: "7.50" },
            { n: "Porto 10 anni", p: "10.00" }
          ]},
          { name: "Brandy Portoghesi", items: [
            { n: "Medronho", p: "6.00" },
            { n: "Aguardente S. Domingos", p: "6.00" },
            { n: "Brandy Macieira 5 Estrelas", p: "7.00" },
            { n: "Aguardente CRF Reserva", p: "10.00" }
          ]}
        ]},
        { name: "L'Altro Bar", groups: [
          { name: "Cocktails", items: [
            { n: "Mojito", p: "12.00" },
            { n: "Caipirinha", p: "12.00" },
            { n: "Margarita", p: "12.00" },
            { n: "Aperol Spritz", p: "11.00" },
            { n: "Cuba Libre", p: "10.00" }
          ]},
          { name: "Whisky", items: [
            { n: "Johnnie Walker Red Label", p: "9.00" },
            { n: "Jameson", p: "9.00" },
            { n: "Cardhu", p: "10.00" }
          ]},
          { name: "Altri", items: [
            { n: "Shot Rum", p: "3.50" },
            { n: "Shot Tequilla", p: "3.50" },
            { n: "Shot Cachaça", p: "3.50" }
          ]}
        ]}
      ]},
      { name: "Piatti Principali", categories: [
        { name: "Pesce", items: [
          { n: "Pesce Fresco alla Griglia (1 persona)", p: "17.00", d: "Salmone, orata, branzino o tonno con verdure e patate al forno" },
          { n: "Grigliata Mista di Pesce (2 persone)", p: "37.50", d: "Tre tipi di pesce con verdure e patate al forno" },
          { n: "Gamberoni Tigre alla Griglia", p: "25.00", d: "Con spaghetti saltati in basilico e menta" },
          { n: "Polpo al Forno", p: "19.00", d: "Con purè di patate dolci e paglia di porro" },
          { n: "Baccalà 'Duque'", p: "19.00", d: "Con patate al forno, purè di spinaci e olio d'oliva con chorizo" },
          { n: "Baccalà Gratinato", p: "19.00", d: "Con spinaci, crema, cipolle e patate" },
          { n: "Filetto di Pesce Bianco", p: "18.00", d: "Con riso di bivalve, limone e menta" },
          { n: "Riso del Mare", p: "19.00", d: "Con pesce, vongole, cozze e gamberi" }
        ]},
        { name: "Carne", items: [
          { n: "Bistecca di Scamone alla Griglia", p: "18.00", d: "Con patatine fritte e purè di spinaci" },
          { n: "Bistecca di Controfiletto 'Duque'", p: "21.00", d: "Alla griglia con salsa d'aglio e prezzemolo. Con patatine fritte" },
          { n: "Ossobuco in Umido", p: "17.00", d: "Con purè di patate" },
          { n: "Guancia di Maiale Iberico", p: "18.00", d: "Cotta a fuoco lento. Con riso all'aglio e coriandolo" },
          { n: "Coscia d'Anatra Confit", p: "18.00", d: "Confit nel vino di Porto. Con riso di insaccati" },
          { n: "Costata di Agnello", p: "19.00", d: "Alla griglia, con succo di agrumi. Con patatine fritte" }
        ]},
        { name: "Insalate e Vegetariani", items: [
          { n: "Insalata di Petto di Pollo alla Griglia", p: "14.00", d: "Insalata verde, pomodoro, crostini e salsa caeser" },
          { n: "Insalata di Gamberi", p: "17.00", d: "Insalata verde, pomodoro, cipolla, salsa di yogurt e origano" },
          { n: "Insalata di Tonno Fresco", p: "16.00", d: "Insalata verde, pomodoro, uovo e salsa caeser" },
          { n: "Insalata di Cuscus e Formaggio di Capra", p: "13.50", d: "Cuscus, insalata verde, verdure e formaggio di capra" },
          { n: "'Braz' di Verdure con Olio di Oliva Tartufato", p: "14.00", d: "Verdure mescolate con uova e paglia di patate" },
          { n: "Risotto ai Funghi", p: "16.00" }
        ]},
        { name: "Dolci", items: [
          { n: "Dolci Vari", p: "7.50" }
        ]}
      ]}
    ]
  }

};
