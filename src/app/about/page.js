import PageTransition from "../Components/PageTransition";

export default function About() {
  return (
    <PageTransition>
      <div className="app-container">
        <header className="content-inset">
          <h1>About</h1>
        </header>
        <section className="content-inset">
          <p>I'm a design leader who balances big-picture vision </p>
        </section>
      </div>
    </PageTransition>
  );
}
