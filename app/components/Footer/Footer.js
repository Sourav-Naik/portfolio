import Image from "next/image";
import logo from "@/app/Images/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="w-full border-t border-[#ABB2BF] text-white py-7 tracking-wide max-w-screen mt-16">
      <div className="container mx-auto px-6 lg:px-24">
        <span className="flex items-center justify-center w-full">
          <Image src={logo} width={30} alt="sourav" className="me-2" />
          Media
          <a
            className="border-transparent border-2 hover:border-[#C778DD] mx-1 h-7 w-8 flex items-center justify-center"
            href="https://linkedin.com/in/sourav-naik-601b4b302"
            target="main"
          >
            <FontAwesomeIcon icon={faLinkedin} className="h-6 gradient-text" />
          </a>
          <a
            className="border-transparent border-2 hover:border-[#C778DD] mx-1 h-7 w-8 flex items-center justify-center"
            href="https://t.me/SOU_NAIK"
            target="main"
          >
            <FontAwesomeIcon icon={faTelegram} className="h-6 gradient-text" />
          </a>
          <a
            className="border-transparent border-2 hover:border-[#C778DD] mx-1 h-7 w-8 flex items-center justify-center"
            href="https://github.com/Sourav-Naik"
            target="main"
          >
            <FontAwesomeIcon icon={faGithub} className="h-6 gradient-text" />
          </a>
        </span>
      </div>
      <div className="pt-2 text-[#ABB2BF] text-sm font-semibold gradient-text">
        © Copyright 2024. Made by Sourav
      </div>
    </div>
  );
}
