// React utilities
import Image from "next/image";
import PageContainer from "../../Components/PageContainer";
import PortfolioPageHeader from "../../Components/PortfolioPageHeader";

export default function SkytellerPage() {
  return (
    <PageContainer>
      <div className="app-container">
        <PortfolioPageHeader title="Skyteller" />
        <section>
          <figure className="w-full overflow-hidden">
            <div className="rounded-2xl bg-[#E0CDE4]">
              <Image
                src="/images/skyteller-screens.png"
                alt="Skyteller screens"
                width={1200}
                height={600}
                className="mx-auto"
                loading="lazy"
                unoptimized
              />
            </div>
            <figcaption className="text-sm bg-white text-gray-500 mt-2 pt-4 pb-8">
              Core screens from the Skyteller app
            </figcaption>
          </figure>
        </section>
      </div>
    </PageContainer>
  );
}
