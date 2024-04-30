"use client";
import Image from "next/image";
import logo from "@/app/Images/logo.jpg";
import front from "@/app/Images/front.jpg";
import side from "@/app/Images/side.jpg";
import coder from "@/app/Images/coder.jpg";
import shopon_preview from "@/app/Images/shopon_preview.jpg";
import currency_converter_preview from "@/app/Images/currency_converter_preview.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faTelegram } from "@fortawesome/free-brands-svg-icons";
import {
  faBasketShopping,
  faCartPlus,
  faEnvelope,
  faHandPointer,
} from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  return (
    <div className="mt-8 sm:mt-16 px-6 lg:px-24 mx-auto mb-2 container">
      {/* first div---general */}
      <div className="flex flex-col md:flex-row items-center justify-between relative">
        <div className="text-4xl flex flex-col text-start tracking-wider max-w-[600px] text-white relative">
          <span>
            Sourav is a<span className="text-[#C778DD]"> Web Designer</span> and
            <span className="text-[#C778DD]"> front-end Developer</span>
          </span>
          <span className="text-base font-semibold text-[#ABB2BF] mt-9">
            He crafts responsive websites where technology meets creativity.
          </span>
          <a
            className="max-w-fit px-2 py-[2px] text-lg mt-7 border-2 border-[#C778DD] hover:bg-[#C778DD] hover:bg-opacity-20"
            href="contact"
          >
            Contact me !!
          </a>
          <div className="absolute w-full h-full flex justify-center items-center -z-10 md:hidden">
            <Image src={logo} width={300} alt="sourav" className="opacity-25" />
          </div>
        </div>
        <div className="flex flex-col mt-8 md:mt-0 items-stretch">
          <Image
            src={front}
            width={600}
            alt="sourav"
            className="brightness-150 contrast-125 md:min-w-[350px] "
          />
          <div className="w-full ps-8 pe-2">
            <div className="text-[#ABB2BF] text-sm font-bold flex flex-wrap items-center leading-3 w-full py-2 px-3 border bottom-[1px] border-[#C778DD]">
              <div className="min-w-4 min-h-4 max-h-4 max-w-4 bg-[#C778DD] me-1"></div>
              Currently
              <span className="text-white font-normal ms-1"> Unemployed</span>
            </div>
          </div>
        </div>
        <div className="absolute w-full h-full justify-center items-center -z-10 hidden lg:flex">
          <Image src={logo} width={300} alt="sourav" className="opacity-25" />
        </div>
      </div>

      {/* second div---skill */}
      <div className="flex flex-col flex-nowrap items-start mt-8 md:mt-12 relative">
        <div className="text-3xl tracking-wider w-full md:w-4/5 lg:w-2/4 overflow-hidden text-start max-h-9">
          <span className="text-[#C778DD] pe-[2px] font-semibold">#</span>
          skills{` `}
          <span className="text-[#C778DD] pe-[2px] tracking-[-5px] font-extralight">
            ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
          </span>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between relative mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 text-start tracking-wider text-white order-2 relative">
            <div className="border border-[#C778DD] mb-4 me-4">
              <div className="text-xl border-b px-3 py-1 border-[#C778DD]">
                Languages
              </div>
              <div className="px-3 py-1 text-gray-400 font-semibold text-wrap break-normal text-start ">
                HTML CSS JavaScript
              </div>
            </div>
            <div className="border border-[#C778DD] mb-4 me-4">
              <div className="text-xl border-b px-3 py-1 border-[#C778DD]">
                FramWorks
              </div>
              <div className="px-3 py-1 text-gray-400 font-semibold text-wrap break-normal text-start ">
                React NEXT Angular Express.js
              </div>
            </div>
            <div className="border border-[#C778DD] mb-4 me-4">
              <div className="text-xl border-b px-3 py-1 border-[#C778DD]">
                Tools
              </div>
              <div className="px-3 py-1 text-gray-400 font-semibold text-wrap break-normal text-start ">
                VsCode Git Figma Whimsical
              </div>
            </div>
            <div className="border border-[#C778DD] mb-4 me-4">
              <div className="text-xl border-b px-3 py-1 border-[#C778DD]">
                CSS Tools
              </div>
              <div className="px-3 py-1 text-gray-400 font-semibold text-wrap break-normal text-start ">
                TailWind BootStarp Mateial Ui Bulma
              </div>
            </div>
            <div className="border border-[#C778DD] mb-4 me-4">
              <div className="text-xl border-b px-3 py-1 border-[#C778DD]">
                Databases
              </div>
              <div className="px-3 py-1 text-gray-400 font-semibold">
                MongoDB
              </div>
            </div>
            <div className="border border-[#C778DD] mb-4 me-4">
              <div className="text-xl border-b px-3 py-1 border-[#C778DD]">
                Additional
              </div>
              <div className="px-3 py-1 text-gray-400 font-semibold">MERN</div>
            </div>
            <div className="absolute w-full h-full flex justify-center items-center -z-10 md:hidden">
              <Image
                src={logo}
                width={300}
                alt="sourav"
                className="opacity-25"
              />
            </div>
          </div>
          <div className="mt-8 md:mt-0 items-stretch order-1">
            <Image
              src={coder}
              width={600}
              alt="sourav"
              className="contrast-125 md:min-w-[350px] grayscale"
            />
          </div>
        </div>
        <div className="absolute w-full h-full hidden md:flex justify-center items-center -z-10">
          <Image src={logo} width={300} alt="sourav" className="opacity-25" />
        </div>
      </div>

      {/* third div---projects */}
      <div className="flex flex-col flex-nowrap items-start mt-8 md:mt-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="text-3xl tracking-wider w-full md:w-4/5 lg:w-2/4 overflow-hidden text-start max-h-9">
            <span className="text-[#C778DD] pe-[2px] font-semibold">#</span>
            projects{` `}
            <span className="text-[#C778DD] pe-[2px] tracking-[-5px] font-extralight">
              ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
            </span>
          </div>
          <a
            className="max-w-fit self-end px-2 py-[2px] mt-3 md:mt-0 text-white text-sm font-semibold border-2 border-[#C778DD] hover:bg-[#C778DD] hover:bg-opacity-20"
            href="project"
          >
            View All <span className="text-xl leading-3">&#8628;</span>
          </a>
        </div>

        <div className="flex justify-evenly w-full mt-8 flex-wrap lg:flex-nowrap">
          {/* First project */}
          <div className="flex flex-col border-2 border-[#C778DD] bg-opacity-20 bg-[#C778DD] max-w-[350px] m-1 relative overflow-x-hidden">
            <div className="relative border-b-2 border-[#C778DD]">
              <Image src={shopon_preview} alt="" width={350} />
              <div className="absolute top-0 min-h-full min-w-full flex items-center font-bold text-white backdrop-blur-sm bg-opacity-50 bg-[#C778DD] p-3 justify-between">
                <div className="flex flex-col items-start text-white font-extrabold text-3xl">
                  <span>ShopON</span>
                  <span className="text-sm text-black text-start">
                    Shopping is always ON....
                  </span>
                </div>
                <div className="flex flex-col items-start space-y-2">
                  <div className="flex items-center border rounded-2xl p-1 px-3 border-white text-white">
                    <FontAwesomeIcon
                      icon={faHandPointer}
                      className="h-6  me-2 w-8"
                    />{" "}
                    CLick
                  </div>
                  <div className="flex items-center border rounded-2xl p-1 px-3 border-white text-white">
                    <FontAwesomeIcon
                      icon={faCartPlus}
                      className="h-6  me-2 w-8"
                    />{" "}
                    Add
                  </div>
                  <div className="flex items-center border rounded-2xl p-1 px-3 border-white text-white">
                    <FontAwesomeIcon
                      icon={faBasketShopping}
                      className="h-6  me-2 w-8"
                    />{" "}
                    Buy
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-start border-b-2 border-[#C778DD] p-2 text-lg text-[#ABB2BF] font-semibold">
              React Bootstrap Vercel
            </div>
            <div className="flex flex-col p-2 text-start h-full justify-between">
              <div className="text-2xl font-semibold">ShopON</div>
              <div>
                <div className="text-[#ABB2BF] font-semibold">
                  A React based e-commerce front-end application.
                </div>
                <div className="text-[#ABB2BF] mt-2 mb-[2px]">
                  <a
                    href="https://shop-on-five.vercel.app/"
                    target="main"
                    className="border p-2 px-3 tracking-wide font-medium font-mono border-[#ABB2BF] hover:text-white hover:bg-[#ABB2BF] me-2 inline-block leading-3 text-base mb-1"
                  >
                    Live{" -> "}
                  </a>
                  <a
                    href="https://github.com/Sourav-Naik/ShopOn"
                    target="main"
                    className="border p-2 px-3 tracking-wide font-medium font-mono border-[#ABB2BF] hover:text-white hover:bg-[#ABB2BF] me-2 inline-block leading-3 text-base mt-1"
                  >
                    Source {`</>`}
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute w-full h-full flex justify-center items-end -z-10">
              <Image
                src={logo}
                width={200}
                alt="sourav"
                className="opacity-25"
              />
            </div>
          </div>

          {/* Second project */}
          <div className="flex flex-col border-2 border-[#C778DD] bg-opacity-20 bg-[#C778DD] max-w-[350px] m-1 relative overflow-x-hidden">
            <div className="relative border-b-2 border-[#C778DD]">
              <Image src={currency_converter_preview} alt="" width={350} />
              <div className="absolute top-0 min-h-full min-w-full flex items-center font-bold text-white backdrop-blur-sm bg-opacity-50 bg-[#C778DD] p-3 justify-between">
                <div className="flex flex-col items-start text-white font-extrabold text-3xl">
                  <span>CoinSwap</span>
                  <span className="text-sm text-black text-start">
                    One-Click Currency Conversions
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-start border-b-2 border-[#C778DD] p-2 text-lg text-[#ABB2BF] font-semibold">
              HTML Bootstrap JS
            </div>
            <div className="flex flex-col p-2 text-start h-full justify-between">
              <div className="text-2xl font-semibold">CoinSwap</div>

              <div>
                {" "}
                <div className="text-[#ABB2BF] font-semibold">
                  A single HTML page application with responsive U.I. to get
                  your currency converted
                </div>
                <div className="text-[#ABB2BF] mt-2 mb-[2px]">
                  <a
                    href="https://sourav-naik.github.io/Currency-Converter/"
                    target="main"
                    className="border p-2 px-3 tracking-wide font-medium font-mono border-[#ABB2BF] hover:text-white hover:bg-[#ABB2BF] me-2 inline-block leading-3 text-base mb-1"
                  >
                    Live{" -> "}
                  </a>
                  <a
                    href="https://github.com/Sourav-Naik/Currency-Converter"
                    target="main"
                    className="border p-2 px-3 tracking-wide font-medium font-mono border-[#ABB2BF] hover:text-white hover:bg-[#ABB2BF] me-2 inline-block leading-3 text-base mt-1"
                  >
                    Source {`</>`}
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute w-full h-full flex justify-center items-end -z-10">
              <Image
                src={logo}
                width={200}
                alt="sourav"
                className="opacity-25"
              />
            </div>
          </div>
        </div>
      </div>

      {/* fourth div---about me */}
      <div className="flex flex-col flex-nowrap items-start mt-8 md:mt-12 relative">
        <div className="text-3xl tracking-wider w-full md:w-4/5 lg:w-2/4 overflow-hidden text-start max-h-9">
          <span className="text-[#C778DD] pe-[2px] font-semibold">#</span>
          about me{` `}
          <span className="text-[#C778DD] pe-[2px] tracking-[-5px] font-extralight">
            ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
          </span>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-between items-center relative xl:bottom-7">
          <div className="md:w-1/2 pt-10 md:pt-4 lg:pt-0 text-[#ABB2BF] font-semibold text-lg text-justify tracking-wide h-fit flex relative flex-col">
            <span>
              Hey there, I'm Sourav! <br />
              A self-taught front-end developer hailing from the serene hills of
              Dharamshala, India. With a passion for crafting captivating user
              experiences, I specialize in developing responsive websites from
              scratch, transforming concepts into modern, user-friendly web
              applications.
              <br />
              <br />
              Driven by a relentless curiosity for technology, I've delved into
              the realms of both front-end and back-end development. Through
              hands-on experimentation and continuous learning, I've mastered
              the intricacies of HTML, CSS, and JavaScript, while also venturing
              into backend technologies like Node.js, Express, and various
              databases.
            </span>
            <a
              className="max-w-fit px-2 py-[2px] text-white text-sm font-semibold mt-3 md:mt-7 border-2 border-[#C778DD] hover:bg-[#C778DD] hover:bg-opacity-20"
              href="about"
            >
              Read more <span className="text-xl leading-3">&#8628;</span>
            </a>
            <div className="absolute top-0 w-full h-full flex justify-center items-center -z-10 md:hidden">
              <Image
                src={logo}
                width={300}
                alt="sourav"
                className="opacity-25"
              />
            </div>
          </div>

          <Image
            src={side}
            alt="..."
            className="border-b-2 border-[#C778DD] lg:min-w-[350px] pt-10 md:pt-0 "
          />
        </div>
        <div className="absolute w-full h-full hidden justify-center items-center -z-10 md:flex">
          <Image src={logo} width={300} alt="sourav" className="opacity-25" />
        </div>
      </div>

      {/* fifth div---contact me */}
      <div className="flex flex-col flex-nowrap items-start mt-8 md:mt-12">
        <div className="text-3xl tracking-wider w-full md:w-4/5 lg:w-2/4 overflow-hidden text-start max-h-9">
          <span className="text-[#C778DD] pe-[2px] font-semibold">#</span>
          contact me{` `}
          <span className="text-[#C778DD] pe-[2px] tracking-[-5px] font-extralight">
            ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
          </span>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 pt-10 md:pt-4 lg:pt-0 text-[#ABB2BF] font-semibold text-lg text-justify tracking-wide h-fit relative">
            Whether you're leading a dynamic team, spearheading ambitious
            projects, or championing impactful initiatives, I'm ready to join
            forces and make a meaningful difference. Here's how we can connect:
          </div>
          <span className="flex flex-col p-2 items-center justify-center border border-[#C778DD] w-fit">
            <span className="font-semibold pb-2">!! Message me here !!</span>
            <div className="flex flex-col items-start space-y-2">
              <span className="text-[#ABB2BF] hover:text-white mx-1 flex items-center justify-center break-all text-start">
                <FontAwesomeIcon icon={faDiscord} className="h-6  me-2 w-8" />
                @sourav_naik
              </span>
              <span className="text-[#ABB2BF] hover:text-white mx-1 flex items-center justify-center break-all text-start">
                <FontAwesomeIcon icon={faTelegram} className="h-6  me-2 w-8" />
                @SOU_NAIK
              </span>
              <span className="text-[#ABB2BF] hover:text-white mx-1 flex items-center justify-center break-all text-start">
                <FontAwesomeIcon icon={faEnvelope} className="h-6  me-2 w-8" />
                developer.sourav.naik@gmail.com
              </span>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
