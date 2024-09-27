import Link from "next/link";

const Button = ({ href, lable }) => {
  return (
    <>
      <Link
        className="bg-transparent capitalize font-bold w-max flex items-center gap-2 trans hover:gap-4"
        href={href}
      >
        <span className= 'w-[30px] h-[4px] rounded-full bg-main-mainColor'></span>
        {lable}
      </Link>
    </>
  );
};

export default Button;
