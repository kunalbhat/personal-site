import Link from "next/link";
import Image from "next/image";
import HeroHeading from "../Components/HeroHeading";

export default function PortfolioPageHeader({ title = "Project" }) {
  return (
    <header className="content-inset flex items-center gap-4">
      <Link
        href="/portfolio"
        className="back-button h-12 w-12 bg-neutral-100 rounded-full flex items-center justify-center"
      >
        <Image
          src="/images/icon-arrow-back.svg"
          alt="Back arrow"
          width={32}
          height={32}
          className="relative hover:-translate-x-2 transition-transform duration-300"
        />
      </Link>
      <HeroHeading text={title} />
    </header>
  );
}
