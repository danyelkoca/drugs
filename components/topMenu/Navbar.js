import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Search from "./Search";
import { Grid } from "@mui/material";
import Link from "next/link";

import { useState, useEffect } from "react";

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default function Navbar() {
  const size = useWindowSize();

  return (
    <div
      style={{
        display: "flex",
        padding: "0px 20px",
        height: 80,
        alignItems: "center",
        borderBottom: "1px solid rgba(0,0,0,0.3)",
        zIndex: 3,
        background: "rgba(255,255,255,0.9)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexGrow: 1,
        }}
      >
        <Link href="/" passHref={true}>
          <a
            style={{
              textDecoration: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "steelblue",
              marginRight: 10,
            }}
          >
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              width="50px"
              height="50px"
              viewBox="0 0 512 512"
              style={{ fill: "steelblue", marginRight: 10 }}
            >
              <g>
                <g>
                  <path
                    d="M267.82,253.649c-51.872,51.866-55.575,133.648-11.134,189.79L457.6,242.531
			C401.453,198.089,319.685,201.791,267.82,253.649z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M481.233,266.161L280.319,467.071c56.153,44.456,137.923,40.754,189.789-11.127
			C521.973,404.085,525.675,322.304,481.233,266.161z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M287.901,26.091C224.414-3.55,148.911,23.886,119.27,87.38l-41.424,88.729l151.5,70.734
			c4.561-5.88,9.51-11.497,14.843-16.828c16.833-16.831,36.478-29.869,58.39-38.754c16.928-6.865,34.617-11.012,52.753-12.397
			C374.067,119.132,346.175,53.298,287.901,26.091z M253.903,98.909c-23.239-10.846-50.969-0.768-61.815,22.463l-30.284-14.136
			c18.64-39.932,66.297-57.251,106.232-38.612L253.903,98.909z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M205.417,421.185c-8.576-21.148-12.924-43.484-12.923-66.388c0-22.906,4.35-45.242,12.927-66.389
			c1.807-4.456,3.795-8.813,5.943-13.076L63.708,206.393L11.937,317.284c-29.633,63.494-2.197,138.982,61.288,168.622
			c52.638,24.581,113.528,9.915,149.696-32.003C215.968,443.68,210.108,432.753,205.417,421.185z"
                  />
                </g>
              </g>
            </svg>
            {size.width && size.width > 768 && (
              <Typography component="span">Japan Drug Database</Typography>
            )}
          </a>
        </Link>
        <Search />
      </div>
      <Link
        href="/about"
        passHref={true}
        style={{
          textDecoration: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "steelblue",
        }}
      >
        <Button style={{ color: "steelblue", padding: "5px 10px" }}>
          About
        </Button>
      </Link>
    </div>
  );
}
