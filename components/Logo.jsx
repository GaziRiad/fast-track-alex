import Image from "next/image";
import logo from "../public/images/logo.svg";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <Image
        src={logo}
        alt="FastTrack app logo"
        className="w-3/4 object-cover lg:w-full"
      />
    </Link>
  );
}

export default Logo;
