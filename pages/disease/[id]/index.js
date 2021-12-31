import diss from "../../../public/data/diseases_lean.json";
import comps from "../../../public/data/companies_lean.json";
import drugs from "../../../public/data/drugs_lean.json";
import { useState } from "react";

import { Card, CardContent, Grid, Typography, Chip } from "@mui/material";
import Link from "next/link";
import Meta from "../../../components/Meta";

const Disease = ({ id }) => {
  const [cutoff, setCutoff] = useState(true);

  let drugs_array = [];
  if (drugs) {
    drugs_array = Object.keys(drugs).map((d) => {
      return { ...drugs[d], id: d };
    });
  }

  let prods = [];
  if (drugs_array.length > 0) {
    prods = drugs_array.filter((d) => {
      return d["diseases"].includes(id);
    });
  }

  prods.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });

  let keywords = `${diss[id]["en"]["name"]}, ${prods
    .map((p) => p.en.name)
    .join(", ")}`;

  let description = `Information about products indicated for ${diss[id]["en"]["name"]} including active ingredient, approval date, indications, and product prices. Japan Drug Database is a platform for patients, healthcare professionals, and researchers to access Japan healthcare data in a systematic and efficient way.`;

  return (
    <>
      <Meta
        title={`Japan Drug Database - ${diss[id]["en"]["name"]}`}
        description={description}
        keywords={keywords}
      ></Meta>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h4" component="span" style={{ marginRight: 10 }}>
          {diss[id]["en"]["name"]}
        </Typography>
        <Chip label={diss[id]["en"]["cat"]} />
      </div>
      <div>
        <Typography variant="subtitle2" component="span">
          {cutoff
            ? diss[id]["en"]["desc"].slice(0, 300) + "..."
            : diss[id]["en"]["desc"]}
        </Typography>
        <a
          onClick={() => {
            setCutoff(!cutoff);
          }}
          style={{
            textDecoration: "none",
            color: "steelblue",
            cursor: "pointer",
          }}
        >
          <Typography variant="subtitle2" component="span">
            {cutoff ? " Read More" : " Collapse"}
          </Typography>
        </a>
      </div>
      <Typography variant="h5" style={{ margin: "20px 0px 10px 0px" }}>
        {`Products indicated for ${diss[id]["en"]["name"]}`}
      </Typography>
      <Grid container spacing={2}>
        {prods.length > 0 &&
          prods.map((p) => (
            <Grid
              item
              sm={6}
              md={4}
              xl={3}
              style={{ flexGrow: 1, minHeight: "100%", height: "100%" }}
              key={p.id}
            >
              <Card variant="outlined">
                <CardContent>
                  <Link href="/drug/[id]" as={`/drug/${p.id}`} passHref={true}>
                    <Typography
                      variant="h5"
                      style={{
                        color: "steelblue",
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                    >
                      {p["en"]["name"]}
                    </Typography>
                  </Link>
                  {p["comps"].map((c, index) => {
                    return (
                      <span key={index}>
                        <Typography component="span">
                          <Link
                            href="/company/[id]"
                            as={`/company/${c}`}
                            passHref={true}
                          >
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
                        {index + 1 !== p["comps"].length && (
                          <Typography component="overline">{", "}</Typography>
                        )}
                      </span>
                    );
                  })}
                  <table style={{ textAlign: "left" }}>
                    <tr>
                      <th style={{ paddingLeft: 0, paddingRight: 5 }}>
                        <Typography variant="subtitle2" color="textSecondary">
                          Active ingredient
                        </Typography>
                      </th>
                      <td>
                        <Typography variant="body1">
                          {p["en"]["act_ing"]}
                        </Typography>
                      </td>
                    </tr>
                    <tr>
                      <th style={{ paddingLeft: 0, paddingRight: 5 }}>
                        <Typography variant="subtitle2" color="textSecondary">
                          Approval date
                        </Typography>
                      </th>
                      <td>
                        <Typography variant="body1">{p["date"]}</Typography>
                      </td>
                    </tr>
                  </table>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
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
  const ids = Object.keys(diss);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return { paths, fallback: false };
}

export default Disease;
