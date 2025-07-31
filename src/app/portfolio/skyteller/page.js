// React utilities
import Image from "next/image";
import PageContainer from "../../Components/PageContainer";

export default function SkytellerPage() {
  return (
    <PageContainer>
      <div className="app-container">
        <header className="content-inset">
          <h1>Skyteller</h1>
        </header>
        <section className="my-12">
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
