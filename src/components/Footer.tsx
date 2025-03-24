import TechinBrand from "../assets/TechinBrand.svg?react";
import Email from "../assets/email.svg?react";
import Phone from "../assets/phone.svg?react";

const Footer = () => {
  return (
    <div className="bg-first flex flex-nowrap justify-evenly items-center min-h-48">
      <a href="https://techin.lt/ " target="_blank" className=" py-6">
        <TechinBrand className=" h-24 fill-[#2BD47A]" />
      </a>
      <section className=" flex justify-evenly gap-8 ">
        <a href="mailto:example@email.com" className="relative group">
          <Email className="h-[100%] fill-[#2BD47A]" />
          <span className="absolute left-1/2 -translate-x-1/2 bottom-[-1.5rem] text-[#2BD47A] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Email
          </span>
        </a>
        <a
          href="tel:+1234567890"
          className="text-[#2BD47A] self-center flex relative group"
        >
          <Phone className="fill-[#2BD47A]" />
          <p>+1 (234) 567-890</p>
          <span className="absolute left-1/2 -translate-x-1/2 bottom-[-1.5rem] text-[#2BD47A] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Phone
          </span>
        </a>
      </section>
    </div>
  );
};

export default Footer;
