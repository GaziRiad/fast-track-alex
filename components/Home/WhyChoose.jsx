import Image from "next/image";

const Features = [
  {
    icon: "/images/icons/choose-1.svg",
    title: "RMO Matching",
    text: "We connect you with the most qualified Responsible Managing Officer for your specific trade and business needs, ensuring you have the right leadership to drive success.",
  },
  {
    icon: "/images/icons/choose-2.svg",
    title: "Business Formation",
    text: "Our experts guide you through establishing your company's legal structure and processes, providing a solid foundation for long-term growth and success.",
  },
  {
    icon: "/images/icons/choose-3.svg",
    title: "We Handle the Paperwork",
    text: "We handle your contractor's license application from start to finish, meticulously preparing and submitting all necessary paperwork, so you can focus on your business.",
  },
  {
    icon: "/images/icons/choose-4.svg",
    title: "Compliance Assurance",
    text: "Our proactive monitoring services ensure you stay compliant with all regulations, giving you confidence and peace of mind as you operate and grow.",
  },
  {
    icon: "/images/icons/choose-5.svg",
    title: "RMO Transition",
    text: "If an RMO change is needed, we facilitate a smooth transition to a new qualified professional, ensuring continuity and minimal disruption to your business.",
  },
  {
    icon: "/images/icons/choose-6.svg",
    title: "Ongoing Support and Growth",
    text: "We provide ongoing support, industry updates, and educational resources to help you stay ahead in a dynamic industry and capitalize on growth opportunities.",
  },
];

function WhyChoose() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-10 lg:py-20">
      <h2 className="mb-10 text-center font-display text-2xl font-bold text-[#333] lg:mb-14 lg:text-4xl">
        Why Choose FastTrack Licensing?
      </h2>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {Features.map((feature, index) => (
          <div key={index}>
            <div className="relative mb-3 aspect-square w-fit rounded-full bg-primary-200 p-4">
              <Image
                src={feature.icon}
                alt={`Icon of ${feature.title}`}
                width={200}
                height={200}
                className="w-7 object-cover"
              />
            </div>
            <p className="mb-3 font-display text-xl font-bold">
              {feature.title}
            </p>
            <p className="text-sm leading-[21px] text-[#666666]">
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChoose;
