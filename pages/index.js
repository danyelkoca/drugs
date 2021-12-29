import { useEffect, useState } from "react";
// import "@fontsource/roboto";
// import Welcome from "../components/modals/welcome";
import { useDispatch } from "react-redux";
import Meta from "../components/Meta";
import { changeData } from "../redux/data";
import initialize from "../utilities/initialize";

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
      <Meta
        title="Japan Drug Database"
        description="Japan Drug Database is a compilation of all drugs that are approved in Japan, indications of drugs, and their manufacturers."
      />
      <div>
        Please search for a drug, disease or pharma company using the search
        field above
      </div>
    </>
  );
}

export default Home;
