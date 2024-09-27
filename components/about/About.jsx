import Image from "next/image";
import MainTitle from "../mainTitle/MainTitle";

const About = () => {
  return (
    <section id="about" className=" mt-5 ">
      <MainTitle title="about me" desc="front-end developer" />
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* LEFT */}
          <div className="flex flex-col gap-2">
            <h1 className="text-[30px] font-bold capitalize">
            A passionate <span className="text-main-mainColor">Front-End Developer</span> 
            </h1>
            <p className="text-[16px]">
              My name is Essam Mohamed, a dedicated Front-End Developer with a
              passion for building modern web applications. I specialize in
              using cutting-edge technologies such as HTML, CSS, JavaScript,
              Sass, React, Next.js, TypeScript, Tailwind, and WordPress. I focus
              on creating responsive, fast, and user-friendly websites that
              provide an exceptional user experience.
              <br />
              <br />
               I am committed to writing
              clean, optimized code to ensure high performance, and I stay up to
              date with the latest development tools and techniques to deliver
              innovative solutions.
              <br />
              <br />
               Collaboration is a key part of my work, and
              I enjoy working with cross-functional teams to achieve the best
              possible results
            </p>
          </div>
          {/* RIGHT */}
          <div className="w-full h-full">
            <Image
              src="/Questions-rafiki2.png"
              alt="photo"
              width={2000}
              height={2000}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
