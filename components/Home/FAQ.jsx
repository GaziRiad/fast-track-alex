import { FaqItems } from "@/lib/constants";
import AccordionItem from "../ui/AccordionItem";

function FAQ() {
  return (
    <section
      id="faq"
      className="mx-auto grid max-w-[1400px] px-5 py-10 lg:py-20"
    >
      <h2 className="mb-10 text-center font-display text-2xl font-bold text-[#333] lg:text-4xl">
        Frequently Asked Questions
      </h2>

      <div className="flex flex-col gap-4">
        {FaqItems.map((item, index) => (
          <AccordionItem key={index} title={item.title} text={item.text} />
        ))}
      </div>
    </section>
  );
}

export default FAQ;
