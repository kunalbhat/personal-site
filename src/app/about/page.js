import PageContainer from "../Components/PageContainer";
import GridOverlay from "../Components/GridOverlay";
import SpotifyNowPlaying from "../Components/SpotifyNowPlaying";
import HeroHeading from "../Components/HeroHeading";

export default function About() {
  return (
    <PageContainer>
      <div className="app-container">
        <header>
          <h1 className="leading-1">
            Product designer with deep experience in complex domains.
          </h1>
        </header>
        <section className="grid gap-16 grid-cols-3 mb-16">
          <div>
            <h3 className="mb-4">About</h3>
            <p className="font-serif">
              I'm a product designer with a passion for creating intuitive and
              engaging user experiences. With a background in both design and
              technology, I bridge the gap between aesthetics and functionality
              to deliver products that not only look great but also perform
              seamlessly.
            </p>
          </div>
          <div>
            <h2>
              Over the years, I've had the opportunity to work on a variety of
              projects, ranging from mobile apps to web platforms. My approach
              to design is user-centric, focusing on understanding{" "}
            </h2>
          </div>
          <div>
            <h3>Ambient Me</h3>
            <p>Get to know me through my hobbies and live activities.</p>
            <SpotifyNowPlaying />
          </div>
        </section>
      </div>
      <GridOverlay columns={12} gap={24} />
    </PageContainer>
  );
}
