import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/people.png" width={80} height={80} alt="People logo" />
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/people">People listing</Link>
    </nav>
  );
};

export default Navbar;
