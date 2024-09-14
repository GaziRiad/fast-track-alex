import { MdOutlineShield } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";
import Image from "next/image";

const Features = [
  {
    title: "Legal Compliance",
    text: "100% compliant with state regulations",
    icon: "/images/icons/rmo-1.svg",
  },
  {
    title: "Save Time",
    text: "Get licensed in weeks, not years",
    icon: "/images/icons/rmo-2.svg",
  },
  {
    title: "Start Sooner",
    text: "Launch your contracting business faster",
    icon: "/images/icons/rmo-3.svg",
  },
];

function Rmo() {
  return (
    <section className="bg-[#EFEFEF] px-5 py-10 lg:py-16">
      <div className="mx-auto max-w-[1400px]">
        <h2 className="mb-5 font-display text-2xl font-bold lg:mb-9 lg:text-4xl">
          What is an RMO?
        </h2>
        <p className="mb-5 font-display text-base lg:mb-10">
          An RMO (Responsible Managing Officer) is a licensed contractor who
          allows your company to leverage their experience and qualifications.
          In California, as per Business and Professions Code Section 7068, an
          RMO enables you to obtain a contractor&apos;s license without meeting
          the traditional 4-year experience requirement or passing difficult
          exams.
        </p>
        <div className="flex flex-col items-start justify-between gap-5 lg:flex-row lg:gap-0">
          {Features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <Image
                src={feature.icon}
                alt={`Icon of ${feature.title}`}
                width={200}
                height={200}
                className="w-9 lg:w-14"
              />
              <div>
                <p className="mb-1 font-display text-xl font-bold">
                  {feature.title}
                </p>
                <p className="text-sm text-[#666666]">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Rmo;
