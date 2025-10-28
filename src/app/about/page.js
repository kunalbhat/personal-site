import PageContainer from "../Components/PageContainer";
import SpotifyNowPlaying from "../Components/SpotifyNowPlaying";
import HeroHeading from "../Components/HeroHeading";

export default function About() {
  return (
    <PageContainer>
      <header>
        <HeroHeading text="Deep experience in complex systems and early-stage products." />
      </header>
      <main className="lg:grid gap-16 grid-cols-2">
        <div>
          <h3 className="mb-2 md:mb-4">Experience</h3>
          <p>
            At{" "}
            <a
              href="https://www.auraframes.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aura
            </a>
            , I design for growth experimentation and lead product research to
            uncover our next big strategic opportunities.
          </p>
          <p>
            Before that, through{" "}
            <a href="https://www.magicandmight.com">Magic+Might</a>, I dove deep
            into the autonomous ride-hail space working with{" "}
            <a
              href="https://www.waymo.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Waymo{" "}
            </a>
            to understand rider sentiment and design future experiences.
          </p>
          <p>
            At Galactic, a seed-staged startup (investors included Redpoint,
            Bloomberg Beta and Betaworks, among others) I explored crypto and
            building tools for web3 users. During a very rough time for crypto,
            we pivoted from a debit card product to finally launching a{" "}
            <a
              href="https://thedefiant.io/education/infrastructure/off-ramp-crypto-in-one-click-with-skyteller"
              target="_blank"
              rel="noopener noreferrer"
            >
              crypto off-ramp
            </a>{" "}
            for getting crypto assets straight into bank accounts.
          </p>
          <p>
            Prior to that, I spent 6 years at PayPal building merchant
            experiences spanning from redefining the UX of{" "}
            <a
              href="https://medium.com/@skpatterson02/new-panel-who-dis-5e582b665eb5"
              target="_blank"
              rel="noopener noreferrer"
            >
              Braintree's merchant dashboard
            </a>{" "}
            to going deep into the Identity domain. I launched Braintree's
            Enterprise SSO offering, broke ground on a merchant data platform,
            and led the Identity component of PayPal's cross-organizational
            platform unification efforts.
          </p>
          <p>
            Prior to that, I led design at Modest (
            <a
              href="https://fortune.com/2015/08/19/paypal-acquisition-ebay-modest/"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            acquired by PayPal) where we built a contextual commerce platform to
            help small and medium businesses launch quickly on native iOS and
            Android apps.
          </p>
          <p>
            Prior to that, I designed and built the first iterations of{" "}
            <a
              href="https://www.dscout.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              dscout's
            </a>{" "}
            mobile research platform.
          </p>
          <p>
            Before all that, the formative years of my career were spent in
            innovation consulting for Samsung and the consumer electronics
            space.
          </p>
        </div>
        <div>
          <h3 className="mb-4">Ambient Me</h3>
          <p className="font-serif">
            Get to know me through my hobbies and live activities.
          </p>
          <SpotifyNowPlaying />
        </div>
      </main>
    </PageContainer>
  );
}
