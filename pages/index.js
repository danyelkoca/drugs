import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import Meta from "../components/Meta";
import { changeData } from "../redux/data";
import initialize from "../utilities/initialize";
import homeStyles from "../styles/Home.module.css";
import { Typography } from "@mui/material";

/*YOLO: assign key to children across all pages*/
/*convert price to english*/
/* add language supprt*/
/*update lists to the latest data from kegg*/
/* remove withdrawn drugs*/
/* add animation to cards */
function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function init() {
      const data = await initialize();
      console.log(data);
      dispatch(changeData(data));
    }
    init();
  }, []);

  return (
    <>
      <Meta />
      <div className={homeStyles.welcome}>
        <img
          src="./main.jpg"
          style={{
            position: "absolute",
            width: "100vw",
            height: "100vh",
            top: 0,
            left: 0,
            objectFit: "cover",
            zIndex: -10,
          }}
        ></img>
      </div>

      <Typography
        variant="body1"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          background: "rgba(255,255,255,0.9)",
          padding: "20px 40px",
          borderRadius: 10,
          boxShadow: "0px 0px 3px 1px rgba(0,0,0,0.05)",
          textAlign: "center",
        }}
      >
        Please search for a drug, disease or pharma company using the search
        field above
      </Typography>
    </>
  );
}

export default Home;
