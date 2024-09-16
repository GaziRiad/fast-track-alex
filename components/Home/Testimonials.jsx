import EmblaCarousel from "../ui/EmblaCarousel";
import "../../app/(pages)/styles/embla.css";
import { TESTIMNIALS } from "@/lib/constants";

const OPTIONS = { dragFree: true };

function Testimonials() {
  return (
    <section className="px-5 py-10 lg:py-20">
      <h2 className="mb-10 text-center font-display text-2xl font-bold text-[#333] lg:text-4xl">
        Trusted by Thousands of Contractors
      </h2>
      <EmblaCarousel slides={TESTIMNIALS} options={OPTIONS} />
    </section>
  );
}

export default Testimonials;
