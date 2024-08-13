import Image from "next/image";
import logo from "@/app/Images/logo.jpg";
import shopon_preview from "../Images/shopon_preview.jpg";
import spotify_preview from "@/app/Images/spotify-web-player.jpg";
import enotebook_preview from "@/app/Images/enotebook_preview.jpg";
import currency_converter_preview from "@/app/Images/currency_converter_preview.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faCartPlus,
  faCirclePlay,
  faHandPointer,
  faHeart,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
export default function Project() {
  return (
    <>
      <div className="mt-8 sm:mt-16 px-6 lg:px-24 mx-auto mb-2 container min-h-full items-start text-justify tracking-widest text-white">
        <div className="text-3xl text-start">
          <span className="text-[#C778DD] pe-[2px] font-semibold">/</span>
          projects{` `}
          <div className=" mt-3 text-base text-[#ABB2BF] font-semibold">
            List of my Work
          </div>
        </div>
        <div className="flex flex-col flex-nowrap items-start mt-8 md:mt-12 text-start">
          <div className="text-3xl tracking-wider text-start">
            <span className="text-[#C778DD] pe-[2px] font-semibold">#</span>
            complete-apps{` `}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-8 w-fit mx-auto">
            {/*first project */}
            <div className="flex flex-col border-2 border-[#C778DD] bg-opacity-20 bg-[#C778DD] max-w-[350px] m-1 relative overflow-x-hidden">
              <div className="relative border-b-2 border-[#C778DD]">
                <Image
                  src={spotify_preview}
                  alt=""
                  width={350}
                  className="object-cover max-h-[200px]"
                />
                <div className="absolute top-0 min-h-full min-w-full flex items-center font-bold text-white backdrop-blur-sm bg-opacity-50 bg-[#C778DD] p-3 justify-between">
                  <div className="flex flex-col items-start text-white font-extrabold text-3xl text-nowrap">
                    <span>Spotify</span>
                    <span className="text-sm text-white text-start font-medium">
                      Never Stop Listing
                    </span>
                  </div>
                  <div className="flex flex-col items-start space-y-2">
                    <div className="flex items-center border rounded-2xl p-1 px-3 border-white text-white">
                      <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className="h-6  me-2 w-8"
                      />{" "}
                      Search
                    </div>
                    <div className="flex items-center border rounded-2xl p-1 px-3 border-white text-white">
                      <FontAwesomeIcon
                        icon={faHeart}
                        className="h-6  me-2 w-8"
                      />{" "}
                      Like
                    </div>
                    <div className="flex items-center border rounded-2xl p-1 px-3 border-white text-white">
                      <FontAwesomeIcon
                        icon={faCirclePlay}
                        className="h-6  me-2 w-8"
                      />{" "}
                      Play
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-start border-b-2 border-[#C778DD] p-2 text-lg text-[#ABB2BF] font-semibold">
                Next.js Tailwind Next-Auth
              </div>
              <div className="flex flex-col p-2 text-start h-full justify-between">
                <div className="text-2xl font-semibold">Spotify Clone</div>

                <div>
                  <div className="text-[#ABB2BF] font-semibold">
                    A Next.JS app for enchaned and easy to maintain SEO's
                    operation.
                  </div>
                  <div className="text-[#ABB2BF] mt-2 mb-[2px]">
                    <a
                      href="https://spotify-aqyycsgju-souravs-projects-78f234d9.vercel.app"
                      target="main"
                      className="border p-2 px-3 tracking-wide font-medium font-mono border-[#ABB2BF] hover:text-white hover:bg-[#ABB2BF] me-2 inline-block leading-3 text-base mb-1"
                    >
                      Live{" -> "}
                    </a>
                    <a
                      href="https://github.com/Sourav-Naik/Spotify_clone"
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
                <Image
                  src={shopon_preview}
                  alt=""
                  width={350}
                  className="object-cover max-h-[200px]"
                />
                <div className="absolute top-0 min-h-full min-w-full flex items-center font-bold text-white backdrop-blur-sm bg-opacity-50 bg-[#C778DD] p-3 justify-between">
                  <div className="flex flex-col items-start text-white font-extrabold text-3xl">
                    <span>ShopON</span>
                    <span className="text-sm text-white text-start font-medium">
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

            {/* third project */}
            <div className="flex flex-col border-2 border-[#C778DD] bg-opacity-20 bg-[#C778DD] max-w-[350px] m-1 relative overflow-x-hidden">
              <div className="relative border-b-2 border-[#C778DD]">
                <Image
                  src={enotebook_preview}
                  alt=""
                  width={350}
                  className="object-cover max-h-[200px]"
                />
                <div className="absolute top-0 min-h-full min-w-full flex items-center font-bold text-white backdrop-blur-sm bg-opacity-50 bg-[#C778DD] p-3 justify-between">
                  <div className="flex flex-col items-start text-white font-extrabold text-3xl">
                    <span>ⓔNoteBook</span>
                    <span className="text-sm text-white text-start font-medium">
                      Your Digital Notepad, Everywhere You Go!
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-start border-b-2 border-[#C778DD] p-2 text-lg text-[#ABB2BF] font-semibold">
                React Express MongoDB
              </div>
              <div className="flex flex-col p-2 text-start h-full justify-between">
                <div className="text-2xl font-semibold">ⓔNoteBook</div>

                <div>
                  <div className="text-[#ABB2BF] font-semibold">
                    A complete MERN app where you can write and save your note
                    online.
                  </div>
                  <div className="text-[#ABB2BF] mt-2 mb-[2px]">
                    <a
                      href="https://enotebook-fbmo.onrender.com/"
                      target="main"
                      className="border p-2 px-3 tracking-wide font-medium font-mono border-[#ABB2BF] hover:text-white hover:bg-[#ABB2BF] me-2 inline-block leading-3 text-base mb-1"
                    >
                      Live{" -> "}
                    </a>
                    <a
                      href="https://github.com/Sourav-Naik/Enotebook"
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

            {/* fourth project */}
            <div className="flex flex-col border-2 border-[#C778DD] bg-opacity-20 bg-[#C778DD] max-w-[350px] m-1 relative overflow-x-hidden">
              <div className="relative border-b-2 border-[#C778DD]">
                <Image
                  src={currency_converter_preview}
                  alt=""
                  width={350}
                  className="object-cover max-h-[200px]"
                />
                <div className="absolute top-0 min-h-full min-w-full flex items-center font-bold text-white backdrop-blur-sm bg-opacity-50 bg-[#C778DD] p-3 justify-between">
                  <div className="flex flex-col items-start text-white font-extrabold text-3xl">
                    <span>CoinSwap</span>
                    <span className="text-sm text-white text-start font-medium">
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

        {/* Small App section */}
        <div className="flex flex-col flex-nowrap items-start mt-8 md:mt-12 text-start">
          <div className="text-3xl tracking-wider text-start">
            <span className="text-[#C778DD] pe-[2px] font-semibold">#</span>
            small-apps{` `}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-8 w-fit mx-auto">
            {/* First small app */}
            <div className="flex flex-col border-2 border-[#C778DD] bg-opacity-20 bg-[#C778DD] max-w-[350px] m-2 relative">
              <div className="text-xl font-semibold p-2 border-b-2 border-[#C778DD]">
                Twitter Home-Page Clone
              </div>
              <div className="flex justify-start border-b-2 border-[#C778DD] p-2 text-lg text-[#ABB2BF] font-semibold">
                HTML Tailwind GitHub-Pages
              </div>
              <div className="flex flex-col p-2 text-start justify-between h-full">
                <div className="text-[#ABB2BF] font-semibold">
                  Twitter home-page clone using simple html and tailwind-css
                  with responsive U.I.
                </div>
                <div className="text-[#ABB2BF] mt-2 mb-[2px]">
                  <a
                    href="https://sourav-naik.github.io/xTwitter-Home-Page-Clone/"
                    target="main"
                    className="border p-2 px-3 tracking-wide font-medium font-mono border-[#ABB2BF] hover:text-white hover:bg-[#ABB2BF] me-2 inline-block leading-3 text-base mb-1"
                  >
                    Live{" -> "}
                  </a>
                  <a
                    href="https://github.com/Sourav-Naik/xTwitter-Home-Page-Clone"
                    target="main"
                    className="border p-2 px-3 tracking-wide font-medium font-mono border-[#ABB2BF] hover:text-white hover:bg-[#ABB2BF] me-2 inline-block leading-3 text-base mt-1"
                  >
                    Source {`</>`}
                  </a>
                </div>
              </div>
              <div className="absolute w-full h-full flex justify-center items-end -z-10 md:hidden">
                <Image
                  src={logo}
                  width={200}
                  alt="sourav"
                  className="opacity-25"
                />
              </div>
            </div>

            {/* second small app */}
            <div className="flex flex-col border-2 border-[#C778DD] bg-opacity-20 bg-[#C778DD] max-w-[350px] m-2 relative">
              <div className="text-xl font-semibold p-2 border-b-2 border-[#C778DD]">
                Amazon Home-Page Clone
              </div>
              <div className="flex justify-start border-b-2 border-[#C778DD] p-2 text-lg text-[#ABB2BF] font-semibold">
                HTML CSS GitHub-Pages
              </div>
              <div className="flex flex-col p-2 text-start justify-between h-full">
                <div className="text-[#ABB2BF] font-semibold">
                  Twitter home-page clone using simple html and css.
                </div>
                <div className="text-[#ABB2BF] mt-2 mb-[2px]">
                  <a
                    href="https://sourav-naik.github.io/Amazon-home-page-dummy/"
                    target="main"
                    className="border p-2 px-3 tracking-wide font-medium font-mono border-[#ABB2BF] hover:text-white hover:bg-[#ABB2BF] me-2 inline-block leading-3 text-base mb-1"
                  >
                    Live{" -> "}
                  </a>
                  <a
                    href="https://github.com/Sourav-Naik/Amazon-home-page-dummy"
                    target="main"
                    className="border p-2 px-3 tracking-wide font-medium font-mono border-[#ABB2BF] hover:text-white hover:bg-[#ABB2BF] me-2 inline-block leading-3 text-base mt-1"
                  >
                    Source {`</>`}
                  </a>
                </div>
              </div>
              <div className="absolute w-full h-full flex justify-center items-end -z-10 md:hidden">
                <Image
                  src={logo}
                  width={200}
                  alt="sourav"
                  className="opacity-25"
                />
              </div>
            </div>

            {/* third small app */}
            <div className="flex flex-col border-2 border-[#C778DD] bg-opacity-20 bg-[#C778DD] max-w-[350px] m-2 relative">
              <div className="text-xl font-semibold p-2 border-b-2 border-[#C778DD]">
                Rock Paper Scissor
              </div>
              <div className="flex justify-start border-b-2 border-[#C778DD] p-2 text-lg text-[#ABB2BF] font-semibold">
                HTML CSS JS GitHub-Pages
              </div>
              <div className="flex flex-col p-2 text-start justify-between h-full">
                <div className="text-[#ABB2BF] font-semibold">
                  Rock Paper Scissor mini game based on JS computing, css
                  design.
                </div>
                <div className="text-[#ABB2BF] mt-2 mb-[2px]">
                  <a
                    href="https://sourav-naik.github.io/Rock-Paper-Scissor/"
                    target="main"
                    className="border p-2 px-3 tracking-wide font-medium font-mono border-[#ABB2BF] hover:text-white hover:bg-[#ABB2BF] me-2 inline-block leading-3 text-base mb-1"
                  >
                    Live{" -> "}
                  </a>
                  <a
                    href="https://github.com/Sourav-Naik/Rock-Paper-Scissor"
                    target="main"
                    className="border p-2 px-3 tracking-wide font-medium font-mono border-[#ABB2BF] hover:text-white hover:bg-[#ABB2BF] me-2 inline-block leading-3 text-base mt-1"
                  >
                    Source {`</>`}
                  </a>
                </div>
              </div>
              <div className="absolute w-full h-full flex justify-center items-end -z-10 md:hidden">
                <Image
                  src={logo}
                  width={200}
                  alt="sourav"
                  className="opacity-25"
                />
              </div>
            </div>

            {/* fourth small app */}
            <div className="flex flex-col border-2 border-[#C778DD] bg-opacity-20 bg-[#C778DD] max-w-[350px] m-2 relative">
              <div className="text-xl font-semibold p-2 border-b-2 border-[#C778DD]">
                Tic Tac Toe
              </div>
              <div className="flex justify-start border-b-2 border-[#C778DD] p-2 text-lg text-[#ABB2BF] font-semibold">
                HTML CSS JS GitHub-Pages
              </div>
              <div className="flex flex-col p-2 text-start justify-between h-full">
                <div className="text-[#ABB2BF] font-semibold">
                  Tic Tac Toe mini game based on JS computing, css design.
                </div>
                <div className="text-[#ABB2BF] mt-2 mb-[2px] d-flex flex-wrap">
                  <a
                    href="https://sourav-naik.github.io/Tic-Tac-Toe/"
                    target="main"
                    className="border p-2 px-3 tracking-wide font-medium font-mono border-[#ABB2BF] hover:text-white hover:bg-[#ABB2BF] me-2 inline-block leading-3 text-base mb-1"
                  >
                    Live{" -> "}
                  </a>
                  <a className="border p-2 px-3 tracking-wide font-medium font-mono border-[#ABB2BF] hover:text-white hover:bg-[#ABB2BF] me-2 inline-block leading-3 text-base mt-1">
                    Source {`</>`}
                  </a>
                </div>
              </div>
              <div className="absolute w-full h-full flex justify-center items-end -z-10 md:hidden">
                <Image
                  src={logo}
                  width={200}
                  alt="sourav"
                  className="opacity-25"
                />
              </div>
            </div>

            <div className="absolute w-full h-full justify-center items-center -z-10 hidden md:flex">
              <Image
                src={logo}
                width={300}
                alt="sourav"
                className="opacity-25"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
