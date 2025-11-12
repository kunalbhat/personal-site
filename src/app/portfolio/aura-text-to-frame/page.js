// React utilities
import Image from "next/image";
import Link from "next/link";
import PageContainer from "../../Components/PageContainer";
import PortfolioPageHeader from "../../Components/PortfolioPageHeader";

export default function AuraTextToFrame() {
  return (
    <PageContainer>
      <div className="app-container">
        <PortfolioPageHeader title="Conversational UX for Aura's RCS agent." />
        <section>
          <h3>Year: 2025</h3>
          <p>I'm a design leader who balances big-picture vision </p>
        </section>
        <section>
          <figure>
            <Image
              src="../images/aura-rcs-light.jpg"
              alt="Aura RCS"
              width={1920}
              height={1080}
              className="slide-delayed mx-auto"
              loading="lazy"
              unoptimized
            />
          </figure>
          <figcaption>Core screens from the Skyteller app</figcaption>
        </section>
        <section className="content-inset">
          <article>
            <p>I'm a design leader who balances big-picture vision </p>
          </article>
        </section>
      </div>
    </PageContainer>
  );
}
