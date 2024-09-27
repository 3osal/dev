import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import Button from "../button/Button";

const PortofolioCard = ({ image, languages, desc, code, demo }) => {
  return (
    <div className="bg-background-ALT shadow-shadow/100 shadow-lg p-[25px] rounded-[15px] flex flex-col gap-4 hover:bg-background-ALT/70 hover:rotate-6">
      <Image
        src={image}
        alt="photo"
        width={500}
        height={300}
        className="rounded-[15px]"
      />
      {/* INFO */}
      <div className="flex flex-col ju gap-5">
        <div className="flex gap-4 items-center justify-between">
          <span className="flex gap-4 items-center">{languages}</span>
          <span>
            <Link href={code}>
              <FaGithub />
            </Link>
          </span>
        </div>
        <h2 className="text-text-secondary font-bold">{desc}</h2>
        <Button href={demo} lable='preview' />
      </div>
    </div>
  );
};

export default PortofolioCard;
