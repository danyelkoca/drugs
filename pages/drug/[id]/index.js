import diss from "../../../public/data/diseases_lean.json";
import comps from "../../../public/data/companies_lean.json";
import drugs from "../../../public/data/drugs_lean.json";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import { Typography } from "@mui/material";
import Link from "next/link";
import Meta from "../../../components/Meta";

const Companies = ({ id }) => {
  let drug = drugs[id];
  const keywords =
    `${drug.en.name}, ${drug.en.act_ing}, ` +
    drug.comps.map((c) => comps[c]["en"]["name"]).join(", ") +
    ", " +
    drug.diseases.map((d) => diss[d]["en"]["name"]).join(", ") +
    ", " +
    drug.prods.map((p) => p["en"]["name"]).join(", ") +
    ", indications, approval date, active ingredient, products";

  const description = `Information about ${
    drug["en"]["name"]
  } with active ingredient ${drug.en.act_ing}, manufactured by ${drug.comps
    .map((c) => comps[c]["en"]["name"])
    .join(", ")}, indicated for ${drug.diseases
    .map((d) => diss[d]["en"]["name"])
    .join(
      ", "
    )}. Japan Drug Database is a platform for patients, healthcare professionals, and researchers to access Japan healthcare data in a systematic and efficient way.`;
  return (
    <>
      <Meta
        title={`Japan Drug Database - ${drug["en"]["name"]}`}
        description={description}
        keywords={keywords}
      ></Meta>
      <Typography variant="h4">{drug["en"]["name"]}</Typography>
      {drug["comps"].map((c, index) => {
        return (
          <span key={index}>
            <Typography component="span">
              <Link href="/company/[id]" as={`/company/${c}`} passHref={true}>
                <Typography
                  variant="overline"
                  style={{
                    color: "steelblue",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  {comps[c]["en"]["name"]}
                </Typography>
              </Link>
            </Typography>
            {index + 1 !== drug["comps"].length && (
              <Typography component="overline">{", "}</Typography>
            )}
          </span>
        );
      })}
      <br />
      <table style={{ textAlign: "left" }}>
        <tr>
          <th style={{ paddingLeft: 0, paddingRight: 5 }}>
            <Typography variant="subtitle2" color="textSecondary">
              Active ingredient
            </Typography>
          </th>
          <td>
            <Typography variant="body1">{drug["en"]["act_ing"]}</Typography>
          </td>
        </tr>
        <tr>
          <th style={{ paddingLeft: 0, paddingRight: 5 }}>
            <Typography variant="subtitle2" color="textSecondary">
              Approval date
            </Typography>
          </th>
          <td>
            <Typography variant="body1">{drug["date"]}</Typography>
          </td>
        </tr>
      </table>
      {drug["diseases"] && drug["diseases"].length > 0 && (
        <div>
          <br />
          <Typography variant="h5">Indications</Typography>
          <List style={{ maxWidth: 500, margin: 0, padding: 0 }}>
            {drug["diseases"].map((d, index) => {
              return (
                <ListItem
                  style={{
                    color: "steelblue",
                    textDecoration: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                  key={index}
                >
                  <Link
                    href="/disease/[id]"
                    as={`/disease/${d}`}
                    passHref={true}
                  >
                    <ListItemButton>
                      <ListItemIcon>
                        <HealthAndSafetyIcon style={{ fill: "steelblue" }} />
                      </ListItemIcon>
                      <ListItemText
                        style={{ padding: "5px" }}
                        primary={diss[d]["en"]["name"]}
                      />
                    </ListItemButton>
                  </Link>
                </ListItem>
              );
            })}
          </List>
        </div>
      )}
      {drug["prods"] && drug["prods"].length > 0 && (
        <div>
          <br />
          <Typography variant="h5">Products</Typography>
          <table style={{ textAlign: "left" }}>
            {drug["prods"].map((p, index) => {
              return (
                <tr key={index}>
                  <th
                    style={{
                      padding: "5px 5px 5px 0",
                    }}
                  >
                    <Typography variant="body1" color="textSecondary">
                      {p["en"]["name"]}
                    </Typography>
                  </th>
                  <td>
                    <Typography variant="body1">{p["price"]}</Typography>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      )}
    </>
  );
};

export async function getStaticProps(context) {
  const id = Number(context.params.id);
  return {
    props: {
      id,
    },
  };
}

export async function getStaticPaths(context) {
  const ids = Object.keys(drugs);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return { paths, fallback: false };
}

export default Companies;
