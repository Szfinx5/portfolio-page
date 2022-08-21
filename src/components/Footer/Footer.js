import { Typography } from "@mui/material";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <Typography className="footer-name"></Typography>
        <a
          href="https://schoolofcode.co.uk/course"
          target="_blank"
          rel="noreferrer"
        >
          <img src={require("../../img/soc-logo.png")} alt="School of Code" />
        </a>
        <a
          href="http://www.credly.com/badges/6456dc32-627e-4ef1-ae67-e92be39e4c05"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="ccna"
            src={require("../../img/ccna.png")}
            alt="CCNA badge"
          />
        </a>
        <a
          href="http://www.credly.com/badges/f6fb3fca-f9c4-4858-9850-fed6243df068"
          target="_blank"
          rel="noreferrer"
        >
          <img src={require("../../img/aws-ccp.png")} alt="AWS badge" />
        </a>
      </div>
      <div className="footer-right">
        <Typography className="footer-copyright">
          Developed by{" "}
          <a
            href="https://www.linkedin.com/in/gabor-havasi-derby/"
            target="_blank"
            rel="noreferrer"
          >
            Gabor Havasi
          </a>
          <br />
          Based on{" "}
          <a
            href="https://www.youtube.com/c/SalmanFazal01"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Salman Fazal's{" "}
          </a>{" "}
          online course
        </Typography>
      </div>
    </div>
  );
};

export default Footer;

// [![AWS Certified Cloud Practitioner]
// (https://images.credly.com/size/110x110/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png)](http://www.credly.com/badges/f6fb3fca-f9c4-4858-9850-fed6243df068 "AWS Certified Cloud Practitioner")
