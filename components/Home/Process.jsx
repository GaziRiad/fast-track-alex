import Image from "next/image";
import img1 from "../../public/images/process1.png";
import img2 from "../../public/images/process2.png";

const Steps = [
  {
    number: "01",
    title: "Initial Consultation",
    text: "We assess your needs and explain how our RMO service can fast-track your licensing process.",
  },
  {
    number: "02",
    title: "RMO Matching",
    text: "We quickly connect you with a qualified RMO who aligns with your business goals and requirements.",
  },
  {
    number: "03",
    title: "Application Support",
    text: "Our team handles all the paperwork, ensuring a smooth and rapid application process.",
  },
];

function Process() {
  return (
    <section className="bg-primary-700 px-5 text-white">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 py-10 lg:grid-cols-[35fr_65fr] lg:py-20">
        <div>
          <h2 className="mb-10 font-display text-2xl font-bold lg:text-4xl">
            Our Fast Track Process
          </h2>
          <div>
            {Steps.map((step) => (
              <div
                key={step.number}
                className="mb-[92px] flex items-start gap-5 last:mb-0"
              >
                <div className="relative rounded-full bg-accent-700 px-4 py-3 font-display text-2xl font-semibold">
                  <span>{step.number}</span>
                  {step.number !== "03" && (
                    <span className="absolute left-1/2 top-[140%] h-24 w-0.5 translate-x-1/2 bg-accent-700"></span>
                  )}
                </div>
                <div className="pt-3">
                  <p className="mb-2 font-display text-xl font-bold text-accent-700">
                    {step.title}
                  </p>
                  <p className="text-base leading-[25.6px] text-primary-300">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-[420px] lg:block lg:h-auto">
          <Image
            src={img1}
            alt="Fast Track Process image"
            className="absolute right-0 top-10 max-w-[280px] object-cover sm:max-w-[380px] lg:top-0 lg:max-w-[425px]"
          />
          <Image
            src={img2}
            alt="Fast Track Process image"
            className="absolute bottom-0 max-w-[280px] border-[14px] border-primary-700 object-cover sm:max-w-[380px] lg:bottom-0 lg:left-[20%] lg:max-w-[425px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Process;
