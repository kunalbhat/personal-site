import { HeartIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="content-container site-footer">
      <p>&copy;{year} Kunal Bhat</p>
      <p>
        Built by hand with{" "}
        <HeartIcon className="w-5 -mt-1 inline text-red-500" /> in{" "}
        <a href="https://react.dev/" target="_blank" rel="noreferrer">
          React
        </a>
        .
      </p>
    </footer>
  );
};

export { Footer };
