import { IoMdMail } from "react-icons/io";
import { MdPhoneInTalk } from "react-icons/md";
import Form from "../Form";
import SocialIcons from "../ui/SocialIcons";

function Contact() {
  return (
    <section className="mx-auto grid max-w-[1400px] px-5 py-10 lg:py-20">
      <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-20">
        <div className="flex-1 text-white">
          <h2 className="mb-6 max-w-lg text-left font-display text-2xl font-bold !leading-normal text-[#333] lg:text-4xl">
            Fast Track Your Contractor&apos;s License
          </h2>
          <p className="mb-6 text-xl text-[#181818]">
            Get licensed in record time with our expert RMO connection service.
            Start building your future today!
          </p>

          <div className="mb-4 flex items-center gap-4">
            <p className="flex items-center gap-[6px] text-primary-700">
              <span>
                <MdPhoneInTalk color="#1F2937" size={24} />
              </span>
              <strong>Phone:</strong>
            </p>
            <p className="text-[#666]">Phone: +1 123 456 7890</p>
          </div>
          <div className="mb-6 flex items-center gap-4">
            <p className="flex items-center gap-[6px] text-primary-700">
              <span>
                <IoMdMail color="#1F2937" size={24} />
              </span>
              <strong>Mail:</strong>
            </p>
            <p className="text-[#666]">Phone: +1 123 456 7890</p>
          </div>
          <SocialIcons />
        </div>
        <Form />
      </div>
    </section>
  );
}

export default Contact;
