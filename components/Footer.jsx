import Link from "next/link";
import Logo from "./Logo";
import SocialIcons from "./ui/SocialIcons";

const FooterData = {
  footerCols: [
    {
      title: "Company",
      links: [
        { title: "About", href: "#" },
        { title: "Contact", href: "#" },
        { title: "About Us", href: "#" },
        { title: "FAQ", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { title: "Blog", href: "#" },
        { title: "Testimonials", href: "#" },
        { title: "About Us", href: "#" },
        { title: "FAQ", href: "#" },
      ],
    },
    {
      title: "For Pros",
      links: [
        { title: "Sign up to be an RMO", href: "#" },
        { title: "Testimonials", href: "#" },
        { title: "About Us", href: "#" },
        { title: "FAQ", href: "#" },
      ],
    },
  ],
  footerMobile: {
    contact: {
      title: "Contact Us",
      email: "info@fasttrack.com",
      phone: "+1 123 456 7890",
    },
    links: [
      { title: "Terms of service", href: "#" },
      { title: "Privacy Policy", href: "#" },
      { title: "Sign up to be an RMO", href: "#" },
      { title: "How do I become an RMo?", href: "#" },
    ],
  },
};

function Footer() {
  return (
    <>
      <footer className="hidden bg-primary-700 lg:block">
        <div className="mx-auto grid max-w-[1400px] grid-cols-[30fr_70fr] py-20">
          <div className="">
            <Logo />
          </div>
          <div className="grid grid-cols-3 justify-items-end">
            {FooterData.footerCols.map((col, index) => (
              <div key={index}>
                <p className="mb-4 font-display text-base font-bold text-white">
                  {col.title}
                </p>
                <ul className="flex flex-col gap-4">
                  {col.links.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="block text-white hover:text-primary-200"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 pb-8">
          <div className="flex items-center gap-10">
            <Link href="#" className="text-[#F3F4F6] hover:text-primary-200">
              Terms of service
            </Link>
            <Link href="#" className="text-[#F3F4F6] hover:text-primary-200">
              Privacy Policy
            </Link>
          </div>
          <SocialIcons styles=" !bg-accent-700 hover:!bg-accent-800" />
        </div>
      </footer>
      {/*  */}
      <footer className="flex flex-col gap-10 bg-primary-700 px-5 py-10 text-white lg:hidden">
        <Logo />
        <div className="flex flex-col gap-4">
          <p className="font-display text-xl font-bold capitalize">
            {FooterData.footerMobile.contact.title}
          </p>
          <p className="text-base">
            Email: {FooterData.footerMobile.contact.email}
          </p>
          <p className="text-base">
            Phone: {FooterData.footerMobile.contact.phone}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {FooterData.footerMobile.links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-[#F3F4F6] transition-all duration-300 hover:text-primary-200"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </footer>
    </>
  );
}

export default Footer;
