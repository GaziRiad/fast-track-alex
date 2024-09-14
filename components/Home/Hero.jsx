import Form from "../Form";

const HeroTextBlocks = [
  {
    title: "RMO Matching Service",
    text: "Quickly obtain your contractor's license through our expert Responsible Managing Officer (RMO) pairing program",
  },
  {
    title: "Full-Service License Acquisition",
    text: "We handle everything: RMO matching, paperwork, corporation formation, and license activation.",
  },
  {
    title: "Ongoing Compliance Support",
    text: "Receive guidance on industry standards, contract review, subcontractor management, and regulatory compliance.",
  },
];

function Hero() {
  return (
    <section className="w-full bg-primary-700 px-5 py-5 lg:pb-20 lg:pt-12">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-20 lg:grid-cols-[55fr_45fr]">
        <div className="text-white">
          <h1 className="mb-10 hidden font-display text-4xl font-bold leading-[50.4px] lg:block">
            Get Your California Contractor&apos;s License Fast - No Exam, No
            Experience Required
          </h1>
          <h1 className="mb-10 text-center font-display text-3xl font-bold leading-[50.4px] lg:hidden">
            Fast Track Your Contractor&apos;s License
          </h1>
          <div className="flex flex-col gap-6 text-xl font-normal leading-8">
            {HeroTextBlocks.map((block) => (
              <div
                key={block.title}
                className="border-l-4 border-primary-500 pl-4"
              >
                <p className="mb-2 text-xl font-semibold leading-7 tracking-wide text-accent-800">
                  {block.title}
                </p>
                <p className="text-base tracking-wide text-primary-300">
                  {block.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="h-[620px] w-full rounded-2xl bg-white lg:h-96"></div> */}
        <Form />
      </div>
    </section>
  );
}

export default Hero;
