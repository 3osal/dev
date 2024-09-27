import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import MainTitle from "../mainTitle/MainTitle";

export default function Contact() {
  return (
    <section id="contact">
        <MainTitle title='Contact Us' desc='Got a technical issue' />
      <div className="container">
        {/* DATA */}
        <div className=" mt-16 grid grid-rows-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT */}
          <div className="grid grid-cols-1 justify-center md:grid-cols-1 items-center gap-5">
            <div className=" flex gap-3 items-center bg-background-ALT p-[15px] md:w-[100%] overflow-hidden py-[25px] px-[15px] rounded-[15px] hover:bg-main-mainColor">
              <FaEnvelope className="text-[30px] text-main-color" />
              <span className="block p-0 text-text-secondary">
                essammohamedabdelmaaboud22@gmail.com
              </span>
            </div>
            <div className=" flex gap-3 items-center bg-background-ALT  md: overflow-hidden px-[15px] py-[25px] rounded-[15px] hover:bg-main-mainColor">
              <FaPhoneAlt className="text-[30px] text-main-color" />
              <span className="block text-text-secondary">+20 101868446885</span>
            </div>
            <div className=" flex gap-3 items-center bg-background-ALT  md:w-[100%] overflow-hidden px-[15px] py-[25px] rounded-[15px] hover:bg-main-mainColor">
              <FaLocationDot className="text-[30px] text-main-color" />
              <span className="block text-text-secondary">AlAlexandria, Egypt</span>
            </div>
          </div>
          {/* RIGHT */}
          <div>
            <form
              action="/"
              className="bg-background-ALT p-[20px] rounded-[10px] flex flex-col gap-5"
            >
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-neutral-800 text-main-color border-none outline-0 rounded-[10px] p-4 w-[100%]"
                />
              </div>
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-neutral-800 text-main-color border-none outline-0 rounded-[10px] p-4 w-[100%]"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="bg-neutral-800 text-main-color border-none outline-0 rounded-[10px] p-4 w-[100%]"
                />
              </div>
              <div>
                <textarea
                  name="des"
                  placeholder="Message"
                  className="w-[100%] bg-neutral-800 text-main-color p-3 outline-0 rounded-[10px]"
                ></textarea>
              </div>
              <button className="text-text-primary bg-main-mainColor bg-main-color text-center capitalize px-[30px] py-[10px] w-[max-content] rounded-[15px] hover:bg-background">
                send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
