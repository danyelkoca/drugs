import { Link, Typography } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import {
  EmailShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookShareButton,
  LineShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  EmailIcon,
  LinkedinIcon,
  TwitterIcon,
  FacebookMessengerIcon,
  LineIcon,
  WhatsappIcon,
} from "react-share";

import { styled } from "@mui/material/styles";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[3],
  },
}));

const Footnote = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        textAlign: "center",
        height: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>
        Made with
        <LightTooltip
          style={{
            backgroundColor: "white",
          }}
          title={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <p>Spread the love by sharing this website</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <EmailShareButton
                  subject={`Check this page out: Japan Drug Database`}
                  body={"Yolo!"}
                  style={{ margin: 5 }}
                >
                  <EmailIcon size={32} round={true} />
                </EmailShareButton>
                <LinkedinShareButton style={{ margin: 5 }}>
                  <LinkedinIcon size={32} round={true} />
                </LinkedinShareButton>
                <TwitterShareButton style={{ margin: 5 }}>
                  <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
                <FacebookShareButton style={{ margin: 5 }}>
                  <FacebookMessengerIcon size={32} round={true} />
                </FacebookShareButton>
                <LineShareButton style={{ margin: 5 }}>
                  <LineIcon size={32} round={true} />
                </LineShareButton>
                <WhatsappShareButton style={{ margin: 5 }}>
                  <WhatsappIcon size={32} round={true} />
                </WhatsappShareButton>
              </div>
            </div>
          }
        >
          <span
            style={{
              color: "transparent",
              textShadow: "0 0 0 steelblue",
              margin: "0px 10px 0px 5px",
              cursor: "pointer",
            }}
          >
            ❤️
          </span>
        </LightTooltip>
        in Tokyo
      </p>
      <p
        style={{
          margin: "0px 15px",
          fontWeight: "bold",
          color: "rgba(100,100,100,0.5)",
        }}
      >
        |
      </p>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ textAlign: "center" }}>
          <Link
            href="https://www.linkedin.com/in/danyelkoca"
            style={{ marginRight: 15 }}
          >
            <IconButton aria-label="LinkedIn" style={{ padding: 0 }}>
              <LinkedInIcon style={{ fill: "steelblue" }} />
            </IconButton>
          </Link>
          <Link
            href="https://github.com/danyelkoca"
            style={{ marginRight: 15 }}
          >
            <IconButton aria-label="GitHub" style={{ padding: 0 }}>
              <GitHubIcon style={{ fill: "steelblue" }} />
            </IconButton>
          </Link>
          <Link
            href="https://www.facebook.com/danyelkoca/"
            style={{ marginRight: 15 }}
          >
            <IconButton aria-label="Facebook" style={{ padding: 0 }}>
              <FacebookIcon style={{ fill: "steelblue" }} />
            </IconButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footnote;
