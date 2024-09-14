import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Socials = [
  { name: "X", icon: <FaTwitter color="#fff" size={22} />, href: "#" },
  { name: "Facebook", icon: <FaFacebookF color="#fff" size={22} />, href: "#" },
  {
    name: "Instagram",
    icon: <FaInstagram color="#fff" size={22} />,
    href: "#",
  },
];

function SocialIcons({ styles }) {
  return (
    <div className="flex items-center gap-[6px]">
      {Socials.map((social, index) => (
        <Link
          key={index}
          target="_blank"
          href={social.href}
          className={`rounded-full bg-primary-700 p-2 transition-all duration-300 hover:bg-primary-500 ${styles}`}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
}

export default SocialIcons;
