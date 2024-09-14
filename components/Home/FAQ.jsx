import AccordionItem from "../ui/AccordionItem";

const FaqItems = [
  {
    title: "What is an RMO?",
    text: "An RMO (Responsible Managing Officer) is a licensed contractor who lends their experience and qualifications to your company. In California, under Business and Professions Code Section 7068, an RMO allows you to obtain a contractor's license without meeting the traditional 4-year experience requirement or passing difficult exams.",
  },
  {
    title: "How long does the licensing process take?",
    text: "An RMO (Responsible Managing Officer) is a licensed contractor who lends their experience and qualifications to your company. In California, under Business and Professions Code Section 7068, an RMO allows you to obtain a contractor's license without meeting the traditional 4-year experience requirement or passing difficult exams.",
  },
  {
    title: "What support do you offer after I get my license?",
    text: "An RMO (Responsible Managing Officer) is a licensed contractor who lends their experience and qualifications to your company. In California, under Business and Professions Code Section 7068, an RMO allows you to obtain a contractor's license without meeting the traditional 4-year experience requirement or passing difficult exams.",
  },
  {
    title: "Is FastTrack Licensing available in all states?",
    text: "An RMO (Responsible Managing Officer) is a licensed contractor who lends their experience and qualifications to your company. In California, under Business and Professions Code Section 7068, an RMO allows you to obtain a contractor's license without meeting the traditional 4-year experience requirement or passing difficult exams.",
  },
];

function FAQ() {
  return (
    <section className="mx-auto grid max-w-[1400px] px-5 py-10 lg:py-20">
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
