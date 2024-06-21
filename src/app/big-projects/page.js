import Image from "next/image";
import { UserIcon } from "@heroicons/react/24/outline";

export default function Portfolio() {
  return (
    <>
      <section className="content-container md:flex md:gap-12 mt-0 md:mb-6 lg:mb-12">
        <h1>Big Projects</h1>
      </section>
      <div className="section-divider -mt-4" />
      <section className="content-container md:grid md:grid-cols-2 md:gap-12">
        <div className="col-span-1 pr-10">
          <h2 className="text-5xl">Skyteller</h2>
          <p className="my-4 md:mt-8 mb-8 text-lg">
            Designed and built a financial product for web3 ("crypto") users.
            Navigated tremendous complexity for the best possible user
            experience. Integrated with multiple external trad-fi bridge
            partners. Pivoted several times.
          </p>
          <blockquote className="my-12 border-l-black border-l-4 pl-8">
            <strong>Galactic</strong> was a seed-stage, web3 company focused on
            empowering users to spend their crypto IRL. Our first product
            Skyteller.xyz allowed users to offramp tokens from their
            self-custodial wallets directly to their bank accounts in fiat. I
            designed and built frontend interfaces for our products.
            <p>
              <strong>Investors</strong> included Redpoint, Bloomberg Beta and
              Betaworks, among others.
            </p>
          </blockquote>
          <h3>Product Design Engineer</h3>
          <p className="text-lg">
            Responsible for translating complex technical requirements into a
            seamless user experience.
          </p>
          <dl className="flex justify-center mb-12 items-top">
            <dt className="m-0 flex mr-4">
              <span className="bg-white h-12 w-12 rounded-full flex justify-center items-center">
                <UserIcon className="h-6 w-6" />
              </span>
            </dt>
            <dd className="mb-0">
              <b>Onboarding</b>
              <br />
              Designed KYC flows for collecting contact and personal
              information.
            </dd>
          </dl>
          <dl className="flex justify-center  mb-12 items-top">
            <dt className="m-0 flex mr-4">
              <span className="bg-white h-12 w-12 rounded-full flex justify-center items-center">
                <UserIcon className="h-6 w-6" />
              </span>
            </dt>
            <dd className="mb-0">
              <b>Onboarding</b>
              <br />
              Designed KYC flows for collecting contact and personal
              information.
            </dd>
          </dl>
        </div>
        <div className="col-span-1">
          <div className="image-container shadow-2xl flex justify-center border-white bg-black border-8 rounded-3xl">
            <Image
              src="/images/skyteller.gif"
              width="341"
              height="713"
              alt="Skyteller animation"
              className="scale-75"
            />
          </div>
        </div>
      </section>
      <section className="content-container flex flex-col w-full md:gap-12 mt-0 md:mb-6 lg:mb-12">
        <h2 className="my-12 text-center">
          Designed multiple approaches to onboarding
        </h2>
        <div>
          <Image
            src="/images/skyteller-flow-1.png"
            width="1820"
            height="1460"
            alt="Skyteller animation"
            className="scale-75"
          />
        </div>
        <h2 className="mt-12 text-center">
          Designed multiple approaches to onboarding
        </h2>
        <div className="grid grid-cols-3">
          <div>
            <Image
              src="/images/skyteller-waitlist.png"
              width="341"
              height="713"
              alt="Skyteller animation"
              className="scale-75"
            />
          </div>
          <div>
            <Image
              src="/images/skyteller-waitlist.png"
              width="341"
              height="713"
              alt="Skyteller animation"
              className="scale-75"
            />
          </div>
          <div>
            <Image
              src="/images/skyteller-waitlist.png"
              width="341"
              height="713"
              alt="Skyteller animation"
              className="scale-75"
            />
          </div>
        </div>
      </section>
      <section className="content-container flex flex-col w-full md:gap-12 mt-0 md:mb-6 lg:mb-12 bg-black">
        <h2 className="my-12 text-center text-white">Components</h2>
        <div className="grid grid-cols-1">
          <div>
            <Image
              src="/images/skyteller-components.png"
              width="1820"
              height="1460"
              alt="Skyteller animation"
              className="scale-75"
            />
          </div>
        </div>
      </section>
      <div className="section-divider -mt-4" />
      <section className="content-container md:grid md:grid-cols-2 md:gap-12">
        <div>
          <h2 className="text-5xl">Braintree Control Panel</h2>
          <p className="my-4 md:mt-8 mb-8 text-lg">
            Managed and led the redesign and rebuild of Braintree's merchant
            dashboard.
          </p>
          <p>
            <strong>
              Role: Product Manager, Merchant Experience &ndash;
              Braintree/PayPal
            </strong>
          </p>
        </div>
        <div className="col-span-3 bg-white px-12 py-16">
          <Image
            src="/images/control-panel-ui.jpg"
            width="1600"
            height="1200"
            alt="Braintree Control Panel"
            className="scale-90 border-gray-200 border shadow-2xl"
          />
        </div>
      </section>
      <section className="content-container items-center md:grid md:grid-cols-2 md:gap-12">
        <div className="col-span-1 justify-center flex">
          <div className="h-[32rem] w-[32rem] block rounded-full overflow-hidden shadow-xl">
            <Image
              src="/images/control-panel-sql.png"
              width="1080"
              height="1536"
              alt="Braintree Control Panel"
              className="scale-150 ml-32"
            />
          </div>
        </div>
        <div className="col-span-1 pr-10">
          <h2>Placeholder</h2>
        </div>
      </section>
      <section className="content-container items-center md:grid md:grid-cols-2 md:gap-12">
        <div className="col-span-1 justify-center flex">
          <div className="h-[32rem] w-[32rem] block rounded-full overflow-hidden shadow-xl">
            <Image
              src="/images/control-panel-sql.png"
              width="1080"
              height="1536"
              alt="Braintree Control Panel"
              className="scale-150 ml-32"
            />
          </div>
        </div>
        <div className="col-span-1 pr-10">
          <h2>Placeholder</h2>
        </div>
      </section>
    </>
  );
}
