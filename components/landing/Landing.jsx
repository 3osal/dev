/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { FaDev } from "react-icons/fa";
import Button from "../button/Button";
import Skills from "../skills/Skills";

const Landing = () => {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
          {/* LEFT */}
          <div>
            <Image
              className="rounded-full w-[200px] h-[200px] lg:w-[1000px] lg:h-[600px] lg:rounded-xl"
              src="/profile.png"
              alt="photo"
              width={1000}
              height={600}
            />
          </div>
          {/* RIGHT */}
          <div className="flex flex-col items-center gap-4 md:items-start">
            <h1 className="text-[20px] uppercase font-bold md:text-[50px]">
              <span className="flex gap-2 items-center text-main-mainColor text-[20px] uppercase font-bold md:text-[50px]">
                <span className="text-[20px]">
                  <FaDev />
                </span>{" "}
                i'm essam mohamed.
              </span>
              front-end developer
            </h1>
            <h3 className="text-[13px] md:text-[15px]">
              I'm Issam, a front-end developer based in Alexandria, Egypt,
              focused on creating clean and user-friendly interfaces. I am
              passionate about building responsive and efficient web solutions
              that enhance the user experience and positively impact people's
              lives.
            </h3>
            <Skills />
            <Button href={"/"} lable="more about me" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
