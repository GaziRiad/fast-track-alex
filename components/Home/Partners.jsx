import { PartnersImages } from "@/lib/constants";
import Image from "next/image";

function Partners() {
  return (
    <section className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-4 px-5 pb-6 pt-10 lg:grid-cols-4 lg:gap-14">
      <h2 className="text-center font-display text-xl font-semibold leading-7 tracking-wide lg:text-left">
        Our Trusted Partners 500+ Happy Customers
      </h2>
      {PartnersImages.map((partner, index) => (
        <Image
          key={index}
          width={600}
          height={600}
          src={partner.img}
          alt={partner.alt}
          className="mx-auto w-2/3 object-cover lg:w-full"
        />
      ))}
    </section>
  );
}

export default Partners;
