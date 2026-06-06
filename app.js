// ── TRANSLATIONS ─────────────────────────────────────────────────────────────
const LANGS=["es","en","pt","fr"];
const LN={es:"🌐 EN",en:"🌐 PT",pt:"🌐 FR",fr:"🌐 ES"};
const T={
es:{sub:"COMPARA · AHORRA · DECIDE MEJOR",tab1:"🛒 Comparar",tab2:"Mi lista",tab3:"Calculadora",search:"Buscar producto...",gen:"Genérico",marca:"MARCA",generico:"GENÉRICO",saves:"💰 Ahorras ",less:"% menos",nut:"📊 Tabla nutricional",addGen:"+ Genérico",addBr:"+ Marca",vd:["✓ Idéntico","~ Similar","≠ Diferente"],nk:["Calorías","Proteína","Carbos","Grasas","Azúcares","Sodio"],mylist:"TU LISTA",allbrand:"SI FUERA TODO MARCA",saved:"💰 TOTAL AHORRADO",lessall:"% menos que todo de marca",e1:"Tu lista está vacía",e2:"Agrega productos desde Comparar",prods:"productos",ct:"🛍️ Productos",cs:"Agrega los productos que piensas comprar",imp:"✓ Se importaron {n} productos",ar:"+ Agregar producto",cft:"⚙️ Configuración",sl:"Estado / Región",rb:"Restablecer",tl:"Propina (tip)",tn:"Sin propina",dl:"Descuento o cupón",bl:"Mi presupuesto",bp:"¿Cuánto tienes para gastar?",st:"📊 Resumen",su:"Subtotal",ad:"Después del descuento",to:"Total",ov:"⚠️ Te pasas por {s}{a}",un:"✓ Te sobran {s}{a}",dt:"☕ ¿Te fue útil Mr. Shopper?",dx:"Esta herramienta es completamente <strong>gratuita</strong> y siempre lo será.<br>Si te ayudó a ahorrar, considera apoyarme con una donación voluntaria. 🙏",dk:"☕ Apóyame en Ko-fi",db:"☕ Buy Me a Coffee",dis:"<strong>Aviso legal:</strong> Mr. Shopper es una herramienta de comparación independiente. Todas las marcas son propiedad de sus respectivos dueños. Sin afiliación ni relación comercial. Precios de referencia."},
en:{sub:"COMPARE · SAVE · DECIDE BETTER",tab1:"🛒 Compare",tab2:"My list",tab3:"Calculator",search:"Search product...",gen:"Generic",marca:"BRAND",generico:"GENERIC",saves:"💰 Save ",less:"% less",nut:"📊 Nutrition table",addGen:"+ Generic",addBr:"+ Brand",vd:["✓ Identical","~ Similar","≠ Different"],nk:["Calories","Protein","Carbs","Fat","Sugars","Sodium"],mylist:"YOUR LIST",allbrand:"IF ALL BRAND",saved:"💰 TOTAL SAVED",lessall:"% less than all brand",e1:"Your list is empty",e2:"Add products from Compare tab",prods:"products",ct:"🛍️ Products",cs:"Add the products you plan to buy",imp:"✓ {n} products imported",ar:"+ Add product",cft:"⚙️ Configuration",sl:"State / Region",rb:"Reset",tl:"Tip",tn:"No tip",dl:"Discount or coupon",bl:"My budget",bp:"How much do you have to spend?",st:"📊 Summary",su:"Subtotal",ad:"After discount",to:"Total",ov:"⚠️ Over budget by {s}{a}",un:"✓ {s}{a} left in budget",dt:"☕ Was Mr. Shopper helpful?",dx:"This tool is completely <strong>free</strong> and always will be.<br>If it helped you save money, consider supporting me with a voluntary donation. 🙏",dk:"☕ Support on Ko-fi",db:"☕ Buy Me a Coffee",dis:"<strong>Legal notice:</strong> Mr. Shopper is an independent comparison tool. All brands are property of their owners. No affiliation or commercial relationship. Reference prices only."},
pt:{sub:"COMPARE · ECONOMIZE · DECIDA MELHOR",tab1:"🛒 Comparar",tab2:"Minha lista",tab3:"Calculadora",search:"Buscar produto...",gen:"Genérico",marca:"MARCA",generico:"GENÉRICO",saves:"💰 Economiza ",less:"% menos",nut:"📊 Tabela nutricional",addGen:"+ Genérico",addBr:"+ Marca",vd:["✓ Idêntico","~ Similar","≠ Diferente"],nk:["Calorias","Proteína","Carbos","Gorduras","Açúcares","Sódio"],mylist:"SUA LISTA",allbrand:"SE TUDO FOSSE MARCA",saved:"💰 TOTAL ECONOMIZADO",lessall:"% menos que tudo de marca",e1:"Sua lista está vazia",e2:"Adicione produtos na aba Comparar",prods:"produtos",ct:"🛍️ Produtos",cs:"Adicione os produtos que planeja comprar",imp:"✓ {n} produtos importados",ar:"+ Adicionar produto",cft:"⚙️ Configuração",sl:"Estado / Região",rb:"Redefinir",tl:"Gorjeta",tn:"Sem gorjeta",dl:"Desconto ou cupom",bl:"Meu orçamento",bp:"Quanto você tem para gastar?",st:"📊 Resumo",su:"Subtotal",ad:"Após o desconto",to:"Total",ov:"⚠️ Acima do orçamento em {s}{a}",un:"✓ Sobram {s}{a} no orçamento",dt:"☕ Mr. Shopper foi útil?",dx:"Esta ferramenta é completamente <strong>gratuita</strong> e sempre será.<br>Se te ajudou a economizar, considere me apoiar com uma doação voluntária. 🙏",dk:"☕ Apoie no Ko-fi",db:"☕ Buy Me a Coffee",dis:"<strong>Aviso legal:</strong> Mr. Shopper é uma ferramenta de comparação independente. Todas as marcas pertencem aos seus donos. Sem afiliação ou relação comercial. Preços de referência."},
fr:{sub:"COMPAREZ · ÉCONOMISEZ · DÉCIDEZ MIEUX",tab1:"🛒 Comparer",tab2:"Ma liste",tab3:"Calculatrice",search:"Rechercher un produit...",gen:"Générique",marca:"MARQUE",generico:"GÉNÉRIQUE",saves:"💰 Économisez ",less:"% moins",nut:"📊 Tableau nutritionnel",addGen:"+ Générique",addBr:"+ Marque",vd:["✓ Identique","~ Similaire","≠ Différent"],nk:["Calories","Protéines","Glucides","Graisses","Sucres","Sodium"],mylist:"VOTRE LISTE",allbrand:"SI TOUT ÉTAIT MARQUE",saved:"💰 TOTAL ÉCONOMISÉ",lessall:"% moins que tout de marque",e1:"Votre liste est vide",e2:"Ajoutez des produits depuis Comparer",prods:"produits",ct:"🛍️ Produits",cs:"Ajoutez les produits que vous prévoyez d'acheter",imp:"✓ {n} produits importés",ar:"+ Ajouter un produit",cft:"⚙️ Configuration",sl:"État / Région",rb:"Réinitialiser",tl:"Pourboire",tn:"Sans pourboire",dl:"Remise ou coupon",bl:"Mon budget",bp:"Combien avez-vous à dépenser?",st:"📊 Résumé",su:"Sous-total",ad:"Après remise",to:"Total",ov:"⚠️ Dépassement de {s}{a}",un:"✓ Il reste {s}{a}",dt:"☕ Mr. Shopper vous a été utile?",dx:"Cet outil est complètement <strong>gratuit</strong> et le sera toujours.<br>S'il vous a aidé à économiser, envisagez de me soutenir avec un don volontaire. 🙏",dk:"☕ Soutenir sur Ko-fi",db:"☕ Buy Me a Coffee",dis:"<strong>Avis légal:</strong> Mr. Shopper est un outil de comparaison indépendant. Toutes les marques appartiennent à leurs propriétaires. Sans affiliation ni relation commerciale. Prix indicatifs."},
};

// ── PRODUCT NAMES PER LANGUAGE ────────────────────────────────────────────────
const PN={
lec:["Leche entera 1L","Whole milk 1L","Leite integral 1L","Lait entier 1L"],
lec2:["Leche descremada 1L","Skim milk 1L","Leite desnatado 1L","Lait écrémé 1L"],
man:["Mantequilla 200g","Butter 200g","Manteiga 200g","Beurre 200g"],
que:["Queso amarillo rebanado","Sliced cheese","Queijo fatiado","Fromage tranché"],
yog:["Yogurt natural 1kg","Plain yogurt 1kg","Iogurte natural 1kg","Yaourt nature 1kg"],
cre:["Crema ácida 200g","Sour cream 200g","Creme azedo 200g","Crème fraîche 200g"],
qpa:["Queso panela 400g","Fresh cheese 400g","Queijo fresco 400g","Fromage frais 400g"],
hue:["Huevos blancos 12pz","White eggs 12pc","Ovos brancos 12un","Oeufs blancs 12pc"],
jamo:["Jamón de pavo 200g","Turkey ham 200g","Presunto de peru 200g","Jambon dinde 200g"],
sal:["Salchichas 400g","Hot dogs 400g","Salsichas 400g","Saucisses 400g"],
atu:["Atún en agua 140g","Tuna in water 140g","Atum em água 140g","Thon en eau 140g"],
sar:["Sardinas en tomate 125g","Sardines in tomato 125g","Sardinhas no tomate 125g","Sardines tomate 125g"],
arr:["Arroz blanco 1kg","White rice 1kg","Arroz branco 1kg","Riz blanc 1kg"],
pas:["Pasta spaghetti 500g","Spaghetti 500g","Macarrão 500g","Spaghetti 500g"],
avi:["Avena hojuelas 500g","Rolled oats 500g","Aveia em flocos 500g","Flocons d'avoine 500g"],
len:["Lentejas 500g","Lentils 500g","Lentilhas 500g","Lentilles 500g"],
fri:["Frijoles negros 400g","Black beans 400g","Feijão preto 400g","Haricots noirs 400g"],
gar:["Garbanzos 400g","Chickpeas 400g","Grão de bico 400g","Pois chiches 400g"],
tor:["Tortillas maíz 30pz","Corn tortillas 30pc","Tortilhas milho 30un","Tortillas maïs 30pc"],
tom:["Salsa de tomate 400g","Tomato sauce 400g","Molho de tomate 400g","Sauce tomate 400g"],
pur:["Puré de tomate 400g","Tomato puree 400g","Purê de tomate 400g","Purée tomate 400g"],
chi:["Chiles chipotles 220g","Chipotle peppers 220g","Pimentas chipotle 220g","Piments chipotle 220g"],
elote:["Elote en grano 400g","Corn kernels 400g","Milho em grão 400g","Maïs en grains 400g"],
ace:["Aceite vegetal 1L","Vegetable oil 1L","Óleo vegetal 1L","Huile végétale 1L"],
ace2:["Aceite de oliva 500ml","Olive oil 500ml","Azeite 500ml","Huile d'olive 500ml"],
saz:["Sal de mesa 1kg","Table salt 1kg","Sal de mesa 1kg","Sel de table 1kg"],
azu:["Azúcar blanca 1kg","White sugar 1kg","Açúcar branco 1kg","Sucre blanc 1kg"],
cals:["Caldo pollo 8 sobres","Chicken broth 8pk","Caldo frango 8un","Bouillon poulet 8pc"],
may:["Mayonesa 400g","Mayonnaise 400g","Maionese 400g","Mayonnaise 400g"],
ket:["Catsup 400g","Ketchup 400g","Ketchup 400g","Ketchup 400g"],
mos:["Mostaza 300g","Mustard 300g","Mostarda 300g","Moutarde 300g"],
pan:["Pan de caja blanco","White bread","Pão de forma","Pain de mie blanc"],
pan2:["Pan integral","Whole grain bread","Pão integral","Pain complet"],
gal:["Galletas de avena","Oat cookies","Biscoitos de aveia","Biscuits avoine"],
gal2:["Galletas saladas","Crackers","Biscoitos salgados","Crackers salés"],
caf:["Café molido 250g","Ground coffee 250g","Café moído 250g","Café moulu 250g"],
agu:["Agua embotellada 1.5L","Bottled water 1.5L","Água mineral 1.5L","Eau en bouteille 1.5L"],
jug:["Jugo de naranja 1L","Orange juice 1L","Suco laranja 1L","Jus d'orange 1L"],
te:["Té negro 25 sobres","Black tea 25pk","Chá preto 25un","Thé noir 25pc"],
ref:["Refresco cola 2L","Cola soda 2L","Refrigerante cola 2L","Soda cola 2L"],
pap:["Papas fritas 150g","Potato chips 150g","Salgadinho 150g","Chips 150g"],
pop:["Palomitas microondas 3pz","Microwave popcorn 3pk","Pipoca micro-ondas 3un","Pop-corn micro 3pc"],
cho:["Chocolate oscuro 100g","Dark chocolate 100g","Chocolate amargo 100g","Chocolat noir 100g"],
nut:["Nuez mixta 200g","Mixed nuts 200g","Mix de nozes 200g","Noix mélangées 200g"],
det:["Detergente líquido 1L","Liquid detergent 1L","Detergente líquido 1L","Lessive liquide 1L"],
lim:["Limpiador multiusos 1L","All-purpose cleaner 1L","Limpador multiuso 1L","Nettoyant multi 1L"],
clo:["Cloro 1L","Bleach 1L","Água sanitária 1L","Eau de javel 1L"],
pap2:["Papel higiénico 4 rollos","Toilet paper 4 rolls","Papel higiênico 4 rolos","Papier toilette 4 rouleaux"],
pap3:["Papel de cocina 2 rollos","Paper towels 2 rolls","Papel toalha 2 rolos","Essuie-tout 2 rouleaux"],
sha:["Shampoo 400ml","Shampoo 400ml","Shampoo 400ml","Shampooing 400ml"],
jab2:["Jabón de barra 3pz","Bar soap 3pk","Sabonete 3un","Savon en barre 3pc"],
gel:["Gel antibacterial 500ml","Hand sanitizer 500ml","Álcool gel 500ml","Gel antibactérien 500ml"],
pana:["Pañales talla M 40pz","Diapers size M 40pk","Fraldas tam M 40un","Couches taille M 40pc"],
toll:["Toallitas húmedas 80pz","Baby wipes 80pk","Lenços umedecidos 80un","Lingettes bébé 80pc"],
pca:["Croquetas perro 2kg","Dog food 2kg","Ração cachorro 2kg","Croquettes chien 2kg"],
pga:["Croquetas gato 2kg","Cat food 2kg","Ração gato 2kg","Croquettes chat 2kg"],
pars:["Paracetamol 500mg 20pz","Paracetamol 500mg 20pc","Paracetamol 500mg 20un","Paracétamol 500mg 20cp"],
ibu:["Ibuprofeno 400mg 20pz","Ibuprofen 400mg 20pc","Ibuprofeno 400mg 20un","Ibuprofène 400mg 20cp"],
vit:["Vitamina C 1000mg 30pz","Vitamin C 1000mg 30pc","Vitamina C 1000mg 30un","Vitamine C 1000mg 30cp"],
cur:["Curitas 40pz","Band-aids 40pk","Curativo 40un","Pansements 40pc"],
hel:["Helado vainilla 1L","Vanilla ice cream 1L","Sorvete baunilha 1L","Glace vanille 1L"],
veg:["Verduras mixtas 500g","Mixed vegetables 500g","Legumes mistos 500g","Légumes mélangés 500g"],
ore:["Orégano 30g","Oregano 30g","Orégano 30g","Origan 30g"],
pimi:["Pimienta negra 30g","Black pepper 30g","Pimenta preta 30g","Poivre noir 30g"],
cane:["Canela molida 30g","Ground cinnamon 30g","Canela moída 30g","Cannelle moulue 30g"],
};

// ── NOTES PER LANGUAGE ────────────────────────────────────────────────────────
const NOTE={
es:{lec:"Composición idéntica. Mejor ahorro del súper.",lec2:"Mismo proceso, misma reducción de grasa.",man:"Para cocinar igual; para untar nota la diferencia.",que:"Similar en fusión. Textura varía un poco.",yog:"Menos cultivos declarados pero funcional.",cre:"Idéntica en composición.",qpa:"Ahorra sin dudar.",hue:"Un huevo es un huevo. Idéntico.",jamo:"Similar en sabor y textura.",sal:"Para caldos igual. Para hotdog nota diferencia.",atu:"Puede tener más agua y menos trozo sólido.",sar:"Diferencia mínima.",arr:"Arroz es arroz. Mejor cambio del súper.",pas:"Para salsas espesas imperceptible.",avi:"Avena es avena.",len:"Legumbre sin procesar. Idéntica.",fri:"Ahorra aquí siempre.",gar:"Legumbre enlatada idéntica.",tor:"Misma masa nixtamalizada.",tom:"Para cocinar idéntica.",pur:"Idéntico en cocina.",chi:"Puede ser menos ahumado.",elote:"Maíz dulce idéntico.",ace:"Cambia sin dudar.",ace2:"Revisa etiqueta: puede mezclarse.",saz:"Sin diferencia posible.",azu:"Sacarosa pura. Idéntica.",cals:"Menos glutamato y sabor concentrado.",may:"Menos huevo real, más almidón.",ket:"Para cocinar el genérico funciona.",mos:"Mostaza amarilla idéntica.",pan:"Se endurece más rápido.",pan2:"Puede tener menos fibra real.",gal:"Para botanear igual.",gal2:"El genérico es menos crujiente.",caf:"Aquí la marca sí importa.",agu:"Mismos estándares. Ahorra siempre.",jug:"Genérico tiene más azúcar añadida.",te:"Hojas de té. Proceso idéntico.",ref:"Fórmulas únicas y patentadas.",pap:"Menos sazón pero sirve.",pop:"Menos mantequilla real.",cho:"Menos cacao real.",nut:"Sin procesar = sin diferencia.",det:"Menos enzimas. No cambies para manchas fuertes.",lim:"Para superficies idéntico.",clo:"Hipoclorito de sodio. Idéntico.",pap2:"Más delgado y áspero.",pap3:"Absorbe menos por hoja.",sha:"Limpia igual, menos acondicionadores.",jab2:"Para limpieza básica idéntico.",gel:"Alcohol 70%. Idéntico.",pana:"Puede filtrar más con mucha carga.",toll:"Paño húmedo neutro. Idéntico.",pca:"Menor porcentaje de proteína.",pga:"El porcentaje de proteína importa.",pars:"Mismo principio activo por ley.",ibu:"Mismo principio activo por ley.",vit:"Ácido ascórbico. Idéntico.",cur:"Funciona igual.",hel:"Más aire y menos crema real.",veg:"Verdura congelada idéntica.",ore:"Hierba seca. Sin diferencia.",pimi:"Especia básica. Idéntica.",cane:"Especia básica. Idéntica."},
en:{lec:"Identical composition. Best supermarket saving.",lec2:"Same process, same fat reduction.",man:"Equal for cooking; noticeable when spreading.",que:"Similar when melted. Texture varies slightly.",yog:"Fewer declared cultures but functional.",cre:"Identical in composition.",qpa:"Save without hesitation.",hue:"An egg is an egg. Identical.",jamo:"Similar in taste and texture.",sal:"Equal for soups. Difference in hot dogs.",atu:"May have more water and less solid piece.",sar:"Minimal difference.",arr:"Rice is rice. Best supermarket swap.",pas:"Imperceptible for thick sauces.",avi:"Oats are oats.",len:"Unprocessed legume. Identical.",fri:"Always save here.",gar:"Canned legume. Identical.",tor:"Same nixtamalized dough.",tom:"Identical for cooking.",pur:"Identical in kitchen.",chi:"May be less smoky.",elote:"Sweet corn. Identical.",ace:"Swap without hesitation.",ace2:"Check label: may be blended.",saz:"No possible difference.",azu:"Pure sucrose. Identical.",cals:"Less glutamate and concentrated flavor.",may:"Less real egg, more starch.",ket:"Generic works for cooking.",mos:"Basic yellow mustard. Identical.",pan:"Goes stale faster.",pan2:"May have less real fiber.",gal:"Equal for snacking.",gal2:"Generic is less crispy.",caf:"Brand matters here.",agu:"Same standards. Always save.",jug:"Generic has more added sugar.",te:"Tea leaves. Identical process.",ref:"Unique patented formulas.",pap:"Less seasoning but works.",pop:"Less real butter.",cho:"Less real cocoa.",nut:"Unprocessed = no difference.",det:"Fewer enzymes. Don't switch for tough stains.",lim:"Identical for surfaces.",clo:"Sodium hypochlorite. Identical.",pap2:"Thinner and rougher.",pap3:"Absorbs less per sheet.",sha:"Cleans equally, fewer conditioners.",jab2:"Identical for basic cleaning.",gel:"70% alcohol. Identical.",pana:"May leak more with heavy load.",toll:"Neutral wet cloth. Identical.",pca:"Lower protein percentage.",pga:"Protein percentage matters.",pars:"Same active ingredient by law.",ibu:"Same active ingredient by law.",vit:"Ascorbic acid. Identical.",cur:"Works the same.",hel:"More air and less real cream.",veg:"Frozen vegetable. Identical.",ore:"Dry herb. No difference.",pimi:"Basic spice. Identical.",cane:"Basic spice. Identical."},
pt:{lec:"Composição idêntica. Melhor economia.",lec2:"Mesmo processo, mesma redução de gordura.",man:"Igual para cozinhar; diferença ao passar.",que:"Similar ao derreter. Textura varia.",yog:"Menos culturas declaradas mas funcional.",cre:"Idêntica em composição.",qpa:"Economize sem hesitar.",hue:"Um ovo é um ovo. Idêntico.",jamo:"Similar em sabor e textura.",sal:"Igual para caldos. Diferença no hot-dog.",atu:"Pode ter mais água e menos pedaço.",sar:"Diferença mínima.",arr:"Arroz é arroz. Melhor troca.",pas:"Imperceptível para molhos grossos.",avi:"Aveia é aveia.",len:"Leguminosa não processada. Idêntica.",fri:"Economize sempre aqui.",gar:"Leguminosa enlatada. Idêntica.",tor:"Mesma massa nixtamalizada.",tom:"Idêntico para cozinhar.",pur:"Idêntico na cozinha.",chi:"Pode ser menos defumado.",elote:"Milho doce. Idêntico.",ace:"Troque sem hesitar.",ace2:"Verifique o rótulo: pode ser misturado.",saz:"Sem diferença possível.",azu:"Sacarose pura. Idêntica.",cals:"Menos glutamato e sabor concentrado.",may:"Menos ovo real, mais amido.",ket:"Genérico funciona para cozinhar.",mos:"Mostarda amarela básica. Idêntica.",pan:"Endurece mais rápido.",pan2:"Pode ter menos fibra real.",gal:"Igual para lanche.",gal2:"Genérico é menos crocante.",caf:"A marca importa aqui.",agu:"Mesmos padrões. Economize sempre.",jug:"Genérico tem mais açúcar.",te:"Folhas de chá. Processo idêntico.",ref:"Fórmulas únicas e patenteadas.",pap:"Menos tempero mas serve.",pop:"Menos manteiga real.",cho:"Menos cacau real.",nut:"Não processado = sem diferença.",det:"Menos enzimas. Não troque para manchas.",lim:"Idêntico para superfícies.",clo:"Hipoclorito de sódio. Idêntico.",pap2:"Mais fino e áspero.",pap3:"Absorve menos por folha.",sha:"Limpa igual, menos condicionadores.",jab2:"Idêntico para limpeza básica.",gel:"Álcool 70%. Idêntico.",pana:"Pode vazar com carga pesada.",toll:"Pano úmido neutro. Idêntico.",pca:"Menor percentual de proteína.",pga:"O percentual de proteína importa.",pars:"Mesmo princípio ativo por lei.",ibu:"Mesmo princípio ativo por lei.",vit:"Ácido ascórbico. Idêntico.",cur:"Funciona igual.",hel:"Mais ar e menos creme real.",veg:"Vegetal congelado. Idêntico.",ore:"Erva seca. Sem diferença.",pimi:"Especiaria básica. Idêntica.",cane:"Especiaria básica. Idêntica."},
fr:{lec:"Composition identique. Meilleure économie.",lec2:"Même processus, même réduction de graisse.",man:"Égal pour cuisiner; différence à tartiner.",que:"Similaire fondu. Texture varie légèrement.",yog:"Moins de cultures déclarées mais fonctionnel.",cre:"Identique en composition.",qpa:"Économisez sans hésiter.",hue:"Un oeuf est un oeuf. Identique.",jamo:"Similaire en goût et texture.",sal:"Égal pour les soupes. Différence hot-dogs.",atu:"Peut avoir plus d'eau et moins de morceaux.",sar:"Différence minimale.",arr:"Le riz est le riz. Meilleur échange.",pas:"Imperceptible pour les sauces épaisses.",avi:"L'avoine est l'avoine.",len:"Légumineuse non transformée. Identique.",fri:"Économisez toujours ici.",gar:"Légumineuse en conserve. Identique.",tor:"Même pâte nixtamalisée.",tom:"Identique pour cuisiner.",pur:"Identique en cuisine.",chi:"Peut être moins fumé.",elote:"Maïs doux. Identique.",ace:"Changez sans hésiter.",ace2:"Vérifiez l'étiquette: peut être mélangé.",saz:"Aucune différence possible.",azu:"Saccharose pur. Identique.",cals:"Moins de glutamate et saveur concentrée.",may:"Moins d'oeuf réel, plus d'amidon.",ket:"Le générique fonctionne pour cuisiner.",mos:"Moutarde jaune basique. Identique.",pan:"Durcit plus vite.",pan2:"Peut avoir moins de vraie fibre.",gal:"Égal pour le grignotage.",gal2:"Le générique est moins croustillant.",caf:"La marque compte ici.",agu:"Mêmes normes. Économisez toujours.",jug:"Le générique a plus de sucre ajouté.",te:"Feuilles de thé. Processus identique.",ref:"Formules uniques et brevetées.",pap:"Moins d'assaisonnement mais ça marche.",pop:"Moins de vrai beurre.",cho:"Moins de vrai cacao.",nut:"Non transformé = aucune différence.",det:"Moins d'enzymes. Ne changez pas pour les taches.",lim:"Identique pour les surfaces.",clo:"Hypochlorite de sodium. Identique.",pap2:"Plus fin et rugueux.",pap3:"Absorbe moins par feuille.",sha:"Nettoie pareil, moins d'après-shampooing.",jab2:"Identique pour le nettoyage basique.",gel:"Alcool 70%. Identique.",pana:"Peut fuir davantage avec charge lourde.",toll:"Lingette neutre. Identique.",pca:"Pourcentage de protéines plus faible.",pga:"Le pourcentage de protéines compte.",pars:"Même principe actif par loi.",ibu:"Même principe actif par loi.",vit:"Acide ascorbique. Identique.",cur:"Fonctionne pareil.",hel:"Plus d'air et moins de vraie crème.",veg:"Légume congelé. Identique.",ore:"Herbe sèche. Aucune différence.",pimi:"Épice basique. Identique.",cane:"Épice basique. Identique."},
};

// ── BRANDS PER COUNTRY ────────────────────────────────────────────────────────
const PB={
lec:{mx:"Lala/Nestlé",us:"Organic Valley/Horizon",es:"Puleva/Pascual",br:"Parmalat/Itambé"},
lec2:{mx:"Lala/Alpura",us:"Fairlife/Organic Valley",es:"Asturiana/Puleva",br:"Parmalat/Nestlé"},
man:{mx:"Lurpak/Lala",us:"Land O'Lakes/Kerrygold",es:"Kerrygold/Lurpak",br:"Aviação/Nestlé"},
que:{mx:"Kraft/Lala",us:"Kraft/Sargento",es:"Kraft/President",br:"Polenghi/Kraft"},
yog:{mx:"Danone/Yoplait",us:"Chobani/Fage",es:"Danone/Activia",br:"Danone/Nestlé"},
cre:{mx:"Lala/Nestlé",us:"Daisy/Breakstone's",es:"President/Nestlé",br:"Nestlé/Itambé"},
qpa:{mx:"Lala/Alpura",us:"Cacique/Queso Fresco",es:"Burgos/President",br:"Minas/Polenghi"},
hue:{mx:"Bachoco/San Juan",us:"Eggland's Best/Pete & Gerry's",es:"Pascual/Campofrío",br:"Mantiqueira/Korin"},
jamo:{mx:"FUD/Bafar",us:"Oscar Mayer/Boar's Head",es:"Campofrío/Navidul",br:"Sadia/Perdigão"},
sal:{mx:"FUD/Bafar",us:"Oscar Mayer/Ball Park",es:"Campofrío/Argal",br:"Sadia/Perdigão"},
atu:{mx:"Dolores/Herdez",us:"StarKist/Bumble Bee",es:"Isabel/Calvo",br:"Coqueiro/Gomes da Costa"},
sar:{mx:"Calmex",us:"Crown Prince/Season",es:"Isabel/Calvo",br:"Gomes da Costa"},
arr:{mx:"La Costeña/SOS",us:"Uncle Ben's/Mahatma",es:"SOS/Nomen",br:"Tio João/Camil"},
pas:{mx:"Barilla/La Moderna",us:"Barilla/Ronzoni",es:"Gallo/Barilla",br:"Barilla/Isabela"},
avi:{mx:"Quaker/Ángel",us:"Quaker/Bob's Red Mill",es:"Quaker/Blevit",br:"Quaker/Nestlé"},
len:{mx:"La Costeña",us:"Goya/Bob's Red Mill",es:"Luengo/Gallo",br:"Camil/Kicaldo"},
fri:{mx:"La Costeña/Isadora",us:"Goya/Bush's",es:"Goya/La Costeña",br:"Camil/Kicaldo"},
gar:{mx:"Del Monte/La Costeña",us:"Goya/Bush's",es:"Luengo/Cidacos",br:"Camil/Kicaldo"},
tor:{mx:"Maseca/Tía Rosa",us:"Mission/Maria",es:"El Mexicano",br:"Mission/Amigos"},
tom:{mx:"Del Monte/Herdez",us:"Hunt's/Del Monte",es:"Orlando/Prima",br:"Elefante/Quero"},
pur:{mx:"Herdez/Del Monte",us:"Hunt's/Contadina",es:"Orlando/Apis",br:"Elefante/Quero"},
chi:{mx:"La Costeña/Embasa",us:"La Costeña/Goya",es:"La Costeña",br:"La Costeña"},
elote:{mx:"Del Monte/La Costeña",us:"Green Giant/Del Monte",es:"Bonduelle/Jolca",br:"Bonduelle/Quero"},
ace:{mx:"Nutrioli/Patrona",us:"Crisco/Wesson",es:"Coosur/La Masía",br:"Soya/Liza"},
ace2:{mx:"Bertolli/Carbonell",us:"Filippo Berio/Kirkland",es:"Carbonell/Hojiblanca",br:"Borges/Gallo"},
saz:{mx:"La Fina/Morton",us:"Morton/Diamond Crystal",es:"La Cocinera/Salinera",br:"Cisne/Lebre"},
azu:{mx:"Zulka/Domino",us:"Domino/C&H",es:"Azucarera/Domino",br:"União/Guarani"},
cals:{mx:"Knorr/Maggi",us:"Swanson/College Inn",es:"Knorr/Gallina Blanca",br:"Knorr/Nestlé"},
may:{mx:"Hellmann's/McCormick",us:"Hellmann's/Duke's",es:"Hellmann's/Ybarra",br:"Hellmann's/Mavonese"},
ket:{mx:"Heinz/Del Monte",us:"Heinz/Hunt's",es:"Heinz/Orlando",br:"Heinz/Quero"},
mos:{mx:"French's/McCormick",us:"French's/Grey Poupon",es:"Maille/French's",br:"French's/Hemmer"},
pan:{mx:"Bimbo/Wonder",us:"Wonder/Nature's Own",es:"Bimbo/Silueta",br:"Bimbo/Wickbold"},
pan2:{mx:"Bimbo/Marinela",us:"Dave's Killer/Nature's Own",es:"Bimbo/Silueta",br:"Bimbo/Seven Boys"},
gal:{mx:"Gamesa/Marinela",us:"Pepperidge Farm/Quaker",es:"Gullón/Digestive",br:"Isabela/Nestlé"},
gal2:{mx:"Ritz/Sabritas",us:"Ritz/Nabisco",es:"Tuc/Ritz",br:"Ritz/Piraquê"},
caf:{mx:"Nescafé/Lavazza",us:"Folgers/Maxwell House",es:"Nescafé/Marcilla",br:"Nescafé/Melitta"},
agu:{mx:"Ciel/Bonafont",us:"Dasani/Aquafina",es:"Font Vella/Evian",br:"Crystal/Bonafont"},
jug:{mx:"Tropicana/Del Valle",us:"Tropicana/Simply",es:"Don Simón/Granini",br:"Del Valle/Minute Maid"},
te:{mx:"Lipton/Tetley",us:"Lipton/Bigelow",es:"Lipton/Hornimans",br:"Lipton/Leão"},
ref:{mx:"Coca-Cola/Pepsi",us:"Coca-Cola/Pepsi",es:"Coca-Cola/Pepsi",br:"Coca-Cola/Guaraná"},
pap:{mx:"Sabritas/Ruffles",us:"Lay's/Pringles",es:"Lay's/Ruffles",br:"Elma Chips/Ruffles"},
pop:{mx:"Orville/Act II",us:"Orville/Pop Secret",es:"Jolly Time/Act II",br:"Yoki/Elma Chips"},
cho:{mx:"Hershey's/Nestlé",us:"Lindt/Ghirardelli",es:"Nestlé/Valor",br:"Nestlé/Garoto"},
nut:{mx:"Wonderful/Planters",us:"Planters/Diamond",es:"Borges/Planters",br:"Planters/Nutripack"},
det:{mx:"Ariel/Persil",us:"Tide/Persil",es:"Ariel/Skip",br:"Ariel/OMO"},
lim:{mx:"Fabuloso/Pine-Sol",us:"Fabuloso/Mr. Clean",es:"Fairy/Mr. Proper",br:"Veja/Flash Limp"},
clo:{mx:"Cloralex/Clorox",us:"Clorox/Great Value",es:"Estrella/Don Limpio",br:"Clorox/Qboa"},
pap2:{mx:"Kleenex/Charmin",us:"Charmin/Cottonelle",es:"Scottex/Colhogar",br:"Neve/Personal"},
pap3:{mx:"Bounty/Scottex",us:"Bounty/Viva",es:"Scottex/Plenty",br:"Bounty/Snob"},
sha:{mx:"Pantene/H&S",us:"Pantene/Head&Shoulders",es:"Pantene/Elvive",br:"Pantene/Elseve"},
jab2:{mx:"Dove/Palmolive",us:"Dove/Irish Spring",es:"Dove/Heno de Pravia",br:"Dove/Palmolive"},
gel:{mx:"Purell/Lysol",us:"Purell/Germ-X",es:"Dettol/Sanytol",br:"Purell/Dettol"},
pana:{mx:"Pampers/Huggies",us:"Pampers/Huggies",es:"Dodot/Huggies",br:"Pampers/Huggies"},
toll:{mx:"Pampers/Huggies",us:"Pampers/Huggies",es:"Dodot/Babysec",br:"Pampers/Huggies"},
pca:{mx:"Purina/Pedigree",us:"Purina/Blue Buffalo",es:"Purina/Royal Canin",br:"Purina/Premier"},
pga:{mx:"Purina/Whiskas",us:"Purina/Blue Buffalo",es:"Purina/Royal Canin",br:"Purina/Premier"},
pars:{mx:"Tempra/Tylenol",us:"Tylenol/Advil",es:"Panadol/Apiretal",br:"Tylenol/Novalgina"},
ibu:{mx:"Advil/Motrin",us:"Advil/Motrin",es:"Nurofen/Ibuprofeno",br:"Advil/Neo-Quimica"},
vit:{mx:"Redoxon/Ester-C",us:"Emergen-C/Nature Made",es:"Redoxon/Supradyn",br:"Redoxon/Cewin"},
cur:{mx:"Band-Aid/Nexcare",us:"Band-Aid/Nexcare",es:"Band-Aid/Nexcare",br:"Band-Aid/Nexcare"},
hel:{mx:"Häagen-Dazs/Nestlé",us:"Häagen-Dazs/Ben&Jerry's",es:"Häagen-Dazs/Nestlé",br:"Häagen-Dazs/Kibon"},
veg:{mx:"Del Monte/Birds Eye",us:"Birds Eye/Green Giant",es:"Bonduelle/Findus",br:"Bonduelle/Mais Vita"},
ore:{mx:"McCormick",us:"McCormick/Simply Organic",es:"McCormick/Ducros",br:"McCormick/Kitano"},
pimi:{mx:"McCormick",us:"McCormick/Spice Islands",es:"McCormick/Ducros",br:"McCormick/Kitano"},
cane:{mx:"McCormick",us:"McCormick/Simply Organic",es:"McCormick/Ducros",br:"McCormick/Kitano"},
};

// ── CATEGORIES ────────────────────────────────────────────────────────────────
const CC={
"Lácteos":{c:"#2563eb",bg:"#dbeafe",i:"🥛"},
"Proteína":{c:"#dc2626",bg:"#fee2e2",i:"🥩"},
"Granos":{c:"#d97706",bg:"#fef3c7",i:"🌾"},
"Enlatados":{c:"#7c3aed",bg:"#ede9fe",i:"🥫"},
"Aceites":{c:"#ea580c",bg:"#ffedd5",i:"🫙"},
"Condimentos":{c:"#0891b2",bg:"#cffafe",i:"🧂"},
"Panadería":{c:"#92400e",bg:"#fef3c7",i:"🍞"},
"Bebidas":{c:"#0369a1",bg:"#e0f2fe",i:"🥤"},
"Snacks":{c:"#be185d",bg:"#fce7f3",i:"🍿"},
"Limpieza":{c:"#059669",bg:"#d1fae5",i:"✨"},
"Higiene":{c:"#7c3aed",bg:"#ede9fe",i:"🧼"},
"Bebés":{c:"#db2777",bg:"#fce7f3",i:"👶"},
"Mascotas":{c:"#65a30d",bg:"#ecfccb",i:"🐾"},
"Farmacia":{c:"#0f766e",bg:"#ccfbf1",i:"💊"},
"Congelados":{c:"#1d4ed8",bg:"#dbeafe",i:"❄️"},
"Especias":{c:"#15803d",bg:"#dcfce7",i:"🌿"},
};
const DC={c:"#6366f1",bg:"#e0e7ff",i:"📦"};

// ── PRODUCTS [id, cat, verdict, nut_b|null, nut_g|null] ───────────────────────
const P=[
["lec","Lácteos",0,[150,8,12,8,12,115],[150,8,12,8,12,115]],
["lec2","Lácteos",0,[90,8,12,0,12,130],[90,8,12,0,12,130]],
["man","Lácteos",1,[100,0,0,11,0,90],[100,0,0,11,0,95]],
["que","Lácteos",1,[80,5,1,7,0,410],[75,4,1,6,0,430]],
["yog","Lácteos",1,[100,17,6,1,6,95],[90,14,7,1,7,85]],
["cre","Lácteos",0,[60,1,2,6,1,15],[60,1,2,6,1,18]],
["qpa","Lácteos",0,[70,7,1,4,0,200],[70,7,1,4,0,210]],
["hue","Proteína",0,[70,6,0,5,0,70],[70,6,0,5,0,70]],
["jamo","Proteína",1,[60,8,2,2,0,580],[55,7,2,2,0,600]],
["sal","Proteína",1,[180,7,2,16,0,540],[170,6,2,15,0,560]],
["atu","Proteína",1,[100,22,0,1,0,320],[90,20,0,1,0,350]],
["sar","Proteína",0,[150,14,3,9,0,380],[148,13,3,9,0,400]],
["arr","Granos",0,[130,3,28,0,0,1],[130,3,28,0,0,1]],
["pas","Granos",1,[352,13,70,2,3,6],[350,12,71,1,3,8]],
["avi","Granos",0,[150,5,27,3,1,0],[150,5,27,3,1,0]],
["len","Granos",0,[116,9,20,0,0,2],[116,9,20,0,0,2]],
["fri","Granos",0,[110,7,20,1,0,390],[110,7,19,1,0,420]],
["gar","Granos",0,[120,7,22,2,0,320],[120,7,22,2,0,340]],
["tor","Granos",0,[50,1,10,1,0,15],[50,1,10,1,0,18]],
["tom","Enlatados",0,[40,2,9,0,6,350],[38,2,9,0,6,380]],
["pur","Enlatados",0,[35,1,8,0,5,20],[35,1,8,0,5,25]],
["chi","Enlatados",1,[25,1,4,0,2,430],[22,1,4,0,2,450]],
["elote","Enlatados",0,[70,2,15,1,5,290],[70,2,15,1,5,310]],
["ace","Aceites",0,[120,0,0,14,0,0],[120,0,0,14,0,0]],
["ace2","Aceites",1,[120,0,0,14,0,0],[119,0,0,13,0,0]],
["saz","Condimentos",0,[0,0,0,0,0,590],[0,0,0,0,0,590]],
["azu","Condimentos",0,[15,0,4,0,4,0],[15,0,4,0,4,0]],
["cals","Condimentos",1,[15,1,2,0,0,860],[12,1,2,0,0,900]],
["may","Condimentos",1,[90,0,1,10,0,90],[85,0,2,9,0,100]],
["ket","Condimentos",1,[20,0,5,0,4,160],[20,0,5,0,5,180]],
["mos","Condimentos",0,[5,0,0,0,0,120],[5,0,0,0,0,125]],
["pan","Panadería",2,[70,2,13,1,2,130],[65,2,12,1,1,140]],
["pan2","Panadería",1,[80,3,14,1,2,140],[75,3,13,1,2,150]],
["gal","Panadería",1,[130,2,20,5,8,90],[125,2,19,5,8,95]],
["gal2","Panadería",1,[80,1,10,4,1,115],[75,1,10,3,1,120]],
["caf","Bebidas",2,[5,0,1,0,0,5],[5,0,1,0,0,5]],
["agu","Bebidas",0,[0,0,0,0,0,0],[0,0,0,0,0,0]],
["jug","Bebidas",2,[110,2,26,0,22,0],[120,1,30,0,28,15]],
["te","Bebidas",0,[0,0,0,0,0,0],[0,0,0,0,0,0]],
["ref","Bebidas",2,[90,0,25,0,25,45],[85,0,24,0,24,40]],
["pap","Snacks",1,[150,2,16,9,0,170],[145,2,16,9,0,185]],
["pop","Snacks",1,[130,2,15,7,0,310],[125,2,15,7,0,330]],
["cho","Snacks",1,[150,2,16,9,8,10],[145,2,16,9,9,12]],
["nut","Snacks",0,[170,5,8,14,2,0],[170,5,8,14,2,0]],
["det","Limpieza",2,null,null],
["lim","Limpieza",0,null,null],
["clo","Limpieza",0,null,null],
["pap2","Limpieza",2,null,null],
["pap3","Limpieza",1,null,null],
["sha","Higiene",1,null,null],
["jab2","Higiene",0,null,null],
["gel","Higiene",0,null,null],
["pana","Bebés",1,null,null],
["toll","Bebés",0,null,null],
["pca","Mascotas",1,null,null],
["pga","Mascotas",1,null,null],
["pars","Farmacia",0,null,null],
["ibu","Farmacia",0,null,null],
["vit","Farmacia",0,null,null],
["cur","Farmacia",0,null,null],
["hel","Congelados",1,[200,3,24,11,20,65],[180,2,25,9,20,70]],
["veg","Congelados",0,[50,3,10,0,3,40],[50,3,10,0,3,45]],
["ore","Especias",0,[5,0,1,0,0,1],[5,0,1,0,0,1]],
["pimi","Especias",0,[6,0,1,0,0,1],[6,0,1,0,0,1]],
["cane","Especias",0,[6,0,2,0,0,0],[6,0,2,0,0,0]],
];

// ── COUNTRIES ─────────────────────────────────────────────────────────────────
const COUNTRIES=[
["mx","México","🇲🇽","$","MXN",[["wm","Walmart","Great Value"],["ch","Chedraui","Chedraui"],["so","Soriana","Soriana"],["co","Costco","Kirkland"],["ba","Bodega Aurrerá","Great Value"],["hb","HEB","Hill Country Fare"],["sm","Súper Maz","Súper Maz"],["sl","Casa Ley","Casa Ley"],["al","Alsuper","Alsuper"],["sp","Sam's Club","Member's Mark"],["cal","Calimax","Calimax"],["lc","La Comer","La Comer"]]],
["us","Estados Unidos","🇺🇸","$","USD",[["wus","Walmart","Great Value"],["tg","Target","Good & Gather"],["kr","Kroger","Kroger Brand"],["cus","Costco","Kirkland"],["al2","ALDI","ALDI Brand"],["tr","Trader Joe's","Trader Joe's"],["heb","H-E-B (Texas)","H-E-B Brand"],["pub","Publix","GreenWise"],["spr","Sprouts","Sprouts Brand"],["alb","Albertsons","Signature Select"],["saf","Safeway","Signature Select"],["win","WinCo Foods","WinCo Brand"],["wf","Whole Foods","365"]]],
["es","España","🇪🇸","€","EUR",[["me","Mercadona","Hacendado"],["li","Lidl","Lidl Brand"],["ca","Carrefour","Carrefour"],["di","Dia","Dia"],["al3","Alcampo","Auchan"],["er","Eroski","Eroski"],["co2","Consum","Consum"],["hi","HiperCor","El Corte Inglés"]]],
["co","Colombia","🇨🇴","$","COP",[["ex","Éxito","Éxito"],["ju","Jumbo","Jumbo"],["d1","D1","D1 Brand"],["ar","Ara","Ara"],["olf","Olímpica","Génesis"],["pr","PriceSmart","PriceSmart"]]],
["ar","Argentina","🇦🇷","$","ARS",[["car","Carrefour","Carrefour"],["di2","Dia","Dia"],["ct","Coto","Coto"],["jua","Jumbo","Jumbo"],["dis","Disco","Disco"]]],
["cl","Chile","🇨🇱","$","CLP",[["juc","Jumbo","Jumbo"],["ld","Líder","Great Value"],["tt","Tottus","Tottus"],["uni","Unimarc","Unimarc"],["acu","Acuenta","Acuenta"]]],
["uk","Reino Unido","🇬🇧","£","GBP",[["te","Tesco","Tesco Own"],["sa","Sainsbury's","Basics"],["as","ASDA","Smart Price"],["alu","ALDI","ALDI Brand"],["lid","Lidl","Lidl Brand"],["mor","Morrisons","Morrisons"]]],
["br","Brasil","🇧🇷","R$","BRL",[["cbr","Carrefour","Carrefour"],["at","Atacadão","Atacadão"],["ass","Assaí","Assaí"],["pau","Pão de Açúcar","Qualitá"]]],
["pe","Perú","🇵🇪","S/","PEN",[["pl","Plaza Vea","Bell's"],["ttt","Tottus","Tottus"],["me2","Metro","Metro"],["mas","Mass","Mass"]]],
];

const TAX={
mx:["IVA",0.16,false,[["Nacional",0.16],["Zona fronteriza norte",0.08]]],
us:["Sales Tax",0.085,true,[["Alabama",0.04],["Alaska",0.00],["Arizona",0.056],["Arkansas",0.065],["California",0.0725],["Colorado",0.029],["Connecticut",0.0635],["Delaware",0.00],["Florida",0.06],["Georgia",0.04],["Hawaii",0.04],["Idaho",0.06],["Illinois",0.0625],["Indiana",0.07],["Iowa",0.06],["Kansas",0.065],["Kentucky",0.06],["Louisiana",0.0445],["Maine",0.055],["Maryland",0.06],["Massachusetts",0.0625],["Michigan",0.06],["Minnesota",0.06875],["Mississippi",0.07],["Missouri",0.04225],["Montana",0.00],["Nebraska",0.055],["Nevada",0.0685],["New Hampshire",0.00],["New Jersey",0.06625],["New Mexico",0.05125],["New York",0.04],["North Carolina",0.0475],["North Dakota",0.05],["Ohio",0.0575],["Oklahoma",0.045],["Oregon",0.00],["Pennsylvania",0.06],["Rhode Island",0.07],["South Carolina",0.06],["South Dakota",0.045],["Tennessee",0.07],["Texas",0.0625],["Utah",0.0485],["Vermont",0.06],["Virginia",0.053],["Washington",0.065],["West Virginia",0.06],["Wisconsin",0.05],["Wyoming",0.04]]],
es:["IVA",0.21,false,[["Estándar",0.21],["Reducido",0.10],["Superreducido",0.04],["Canarias",0.07],["Ceuta/Melilla",0.00]]],
co:["IVA",0.19,false,[["Nacional",0.19],["Alimentos básicos",0.00]]],
ar:["IVA",0.21,false,[["Nacional",0.21],["Reducido",0.105],["Buenos Aires+prov.",0.24],["Tierra del Fuego",0.00]]],
cl:["IVA",0.19,false,[["Nacional",0.19]]],
uk:["VAT",0.20,false,[["Standard",0.20],["Reduced",0.05],["Food/medicine",0.00]]],
br:["ICMS",0.17,false,[["São Paulo",0.18],["Rio de Janeiro",0.20],["Minas Gerais",0.18],["Bahia",0.19],["Otros",0.17]]],
pe:["IGV",0.18,false,[["Nacional",0.18],["Zona franca",0.00]]],
};

const BASE={mx:22,us:3,es:2.2,co:4500,ar:950,cl:1300,uk:1.8,br:7,pe:4};
const NU_U=["kcal","g","g","g","g","mg"];

// ── STATE ─────────────────────────────────────────────────────────────────────
let langIdx=0,lang="es";
let cntry=COUNTRIES[0],store=COUNTRIES[0][5][0],activeCat="Todos";
let cart=[],calcRows=[{id:1,name:"",price:"",qty:1}],rowId=2;
let calcTip=0,discType="pct",stateIdx=0;

// ── HELPERS ───────────────────────────────────────────────────────────────────
function L(){return T[lang];}
function pname(id){var n=PN[id];if(!n)return id;return n[langIdx]||n[0];}
function pnote(id){var n=NOTE[lang];return n&&n[id]?n[id]:"";}
function getBrand(id){
  var b=PB[id];if(!b)return"Local";
  var cid=cntry[0];
  if(cid==="us")return b.us||b.mx;
  if(cid==="es")return b.es||b.mx;
  if(cid==="br")return b.br||b.mx;
  if(cid==="uk")return b.es||b.mx;
  return b.mx||b.us;
}
function getPrice(pid,cid,gen){
  var s=pid.split("").reduce(function(a,c){return a+c.charCodeAt(0);},0);
  var b=(BASE[cid]||22)*(1+(s%8)*0.28);
  return+(gen?b*0.60:b).toFixed(2);
}
function el(id){return document.getElementById(id);}
function txt(id,v){var e=el(id);if(e)e.textContent=v;}
function html(id,v){var e=el(id);if(e)e.innerHTML=v;}

// ── INIT ──────────────────────────────────────────────────────────────────────
window.onload=function(){
  var csel=el("csel");
  COUNTRIES.forEach(function(c){
    var o=document.createElement("option");
    o.value=c[0];o.textContent=c[2]+" "+c[1];
    csel.appendChild(o);
  });
  renderStores();
  applyLang();
  renderCats();
  renderProducts();
};

// ── LANGUAGE ──────────────────────────────────────────────────────────────────
function toggleLang(){
  langIdx=(langIdx+1)%LANGS.length;
  lang=LANGS[langIdx];
  applyLang();
  renderCats();
  renderProducts();
  renderCart();
}

function applyLang(){
  var l=L();
  txt("logo-sub",l.sub);
  txt("lang-btn",LN[lang]);
  txt("tab-comparar",l.tab1);
  txt("tab-lista",cart.length>0?l.tab2+" ("+cart.length+")":l.tab2);
  txt("tab-calc",l.tab3);
  el("search").placeholder=l.search;
  txt("empty1",l.e1);txt("empty2",l.e2);
  txt("calc-tit",l.ct);txt("calc-sub",l.cs);
  txt("add-row-btn",l.ar);txt("conf-tit",l.cft);
  txt("state-lbl",l.sl);txt("reset-btn",l.rb);
  txt("tip-lbl",l.tl);txt("tip-none",l.tn);
  txt("disc-lbl",l.dl);txt("bud-lbl",l.bl);
  el("budgetinput").placeholder=l.bp;
  txt("sum-tit",l.st);txt("lbl-sub",l.su);
  txt("lbl-after",l.ad);txt("lbl-total",l.to);
  txt("lbl-mylist",l.mylist);txt("lbl-allbrand",l.allbrand);
  txt("lbl-saved",l.saved);
  txt("dontitle",l.dt);html("dontext",l.dx);
  txt("don-kofi",l.dk);txt("don-bmac",l.db);
  html("dis-txt",l.dis);html("fdis-txt",l.dis);
  el("discsym").textContent=cntry[3];
  txt("c-cur",cntry[4]);
  var gl=el("gen-lbl");
  if(gl)gl.innerHTML=l.gen+": <strong style='color:#16a34a'>"+store[2]+"</strong>";
}

// ── COUNTRY / STORE ───────────────────────────────────────────────────────────
function onCountry(){
  cntry=COUNTRIES.find(function(c){return c[0]===el("csel").value;})||COUNTRIES[0];
  store=cntry[5][0];
  renderStores();renderProducts();renderCart();updateCalcTax();applyLang();
}
function onStore(){
  store=cntry[5].find(function(s){return s[0]===el("ssel").value;})||cntry[5][0];
  renderProducts();renderCart();
}
function renderStores(){
  var ssel=el("ssel");ssel.innerHTML="";
  cntry[5].forEach(function(s){
    var o=document.createElement("option");o.value=s[0];o.textContent=s[1];ssel.appendChild(o);
  });
  store=cntry[5][0];
}

// ── TABS ──────────────────────────────────────────────────────────────────────
function setTab(id,btn){
  document.querySelectorAll(".panel").forEach(function(p){p.classList.remove("on");});
  document.querySelectorAll(".tbtn").forEach(function(b){b.classList.remove("on");});
  el("panel-"+id).classList.add("on");
  if(btn)btn.classList.add("on");
  el("swrap").style.display=id==="comparar"?"flex":"none";
  if(id==="lista")renderCart();
  if(id==="calc")syncCalc();
}

// ── CATEGORIES ────────────────────────────────────────────────────────────────
function renderCats(){
  var allCats=["Todos"].concat(Object.keys(CC));
  var wrap=el("cpills");wrap.innerHTML="";
  allCats.forEach(function(c){
    var cfg=CC[c];var on=c===activeCat;
    var btn=document.createElement("button");btn.className="cpill";
    btn.textContent=(cfg?cfg.i+" ":"")+c;
    btn.style.cssText="background:"+(on&&cfg?cfg.c:cfg?cfg.bg:"#fff")+";color:"+(on&&cfg?"#fff":cfg?cfg.c:"#64748b")+";border-color:"+(cfg?cfg.c+"44":"#e2e8f0");
    btn.onclick=function(){activeCat=c;renderCats();renderProducts();};
    wrap.appendChild(btn);
  });
}

// ── PRODUCTS ─────────────────────────────────────────────────────────────────
function renderProducts(){
  var l=L();
  var q=(el("search").value||"").toLowerCase();
  var cid=cntry[0],sym=cntry[3];
  var VD=[{l:l.vd[0],c:"#16a34a",bg:"#dcfce7"},{l:l.vd[1],c:"#d97706",bg:"#fef3c7"},{l:l.vd[2],c:"#dc2626",bg:"#fee2e2"}];
  var filtered=P.filter(function(p){
    var name=pname(p[0]).toLowerCase();
    return(activeCat==="Todos"||p[1]===activeCat)&&name.includes(q);
  });
  txt("pcount",filtered.length+" "+l.prods);
  txt("sname",store[1]);
  var sg=el("sgeneric");if(sg)sg.textContent=store[2];
  var gl=el("gen-lbl");
  if(gl)gl.innerHTML=l.gen+": <strong id='sgeneric' style='color:#16a34a'>"+store[2]+"</strong>";
  var grid=el("pgrid");grid.innerHTML="";
  filtered.forEach(function(p){
    var id=p[0],cat=p[1],verd=p[2],nb=p[3],ng=p[4];
    var brand=getBrand(id);
    var cfg=CC[cat]||DC;
    var vd=VD[verd];
    var name=pname(id);var note=pnote(id);
    var bp=getPrice(id,cid,false),gp=getPrice(id,cid,true);
    var sav=(bp-gp).toFixed(2),savP=Math.round((bp-gp)/bp*100);
    var inCart=!!cart.find(function(i){return i.id===id;});
    var nutHTML="";
    if(nb&&ng){
      var nk=l.nk;
      var rows=nk.map(function(k,i){
        var bv=nb[i],gv=ng[i],d=gv-bv;
        var dc=d===0?"#16a34a":Math.abs(d)<5?"#d97706":"#dc2626";
        var diff=d!==0?"<span style='font-size:9px;color:"+(d>0?"#dc2626":"#16a34a")+";margin-left:2px'>"+(d>0?"+":"")+d+"</span>":"";
        return"<tr><td style='color:#64748b;padding:4px 0;border-top:1px solid #f1f5f9'>"+k+"</td><td style='text-align:center;color:#64748b;padding:4px 0;border-top:1px solid #f1f5f9'>"+bv+NU_U[i]+"</td><td style='text-align:center;color:"+dc+";padding:4px 0;border-top:1px solid #f1f5f9'>"+gv+NU_U[i]+diff+"</td></tr>";
      }).join("");
      nutHTML="<button class='ntoggle' onclick=\"toggleNut('"+id+"')\"><span>"+l.nut+"</span><span id='na-"+id+"'>▾</span></button><div class='ntable' id='nt-"+id+"'><table><thead><tr><th></th><th style='text-align:center;color:#64748b'>"+l.marca+"</th><th style='text-align:center;color:"+cfg.c+"'>"+l.generico+"</th></tr></thead><tbody>"+rows+"</tbody></table></div>";
    }
    var removeBtn=inCart?"<button class='ab abr' onclick=\"removeCart('"+id+"')\">✕</button>":"";
    var card=document.createElement("div");card.className="pcard";card.id="pc-"+id;
    card.innerHTML="<div class='pbar' style='background:"+cfg.c+"'></div><div class='pbody'><div class='phead'><div style='display:flex;gap:10px;align-items:center'><div class='picon' style='background:"+cfg.bg+"'>"+cfg.i+"</div><div><div class='pname'>"+name+"</div><div class='pbrand'>"+brand+"</div></div></div><div class='vbadge' style='background:"+vd.bg+";color:"+vd.c+"'>"+vd.l+"</div></div><div class='p2grid'><div class='pbox' style='background:#f8fafc;border-color:#f1f5f9'><div class='plabel' style='color:#94a3b8'>"+l.marca+"</div><div class='pval' style='color:#64748b'>"+sym+bp+"</div><div class='pbrlbl' style='color:#cbd5e1'>"+brand.split("/")[0]+"</div></div><div class='pbox' style='background:"+cfg.bg+";border-color:"+cfg.c+"33'><div class='plabel' style='color:"+cfg.c+"'>"+l.generico+"</div><div class='pval' style='color:"+cfg.c+"'>"+sym+gp+"</div><div class='pbrlbl' style='color:"+cfg.c+"99'>"+store[2]+"</div></div></div><div class='savebar'><span>"+l.saves+sym+sav+"</span><span class='savepct'>"+savP+l.less+"</span></div><div class='pnote'>"+note+"</div>"+nutHTML+"<div class='brow'><button class='ab' style='background:"+cfg.c+";color:#fff;border-color:"+cfg.c+";flex:1' onclick=\"addCart('"+id+"',true)\">"+l.addGen+"</button><button class='ab abgr' onclick=\"addCart('"+id+"',false)\">"+l.addBr+"</button>"+removeBtn+"</div></div>";
    grid.appendChild(card);
  });
}

function toggleNut(id){var e=el("nt-"+id);var a=el("na-"+id);var open=e.style.display==="block";e.style.display=open?"none":"block";if(a)a.textContent=open?"▾":"▴";}

// ── CART ──────────────────────────────────────────────────────────────────────
function addCart(id,gen){
  var p=P.find(function(x){return x[0]===id;});if(!p)return;
  var price=getPrice(id,cntry[0],gen),bp=getPrice(id,cntry[0],false);
  var brand=getBrand(id);
  var ex=cart.findIndex(function(i){return i.id===id;});
  if(ex>=0)cart[ex]=Object.assign({},cart[ex],{gen:gen,price:price,bp:bp,brand:brand});
  else cart.push({id:id,cat:p[1],name:pname(id),brand:brand,gen:gen,price:price,bp:bp});
  updateCartBadge();renderProducts();
}
function removeCart(id){cart=cart.filter(function(i){return i.id!==id;});updateCartBadge();renderProducts();renderCart();}
function updateCartBadge(){var l=L();txt("tab-lista",cart.length>0?l.tab2+" ("+cart.length+")":l.tab2);}

function renderCart(){
  var l=L();var sym=cntry[3],cur=cntry[4];
  var csum=el("csum"),cempty=el("cempty"),citems=el("citems");
  if(cart.length===0){csum.style.display="none";cempty.style.display="block";citems.innerHTML="";return;}
  cempty.style.display="none";csum.style.display="grid";
  var t=cart.reduce(function(s,i){return s+i.price;},0);
  var tb=cart.reduce(function(s,i){return s+i.bp;},0);
  var saved=tb-t,pct=tb>0?(saved/tb*100):0;
  txt("sv-t",sym+t.toFixed(2));txt("sv-cur",cur);
  txt("sv-tb",sym+tb.toFixed(2));txt("sv-cur2",cur);
  txt("sv-saved",sym+saved.toFixed(2));
  txt("sv-pct",pct.toFixed(0)+l.lessall);
  citems.innerHTML="";
  cart.forEach(function(item){
    var cfg=CC[item.cat]||DC;var div=document.createElement("div");div.className="citem";
    div.innerHTML="<div class='cileft'><div class='ciicon' style='background:"+cfg.bg+"'>"+cfg.i+"</div><div><div class='ciname'>"+item.name+"</div><div class='citype' style='color:"+(item.gen?"#16a34a":"#94a3b8")+"'>"+(item.gen?"✓ "+store[2]:item.brand)+"</div></div></div><div class='ciright'><div><div class='ciprice' style='color:"+(item.gen?"#16a34a":"#64748b")+"'>"+sym+item.price.toFixed(2)+"</div>"+(item.gen?"<div class='cisave'>"+l.saves+sym+(item.bp-item.price).toFixed(2)+"</div>":"")+"</div><button class='delbtn' onclick=\"removeCart('"+item.id+"')\">✕</button></div>";
    citems.appendChild(div);
  });
}

// ── CALCULATOR ────────────────────────────────────────────────────────────────
function updateCalcTax(){
  var cid=cntry[0];var tax=TAX[cid]||["IVA",0.16,false,[["Nacional",0.16]]];var states=tax[3]||[];
  txt("tax-lbl",tax[0]);txt("c-taxlbl",tax[0]);
  el("discsym").textContent=cntry[3];txt("c-cur",cntry[4]);
  var sw=el("statewrap"),ssel=el("statesel");
  if(states.length>1){
    sw.style.display="block";ssel.innerHTML="";
    states.forEach(function(s,i){var o=document.createElement("option");o.value=i;o.textContent=s[0];ssel.appendChild(o);});
    stateIdx=0;el("taxinput").value=(states[0][1]*100).toFixed(1);
  } else {
    sw.style.display="none";el("taxinput").value=(tax[1]*100).toFixed(1);
  }
  el("tipwrap").style.display=tax[2]?"block":"none";
  calcUpdate();
}
function onState(){var cid=cntry[0];var tax=TAX[cid];if(!tax)return;stateIdx=parseInt(el("statesel").value);el("taxinput").value=(tax[3][stateIdx][1]*100).toFixed(1);calcUpdate();}
function resetTax(){var cid=cntry[0];var tax=TAX[cid]||["IVA",0.16,false,[]];var states=tax[3]||[];var rate=states.length>1?states[stateIdx][1]:tax[1];el("taxinput").value=(rate*100).toFixed(1);calcUpdate();}
function setTip(v,btn){calcTip=v;document.querySelectorAll(".tipbtn").forEach(function(b){b.classList.remove("on");});btn.classList.add("on");calcUpdate();}
function setDiscType(type,btn){discType=type;document.querySelectorAll(".dtypebtn").forEach(function(b){b.classList.remove("on");});btn.classList.add("on");calcUpdate();}
function addRow(){calcRows.push({id:rowId++,name:"",price:"",qty:1});renderCalcRows();}
function removeRow(id){calcRows=calcRows.filter(function(r){return r.id!==id;});renderCalcRows();calcUpdate();}
function updateRow(id,key,val){var r=calcRows.find(function(r){return r.id===id;});if(r){r[key]=val;calcUpdate();}}
function renderCalcRows(){
  var sym=cntry[3];var wrap=el("crows");wrap.innerHTML="";
  calcRows.forEach(function(row,idx){
    var div=document.createElement("div");div.className="irow";
    div.innerHTML="<input class='cinput' placeholder='"+(idx+1)+"' value='"+row.name+"' oninput=\"updateRow("+row.id+",'name',this.value)\"/><div style='position:relative'><span style='position:absolute;left:8px;top:50%;transform:translateY(-50%);font-size:12px;color:#94a3b8'>"+sym+"</span><input type='number' class='cinput' style='padding-left:20px' placeholder='0.00' value='"+(row.price||"")+"' oninput=\"updateRow("+row.id+",'price',this.value)\"/></div><input type='number' class='cinput' style='text-align:center' min='1' value='"+row.qty+"' oninput=\"updateRow("+row.id+",'qty',this.value)\"/><button class='delbtn' onclick='removeRow("+row.id+")'>✕</button>";
    wrap.appendChild(div);
  });calcUpdate();
}
function syncCalc(){
  if(cart.length===0)return;
  calcRows=cart.map(function(item,i){return{id:i+100,name:item.name,price:item.price.toFixed(2),qty:1};});
  rowId=200;
  var imp=el("cimported");imp.style.display="block";
  imp.textContent=L().imp.replace("{n}",cart.length);
  renderCalcRows();updateCalcTax();
}
function calcUpdate(){
  var l=L();var sym=cntry[3];
  var taxRate=(parseFloat(el("taxinput").value)||0)/100;
  var discVal=parseFloat(el("discinput").value)||0;
  var budget=parseFloat(el("budgetinput").value)||0;
  var sub=calcRows.reduce(function(s,r){return s+(parseFloat(r.price)||0)*(parseInt(r.qty)||1);},0);
  var discAmt=discType==="pct"?sub*discVal/100:discVal;
  var afterDisc=Math.max(0,sub-discAmt);
  var taxAmt=afterDisc*taxRate;var tipAmt=afterDisc*calcTip/100;var total=afterDisc+taxAmt+tipAmt;
  txt("c-sub",sym+sub.toFixed(2));
  if(discAmt>0){el("c-drow").style.display="flex";el("c-arow").style.display="flex";txt("c-dlbl",l.dl+" ("+(discType==="pct"?discVal+"%":sym+discVal)+")");txt("c-dval","-"+sym+discAmt.toFixed(2));txt("c-aval",sym+afterDisc.toFixed(2));}
  else{el("c-drow").style.display="none";el("c-arow").style.display="none";}
  txt("c-taxval",sym+taxAmt.toFixed(2));txt("c-taxlbl",TAX[cntry[0]]?TAX[cntry[0]][0]:"Tax");
  if(calcTip>0){el("c-tiprow").style.display="flex";txt("c-tiplbl",l.tl+" ("+calcTip+"%)");txt("c-tipval",sym+tipAmt.toFixed(2));}
  else el("c-tiprow").style.display="none";
  txt("c-total",sym+total.toFixed(2));
  var alert=el("budgetalert"),bbar=el("bbar"),bfill=el("bfill");
  if(budget>0){
    bbar.style.display="block";
    var pct=Math.min(total/budget*100,100);
    bfill.style.width=pct+"%";bfill.style.background=total>budget?"#dc2626":"#16a34a";
    if(total>budget){alert.className="alert alertr";alert.textContent=l.ov.replace("{s}",sym).replace("{a}",(total-budget).toFixed(2));}
    else{alert.className="alert alertg";alert.textContent=l.un.replace("{s}",sym).replace("{a}",(budget-total).toFixed(2));}
  } else{alert.textContent="";bbar.style.display="none";}
}
