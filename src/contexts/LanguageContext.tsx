
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'gl' | 'es' | 'en' | 'it' | 'lt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  gl: {
    // Hero Section
    heroTitle: '🌼 Beautiful Bees',
    heroSubtitle: 'Unha comunidade para mulleres que queren florecer no rural',
    heroDescription: 'Unha viaxe compartida para reconectar contigo mesma, coa natureza e con outras mulleres que están creando vida nos seus pobos.',
    heroButton: '👉 UNIRSE AO ENXAME',
    
    // About Section
    aboutTitle: '🌸 Que é Beautiful Bees?',
    aboutDescription1: 'Beautiful Bees é unha experiencia europea pensada para mulleres novas que queren vivir con propósito, rodeadas de natureza e comunidade.',
    aboutHighlight: 'Aquí floreces ti. E florecen todas contigo.',
    aboutDescription2: 'Un espazo onde se cultiva a sororidade, a inspiración e o amor polo territorio.',
    
    // Journey Section
    journeyTitle: '🐝 As Fases da Viaxe',
    journeyDescription: 'Como as abellas, vivimos en rede. Nutrímonos unhas ás outras. Creamos e coidamos xuntas.',
    journeySubtitle: 'Estas son as estacións do noso voo:',
    
    // Journey Phases
    phase1Title: 'Inspiración',
    phase1Description: 'Conecta con persoas e experiencias fascinantes. Coñece novas formas de emprender, crear ou simplemente reconectar contigo. Aquí acéndese a chispa.',
    
    phase2Title: 'Coliving en Anceu Coliving',
    phase2Description: 'Vive unha experiencia inmersiva en plena natureza galega, rodeada doutras mulleres como ti. Aquí cóceseose a transformación: entre camiñadas, conversas honestas e proxectos compartidos. Un espazo seguro onde a túa historia importa.',
    
    phase3Title: 'Bootcamp Internacional',
    phase3Description: 'Comparte e medra xunto a mulleres e facilitadoras de España, Italia e Lituania. Conecta online con outras mulleres que son bees neses países. Aprende en rede, conecta con ideas novas e leva o teu proxecto máis alá do teu pobo. Aquí ábrense as ás.',
    
    phase4Title: 'Fase de Solidaridade',
    phase4Description: 'Como as abellas que coidan a súa colmea, aquí cóidase a comunidade. Cada participante impulsa unha acción para devolver ao territorio parte do cariño recibido. Aquí florece o compromiso.',
    
    // Target Section
    targetTitle: '👩‍🌾 Para quen é?',
    targetDescription1: 'Para mulleres de 18 a 29 anos con ganas de crecer, crear, compartir e sentir que hai outros camiños posibles.',
    targetHighlight: 'Se levas tempo escoitando esa voceciña interior que che pide cambio…',
    targetConclusion: 'Este proxecto é para ti.',
    
    // CTA Section
    ctaTitle: '🌼 Fai florecer o teu camiño con Beautiful Bees',
    ctaDescription: 'A comunidade xa está zumbando… só faltas ti.',
    ctaButton: '👉 QUERO UNIRME',
    ctaSubtext: '✨ O cambio que buscas está a un clic de distancia ✨',
    ctaFree: '🎁 Programa totalmente gratuíto',
    
    // Footer
    footerDescription: 'Unha experiencia europea para mulleres que queren florecer no rural.',
    footerPoweredBy: 'Impulsado por',
    footerContact: 'Contacto',
    footerLanguage: 'Idioma:',
    footerEuCredit: '🇪🇺 Proxecto financiado pola Unión Europea',
    footerProgram: 'EOI (Escola de Organización Industrial) e Cámara de Comercio de Santiago',
    footerCopyright: '© 2025 Beautiful Bees - Rural Hackers. Feito con 💛 para as mulleres do rural.',
    footerMoreInfo: 'Máis información',
    
    // More Info Page
    moreInfoTitle: 'Máis información sobre Beautiful Bees',
    moreInfoIntro: 'O programa Beautiful Bees: Polinizadoras Rurais constrúese como unha experiencia transformadora que une a mulleres, territorios e saberes nun proceso de aprendizaxe profundo e colectivo. Máis que unha formación, é unha proposta viva de rexeneración: persoal, profesional e comunitaria.',
    moreInfoPillar1Title: 'Pensamento baseado na natureza (nature-based thinking)',
    moreInfoPillar1Description: 'aprender do territorio e co territorio. Comprender os seus ciclos, a súa resistencia e as súas formas de cooperación para aplicalas aos nosos propios procesos vitais e profesionais. Por iso o programa celébrase no rural: é na natureza onde estas ensinanzas teñen máis sentido e potencia.',
    moreInfoPillar2Title: 'Pensamento centrado no ser (being-based thinking)',
    moreInfoPillar2Description: 'cultivar a conciencia, o equilibrio e o propósito. Poñer no centro o benestar, a intuición, o autocoñecemento e a escoita para liderar con sentido.',
    moreInfoPillar3Title: 'Pensamento baseado na conexión (connecting-based thinking)',
    moreInfoPillar3Description: 'xerar redes reais. Fomentar os vínculos entre mulleres, entre xeracións, entre pobos. Conectar mundos, profesións, saberes e culturas para construír algo máis grande que o individual.',
    moreInfoConclusion: 'Esta filosofía materialízase nun percorrido con tres etapas: inspiración (Inspiration), co-living colaborativo e retorno ao territorio (Give Back). Cada unha está deseñada para deixar pegada nas participantes e no contorno.',
    moreInfoLocation: 'As actividades desenvólvense en dúas aldeas galegas: Anceu e Fornelos de Montes, que se entrelazan conectadas polas mesmas abellas. Porque por iso somos tamén Polinizadoras Rurais: abellas polinizando ideas, sementando vínculos, xerando comunidade.',
  },
  es: {
    // Mantener las traducciones existentes en español
    heroTitle: '🌼 Beautiful Bees',
    heroSubtitle: 'Una comunidad para mujeres que quieren florecer en el rural',
    heroDescription: 'Un viaje compartido para reconectar contigo misma, con la naturaleza y con otras mujeres que están creando vida en sus pueblos.',
    heroButton: '👉 ÚNETE AL ENJAMBRE',
    aboutTitle: '🌸 ¿Qué es Beautiful Bees?',
    aboutDescription1: 'Beautiful Bees es una experiencia europea pensada para mujeres jóvenes que quieren vivir con propósito, rodeadas de naturaleza y comunidad.',
    aboutHighlight: 'Aquí floreces tú. Y florecen todas contigo.',
    aboutDescription2: 'Un espacio donde se cultiva la sororidad, la inspiración y el amor por el territorio.',
    journeyTitle: '🐝 Las Fases del Viaje',
    journeyDescription: 'Como las abejas, vivimos en red. Nos nutrimos unas a otras. Creamos y cuidamos juntas.',
    journeySubtitle: 'Estas son las estaciones de nuestro vuelo:',
    phase1Title: 'Inspiración',
    phase1Description: 'Conecta con personas y experiencias fascinantes. Conoce nuevas formas de emprender, crear o simplemente reconectar contigo. Aquí se enciende la chispa.',
    phase2Title: 'Coliving en Anceu Coliving',
    phase2Description: 'Vive una experiencia inmersiva en plena naturaleza gallega, rodeada de otras mujeres como tú. Aquí se cocina la transformación: entre caminatas, conversaciones honestas y proyectos compartidos. Un espacio seguro donde tu historia importa.',
    phase3Title: 'Bootcamp Internacional',
    phase3Description: 'Comparte y crece junto a mujeres y facilitadoras de España, Italia y Lituania. Conecta online con otras mujeres que son bees en esos países. Aprende en red, conecta con ideas nuevas y lleva tu proyecto más allá de tu pueblo. Aquí se abren las alas.',
    phase4Title: 'Fase de Solidaridad',
    phase4Description: 'Como las abejas que cuidan su colmena, aquí se cuida la comunidad. Cada participante impulsa una acción para devolver al territorio parte del cariño recibido. Aquí florece el compromiso.',
    targetTitle: '👩‍🌾 ¿Para quién es?',
    targetDescription1: 'Para mujeres de 18 a 29 años con ganas de crecer, crear, compartir y sentir que hay otros caminos posibles.',
    targetHighlight: 'Si llevas tiempo escuchando esa vocecita interior que te pide cambio…',
    targetConclusion: 'Este proyecto es para ti.',
    ctaTitle: '🌼 Haz florecer tu camino con Beautiful Bees',
    ctaDescription: 'La comunidad ya está zumbando… solo faltas tú.',
    ctaButton: '👉 QUIERO UNIRME',
    ctaSubtext: '✨ El cambio que buscas está a un clic de distancia ✨',
    ctaFree: '🎁 Programa totalmente gratuito',
    footerDescription: 'Una experiencia europea para mujeres que quieren florecer en el rural.',
    footerPoweredBy: 'Impulsado por',
    footerContact: 'Contacto',
    footerLanguage: 'Idioma:',
    footerEuCredit: '🇪🇺 Proyecto financiado por la Unión Europea',
    footerProgram: 'EOI (Escuela de Organización Industrial) y Cámara de Comercio de Santiago',
    footerCopyright: '© 2025 Beautiful Bees - Rural Hackers. Hecho con 💛 para las mujeres del rural.',
    footerMoreInfo: 'Más información',
    moreInfoTitle: 'Más información sobre Beautiful Bees',
    moreInfoIntro: 'El programa Beautiful Bees: Polinizadoras Rurales se construye como una experiencia transformadora que une a mujeres, territorios y saberes en un proceso de aprendizaje profundo y colectivo. Más que una formación, es una propuesta viva de regeneración: personal, profesional y comunitaria.',
    moreInfoPillar1Title: 'Pensamiento basado en la naturaleza (nature-based thinking)',
    moreInfoPillar1Description: 'aprender del territorio y con el territorio. Comprender sus ciclos, su resiliencia y sus formas de cooperación para aplicarlas a nuestros propios procesos vitales y profesionales. Por eso el programa se celebra en el rural: es en la naturaleza donde estas enseñanzas tienen más sentido y potencia.',
    moreInfoPillar2Title: 'Pensamiento centrado en el ser (being-based thinking)',
    moreInfoPillar2Description: 'cultivar la conciencia, el equilibrio y el propósito. Poner en el centro el bienestar, la intuición, el autoconocimiento y la escucha para liderar con sentido.',
    moreInfoPillar3Title: 'Pensamiento basado en la conexión (connecting-based thinking)',
    moreInfoPillar3Description: 'generar redes reales. Fomentar los vínculos entre mujeres, entre generaciones, entre pueblos. Conectar mundos, profesiones, saberes y culturas para construir algo más grande que lo individual.',
    moreInfoConclusion: 'Esta filosofía se materializa en un recorrido con tres etapas: inspiración (Inspiration), co-living colaborativo y retorno al territorio (Give Back). Cada una está diseñada para dejar huella en las participantes y en el entorno.',
    moreInfoLocation: 'Las actividades se desarrollan en dos aldeas gallegas: Anceu y Fornelos de Montes, que se entrelazan conectadas por las mismas abejas. Porque por eso somos también Polinizadoras Rurales: abejas polinizando ideas, sembrando vínculos, generando comunidad.',
  },
  en: {
    heroTitle: '🌼 Beautiful Bees',
    heroSubtitle: 'A community for women who want to flourish in rural areas',
    heroDescription: 'A shared journey to reconnect with yourself, with nature and with other women who are creating life in their villages.',
    heroButton: '👉 JOIN THE SWARM',
    aboutTitle: '🌸 What is Beautiful Bees?',
    aboutDescription1: 'Beautiful Bees is a European experience designed for young women who want to live with purpose, surrounded by nature and community.',
    aboutHighlight: 'Here you flourish. And everyone flourishes with you.',
    aboutDescription2: 'A space where sisterhood, inspiration and love for the territory are cultivated.',
    journeyTitle: '🐝 The Journey Phases',
    journeyDescription: 'Like bees, we live in networks. We nourish each other. We create and care together.',
    journeySubtitle: 'These are the seasons of our flight:',
    phase1Title: 'Inspiration',
    phase1Description: 'Connect with fascinating people and experiences. Discover new ways to undertake, create or simply reconnect with yourself. Here the spark is ignited.',
    phase2Title: 'Coliving at Anceu Coliving',
    phase2Description: 'Live an immersive experience in the heart of Galician nature, surrounded by other women like you. Here transformation is cooked: between walks, honest conversations and shared projects. A safe space where your story matters.',
    phase3Title: 'International Bootcamp',
    phase3Description: 'Share and grow alongside women and facilitators from Spain, Italy and Lithuania. Connect online with other women who are bees in those countries. Learn networked, connect with new ideas and take your project beyond your village. Here wings open.',
    phase4Title: 'Solidarity Phase',
    phase4Description: 'Like bees that care for their hive, here the community is cared for. Each participant drives an action to give back to the territory part of the affection received. Here commitment flourishes.',
    targetTitle: '👩‍🌾 Who is it for?',
    targetDescription1: 'For women aged 18 to 29 with desire to grow, create, share and feel that there are other possible paths.',
    targetHighlight: 'If you have been listening to that inner voice asking for change for a while…',
    targetConclusion: 'This project is for you.',
    ctaTitle: '🌼 Make your path flourish with Beautiful Bees',
    ctaDescription: 'The community is already buzzing… you are the only one missing.',
    ctaButton: '👉 I WANT TO JOIN',
    ctaSubtext: '✨ The change you seek is one click away ✨',
    ctaFree: '🎁 Completely free program',
    footerDescription: 'A European experience for women who want to flourish in rural areas.',
    footerPoweredBy: 'Powered by',
    footerContact: 'Contact',
    footerLanguage: 'Language:',
    footerEuCredit: '🇪🇺 Project funded by the European Union',
    footerProgram: 'EOI (Industrial Organization School) and Santiago Chamber of Commerce',
    footerCopyright: '© 2025 Beautiful Bees - Rural Hackers. Made with 💛 for rural women.',
    footerMoreInfo: 'More information',
    moreInfoTitle: 'More information about Beautiful Bees',
    moreInfoIntro: 'The Beautiful Bees: Rural Pollinators program is built as a transformative experience that brings together women, territories and knowledge in a deep and collective learning process. More than training, it is a living proposal for regeneration: personal, professional and community.',
    moreInfoPillar1Title: 'Nature-based thinking',
    moreInfoPillar1Description: 'learning from the territory and with the territory. Understanding its cycles, its resilience and its forms of cooperation to apply them to our own vital and professional processes. That is why the program is held in rural areas: it is in nature where these teachings make the most sense and power.',
    moreInfoPillar2Title: 'Being-based thinking',
    moreInfoPillar2Description: 'cultivating awareness, balance and purpose. Putting well-being, intuition, self-knowledge and listening at the center to lead with meaning.',
    moreInfoPillar3Title: 'Connection-based thinking',
    moreInfoPillar3Description: 'generating real networks. Fostering links between women, between generations, between villages. Connecting worlds, professions, knowledge and cultures to build something bigger than the individual.',
    moreInfoConclusion: 'This philosophy materializes in a journey with three stages: inspiration (Inspiration), collaborative co-living and return to the territory (Give Back). Each one is designed to leave its mark on the participants and the environment.',
    moreInfoLocation: 'The activities take place in two Galician villages: Anceu and Fornelos de Montes, which are intertwined connected by the same bees. Because that is why we are also Rural Pollinators: bees pollinating ideas, sowing links, generating community.',
  },
  it: {
    heroTitle: '🌼 Beautiful Bees',
    heroSubtitle: 'Una comunità per donne che vogliono fiorire nelle zone rurali',
    heroDescription: 'Un viaggio condiviso per riconnettersi con se stesse, con la natura e con altre donne che stanno creando vita nei loro paesi.',
    heroButton: '👉 UNISCITI ALLO SCIAME',
    aboutTitle: '🌸 Che cos\'è Beautiful Bees?',
    aboutDescription1: 'Beautiful Bees è un\'esperienza europea pensata per giovani donne che vogliono vivere con uno scopo, circondate dalla natura e dalla comunità.',
    aboutHighlight: 'Qui fiorisci tu. E tutti fioriscono con te.',
    aboutDescription2: 'Uno spazio dove si coltivano la sorellanza, l\'ispirazione e l\'amore per il territorio.',
    journeyTitle: '🐝 Le Fasi del Viaggio',
    journeyDescription: 'Come le api, viviamo in rete. Ci nutriamo l\'una dell\'altra. Creiamo e ci prendiamo cura insieme.',
    journeySubtitle: 'Queste sono le stagioni del nostro volo:',
    phase1Title: 'Ispirazione',
    phase1Description: 'Connettiti con persone ed esperienze affascinanti. Scopri nuovi modi di intraprendere, creare o semplicemente riconnetterti con te stessa. Qui si accende la scintilla.',
    phase2Title: 'Coliving ad Anceu Coliving',
    phase2Description: 'Vivi un\'esperienza immersiva nel cuore della natura galiziana, circondata da altre donne come te. Qui si cucina la trasformazione: tra passeggiate, conversazioni oneste e progetti condivisi. Uno spazio sicuro dove la tua storia conta.',
    phase3Title: 'Bootcamp Internazionale',
    phase3Description: 'Condividi e cresci insieme a donne e facilitatrici di Spagna, Italia e Lituania. Connettiti online con altre donne che sono api in quei paesi. Impara in rete, connettiti con nuove idee e porta il tuo progetto oltre il tuo paese. Qui si aprono le ali.',
    phase4Title: 'Fase di Solidarietà',
    phase4Description: 'Come le api che si prendono cura del loro alveare, qui ci si prende cura della comunità. Ogni partecipante promuove un\'azione per restituire al territorio parte dell\'affetto ricevuto. Qui fiorisce l\'impegno.',
    targetTitle: '👩‍🌾 Per chi è?',
    targetDescription1: 'Per donne dai 18 ai 29 anni con voglia di crescere, creare, condividere e sentire che ci sono altri percorsi possibili.',
    targetHighlight: 'Se da tempo ascolti quella vocina interiore che ti chiede cambiamento…',
    targetConclusion: 'Questo progetto è per te.',
    ctaTitle: '🌼 Fai fiorire il tuo cammino con Beautiful Bees',
    ctaDescription: 'La comunità sta già ronzando… manchi solo tu.',
    ctaButton: '👉 VOGLIO UNIRMI',
    ctaSubtext: '✨ Il cambiamento che cerchi è a un clic di distanza ✨',
    ctaFree: '🎁 Programma completamente gratuito',
    footerDescription: 'Un\'esperienza europea per donne che vogliono fiorire nelle zone rurali.',
    footerPoweredBy: 'Promosso da',
    footerContact: 'Contatto',
    footerLanguage: 'Lingua:',
    footerEuCredit: '🇪🇺 Progetto finanziato dall\'Unione Europea',
    footerProgram: 'EOI (Scuola di Organizzazione Industriale) e Camera di Commercio di Santiago',
    footerCopyright: '© 2025 Beautiful Bees - Rural Hackers. Fatto con 💛 per le donne rurali.',
    footerMoreInfo: 'Maggiori informazioni',
    moreInfoTitle: 'Maggiori informazioni su Beautiful Bees',
    moreInfoIntro: 'Il programma Beautiful Bees: Impollinatrici Rurali si costruisce come un\'esperienza trasformativa che unisce donne, territori e saperi in un processo di apprendimento profondo e collettivo. Più che una formazione, è una proposta viva di rigenerazione: personale, professionale e comunitaria.',
    moreInfoPillar1Title: 'Pensiero basato sulla natura (nature-based thinking)',
    moreInfoPillar1Description: 'imparare dal territorio e con il territorio. Comprendere i suoi cicli, la sua resilienza e le sue forme di cooperazione per applicarle ai nostri processi vitali e professionali. Per questo il programma si celebra nel rurale: è nella natura dove questi insegnamenti hanno più senso e potenza.',
    moreInfoPillar2Title: 'Pensiero centrato sull\'essere (being-based thinking)',
    moreInfoPillar2Description: 'coltivare la coscienza, l\'equilibrio e lo scopo. Mettere al centro il benessere, l\'intuizione, l\'autoconoscenza e l\'ascolto per guidare con senso.',
    moreInfoPillar3Title: 'Pensiero basato sulla connessione (connecting-based thinking)',
    moreInfoPillar3Description: 'generare reti reali. Favorire i legami tra donne, tra generazioni, tra paesi. Connettere mondi, professioni, saperi e culture per costruire qualcosa di più grande dell\'individuale.',
    moreInfoConclusion: 'Questa filosofia si materializza in un percorso con tre tappe: ispirazione (Inspiration), co-living collaborativo e ritorno al territorio (Give Back). Ognuna è progettata per lasciare un\'impronta nelle partecipanti e nell\'ambiente.',
    moreInfoLocation: 'Le attività si svolgono in due villaggi galiziani: Anceu e Fornelos de Montes, che si intrecciano connessi dalle stesse api. Perché per questo siamo anche Impollinatrici Rurali: api che impollinano idee, seminando legami, generando comunità.',
  },
  lt: {
    heroTitle: '🌼 Beautiful Bees',
    heroSubtitle: 'Bendruomenė moterims, kurios nori klestėti kaimo vietovėse',
    heroDescription: 'Bendra kelionė susijungti su savimi, gamta ir kitomis moterimis, kurios kuria gyvenimą savo kaimuose.',
    heroButton: '👉 PRISIJUNGTI PRIE SPIEČIAUS',
    aboutTitle: '🌸 Kas yra Beautiful Bees?',
    aboutDescription1: 'Beautiful Bees yra Europos patirtis, skirta jaunoms moterims, kurios nori gyventi tikslingai, apsuptos gamtos ir bendruomenės.',
    aboutHighlight: 'Čia klestėji tu. Ir visi klesti kartu su tavimi.',
    aboutDescription2: 'Erdvė, kur ugdoma seserystė, įkvėpimas ir meilė teritorijai.',
    journeyTitle: '🐝 Kelionės Etapai',
    journeyDescription: 'Kaip bitės, gyvename tinkluose. Maitiname viena kitą. Kuriame ir rūpinamės kartu.',
    journeySubtitle: 'Tai mūsų skrydžio sezonai:',
    phase1Title: 'Įkvėpimas',
    phase1Description: 'Prisijunkite prie žavinčių žmonių ir patirčių. Atraskite naujus būdus kurti, plėtoti ar tiesiog vėl prisijungti prie savęs. Čia užsidega kibirkštis.',
    phase2Title: 'Coliving Anceu Coliving',
    phase2Description: 'Išgyvenk paskendimo patirtį Galisijos gamtos širdyje, apsuptas kitų moterų kaip tu. Čia gaminasi transformacija: tarp vaikščiojimų, sąžiningų pokalbių ir bendrų projektų. Saugi erdvė, kur tavo istorija svarbi.',
    phase3Title: 'Tarptautinis Bootcamp',
    phase3Description: 'Dalinkis ir augu kartu su moterimis ir facilitatorėmis iš Ispanijos, Italijos ir Lietuvos. Prisijunk internetu su kitomis moterimis, kurios yra bitės tuose šalyse. Mokykis tinkle, prisijunk prie naujų idėjų ir išvesk savo projektą už savo kaimo ribų. Čia atsiveria sparnai.',
    phase4Title: 'Solidarumo Etapas',
    phase4Description: 'Kaip bitės, kurios rūpinasi savo avilyje, čia rūpinamasi bendruomene. Kiekviena dalyvė skatina veiklą, kad grąžintų teritorijai dalį gauto meilės. Čia klesti įsipareigojimas.',
    targetTitle: '👩‍🌾 Kam tai skirta?',
    targetDescription1: 'Moterims nuo 18 iki 29 metų, kurios nori augti, kurti, dalintis ir pajusti, kad yra kitų galimų kelių.',
    targetHighlight: 'Jei ilgai klausaisi to vidinio balso, kuris prašo pokyčio…',
    targetConclusion: 'Šis projektas skirtas tau.',
    ctaTitle: '🌼 Leisk klestėti savo keliui su Beautiful Bees',
    ctaDescription: 'Bendruomenė jau ūžia… trūksta tik tavęs.',
    ctaButton: '👉 NORIU PRISIJUNGTI',
    ctaSubtext: '✨ Pokytis, kurio ieškai, yra vieno paspaudimo atstumu ✨',
    ctaFree: '🎁 Visiškai nemokama programa',
    footerDescription: 'Europos patirtis moterims, kurios nori klestėti kaimo vietovėse.',
    footerPoweredBy: 'Skatina',
    footerContact: 'Kontaktai',
    footerLanguage: 'Kalba:',
    footerEuCredit: '🇪🇺 Projektas finansuojamas Europos Sąjungos',
    footerProgram: 'EOI (Pramonės organizavimo mokykla) ir Santiago prekybos rūmai',
    footerCopyright: '© 2025 Beautiful Bees - Rural Hackers. Sukurta su 💛 kaimo moterims.',
    footerMoreInfo: 'Daugiau informacijos',
    moreInfoTitle: 'Daugiau informacijos apie Beautiful Bees',
    moreInfoIntro: 'Beautiful Bees: Kaimo apdulkintojų programa statoma kaip transformacinė patirtis, kuri suvienija moteris, teritorijas ir žinias gilaus ir kolektyvinio mokymosi procese. Daugiau nei mokymas, tai gyva regeneracijos pasiūlymas: asmeninis, profesionalus ir bendruomenės.',
    moreInfoPillar1Title: 'Gamtos pagrįstas mąstymas (nature-based thinking)',
    moreInfoPillar1Description: 'mokytis iš teritorijos ir su teritorija. Suprasti jos ciklus, atsparumą ir bendradarbiavimo formas, kad jas pritaikytume savo gyvybiniams ir profesiniams procesams. Todėl programa vyksta kaime: gamtoje šie mokymai turi daugiausia prasmės ir galios.',
    moreInfoPillar2Title: 'Į būtį orientuotas mąstymas (being-based thinking)',
    moreInfoPillar2Description: 'ugdyti sąmonę, pusiausvyrą ir tikslą. Į centrą statyti gerovę, intuiciją, savipažinimą ir klausymąsi, kad vadovautų prasmingai.',
    moreInfoPillar3Title: 'Ryšiais pagrįstas mąstymas (connecting-based thinking)',
    moreInfoPillar3Description: 'kurti realius tinklus. Skatinti ryšius tarp moterų, tarp kartų, tarp kaimų. Sujungti pasaulius, profesijas, žinias ir kultūras, kad sukurtume kažką didesnio nei individualumas.',
    moreInfoConclusion: 'Ši filosofija įgyvendinama kelionėje su trimis etapais: įkvėpimas (Inspiration), bendradarbiavimo coliving ir grįžimas į teritoriją (Give Back). Kiekvienas skirtas palikti pėdsaką dalyviams ir aplinkai.',
    moreInfoLocation: 'Veikla vyksta dviejuose Galisijos kaimuose: Anceu ir Fornelos de Montes, kurie susipina sujungti tų pačių bičių. Nes todėl mes taip pat esame Kaimo apdulkintojai: bitės, apdulkinančios idėjas, sėjančios ryšius, generuojančios bendruomenę.',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('gl');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
