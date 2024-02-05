import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div style={{ zIndex: 2 }} className="navbar fixed left-0">
      <Link href="/">
        <div className="flex items-center">
          <Image
            src="/images/3dicons.png"
            width={60}
            height={60}
            alt="3dicons"
          />
          <p className="stelinovas-logo-text pl-3">STELINOVAS</p>
        </div>
      </Link>
      <p>About</p>
      <p>Roadmap</p>
      <p>Product</p>
      <p>Contact</p>
      <p className="hover:font-semibold">
        <Link href="/login">Sign In</Link>
      </p>
      <button className="navbar-btn">BUY NOW</button>
    </div>
  );
};

export default Navbar;
