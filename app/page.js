"use client";
import Image from "next/image";
import logo from "@/app/Images/logo.jpg";
import front from "@/app/Images/front.jpg";
import side from "@/app/Images/side.jpg";
import coder from "@/app/Images/coder.jpg";
import shopon_preview from "@/app/Images/shopon_preview.jpg";
import enotebook_preview from "@/app/Images/enotebook_preview.jpg";
import spotify_preview from "@/app/Images/spotify-web-player.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faTelegram } from "@fortawesome/free-brands-svg-icons";
import {
  faBasketShopping,
  faCartPlus,
  faCirclePlay,
  faEnvelope,
  faHandPointer,
  faHeart,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="main px-4">
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
            className="brightness-150 contrast-125 md:min-w-[350px] md:w-full"
          />
          <div className="w-full ps-8 pe-2">
            <div className="text-[#ABB2BF] text-sm font-bold flex flex-wrap items-center leading-3 w-full py-2 px-3 border bottom-[1px] border-[#C778DD]">
              <div className="min-w-4 min-h-4 max-h-4 max-w-4 bg-[#C778DD] me-1"></div>
              Currently
              <span className="text-white font-normal ms-1"> Unemployed</span>
            </div>
          </div>
        </div>
        <div className="absolute w-full h-full justify-center items-center -z-10 hidden md:flex">
          <Image src={logo} width={300} alt="sourav" className="opacity-25" />
        </div>
      </div>

      {/* second div---skill */}
      <div className="flex flex-col items-start mt-8 md:mt-12 relative">
        <div className="text-3xl tracking-wider text-start w-full flex items-center max-w-xl">
          <span className="text-[#C778DD] pe-[2px] font-semibold">#</span>
          skills
          <div className="bg-[#C778DD] h-[1px] flex-1 relative top-1 me-4" />
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between relative mt-4 mx-auto">
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 text-start tracking-wider text-white order-2 relative">
            <div className="border border-[#C778DD] ">
              <div className="text-xl border-b px-3 py-1 border-[#C778DD]">
                Languages
              </div>
              <div className="px-3 py-1 text-gray-400 font-semibold text-wrap break-normal text-start ">
                HTML CSS JavaScript
              </div>
            </div>
            <div className="border border-[#C778DD] ">
              <div className="text-xl border-b px-3 py-1 border-[#C778DD]">
                FramWorks
              </div>
              <div className="px-3 py-1 text-gray-400 font-semibold text-wrap break-normal text-start ">
                React NEXT Angular Express.js
              </div>
            </div>
            <div className="border border-[#C778DD] ">
              <div className="text-xl border-b px-3 py-1 border-[#C778DD]">
                Tools
              </div>
              <div className="px-3 py-1 text-gray-400 font-semibold text-wrap break-normal text-start ">
                VsCode Git Figma Whimsical
              </div>
            </div>
            <div className="border border-[#C778DD] ">
              <div className="text-xl border-b px-3 py-1 border-[#C778DD]">
                CSS Tools
              </div>
              <div className="px-3 py-1 text-gray-400 font-semibold text-wrap break-normal text-start ">
                TailWind BootStarp Mateial Ui Bulma
              </div>
            </div>
            <div className="border border-[#C778DD] ">
              <div className="text-xl border-b px-3 py-1 border-[#C778DD]">
                Databases
              </div>
              <div className="px-3 py-1 text-gray-400 font-semibold">
                MongoDB
              </div>
            </div>
            <div className="border border-[#C778DD] ">
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
          <div className="mt-8 md:mt-0 items-stretch order-1 flex-1">
            <Image
              src={coder}
              width={600}
              alt="sourav"
              className="contrast-125 md:min-w-[350px] md:w-full grayscale"
            />
          </div>
        </div>
        <div className="absolute w-full h-full hidden md:flex justify-center items-center -z-10">
          <Image src={logo} width={300} alt="sourav" className="opacity-25" />
        </div>
      </div>

      {/* third div---projects */}
      <div className="flex flex-col items-start mt-8 md:mt-12">
        <div className="w-full flex flex-wrap flex-row justify-between items-center md:items-center mb-4">
          <div className="text-3xl tracking-wider text-start flex-1 flex items-center max-w-xl">
            <span className="text-[#C778DD] pe-[2px] font-semibold">#</span>
            projects
            <div className="bg-[#C778DD] h-[1px] flex-1 relative top-1 me-4" />
          </div>
          <a
            className="max-w-fit self-end px-2 py-[2px] mt-3 md:mt-0 text-white text-sm font-semibold border-2 border-[#C778DD] hover:bg-[#C778DD] hover:bg-opacity-20"
            href="project"
          >
            View All <span className="text-xl leading-3">&#8628;</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full px-4">
          {/* first project */}
          <div className="flex flex-col border-2 border-[#C778DD] bg-opacity-20 bg-[#C778DD] w-full mx-auto relative overflow-x-hidden">
            <div className="relative border-b-2 border-[#C778DD]">
              <Image
                src={spotify_preview}
                alt=""
                width={350}
                className="object-fill max-h-[200px] w-full"
              />
              <div className="absolute top-0 min-h-full min-w-full flex items-center font-bold text-white backdrop-blur-sm bg-opacity-50 bg-[#C778DD] p-3 justify-between">
                <div className="flex flex-col items-start text-white font-extrabold text-3xl text-nowrap">
                  <span>Spotify</span>
                  <span className="text-sm text-white text-start font-medium">
                    Never Stop Listening
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
                    <FontAwesomeIcon icon={faHeart} className="h-6  me-2 w-8" />{" "}
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
                    href="https://spotify-ivory-eight.vercel.app/"
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

          {/* second project */}
          <div className="flex flex-col border-2 border-[#C778DD] bg-opacity-20 bg-[#C778DD] w-full mx-auto relative overflow-x-hidden">
            <div className="relative border-b-2 border-[#C778DD]">
              <Image
                src={enotebook_preview}
                alt=""
                width={350}
                className="object-fill max-h-[200px] w-full"
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

          {/* Third project */}
          <div className="flex flex-col border-2 border-[#C778DD] bg-opacity-20 bg-[#C778DD] w-full mx-auto relative overflow-x-hidden">
            <div className="relative border-b-2 border-[#C778DD]">
              <Image
                src={shopon_preview}
                alt=""
                width={350}
                className="object-fill max-h-[200px] w-full"
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
        </div>
      </div>

      {/* fourth div---about me */}
      <div className="flex flex-col items-start mt-8 md:mt-12 relative">
        <div className="text-3xl tracking-wider text-start w-full flex items-center max-w-xl mb-4">
          <span className="text-[#C778DD] pe-[2px] font-semibold">#</span>
          about me
          <div className="bg-[#C778DD] h-[1px] flex-1 relative top-1 me-4" />
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center md:items-stretch relative px-4 gap-4">
          <div className="flex-1 text-[#ABB2BF] font-semibold text-lg text-justify tracking-wide relative">
            A multidisciplinary engineer with a passion for innovation and
            technology. Hailing from the serene hills of Dharamshala, India,
            I've journeyed from the tranquil landscapes of Himachal Pradesh to
            the bustling halls of Chandigarh University. With a solid foundation
            in mechatronics engineering, I've honed my skills in mechanical
            design, electronics, and programming, delving into the realms of
            robotics and automation.
            <br />
            <br />
            In addition to my mechatronics expertise, I'm also a self-taught
            front-end developer, specializing in crafting captivating user
            experiences and developing responsive websites from scratch. My
            journey in web development has been a testament to my dedication to
            blending creativity with technology, transforming concepts into
            modern, user-friendly web applications.{" "}
            <a
              className="max-w-fit px-2 py-[2px] text-white text-sm text-nowrap font-semibold border-2 border-[#C778DD] hover:bg-[#C778DD] hover:bg-opacity-20"
              href="about"
            >
              Read more <span className="text-xl leading-3">&#8628;</span>
            </a>
          </div>

          <div className="flex-1 flex md:justify-end items-stretch">
            <Image src={side} alt="..." className="object-fill" />
          </div>
        </div>
        <div className="absolute w-full h-full hidden justify-center items-center -z-10 md:flex">
          <Image src={logo} width={300} alt="sourav" className="opacity-25" />
        </div>
      </div>

      {/* fifth div---contact me */}
      <div className="flex flex-col items-start mt-8 md:mt-12">
        <div className="text-3xl tracking-wider text-start w-full flex items-center max-w-xl mb-4">
          <span className="text-[#C778DD] pe-[2px] font-semibold">#</span>
          contact me
          <div className="bg-[#C778DD] h-[1px] flex-1 relative top-1 me-4" />
        </div>
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div className="flex-1 text-[#ABB2BF] font-semibold text-lg text-justify tracking-wide h-fit relative px-4">
            Whether you're leading a dynamic team, spearheading ambitious
            projects, or championing impactful initiatives, I'm ready to join
            forces and make a meaningful difference. Here's how we can connect:
          </div>
          <div className="flex-1 flex justify-center">
            <div className="flex flex-col p-2 items-center justify-center border border-[#C778DD] w-fit">
              <span className="font-semibold pb-2">!! Message me here !!</span>
              <div className="flex flex-col items-start space-y-2">
                <span className="text-[#ABB2BF] hover:text-white mx-1 flex items-center justify-center break-all text-start">
                  <FontAwesomeIcon icon={faDiscord} className="h-6  me-2 w-8" />
                  @sourav_naik
                </span>
                <span className="text-[#ABB2BF] hover:text-white mx-1 flex items-center justify-center break-all text-start">
                  <FontAwesomeIcon
                    icon={faTelegram}
                    className="h-6  me-2 w-8"
                  />
                  @SOU_NAIK
                </span>
                <span className="text-[#ABB2BF] hover:text-white mx-1 flex items-center justify-center break-all text-start">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="h-6  me-2 w-8"
                  />
                  developer.sourav.naik@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
