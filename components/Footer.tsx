import { FaLocationArrow } from "react-icons/fa6";
import { socialMediaEn } from "@/data/en.index";
import { socialMediaFr } from "@/data/fr.index";
import { socialMediaAl } from "@/data/al.index";
import { useLocale } from "next-intl";
import MagicButton from "./ui/MagicButton";

interface FooterProps {
  titlePt1: string;
  titlePt2: string;
  titlePt3: string;
  subtitle: string;
  button: string;
  copyright: string;
}

const Footer = ({
  titlePt1,
  titlePt2,
  titlePt3,
  subtitle,
  button,
  copyright
}: FooterProps) => {
  const locale = useLocale();
  const socialMedia = locale === "en" ? socialMediaEn : locale === "fr" ? socialMediaFr : socialMediaAl;
  
  const pageLinks = [
    { name: 'Politique de Confidentialité', href: '/privacy-policy' },
    { name: 'CGU', href: '/terms-and-conditions' },
    { name: 'Mentions Légales', href: '/legal-mentions' },
  ];

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          {titlePt1} <span className="text-sky-300">{titlePt2}</span> {titlePt3}
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          {subtitle}
        </p>
        <a href="mailto:contact@jsmastery.pro">
          <MagicButton
            title={button}
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          {copyright}
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-5">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a target="_blank" href={info.link}>
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center mt-5">
          {pageLinks.map((link, index) => (
            <a key={index} href={link.href} className="md:mx-2 mx-1 z-50 cursor-pointer hover:text-sky-300">
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;