import Image from "next/image";
import logo from "@/app/Images/logo.jpg";
import side from "@/app/Images/side.jpg";
export default function About() {
  return (
    <div className="main">
      <div className="text-3xl text-start mb-4 md:mb-8">
        <span className="text-[#C778DD] pe-[2px] font-semibold">/</span>
        about-me
        <div className="text-base text-[#ABB2BF] font-semibold">Who am I?</div>
      </div>

      <div className="sm:px-4 text-start">
        {/* intro */}
        <div className="flex flex-col-reverse md:flex-row items-center md:items-stretch relative px-2 gap-4">
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
            modern, user-friendly web applications.
          </div>

          <div className="flex-1 flex md:justify-end items-stretch">
            <Image
              src={side}
              alt="..."
              className="object-fill"
            />
          </div>
          <div className="absolute top-0 w-full h-full flex justify-center items-center -z-10">
            <Image src={logo} width={300} alt="sourav" className="opacity-25" />
          </div>
        </div>

        {/* skills */}
        <div className="w-full mt-8 tracking-wide">
          <div className="text-2xl mb-2">
            <span className="text-[#C778DD] pe-[2px] font-semibold">#</span>
            Skills:
          </div>
          <div className="text-[#ABB2BF] font-semibold px-4 text-justify">
            <ul className="ms-4 space-y-2" style={{ listStyleType: "square" }}>
              <li>
                Proficient in computer programming with expertise in languages
                such as JavaScript,HTML,CSS etc.
              </li>
              <li>
                Self-taught Full Stack Developer with a focus on MERN (MongoDB,
                Express.js, React.js, Node.js) stack development.
              </li>
              <li>
                Strong frontend development skills with proficiency in React.js,
                Angular.js, and Next.js.
              </li>
              <li>
                Proficient in different CSS frameworks such as Tailwind,
                Bootstrap, Material Ui etc.
              </li>
              <li>
                Proficient in mechatronics principles, including mechanical
                design, electronics, and programming.
              </li>
              <li>
                Skilled in CAD software for designing mechanical components.
              </li>
              <li>
                Experienced in Arduino programming and automation systems.
              </li>
              <li>Strong analytical and problem-solving skills.</li>
            </ul>
          </div>
        </div>

        {/* Experience */}
        <div className="w-full mt-8 tracking-wide">
          <div className="text-2xl mb-2">
            <span className="text-[#C778DD] pe-[2px] font-semibold">#</span>
            Experience:
          </div>
          <div className="text-[#ABB2BF] font-semibold px-4 text-justify">
            <ul className="ms-4 space-y-2" style={{ listStyleType: "square" }}>
              <li>
                With a solid educational background in mechatronics engineering
                from Chandigarh University, I've gained valuable insights into
                the world of robotics, automation, and control systems.
                Throughout my academic journey, I've undertaken various projects
                and internships, honing my skills in problem-solving and
                innovation.
              </li>
              <li>
                Successfully developed and deployed web applications using the
                MERN stack, demonstrating strong capabilities in both frontend
                and backend development.
              </li>
              <li>
                Experienced in building responsive and user-friendly interfaces
                with React.js, Angular.js, and Next.js, ensuring optimal user
                experience and satisfaction.
              </li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="w-full mt-8 tracking-wide">
          <div className="text-2xl mb-2">
            <span className="text-[#C778DD] pe-[2px] font-semibold">#</span>
            Education:
          </div>
          <div className="text-[#ABB2BF] font-semibold px-4 text-justify">
            <ul className="ms-4 space-y-2" style={{ listStyleType: "square" }}>
              <li>
                Bachelor of Engineering in Mechatronics from Chandigarh
                University, with a commendable GPA of 75%.
              </li>
              <li>
                Secondary Education: Achieved 82% in Metric and 88% in 12th
                standard from a local school in Himachal Pradesh, India.
              </li>
            </ul>
          </div>
        </div>

        {/* Achievements */}
        <div className="w-full mt-8 tracking-wide">
          <div className="text-2xl mb-2">
            <span className="text-[#C778DD] pe-[2px] font-semibold">#</span>
            Achievements:
          </div>
          <div className="text-[#ABB2BF] font-semibold px-4 text-justify">
            <ul className="ms-4 space-y-2" style={{ listStyleType: "square" }}>
              <li>
                Consistently maintained high academic performance throughout my
                educational journey.
              </li>
              <li>
                Successfully completed various projects related to mechatronics
                and robotics during my undergraduate studies.
              </li>
              <li>
                Demonstrated expertise in building responsive and user-friendly
                interfaces, contributing to enhanced user experience and
                engagement.
              </li>
              <li>
                Developed and deployed multiple web development projects
                showcasing frontend proficiency with React.js, and Next.js.
              </li>
            </ul>
          </div>
        </div>

        {/* Interests */}
        <div className="w-full mt-8 tracking-wide">
          <div className="text-2xl mb-2">
            <span className="text-[#C778DD] pe-[2px] font-semibold">#</span>
            Interests:
          </div>
          <div className="text-[#ABB2BF] font-semibold px-4 text-justify">
            While I don't have a specific hobby, I enjoy exploring different
            interests over time. From playing cricket during my childhood to
            cycling and PC gaming in my teenage years, I've always been drawn to
            activities that challenge me both physically and mentally.
            Currently, I find solace in reading web novels, delving into
            captivating stories from around the world.
          </div>
        </div>
      </div>
    </div>
  );
}
