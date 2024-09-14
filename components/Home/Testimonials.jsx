import EmblaCarousel from "../ui/EmblaCarousel";
import "../../app/(pages)/styles/embla.css";

const OPTIONS = { dragFree: true };

const SLIDES = [
  {
    title: "saved me weeks of hassle!",
    text: "FastTrack made getting my contractor's license a breeze. Their efficiency and expertise saved me weeks of hassle!",
    author: "John D.",
    position: "General Contractor",
    image: "/images/testimonials/author.png",
  },
  {
    title: "saved me weeks of hassle!",
    text: "FastTrack made getting my contractor's license a breeze. Their efficiency and expertise saved me weeks of hassle!",
    author: "John D.",
    position: "General Contractor",
    image: "/images/testimonials/author.png",
  },
  {
    title: "saved me weeks of hassle!",
    text: "FastTrack made getting my contractor's license a breeze. Their efficiency and expertise saved me weeks of hassle!",
    author: "John D.",
    position: "General Contractor",
    image: "/images/testimonials/author.png",
  },
  {
    title: "saved me weeks of hassle!",
    text: "FastTrack made getting my contractor's license a breeze. Their efficiency and expertise saved me weeks of hassle!",
    author: "John D.",
    position: "General Contractor",
    image: "/images/testimonials/author.png",
  },
  {
    title: "saved me weeks of hassle!",
    text: "FastTrack made getting my contractor's license a breeze. Their efficiency and expertise saved me weeks of hassle!",
    author: "John D.",
    position: "General Contractor",
    image: "/images/testimonials/author.png",
  },
];

function Testimonials() {
  return (
    <section className="px-5 py-10 lg:py-20">
      <h2 className="mb-10 text-center font-display text-2xl font-bold text-[#333] lg:text-4xl">
        Trusted by Thousands of Contractors
      </h2>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  );
}

export default Testimonials;
