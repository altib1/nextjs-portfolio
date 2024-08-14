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

export const socialMediaAl = [
  {
    id: 1,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/alti-balla-a644761a1/",
  },
];
