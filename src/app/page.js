// React and Next utils
"use client";
import { useState, useEffect } from "react";

// Libraries
import { animated, useSpring } from "@react-spring/web";
import "react-social-icons/github";
import "react-social-icons/linkedin";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  const styles = useSpring({
    from: {
      opacity: 0,
      y: 10,
    },
    to: {
      opacity: 1,
      y: 0,
    },
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <div className="content-container md:grid grid-cols-4 gap-24">
        <animated.div className="col-span-4 md:mr-24" style={styles}>
          <h1>Kunal Bhat</h1>
          <h2>Senior Product Designer @ Aura Home</h2>
        </animated.div>
      </div>
    </>
  );
}
