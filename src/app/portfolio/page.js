// React utilities
import Image from "next/image";
import Link from "next/link";
import PageTransition from "../components/PageTransition";

export default function Portfolio() {
  return (
    <PageTransition>
      <div className="app-container">
        <header className="content-inset">
          <h1>Portfolio</h1>
        </header>
        <section className="">
          <div className="portfolio-list">
            <Link href="/portfolio/aura" className="portfolio-item">
              <h2>Aura</h2>
            </Link>
            <Link href="/portfolio/waymo" className="portfolio-item">
              <h2>Waymo</h2>
            </Link>
            <Link href="/portfolio/skyteller" className="portfolio-item">
              <h2>Skyteller</h2>
            </Link>
            <Link href="/portfolio/braintree" className="portfolio-item">
              <h2>Braintree</h2>
            </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
