import PageContainer from "../Components/PageContainer";
import GridOverlay from "../Components/GridOverlay";
import SpotifyNowPlaying from "../Components/SpotifyNowPlaying";
import HeroHeading from "../Components/HeroHeading";

export default function About() {
  return (
    <PageContainer>
      <div className="app-container">
        <header className="mb-24">
          <HeroHeading text="Deep experience in complex systems and early-stage products." />
        </header>
        <section className="lg:grid gap-16 grid-cols-3 mb-16">
          <div>
            <h3 className="mb-4">About</h3>
            <p className="font-serif">
              I'm a product designer with a passion for figuring things out. I
              thrive in the 0 stages of product development. I have extensive
              experience designing and facilitating research to help uncover
              user needs and opportunities.
            </p>
          </div>
          <div>
            <h3 className="mb-4">Ambient Me</h3>
            <p className="font-serif">
              Get to know me through my hobbies and live activities.
            </p>
            <SpotifyNowPlaying />
          </div>
        </section>
      </div>
      <GridOverlay columns={12} gap={24} />
    </PageContainer>
  );
}
