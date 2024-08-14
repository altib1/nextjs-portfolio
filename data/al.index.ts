export const navItemsAl = [
  { name: "faqja e pare", link: "/" },
  { name: "Rreth meje", link: "about" },
  { name: "Projektet e mija", link: "projects" },
  { name: "Kontakti", link: "#contact" },
];

export const gridItemsAl = [
  {
    id: 1,
    title: "Të bashkëpunojmë ngushtë me klientët për të sjellë idetë në jetë",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/Pair programming-pana.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Komunikim fleksibël, i përshtatur për nevojat tuaja",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Stoku im teknologjik në zhvillim",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Entuziast për teknologjinë me një pasion për zhvillimin.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Aktualisht duke punuar në projekte kompanie dhe duke ndërtuar portofolin tim dhe zgjeruar aftësitë e mia.",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Dëshironi të filloni një projekt së bashku? Apo dëshironi të më angazhoni?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projectsAl = [
  {
    "id": 1,
    "title": "Platformë e-commerce B2B - Sylius",
    "des": "Një platformë e-commerce B2B e ndërtuar me Sylius, një platformë e-commerce e bazuar në Symfony, e zhvilluar për Sodise.",
    "img": "/sodise-project.png",
    "iconLists": ["/sylius.svg", "/symfony_white_02.svg", "/js.svg", "/php.svg", "/elasticsearch.svg", "dock.svg"],
    "link": "https://www.sodise.com/",
    "showLink": true,
    "des1": "Platforma është zhvilluar duke përdorur Docker për containerizim, Symfony për zhvillimin e backend-it, Sylius për funksionalitetet e-commerce, Elasticsearch për menaxhimin e kërkimeve dhe Behat, PHPUnit për testet automatike.",
    "des2": "Platforma ofron klientëve mundësi të veçanta për krijimin e ofertave, vendosjen e porosive, ndjekjen e porosive, si dhe menaxhimin e faturave dhe pagesave.",
    "des3": "Kam bashkëpunuar me një ekip zhvilluesish për dy vjet për të dizajnuar dhe përmirësuar këtë platformë e-commerce B2B, duke integruar funksionalitete të reja dhe duke siguruar mirëmbajtjen e vazhdueshme."
  },
  {
    "id": 2,
    "title": "Platformë e-commerce B2C - Sylius",
    "des": "Një platformë e-commerce B2C e ndërtuar me Sylius, një platformë e-commerce e bazuar në Symfony, e zhvilluar për Cuiseo.",
    "img": "/cuiseo-project.png",
    "iconLists": ["/sylius.svg", "/symfony_white_02.svg", "/js.svg", "/php.svg", "/elasticsearch.svg", "dock.svg"],
    "link": "https://www.cuiseo.fr/cuisines-fruchaud/",
    "showLink": true,
    "des1": "Platforma është zhvilluar duke përdorur Docker për containerizim, Symfony për zhvillimin e backend-it dhe Sylius për funksionalitetet e-commerce.",
    "des2": "Platforma ofron klientëve mundësi të veçanta për të zgjedhur ose për të personalizuar kuzhinën e tyre, për të vendosur porosi, për të ndjekur porositë, si dhe për të menaxhuar faturat dhe pagesat.",
    "des3": "Kam bashkëpunuar me një ekip zhvilluesish për një vit për të dizajnuar dhe përmirësuar këtë platformë e-commerce B2C, duke integruar funksionalitete të reja dhe duke siguruar mirëmbajtjen e vazhdueshme."
  },
  {
    "id": 3,
    "title": "Plugin Sylius WebToPrint - Symfony",
    "des": "Ky është një plugin Sylius që mundëson krijimin e materialeve të personalizuara për produktet e e-commerce.",
    "img": "/webtoprint.png",
    "iconLists": ["/symfony_white_02.svg", "/js.svg", "/php.svg", "dock.svg"],
    "link": "",
    "showLink": false,
    "des1": "Plugin-i është zhvilluar duke përdorur Sylius, Docker dhe Behat/PHPUnit për testet automatike.",
    "des2": "Plugin-i ofron mundësi të veçanta për krijimin e materialeve të personalizuara për produktet e e-commerce.",
    "des3": "Kam filluar të punoj në projektin vetëm dhe më pas kam bashkëpunuar me një ekip zhvilluesish për të përmirësuar plugin-in."
  },
  {
    "id": 4,
    "title": "Gjenerator Manuali për Aplikacion Web - Symfony",
    "des": "Ky është një aplikacion web që gjeneron manuale për produktet e Rapido-s, i ndërtuar me Symfony.",
    "img": "/rapido-project.png",
    "iconLists": ["/symfony_white_02.svg", "/js.svg", "/php.svg", "dock.svg"],
    "link": "",
    "showLink": false,
    "des1": "Zgjidhja është zhvilluar duke përdorur Symfony, Easyadmin dhe Docker.",
    "des2": "Zgjidhja lejon klientët të gjenerojnë një manual PDF për produktet e Rapido-s, duke zgjedhur mundësi specifike për secilin produkt.",
    "des3": "Kam punuar me një ekip zhvilluesish për të dizajnuar dhe përmirësuar këtë aplikacion web, duke integruar funksionalitete të reja dhe duke siguruar mirëmbajtjen e vazhdueshme."
  },
  {
    "id": 5,
    "title": "Aplikacion Web për Strehimin e Studentëve - Vue Js",
    "des": "Ky është një aplikacion web që ofron studentëve strehim ose apartamente në një mënyrë unike, i ndërtuar me Vue Js dhe Node Js.",
    "img": "/onlyhome-project.png",
    "iconLists": ["/vuejs.svg", "/tail.svg", "/dock.svg", "/node-js.svg", "/js.svg", "/firebase.svg"],
    "link": "http://alti.balla.angers.mds-project.fr:8080/",
    "showLink": true,
    "des1": "Aplikacioni është zhvilluar duke përdorur Docker për containerizim, Vue Js për zhvillimin e frontend-it, Node Js për zhvillimin e backend-it, dhe Firebase për autentifikim.",
    "des2": "Aplikacioni ofron studentëve mundësi të veçanta për të zgjedhur strehim ose apartament në bazë të buxhetit dhe vendndodhjes së tyre, si dhe një zgjidhje moderne për të zgjedhur akomodimet.",
    "des3": "Si udhëheqës ekipi, kam drejtuar një ekip prej tre personash për dizajnimin dhe zhvillimin e këtij aplikacioni web."
  },
  {
    "id": 6,
    "title": "Ky Portfolio - Next Js",
    "des": "Ky është një portfolio moderne e ndërtuar me Next Js, Tailwind CSS dhe TypeScript.",
    "img": "/portfolio-project.png",
    "iconLists": ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    "link": "#",
    "showLink": false,
    "des1": "Portfolio është zhvilluar duke përdorur Next Js për zhvillimin e frontend-it, Tailwind CSS për dizajnin, TypeScript, Three Js për animacione dhe Framer Motion për animacione.",
    "des2": "Portfolio dallohet për dizajnin e tij modern dhe të pastër, duke ofruar vizitorëve një ndërfaqe intuitive dhe navigim të qetë që lehtëson eksplorimin e projekteve dhe informacionit.",
    "des3": "Kam punuar vetëm në këtë projekt për të dizajnuar dhe zhvilluar këtë portfolio."
  },
  {
    "id": 7,
    "title": "E-Commerce B2C - Wordpress",
    "des": "Ky është një platformë e-commerce moderne e ndërtuar me Wordpress, WooCommerce, ACF dhe Elementor. Site-i është i destinuar për një klient të quajtur Azergo.",
    "img": "/azergo-project.png",
    "iconLists": ["/wordpress.svg", "/mysql.svg", "/js.svg", "/php.svg"],
    "link": "https://www.azergo.fr",
    "showLink": true,
    "des1": "Site-i është zhvilluar duke përdorur Wordpress për zhvillimin e frontend-it, WooCommerce për funksionalitetet e-commerce, ACF për menaxhimin e fushave të personalizuara dhe Elementor për dizajnin.",
    "des2": "Site-i e-commerce lejon klientët të shfletojnë site-in, të zgjedhin produkte dhe të mësojnë më shumë për kompaninë.",
    "des3": "Kam punuar me një ekip zhvilluesish për të dizajnuar dhe përmirësuar këtë site e-commerce, duke integruar funksionalitete të reja dhe duke siguruar mirëmbajtjen e vazhdueshme."
  }
  
];

export const workExperienceAl = [
  {
    id: 1,
    title: "Programues Web Backend - Easycom/Wemea",
    desc: "Programova dhe mbajta aplikacione web, faqe interneti dhe APIs duke përdorur teknologji moderne backend gjatë punës për Easycom dhe Wemea për 3 vjet.",
    className: "md:col-span-2",
    thumbnail: "/easycom-wemea.png",
  },
  {
    id: 2,
    title: "Programues Web - Lycée La Colinière",
    desc: "Programova një aplikacion web për drejtorin e shkollës për të menaxhuar studentët atletë me aranzhime të veçanta të fletëve të orarit. Kam punuar aty si praktikant për 2 muaj.",
    className: "md:col-span-2",
    thumbnail: "/lyce.jpeg",
  },
  {
    id: 3,
    title: "Programues Windows - Ateliers Perrault",
    desc: "Programova një aplikacion Windows për punonjësit e kompanisë, duke i lejuar ata të regjistrojnë orët e tyre të punës, qoftë të lidhur me internetin ose jo. Kam punuar aty si praktikant për 6 javë.",
    className: "md:col-span-2",
    thumbnail: "/ateliersperrault-logo.webp",
  },
];


export const socialMediaAl = [
  {
    id: 1,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/alti-balla-a644761a1/",
  },
];

export const privacyPolicyAl = [
  {
    id: 1,
    title: "Politika e Privatësisë",
    description: "Privatësia juaj është e rëndësishme për ne. Politika e Alti Balla është të respektojë privatësinë tuaj në lidhje me çdo informacion që mund të mbledhim nga ju në faqen tonë të internetit, https://altiballa.fr, dhe faqet e tjera që zotërojmë dhe operojmë.",
    description1: "Ne kërkojmë informacion personal vetëm kur na nevojitet me të vërtetë për t'ju ofruar një shërbim. E mbledhim atë në mënyrë të drejtë dhe të ligjshme, me dijeninë dhe pëlqimin tuaj. Ne gjithashtu ju njoftojmë pse po e mbledhim atë dhe si do të përdoret.",
    description2: "Ne mbajmë informacionin e mbledhur vetëm për aq kohë sa është e nevojshme për t'ju ofruar shërbimin e kërkuar. Çfarëdo të dhëne që ruajmë, do ta mbrojmë brenda mjeteve të pranueshme tregtare për të parandaluar humbjen dhe vjedhjen, si dhe qasjen, zbulimin, kopjimin, përdorimin ose modifikimin e paautorizuar.",
    description3: "Ne nuk ndajmë asnjë informacion personalisht të identifikueshëm publikisht ose me palë të treta, përveç kur kërkohet nga ligji.",
    description4: "Faqja jonë e internetit mund të lidhet me faqe të jashtme që nuk operohen nga ne. Ju lutemi të jeni të vetëdijshëm se ne nuk kemi asnjë kontroll mbi përmbajtjen dhe praktikat e këtyre faqeve dhe nuk mund të pranojmë asnjë përgjegjësi për politikat e tyre të privatësisë.",
    description5: "Ne përdorim Sentry, një shërbim të palës së tretë, për të monitoruar dhe regjistruar gabimet që ndodhin në faqen e internetit. Kur ndodh një gabim, Sentry mund të mbledhë të dhëna teknike si adresa juaj IP (anonimizohet nëse është e mundur), informacionin e pajisjes dhe të shfletuesit, si dhe kohën dhe datën e gabimit. Këto të dhëna na ndihmojnë të identifikojmë dhe të rregullojmë problemet në faqen e internetit.",
    description6: "Ju jeni të lirë të refuzoni kërkesën tonë për informacionin tuaj personal, duke kuptuar se ne mund të mos jemi në gjendje t'ju ofrojmë disa nga shërbimet që dëshironi.",
    description7: "Përdorimi juaj i vazhdueshëm i faqes sonë të internetit do të konsiderohet si pranimi i praktikave tona rreth privatësisë dhe informacionit personal. Nëse keni ndonjë pyetje se si i trajtojmë të dhënat e përdoruesve dhe informacionet personale, mos hezitoni të na kontaktoni në altiballa@gmail.com.",
    description8: "Kjo politikë është në fuqi që nga 1 shtatori 2021.",
  },
  
]

export const termsAndConditionsAl = [
  {
    id: 1,
    title: "Kushtet dhe Kushtet e Përdorimit",
    description: "Këto kushte dhe kushte të përdorimit (të quajtura më poshtë 'Kushtet dhe Kushtet') kanë për qëllim të rregullojnë ligjërisht kushtet e ofrimit të faqes dhe shërbimeve nga altiballa.fr dhe të përcaktojnë kushtet e aksesit dhe përdorimit të shërbimeve nga 'Përdoruesi'.",
    description1: "Neni 1: Shënimet Ligjore",
    description2: "Redaktimi dhe drejtimi i publikimit të faqes altiballa.fr është i menaxhuar nga Alti Balla, i cili ndodhet në 20 rue de la fontaine, Laval, Francë.",
    description3: "Numri i telefonit: (+33) 06 05 99 15 77",
    description4: "Adresa e emailit: altiballa@gmail.com",
    description5: "Faqja është e hostuar nga Vercel, me selinë qendrore në 340 S Lemon Ave #4133, Walnut, CA 91789, SHBA.",
    description6: "Neni 2: Aksesi në faqe",
    description7: "Faqja altiballa.fr ofron Përdoruesit qasje falas në shërbimet e mëposhtme:",
    description8: "- Prezentimi i projekteve të portofolit",
    description9: "- Informacion mbi shërbimet e ofruara",
    description10: "Faqja është e aksesueshme falas nga çdo vend për çdo Përdorues me qasje në Internet. Të gjitha shpenzimet që Përdoruesi ka për të aksesuar shërbimin (pajisjet kompjuterike, softuerët, lidhja me Internetin, etj.) janë në kurriz të Përdoruesit.",
    description11: "Neni 3: Mbledhja e të Dhënave",
    description12: "Faqja siguron për Përdoruesin mbledhjen dhe përpunimin e informacionit personal në përputhje me ligjet për privatësinë në përputhje me Ligjin nr. 78-17 të 6 janarit 1978, lidhur me kompjuterët, dosjet dhe liritë.",
    description13: "Sipas Ligjit për Mbrojtjen e të Dhënave të 6 janarit 1978, Përdoruesi ka të drejtën të aksesojë, korigjojë, fshijë dhe kundërshtojë të dhënat e tij personale. Përdoruesi ushtron këtë të drejtë duke kontaktuar faqen në adresën: altiballa@gmail.com.",
    description14: "Neni 4: Pronësia Intelektuale",
    description15: "Markat, logot, shenjat si dhe të gjithë përmbajtjet e faqes (tekste, imazhe, tinguj, etj.) janë të mbrojtura nga Kodi i Pronësisë Intelektuale, sidomos nga të drejtat e autorit.",
    description16: "Përdoruesi duhet të kërkojë lejen paraprake të faqes për çdo riprodhim, publikim ose kopjim të përmbajtjeve të ndryshme. Përdoruesi angazhohet për të përdorur përmbajtjet e faqes në një kontekst strikt privat dhe çdo përdorim për qëllime tregtare ose reklamuese është rreptësisht i ndaluar.",
    description17: "Çdo përfaqësim i plotë ose i pjesëmarrshëm i kësaj faqeje me ndonjë mënyrë pa lejen e shprehur të operatorit të faqes do të përbënte një shkelje të ligjit e ndëshkueshme nga artikujt L 335-2 dhe të tjerë të Kodit të Pronësisë Intelektuale.",
    description18: "Kujtohet sipas artikullit L122-5 të Kodit të Pronësisë Intelektuale që Përdoruesi që riprodhon, kopjon ose publikon përmbajtjen e mbrojtur duhet të citojë autorin dhe burimin e saj.",
    description19: "Neni 5: Përgjegjësia",
    description20: "Burimet e informacionit të shpërndarë në faqen altiballa.fr janë të besueshme, por faqja nuk garanton që ajo është e lirë nga defekte, gabime ose mungesa.",
    description21: "Informacioni i dhënë është paraqitur për qëllime informacioni të përgjithshëm dhe nuk ka vlerë kontraktuale. Megjithë përditësimet e rregullta, faqja altiballa.fr nuk mund të mbajë përgjegjësi për ndryshimet në dispozitat administrative dhe ligjore që ndodhin pas publikimit. Po ashtu, faqja nuk mund të mbajë përgjegjësi për përdorimin dhe interpretimin e informacionit të përfshirë në këtë faqe.",
    description22: "Faqja altiballa.fr nuk mund të mbajë përgjegjësi për ndonjë virus që mund të infektojë kompjuterin e Përdoruesit ose çdo pajisje kompjuterike, pas përdorimit, aksesit ose shkarkimit nga kjo faqe.",
    description23: "Neni 6: Hipërlinket",
    description24: "Faqja altiballa.fr mund të përmbajë hipërlinke që çojnë në faqe të tjera interneti. Megjithatë, faqja nuk mund të verifikojë përmbajtjen e faqeve të vizituara dhe për këtë arsye nuk mund të mbajë përgjegjësi për këtë fakt ose për përmbajtjen e atyre faqeve.",
    description25: "Neni 7: Ndryshimet në Kushtet dhe Kushtet",
    description26: "Faqja altiballa.fr rezervon të drejtën për të modifikuar klauzolat e këtyre kushteve dhe kushteve të përdorimit në çdo kohë dhe pa shpjegim.",
    description27: "Neni 8: Kohëzgjatja e kontratës",
    description28: "Kohëzgjatja e kësaj kontrate është e pacaktuar. Kontrata hyn në fuqi në lidhje me Përdoruesin nga fillimi i përdorimit të shërbimit.",
    description29: "Neni 9: Ligji në Fuqi dhe Juridiksioni i K Competencës",
    description30: "Ligji francez është i zbatueshëm për këtë kontratë. Në mungesë të një zgjidhjeje miqësore të një mosmarrëveshjeje që lind mes palëve, gjykatat franceze do të kenë kompetencë të vetme për të trajtuar çështjen.",
  },
];

export const LegalMentionsAl = [
  {
    "id": 1,
    "title": "Njoftimi Ligjor",
    "editor": "Redaktori i Site-it",
    "editorDescription": "Site-i altiballa.fr është botuar nga Alti Balla, që banon në 20 rue de la Fontaine, Laval, Francë.",
    "host": "Hostuesi i Site-it",
    "hostDescription": "Site-i është hostuar nga Vercel, me selinë e saj në 340 S Lemon Ave #4133, Walnut, CA 91789, SHBA.",
    "access": "Akses në Site",
    "accessDescription": "Site-i është i aksesueshëm nga çdo vend, 24/7, përveç rasteve të forcës madhore, ndërprerjeve të planifikuara ose të paplanifikuara për mirëmbajtje, ose ndërprerjeve nga hostuesi.",
    "personalData": "Të Dhënat Personale",
    "personalDataDescription": "Site-i respekton privatësinë e përdoruesve të tij dhe angazhohet që të gjitha informacionet që mbledh dhe që mund të identifikojnë përdoruesit të trajtohen si informacion të besueshëm.",
    "prohibition": "Përdorimet e Ndaluara",
    "prohibitionDescription": "Çdo përdorim, riprodhim, shpërndarje, tregti, ose modifikim i gjithë ose pjesës së Site-it, pa autorizimin e botuesit është e ndaluar."
  }
  
];
