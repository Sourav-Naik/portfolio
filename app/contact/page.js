"use client";
import Image from "next/image";
import logo from "@/app/Images/logo.jpg";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTelegram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import emailjs from "emailjs-com";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    emailjs
      .send("portfolio", "template_5wdw6xm", data, "oCE45E_7vxwLotKib")
      .then(
        (response) => {
          reset();
          alert("Email sent successfully!");
          setLoading(false);
        },
        (err) => {
          reset();
          alert("Sorry! Service Down");
          setLoading(false);
        }
      );
  };

  return (
    <>
      <div
        className="mt-8 sm:mt-16 px-6 lg:px-24 mx-auto mb-2 container min-h-full items-start text-justify tracking-widest text-white"
        style={{ cursor: `${loading === true ? "progress" : "default"}` }}
      >
        <div className="text-3xl text-start">
          <span className="text-[#C778DD] pe-[2px] font-semibold">/</span>
          contact-me{` `}
          <div className=" mt-3 text-base text-[#ABB2BF] font-semibold">
            Where to find me?
          </div>
        </div>

        <div className="flex flex-col flex-nowrap items-start sm:px-4 relative">
          <div className="flex flex-col md:flex-row items-center justify-between relative">
            <div className="md:w-1/2 pt-10 md:pt-4 lg:pt-0 text-[#ABB2BF] font-semibold text-lg text-justify tracking-wide h-fit relative">
              Whether you're leading a dynamic team, spearheading ambitious
              projects, or championing impactful initiatives, I'm ready to join
              forces and make a meaningful difference. Here's how we can
              connect:
            </div>
            <div className="flex flex-col ms-4 p-2 items-center justify-center border border-[#C778DD]">
              <span className="font-semibold pb-2">!! Message me here !!</span>
              <div className="flex flex-col items-start space-y-2">
                <span className="text-[#ABB2BF] hover:text-white mx-1 flex items-center justify-center break-all text-start">
                  <FontAwesomeIcon
                    icon={faDiscord}
                    className="h-6 self-start me-2 w-8"
                  />
                  @sourav_naik
                </span>
                <span className="text-[#ABB2BF] hover:text-white mx-1 flex items-center justify-center break-all text-start">
                  <FontAwesomeIcon
                    icon={faTelegram}
                    className="h-6 self-start me-2 w-8"
                  />
                  @SOU_NAIK
                </span>
                <span className="text-[#ABB2BF] hover:text-white mx-1 flex items-center justify-center break-all text-start">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="h-6 self-start me-2 w-8"
                  />
                  developer.sourav.naik@gmail.com
                </span>
              </div>
            </div>
            <div className="absolute top-0 w-full h-full flex justify-center items-center -z-10 md:hidden">
              <Image
                src={logo}
                width={300}
                alt="sourav"
                className="opacity-25"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start mt-10">
            <div className="relative w-full md:w-fit h-full">
              <div className="  flex flex-col max-w-52">
                <div className="text-2xl">
                  <span className="text-[#C778DD] pe-[2px] font-semibold">
                    #
                  </span>
                  all-media
                </div>
                <span className="flex flex-wrap md:flex-col text-[#ABB2BF] font-semibold items-start justify-center w-fit space-x-2 space-y-2 mt-6">
                  <a
                    className="flex items-center justify-center border border-[#C778DD] p-1 hover:bg-[#C778DD] hover:bg-opacity-20 hover:text-white rounded w-full ms-2"
                    href="https://linkedin.com/in/sourav-naik-601b4b302"
                    target="main"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      className="h-8 gradient-text me-2"
                    />
                    Sourav Naik
                  </a>
                  <a
                    className="flex items-center justify-center border border-[#C778DD] p-1 hover:bg-[#C778DD] hover:bg-opacity-20 hover:text-white rounded w-full"
                    href="https://t.me/SOU_NAIK"
                    target="main"
                  >
                    <FontAwesomeIcon
                      icon={faTelegram}
                      className="h-8 gradient-text me-2"
                    />
                    @SOU_NAIK
                  </a>
                  <a
                    className="flex items-center justify-center border border-[#C778DD] p-1 hover:bg-[#C778DD] hover:bg-opacity-20 hover:text-white rounded w-full"
                    href="https://github.com/Sourav-Naik"
                    target="main"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="h-8 gradient-text me-2"
                    />
                    Sourav-Naik
                  </a>
                  <a
                    className="flex items-center justify-center border border-[#C778DD] p-1 hover:bg-[#C778DD] hover:bg-opacity-20 hover:text-white rounded w-full"
                    href="https://www.instagram.com/sourav.naik/"
                    target="main"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="h-8 gradient-text me-2"
                    />
                    sourav.naik
                  </a>
                  <a
                    className="flex items-center justify-center border border-[#C778DD] p-1 hover:bg-[#C778DD] hover:bg-opacity-20 hover:text-white rounded w-full"
                    href="https://twitter.com/Sourav_Naik_"
                    target="main"
                  >
                    <FontAwesomeIcon
                      icon={faXTwitter}
                      className="h-8 gradient-text me-2"
                    />
                    Sourav_Naik_
                  </a>
                  <a
                    className="flex items-center justify-center border border-[#C778DD] p-1 hover:bg-[#C778DD] hover:bg-opacity-20 hover:text-white rounded w-full"
                    href="https://www.facebook.com/naiksourav12/"
                    target="main"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="h-8 gradient-text me-2"
                    />
                    Sourav Naik
                  </a>
                </span>
              </div>
              <div className="absolute top-0 w-full h-full flex justify-center items-center -z-10 md:hidden">
                <Image
                  src={logo}
                  width={300}
                  alt="sourav"
                  className="opacity-25"
                />
              </div>
            </div>
            {/* mailbox */}
            <div className="text-2xl mt-10 md:hidden">
              <span className="text-[#C778DD] pe-[2px] font-semibold">#</span>
              mail-me
            </div>
            <div className="md:w-2/3 xl:w-1/2 relative mt-6 md:mt-14 mx-3 md:ms-0">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col w-fit mx-auto"
                style={{
                  cursor: `${loading === true ? "progress" : "default"}`,
                }}
              >
                <div className="flex flex-wrap justify-start">
                  <div className="w-full text-[#ABB2BF] max-h-fit mb-4">
                    <textarea
                      className={`min-h-40 max-h-40 min-w-full px-2 py-1 border ${
                        errors.content ? "border-[#f44336]" : "border-[#C778DD]"
                      } bg-transparent focus:outline-none focus:bg-[#C778DD] focus:bg-opacity-20 text-white`}
                      placeholder="content*"
                      {...register("content", {
                        required: {
                          value: true,
                          message: " Content is required",
                        },
                        minLength: { value: 20, message: "Minimum Length 20" },
                      })}
                      aria-invalid={errors.content ? "true" : "false"}
                    />
                    {errors.content ? (
                      <p
                        role="alert"
                        className="text-[#f44336] text-sm leading-3"
                      >
                        {errors.content.message}
                      </p>
                    ) : (
                      <div className="min-h-3"></div>
                    )}
                  </div>

                  <div className="text-[#ABB2BF] space-y-4 flex flex-wrap items-start w-full">
                    <div className="w-full">
                      <input
                        type="text"
                        placeholder="subject*"
                        className={`max-h-8 px-2 py-1 border ${
                          errors.subject
                            ? "border-[#f44336]"
                            : "border-[#C778DD]"
                        } bg-transparent focus:bg-[#C778DD] focus:bg-opacity-20 text-white focus:outline-none w-full`}
                        {...register("subject", {
                          required: {
                            value: true,
                            message: "Subject is required",
                          },
                          minLength: {
                            value: 10,
                            message: "Minimum length 10",
                          },
                        })}
                        aria-invalid={errors.subject ? "true" : "false"}
                      />
                      {errors.subject ? (
                        <p role="alert" className="text-[#f44336] text-sm">
                          {errors.subject.message}
                        </p>
                      ) : (
                        <div className="min-h-5"></div>
                      )}
                    </div>
                    <div className="w-full sm:w-1/2 sm:pe-2">
                      <input
                        type="text"
                        placeholder="name*"
                        className={`max-h-8 px-2 py-1 border ${
                          errors.name ? "border-[#f44336]" : "border-[#C778DD]"
                        } bg-transparent focus:bg-[#C778DD] focus:bg-opacity-20 text-white focus:outline-none w-full`}
                        {...register("name", {
                          required: {
                            value: true,
                            message: "Name is required",
                          },
                          minLength: {
                            value: 3,
                            message: "Minimum length 3",
                          },
                        })}
                        aria-invalid={errors.name ? "true" : "false"}
                      />
                      {errors.name ? (
                        <p role="alert" className="text-[#f44336] text-sm">
                          {errors.name.message}
                        </p>
                      ) : (
                        <div className="min-h-5"></div>
                      )}
                    </div>
                    <div className="w-full sm:w-1/2 sm:ps-2">
                      <input
                        type="text"
                        placeholder="email*"
                        className={`max-h-8 px-2 py-1 border ${
                          errors.email ? "border-[#f44336]" : "border-[#C778DD]"
                        } bg-transparent focus:bg-[#C778DD] focus:bg-opacity-20 text-white focus:outline-none w-full`}
                        {...register("email", {
                          required: {
                            value: true,
                            message: "Email is required",
                          },
                          pattern: {
                            value:
                              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[A-Za-z]{2,4}$/,
                            message: "Invalid email address",
                          },
                        })}
                        aria-invalid={errors.email ? "true" : "false"}
                      />
                      {errors.email ? (
                        <p role="alert" className="text-[#f44336] text-sm">
                          {errors.email.message}
                        </p>
                      ) : (
                        <div className="min-h-5"></div>
                      )}
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="border rounded px-5 py-1 border-[#C778DD] hover:bg-[#C778DD] hover:bg-opacity-20 mt-3 self-end md:self-center
                transition active:-translate-y-1 active:scale-110 active:bg-opacity-100"
                >
                  !! mail me !!
                </button>
              </form>
              <div className="absolute top-0 w-full h-full flex justify-center items-center -z-10 md:hidden">
                <Image
                  src={logo}
                  width={300}
                  alt="sourav"
                  className="opacity-25"
                />
              </div>
            </div>
          </div>
          <div className="absolute top-0 w-full h-full hidden justify-center items-center -z-10 md:flex">
            <Image src={logo} width={400} alt="sourav" className="opacity-25" />
          </div>
        </div>
      </div>
    </>
  );
}
