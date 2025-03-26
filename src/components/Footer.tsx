import TechinBrand from "../assets/TechinBrand.svg?react";
import Email from "../assets/email.svg?react";
import Phone from "../assets/phone.svg?react";

const Footer = () => {
  return (
    <div className="bg-first flex flex-col lg:flex-row py-8 text-sixth flex-nowrap justify-evenly items-center min-h-48">
      <a href="https://techin.lt/ " target="_blank" className="py-6">
        <TechinBrand className=" h-24 fill-[#2BD47A]" />
      </a>
      <section className="grid lg:grid-cols-[1fr_auto] lg:gap-8">
        <a
          href="mailto:alina.vaitekuniene@techin.lt"
          className="relative group flex gap-2"
        >
          <Email className="h-[100%] fill-[#2BD47A]" />
          <p>alina.vaitekuniene@techin.lt</p>
          <span className="hidden lg:block lg:absolute left-1/2 -translate-x-1/2 bottom-[-1.5rem] text-[#2BD47A] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Email
          </span>
        </a>
        <a
          href="tel:+37060485041"
          className="text-[#2BD47A] gap-2 self-center flex relative group pb-8 lg:pb-0"
        >
          <Phone className="fill-[#2BD47A]" />
          <p>+37060485041</p>
          <span className="hidden lg:block lg:absolute left-1/2 -translate-x-1/2 bottom-[-1.5rem] text-[#2BD47A] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Phone
          </span>
        </a>
        <a
          href="mailto:virginija.puodziukiene@techin.lt"
          className="relative group flex gap-2"
        >
          <Email className="h-[100%] fill-[#2BD47A]" />
          <p>virginija.puodziukiene@techin.lt</p>
          <span className="hidden lg:block lg:absolute left-1/2 -translate-x-1/2 bottom-[-1.5rem] text-[#2BD47A] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Email
          </span>
        </a>
        <a
          href="tel:+37061149143"
          className="text-[#2BD47A] gap-2 flex relative group"
        >
          <Phone className="fill-[#2BD47A]" />
          <p>+37061149143</p>
          <span className="hidden lg:block lg:absolute left-1/2 -translate-x-1/2 bottom-[-1.5rem] text-[#2BD47A] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Phone
          </span>
        </a>
      </section>
    </div>
  );
};

export default Footer;
