// React utilities
import Image from "next/image";
import PageContainer from "../../Components/PageContainer";
import PortfolioPageHeader from "../../Components/PortfolioPageHeader";

export default function BraintreeDashboardPage() {
  return (
    <PageContainer>
      <div className="app-container">
        <PortfolioPageHeader title="Braintree" />
        <section>
          <figure className="w-full h-[640px] overflow-hidden">
            <div className="rounded-3xl bg-slate-400 p-12">
              <Image
                src="/images/braintree-dashboard.png"
                alt="Braintree"
                width={715}
                height={500}
                className="fadeIn-delayed mx-auto rounded-2xl shadow-2xl"
                loading="lazy"
                unoptimized
              />
            </div>
            <figcaption className="text-sm bg-white text-gray-500 mt-2 pt-4 pb-8">
              The Braintree Dashboard
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
