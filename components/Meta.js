import Head from "next/head";

// you can use next-seo for managing the meta tag

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta
        name="google-site-verification"
        content="xdkQxVkQHLojk15yZskf4NOt8_xedCpBebo9R_IzvKI"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <meta name="keywords" content={keywords}></meta>
      <meta name="description" content={description}></meta>
      <meta charSet="utf-8"></meta>
      <link rel="shortcut icon" href="/icon.png" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Japan Drug Database",
  keywords:
    "Japan, healthcare, life sciences, drugs, pharma companies, indications, MSD, Pfizer, Novartis, Sanofi, GSK, Danyel Koca, Danyel, Koca",
  description:
    "Japan Drug Database is a compilation of all drugs that are approved in Japan, with information about the approved indications, manufacturing companies, and drug prices.",
};

export default Meta;
