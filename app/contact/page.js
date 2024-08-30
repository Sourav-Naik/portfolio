"use client";
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
        className="main"
        style={{ cursor: `${loading === true ? "progress" : "default"}` }}
      >
        <div className="text-3xl text-start mb-4 md:mb-8">
          <span className="text-[#C778DD] pe-[2px] font-semibold">/</span>
          contact-me{` `}
          <div className="text-base text-[#ABB2BF] font-semibold">
            Where to find me?
          </div>
        </div>

        <div className="flex flex-col flex-nowrap items-start relative">
          <div className="px-4 flex flex-col md:flex-row items-center justify-between relative gap-4">
            <div className="md:w-1/2 text-[#ABB2BF] font-semibold text-lg text-justify tracking-wide h-fit relative">
              Whether you're leading a dynamic team, spearheading ambitious
              projects, or championing impactful initiatives, I'm ready to join
              forces and make a meaningful difference. Here's how we can
              connect:
            </div>
            <div className="flex flex-col p-2 items-center justify-center border border-[#C778DD]">
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
          </div>

          <div className="flex flex-col sm:flex-row justify-between w-full">
            {/* all media link */}
            <div>
              <div className="secondHeading">
                <span className="text-[#C778DD] pe-[2px] font-semibold">#</span>
                all-media
              </div>
              <div className="flex flex-wrap sm:flex-col gap-2 px-4 justify-center">
                <a
                  className="mediaLink"
                  href="https://linkedin.com/in/sourav-naik-601b4b302"
                  target="main"
                >
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="h-8 gradient-text"
                  />
                  <span className="hidden sm:inline ms-2">Sourav Naik</span>
                </a>
                <a
                  className="mediaLink"
                  href="https://t.me/SOU_NAIK"
                  target="main"
                >
                  <FontAwesomeIcon
                    icon={faTelegram}
                    className="h-8 gradient-text"
                  />
                  <span className="hidden sm:inline ms-2">@SOU_NAIK</span>
                </a>
                <a
                  className="mediaLink"
                  href="https://github.com/Sourav-Naik"
                  target="main"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="h-8 gradient-text"
                  />
                  <span className="hidden sm:inline ms-2">Sourav-Naik</span>
                </a>
                <a
                  className="mediaLink"
                  href="https://www.instagram.com/sourav.naik/"
                  target="main"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="h-8 gradient-text"
                  />
                  <span className="hidden sm:inline ms-2">sourav.naik</span>
                </a>
                <a
                  className="mediaLink"
                  href="https://twitter.com/Sourav_Naik_"
                  target="main"
                >
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    className="h-8 gradient-text"
                  />
                  <span className="hidden sm:inline ms-2">Sourav_Naik_</span>
                </a>
                <a
                  className="mediaLink"
                  href="https://www.facebook.com/naiksourav12/"
                  target="main"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="h-8 gradient-text"
                  />
                  <span className="hidden sm:inline ms-2"> Sourav Naik</span>
                </a>
              </div>
            </div>

            {/* mailbox */}
            <div>
              <div className="secondHeading">
                <span className="text-[#C778DD] pe-[2px] font-semibold">#</span>
                mail-me
              </div>
              <div className="sm:flex-1 relative sm:px-4 max-w-2xl">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col mx-auto"
                  style={{
                    cursor: `${loading === true ? "progress" : "default"}`,
                  }}
                >
                  <div className="flex flex-wrap justify-start">
                    <div className="w-full text-[#ABB2BF] max-h-fit mb-4 flex flex-col">
                      <textarea
                        className={`min-h-40 max-h-40 flex-1 px-4 py-1 border ${
                          errors.content
                            ? "border-[#f44336]"
                            : "border-[#C778DD]"
                        } bg-transparent focus:outline-none focus:bg-[#C778DD] focus:bg-opacity-20 text-white`}
                        placeholder="content*"
                        {...register("content", {
                          required: {
                            value: true,
                            message: " Content is required",
                          },
                          minLength: {
                            value: 20,
                            message: "Minimum Length 20",
                          },
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
                          className={`max-h-8 px-4 py-1 border ${
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
                          className={`max-h-8 px-4 py-1 border ${
                            errors.name
                              ? "border-[#f44336]"
                              : "border-[#C778DD]"
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
                          className={`max-h-8 px-4 py-1 border ${
                            errors.email
                              ? "border-[#f44336]"
                              : "border-[#C778DD]"
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
                    className="border rounded px-5 py-1 border-[#C778DD] hover:bg-[#C778DD] hover:bg-opacity-20 mt-3 self-end sm:self-center
                transition active:-translate-y-1 active:scale-110 active:bg-opacity-100"
                  >
                    !! mail me !!
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
