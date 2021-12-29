import Typography from "@material-ui/core/Typography";
import Meta from "../components/Meta";

const About = () => {
  return (
    <>
      <Meta
        title="Japan Durg Database - About"
        description="Japan Drug Database is a platform for patients, healthcare professionals, and researchers to access Japan Healthcare data in a systematic and efficient way."
      ></Meta>
      <div
        style={{
          borderLeft: "10px solid steelblue",
          backgroundColor: "rgba(70,130,180,0.1)",
        }}
      >
        <div
          style={{
            padding: "20px",
          }}
        >
          <Typography>
            Japan Drug Database is a platform for patients, healthcare
            professionals, and researchers to access Japan Healthcare data in a
            systematic and efficient way.
          </Typography>
          <br />
          <Typography>
            Data displayed here are not guaranteed to be accurate. Please use
            with your own discretion.
          </Typography>
          <br />
          For queries, please reach out to Danyel Koca at danyelkoca@gmail.com
        </div>
      </div>
    </>
  );
};

export default About;
