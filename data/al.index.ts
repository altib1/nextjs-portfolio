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
    id: 1,
    title: "Platforma e-commerce B2B - Sylius",
    des: "Një platformë e-commerce B2B e ndërtuar me Sylius, një platformë e-commerce e bazuar në Symfony e zhvilluar për Sodise.",
    img: "/sodise-project.png",
    iconLists: ["/sylius.svg", "/symfony_white_02.svg", "/js.svg", "/php.svg", "/elasticsearch.svg", "dock.svg"],
    link: "https://www.sodise.com/",
  },
  {
    id: 2,
    title: "Platforma e-commerce B2C - Sylius",
    des: "Një platformë e-commerce B2C e ndërtuar me Sylius, një platformë e-commerce e bazuar në Symfony e zhvilluar për Cuiseo.",
    img: "/cuiseo-project.png",
    iconLists: ["/sylius.svg", "/symfony_white_02.svg", "/js.svg", "/php.svg", "/elasticsearch.svg", "dock.svg"],
    link: "https://www.cuiseo.fr/cuisines-fruchaud/",
  },
  {
    id: 3,
    title: "Generator i manualit për aplikacione web - Symfony",
    des: "Kjo është një aplikacion web që krijon një manual për produktet e Rapido, ndërtuar me Symfony.",
    img: "/rapido-project.png",
    iconLists: ["/symfony_white_02.svg", "/js.svg", "/php.svg", "dock.svg"],
    link: "https://www.rapido-camping-car.fr/",
  },
  {
    id: 4,
    title: "Aplikacion web që propozon studentëve një shtëpi, apartament për të qëndruar - Vue Js",
    des: "Kjo është një aplikacion web që propozon studentëve një shtëpi ose apartament në një mënyrë unike, ndërtuar me Vue Js dhe Node js.",
    img: "/onlyhome-project.png",
    iconLists: ["/vuejs.svg", "/tail.svg", "/dock.svg", "/node-js.svg", "/js.svg"],
    link: "http://alti.balla.angers.mds-project.fr:8080/",
  },
  {
    id: 5,
    title: "Ky Portfolio - Next Js",
    des: "Ky është një portofol modern i ndërtuar me Next Js, Tailwind CSS dhe TypeScript.",
    img: "/portfolio-project.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "#",
  },
  {
    id: 6,
    title: "E-commerce B2C - Wordpress",
    des: "Ky është një platformë e-commerce moderne e ndërtuar me Wordpress, WooCommerce, ACF dhe Elementor. Webfaqja është për një klient të quajtur Azergo.",
    img: "/azergo-project.png",
    iconLists: ["/wordpress.svg", "/mysql.svg", "/js.svg", "/php.svg"],
    link: "https://www.azergo.fr",
  },
];

export const workExperienceAl = [
  {
    id: 1,
    title: "Zhvillues Web Backend - Easycom/Wemea",
    desc: "Zhvillova dhe mbajta aplikacione web, faqe interneti dhe APIs duke përdorur teknologji moderne backend gjatë punës për Easycom dhe Wemea për 3 vjet.",
    className: "md:col-span-2",
    thumbnail: "/easycom-wemea.png",
  },
  {
    id: 2,
    title: "Zhvillues Web - Lycée La Colinière",
    desc: "Zhvillova një aplikacion web për drejtorin e shkollës për të menaxhuar studentët atletë me aranzhime të veçanta të fletëve të orarit. Kam punuar aty si praktikant për 2 muaj.",
    className: "md:col-span-2",
    thumbnail: "/lyce.jpeg",
  },
  {
    id: 3,
    title: "Zhvillues Windows - Ateliers Perrault",
    desc: "Zhvillova një aplikacion Windows për punonjësit e kompanisë, duke i lejuar ata të regjistrojnë orët e tyre të punës, qoftë të lidhur me internetin ose jo. Kam punuar aty si praktikant për 6 javë.",
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
