import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'gl' | 'es' | 'en' | 'it' | 'lt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  gl: {
    // Hero Section
    heroTitle: "Beautiful Bees",
    heroSubtitle: "Unha comunidade para mulleres que queren florecer",
    heroDescription: "Unha viaxe compartida para reconectar contigo mesma, coa natureza e con outras mulleres",
    heroButton: "Unirse ao enxambre",
    
    // About Section
    aboutTitle: "Por que Beautiful Bees?",
    aboutDescription1: "Porque as abellas son o símbolo perfecto da cooperación, da creatividade e da transformación. Como elas, as mulleres rurais somos polinizadoras: levamos ideas, conectamos persoas e facemos que florezan os proxectos nos nosos territorios.",
    aboutHighlight: "Xuntas, creamos comunidade. Xuntas, facemos que todo medre.",
    aboutDescription2: "Este programa está deseñado para mulleres que queren emprender, crear ou simplemente reconectar consigo mesmas. Non importa se tes unha idea clara ou se aínda estás explorando: aquí tes espazo para descubrir, aprender e crear xunto a outras mulleres que comparten os teus valores.",
    
    // Journey Section
    journeyTitle: "As Fases do Teu Voo",
    journeyDescription: "Como as abellas, farás un percorrido transformador que te levará desde a inspiración ata a acción.",
    journeySubtitle: "Catro momentos únicos para medrar xuntas",
    
    // New phase content
    phase1Title: "Inspírate",
    phase1Description: "Conecta con outras mulleres e experiencias transformadoras. Descubre novas formas de emprender, crear e reconectar contigo mesma. A través de sesións online de 3 horas semanais, medra nun espazo seguro e compartido no que poderás explorar o teu potencial persoal e profesional, acompañada por unha comunidade que suma.",
    phase1Date: "📅 24 de setembro – 10 de decembro de 2025",
    
    phase2Title: "Convive",
    phase2Description: "Vive unha experiencia inmersiva en plena natureza galega, rodeada doutras mulleres coma ti. Aquí cócese a transformación: entre camiñadas, conversas e proxectos compartidos. Unha semana gratuíta con todo incluído nalgún dos dous espazos: Anceu Coliving ou A Loba.",
    phase2Date: "📅 Do 4 ao 9 de novembro de 2025",
    
    phase3Title: "Fase de solidariedade",
    phase3Description: "Como as abellas que coidan da súa colmea, aquí cóidase a comunidade. Cada participante impulsa unha acción para devolver ao territorio parte do agarimo recibido. Aquí florece o compromiso. Sesións online de 3 horas semanais para deseñar proxectos con impacto no teu territorio.",
    phase3Date: "📅 Do 28 de xaneiro ao 25 de febreiro de 2026",
    
    phase4Title: "Bootcamp internacional",
    phase4Description: "Comparte e medra xunto a mulleres e facilitadoras de España, Italia e Lituania. Aprende en rede, descubre novas ideas e leva o teu proxecto máis alá. Aquí ábrense as ás. 3 días de estancia en Lituania no mes de abril.",
    phase4Date: "📅 3 días en abril de 2026",
    
    // Target Section
    targetTitle: "Para Quen é Este Programa?",
    targetDescription1: "Beautiful Bees está pensado para mulleres que viven no rural ou que senten conexión cos valores rurais: a cooperación, a sostibilidade, o respecto pola natureza e a vida en comunidade.",
    targetHighlight: "Se tes ganas de crear, emprender ou simplemente reconectar contigo mesma...",
    targetConclusion: "Este é o teu lugar. Aquí tes espazo para medrar.",
    
    // CTA Section
    ctaTitle: "Prepárate para Volar",
    ctaDescription: "Únete a nós nesta aventura de crecemento, conexión e transformación. Xuntas, podemos crear algo fermoso.",
    ctaButton: "Quero unirme",
    ctaFree: "🎁 Programa totalmente gratuíto (24 prazas)",
    ctaSubtext: "A natureza ensínanos que todo medra mellor en comunidade",
    
    // Footer
    footerDescription: "Unha comunidade para mulleres que queren florecer no rural",
    footerPoweredBy: "Impulsado por",
    footerContact: "Contacto",
    footerEuCredit: "Proxecto financiado por:",
    footerProgram: "EOI (Escuela de Organización Industrial) e Cámara de Comercio de Santiago",
    footerMoreInfo: "Máis información",
    footerCopyright: "© 2025 Beautiful Bees. Todos os dereitos reservados.",
  },
  es: {
    // Hero Section
    heroTitle: "Beautiful Bees",
    heroSubtitle: "Una comunidad para mujeres que quieren florecer",
    heroDescription: "Un viaje compartido para reconectar contigo misma, con la naturaleza y con otras mujeres",
    heroButton: "Unirse al enjambre",
    
    // About Section
    aboutTitle: "¿Por qué Beautiful Bees?",
    aboutDescription1: "Porque las abejas son el símbolo perfecto de la cooperación, la creatividad y la transformación. Como ellas, las mujeres rurales somos polinizadoras: llevamos ideas, conectamos personas y hacemos que florezcan los proyectos en nuestros territorios.",
    aboutHighlight: "Juntas, creamos comunidad. Juntas, hacemos que todo crezca.",
    aboutDescription2: "Este programa está diseñado para mujeres que quieren emprender, crear o simplemente reconectar consigo mismas. No importa si tienes una idea clara o si aún estás explorando: aquí tienes espacio para descubrir, aprender y crear junto a otras mujeres que comparten tus valores.",
    
    // Journey Section
    journeyTitle: "Las Fases de tu Vuelo",
    journeyDescription: "Como las abejas, harás un recorrido transformador que te llevará desde la inspiración hasta la acción.",
    journeySubtitle: "Cuatro momentos únicos para crecer juntas",
    
    // New phase content
    phase1Title: "Inspírate",
    phase1Description: "Conecta con otras mujeres y experiencias transformadoras. Descubre nuevas formas de emprender, crear y reconectar contigo misma. A través de sesiones online de 3 horas semanales, crece en un espacio seguro y compartido donde podrás explorar tu potencial personal y profesional, acompañada por una comunidad que suma.",
    phase1Date: "📅 24 de septiembre – 10 de diciembre de 2025",
    
    phase2Title: "Convive",
    phase2Description: "Vive una experiencia inmersiva en plena naturaleza gallega, rodeada de otras mujeres como tú. Aquí se cuece la transformación: entre caminatas, conversas y proyectos compartidos. Una semana gratuita con todo incluido en alguno de los dos espacios: Anceu Coliving o A Loba.",
    phase2Date: "📅 Del 4 al 9 de noviembre de 2025",
    
    phase3Title: "Fase de solidaridad",
    phase3Description: "Como las abejas que cuidan de su colmena, aquí se cuida la comunidad. Cada participante impulsa una acción para devolver al territorio parte del cariño recibido. Aquí florece el compromiso. Sesiones online de 3 horas semanales para diseñar proyectos con impacto en tu territorio.",
    phase3Date: "📅 Del 28 de enero al 25 de febrero de 2026",
    
    phase4Title: "Bootcamp internacional",
    phase4Description: "Comparte y crece junto a mujeres y facilitadoras de España, Italia y Lituania. Aprende en red, descubre nuevas ideas y lleva tu proyecto más allá. Aquí se abren las alas. 3 días de estancia en Lituania en el mes de abril.",
    phase4Date: "📅 3 días en abril de 2026",
    
    // Target Section
    targetTitle: "¿Para Quién es Este Programa?",
    targetDescription1: "Beautiful Bees está pensado para mujeres que viven en el rural o que sienten conexión con los valores rurales: la cooperación, la sostenibilidad, el respeto por la naturaleza y la vida en comunidad.",
    targetHighlight: "Si tienes ganas de crear, emprender o simplemente reconectar contigo misma...",
    targetConclusion: "Este es tu lugar. Aquí tienes espacio para crecer.",
    
    // CTA Section
    ctaTitle: "Prepárate para Volar",
    ctaDescription: "Únete a nosotras en esta aventura de crecimiento, conexión y transformación. Juntas, podemos crear algo hermoso.",
    ctaButton: "Quiero unirme",
    ctaFree: "🎁 Programa totalmente gratuito (24 plazas)",
    ctaSubtext: "La naturaleza nos enseña que todo crece mejor en comunidad",
    
    // Footer
    footerDescription: "Una comunidad para mujeres que quieren florecer en el rural",
    footerPoweredBy: "Impulsado por",
    footerContact: "Contacto",
    footerEuCredit: "Proyecto financiado por:",
    footerProgram: "EOI (Escuela de Organización Industrial) y Cámara de Comercio de Santiago",
    footerMoreInfo: "Más información",
    footerCopyright: "© 2025 Beautiful Bees. Todos los derechos reservados.",
  },
  en: {
    // Hero Section
    heroTitle: "Beautiful Bees",
    heroSubtitle: "A community for women who want to flourish",
    heroDescription: "A shared journey to reconnect with yourself, nature, and other women",
    heroButton: "Join the swarm",
    
    // About Section
    aboutTitle: "Why Beautiful Bees?",
    aboutDescription1: "Because bees are the perfect symbol of cooperation, creativity and transformation. Like them, rural women are pollinators: we carry ideas, connect people and make projects flourish in our territories.",
    aboutHighlight: "Together, we create community. Together, we make everything grow.",
    aboutDescription2: "This program is designed for women who want to start businesses, create or simply reconnect with themselves. It doesn't matter if you have a clear idea or if you're still exploring: here you have space to discover, learn and create alongside other women who share your values.",
    
    // Journey Section
    journeyTitle: "The Phases of Your Flight",
    journeyDescription: "Like bees, you'll make a transformative journey that will take you from inspiration to action.",
    journeySubtitle: "Four unique moments to grow together",
    
    // New phase content
    phase1Title: "Get Inspired",
    phase1Description: "Connect with other women and transformative experiences. Discover new ways to start businesses, create and reconnect with yourself. Through weekly 3-hour online sessions, grow in a safe and shared space where you can explore your personal and professional potential, accompanied by a supportive community.",
    phase1Date: "📅 September 24 – December 10, 2025",
    
    phase2Title: "Live Together",
    phase2Description: "Live an immersive experience in the heart of Galician nature, surrounded by other women like you. Here transformation is cooked: between walks, conversations and shared projects. A free week with everything included in one of two spaces: Anceu Coliving or A Loba.",
    phase2Date: "📅 November 4-9, 2025",
    
    phase3Title: "Solidarity Phase",
    phase3Description: "Like bees that take care of their hive, here the community is cared for. Each participant drives an action to give back to the territory part of the affection received. Here commitment flourishes. Weekly 3-hour online sessions to design projects with impact in your territory.",
    phase3Date: "📅 January 28 – February 25, 2026",
    
    phase4Title: "International Bootcamp",
    phase4Description: "Share and grow alongside women and facilitators from Spain, Italy and Lithuania. Learn in network, discover new ideas and take your project beyond. Here wings open. 3 days stay in Lithuania in April.",
    phase4Date: "📅 3 days in April 2026",
    
    // Target Section
    targetTitle: "Who is This Program For?",
    targetDescription1: "Beautiful Bees is designed for women who live in rural areas or who feel connected to rural values: cooperation, sustainability, respect for nature and community life.",
    targetHighlight: "If you want to create, start a business or simply reconnect with yourself...",
    targetConclusion: "This is your place. Here you have space to grow.",
    
    // CTA Section
    ctaTitle: "Get Ready to Fly",
    ctaDescription: "Join us in this adventure of growth, connection and transformation. Together, we can create something beautiful.",
    ctaButton: "I want to join",
    ctaFree: "🎁 Completely free program (24 spots)",
    ctaSubtext: "Nature teaches us that everything grows better in community",
    
    // Footer
    footerDescription: "A community for women who want to flourish in rural areas",
    footerPoweredBy: "Powered by",
    footerContact: "Contact",
    footerEuCredit: "Project funded by:",
    footerProgram: "EOI (Escuela de Organización Industrial) and Santiago Chamber of Commerce",
    footerMoreInfo: "More information",
    footerCopyright: "© 2025 Beautiful Bees. All rights reserved.",
  },
  it: {
    // Hero Section
    heroTitle: "Beautiful Bees",
    heroSubtitle: "Una comunità per donne che vogliono fiorire",
    heroDescription: "Un viaggio condiviso per riconnettersi con se stesse, con la natura e con altre donne",
    heroButton: "Unisciti allo sciame",
    
    // About Section
    aboutTitle: "Perché Beautiful Bees?",
    aboutDescription1: "Perché le api sono il simbolo perfetto della cooperazione, della creatività e della trasformazione. Come loro, le donne rurali siamo impollinatrici: portiamo idee, connettiamo persone e facciamo fiorire i progetti nei nostri territori.",
    aboutHighlight: "Insieme, creiamo comunità. Insieme, facciamo crescere tutto.",
    aboutDescription2: "Questo programma è progettato per donne che vogliono intraprendere, creare o semplicemente riconnettersi con se stesse. Non importa se hai un'idea chiara o se stai ancora esplorando: qui hai spazio per scoprire, imparare e creare insieme ad altre donne che condividono i tuoi valori.",
    
    // Journey Section
    journeyTitle: "Le Fasi del Tuo Volo",
    journeyDescription: "Come le api, farai un percorso trasformativo che ti porterà dall'ispirazione all'azione.",
    journeySubtitle: "Quattro momenti unici per crescere insieme",
    
    // New phase content
    phase1Title: "Ispirati",
    phase1Description: "Connettiti con altre donne ed esperienze trasformative. Scopri nuovi modi di intraprendere, creare e riconnetterti con te stessa. Attraverso sessioni online settimanali di 3 ore, cresci in uno spazio sicuro e condiviso dove potrai esplorare il tuo potenziale personale e professionale, accompagnata da una comunità che sostiene.",
    phase1Date: "📅 24 settembre – 10 dicembre 2025",
    
    phase2Title: "Convivi",
    phase2Description: "Vivi un'esperienza immersiva nella natura galiziana, circondata da altre donne come te. Qui si cuoce la trasformazione: tra camminate, conversazioni e progetti condivisi. Una settimana gratuita con tutto incluso in uno dei due spazi: Anceu Coliving o A Loba.",
    phase2Date: "📅 Dal 4 al 9 novembre 2025",
    
    phase3Title: "Fase di solidarietà",
    phase3Description: "Come le api che si prendono cura del loro alveare, qui si cura la comunità. Ogni partecipante promuove un'azione per restituire al territorio parte dell'affetto ricevuto. Qui fiorisce l'impegno. Sessioni online settimanali di 3 ore per progettare progetti con impatto nel tuo territorio.",
    phase3Date: "📅 Dal 28 gennaio al 25 febbraio 2026",
    
    phase4Title: "Bootcamp internazionale",
    phase4Description: "Condividi e cresci insieme a donne e facilitatrici di Spagna, Italia e Lituania. Impara in rete, scopri nuove idee e porta il tuo progetto oltre. Qui si aprono le ali. 3 giorni di soggiorno in Lituania nel mese di aprile.",
    phase4Date: "📅 3 giorni in aprile 2026",
    
    // Target Section
    targetTitle: "Per Chi è Questo Programma?",
    targetDescription1: "Beautiful Bees è pensato per donne che vivono nelle zone rurali o che sentono connessione con i valori rurali: la cooperazione, la sostenibilità, il rispetto per la natura e la vita in comunità.",
    targetHighlight: "Se hai voglia di creare, intraprendere o semplicemente riconnetterti con te stessa...",
    targetConclusion: "Questo è il tuo posto. Qui hai spazio per crescere.",
    
    // CTA Section
    ctaTitle: "Preparati a Volare",
    ctaDescription: "Unisciti a noi in questa avventura di crescita, connessione e trasformazione. Insieme, possiamo creare qualcosa di bello.",
    ctaButton: "Voglio unirmi",
    ctaFree: "🎁 Programma completamente gratuito (24 posti)",
    ctaSubtext: "La natura ci insegna che tutto cresce meglio in comunità",
    
    // Footer
    footerDescription: "Una comunità per donne che vogliono fiorire nelle zone rurali",
    footerPoweredBy: "Sostenuto da",
    footerContact: "Contatto",
    footerEuCredit: "Progetto finanziato da:",
    footerProgram: "EOI (Escuela de Organización Industrial) e Camera di Commercio di Santiago",
    footerMoreInfo: "Maggiori informazioni",
    footerCopyright: "© 2025 Beautiful Bees. Tutti i diritti riservati.",
  },
  lt: {
    // Hero Section
    heroTitle: "Beautiful Bees",
    heroSubtitle: "Bendruomenė moterims, kurios nori klestėti",
    heroDescription: "Bendras kelias atsijungti su savimi, gamta ir kitomis moterimis",
    heroButton: "Prisijungti prie spiečiaus",
    
    // About Section
    aboutTitle: "Kodėl Beautiful Bees?",
    aboutDescription1: "Nes bitės yra tobulas bendradarbiavimo, kūrybingumo ir transformacijos simbolis. Kaip jos, kaimo moterys esame apdulkintojos: nešame idėjas, sujungiame žmones ir priverčiame klestėti projektus mūsų teritorijose.",
    aboutHighlight: "Kartu kuriame bendruomenę. Kartu verčiame viską augti.",
    aboutDescription2: "Ši programa skirta moterims, kurios nori pradėti verslą, kurti ar tiesiog prisijungti prie savęs. Nesvarbu, ar turite aiškią idėją, ar dar tyrinėjate: čia turite erdvės atrasti, mokytis ir kurti kartu su kitomis moterimis, kurios dalijasi jūsų vertybėmis.",
    
    // Journey Section
    journeyTitle: "Jūsų Skrydžio Fazės",
    journeyDescription: "Kaip bitės, atliksite transformuojantį kelią, kuris nuves jus nuo įkvėpimo iki veiksmų.",
    journeySubtitle: "Keturi unikalūs momentai augti kartu",
    
    // New phase content
    phase1Title: "Įkvėpkitės",
    phase1Description: "Prisijunkite prie kitų moterų ir transformuojančių patirčių. Atraskite naujus būdus pradėti verslą, kurti ir vėl prisijungti prie savęs. Per savaitinius 3 valandų internetinius seansus, augkite saugioje ir bendrojoje erdvėje, kur galėsite tyrinėti savo asmeninį ir profesinį potencialą, lydimi palaikančios bendruomenės.",
    phase1Date: "📅 Rugsėjo 24 – Gruodžio 10, 2025",
    
    phase2Title: "Gyvenkite kartu",
    phase2Description: "Išgyvenkite įtraukų patyrimą Galisijos gamtos širdyje, apsuptos kitų moterų kaip jūs. Čia verdama transformacija: tarp žygių, pokalbių ir bendrų projektų. Nemokama savaitė su viskuo įskaičiuotu vienoje iš dviejų erdvių: Anceu Coliving arba A Loba.",
    phase2Date: "📅 Lapkričio 4-9, 2025",
    
    phase3Title: "Solidarumo fazė",
    phase3Description: "Kaip bitės, kurios rūpinasi savo aviliu, čia rūpinamasi bendruomene. Kiekvienas dalyvis skatina veiksmą grąžinti teritorijai dalį gauto meilės. Čia klesti įsipareigojimas. Savaitiniai 3 valandų internetiniai seansai projektuoti su poveikiu jūsų teritorijoje.",
    phase3Date: "📅 Sausio 28 – Vasario 25, 2026",
    
    phase4Title: "Tarptautinis stovyklavimas",
    phase4Description: "Dalinkitės ir augkite kartu su moterimis ir vedliais iš Ispanijos, Italijos ir Lietuvos. Mokykitės tinkle, atraskite naujas idėjas ir nukėlkite savo projektą toliau. Čia atsiskleidžia sparnai. 3 dienų buvimas Lietuvoje balandžio mėnesį.",
    phase4Date: "📅 3 dienos balandžio mėnesį 2026",
    
    // Target Section
    targetTitle: "Kam Skirta Ši Programa?",
    targetDescription1: "Beautiful Bees skirta moterims, kurios gyvena kaimo vietovėse arba jaučia ryšį su kaimo vertybėmis: bendradarbiavimu, tvarumu, gamtos gerbimu ir bendruomenės gyvenimu.",
    targetHighlight: "Jei norite kurti, pradėti verslą ar tiesiog prisijungti prie savęs...",
    targetConclusion: "Tai jūsų vieta. Čia turite erdvės augti.",
    
    // CTA Section
    ctaTitle: "Pasiruoškite Skristi",
    ctaDescription: "Prisijunkite prie mūsų šiame augimo, ryšio ir transformacijos nuotykyje. Kartu galime sukurti kažką gražaus.",
    ctaButton: "Noriu prisijungti",
    ctaFree: "🎁 Visiškai nemokama programa (24 vietos)",
    ctaSubtext: "Gamta moko mus, kad viskas geriau auga bendruomenėje",
    
    // Footer
    footerDescription: "Bendruomenė moterims, kurios nori klestėti kaimo vietovėse",
    footerPoweredBy: "Remia",
    footerContact: "Kontaktai",
    footerEuCredit: "Projektą finansuoja:",
    footerProgram: "EOI (Escuela de Organización Industrial) ir Santiago prekybos rūmai",
    footerMoreInfo: "Daugiau informacijos",
    footerCopyright: "© 2025 Beautiful Bees. Visos teisės saugomos.",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('gl');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
