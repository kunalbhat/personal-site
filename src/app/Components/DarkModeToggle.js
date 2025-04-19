import { useEffect, useState } from "react";
import Image from "next/image";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(() => {
    return (
      localStorage.getItem("theme") === "dark" ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches &&
        !localStorage.getItem("theme"))
    );
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 border dark:border-yellow-50 rounded-full text-sm fixed top-4 right-4"
    >
      {isDark ? (
        <Image
          src="/images/icon-sunrise.svg"
          width="24"
          height="24"
          alt="Light mode"
          className="dark:invert"
        />
      ) : (
        <Image
          src="/images/icon-sunset.svg"
          width="24"
          height="24"
          alt="Dark mode"
        />
      )}
    </button>
  );
}
