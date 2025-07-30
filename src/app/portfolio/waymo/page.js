// React utilities
import Image from "next/image";
import PageContainer from "../../Components/PageContainer";

export default function Waymo() {
  return (
    <PageContainer>
      <div className="app-container">
        <header className="content-inset">
          <h1>Waymo</h1>
        </header>
        <section>
          <figure className="w-full overflow-hidden">
            <div className="rounded-3xl bg-[#3375f6]">
              <Image
                src="/images/waymo.png"
                alt="Waymo"
                width={1200}
                height={600}
                className="mx-auto relative left-0 hover:-left-32 transition-all ease-in-out duration-500"
                loading="lazy"
                unoptimized
              />
            </div>
            <figcaption className="text-sm bg-white text-gray-500 mt-2 pt-4 pb-8">
              Core screens from the Skyteller app
            </figcaption>
          </figure>
        </section>
        <section className="content-inset">
          <p>I'm a design leader who balances big-picture vision </p>
        </section>
      </div>
    </PageContainer>
  );
}
