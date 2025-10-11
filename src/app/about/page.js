import PageContainer from "../Components/PageContainer";

export default function About() {
  return (
    <PageContainer>
      <div className="app-container">
        <header>
          <h1 className="leading-1 text-8xl">
            Product designer with deep experience in complex domains.
          </h1>
        </header>
        <section className="grid gap-16 grid-cols-3 mb-16">
          <h2>
            I'm a product designer with a passion for creating intuitive and
            engaging user experiences. With a background in both design and
            technology, I bridge the gap between aesthetics and functionality to
            deliver products that not only look great but also perform
            seamlessly.
          </h2>
          <h2>
            Over the years, I've had the opportunity to work on a variety of
            projects, ranging from mobile apps to web platforms. My approach to
            design is user-centric, focusing on understanding{" "}
          </h2>
        </section>
      </div>
    </PageContainer>
  );
}
