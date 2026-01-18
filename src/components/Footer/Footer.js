import { Typography } from "@mui/material";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <Typography className="footer-name"></Typography>

        <a
          href="https://www.credly.com/badges/8cbb0dce-e29b-4545-b45f-810f1ffcc929/public_url"
          target="_blank"
          rel="noreferrer"
        >
          <img src={require("../../img/aws-dev.png")} alt="AWS Developer" />
        </a>
        <a
          href="https://www.credly.com/badges/f32a5613-97c9-4558-a007-ade6545908cd"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={require("../../img/aws-ml.png")}
            alt="AWS Machine Learning"
          />
        </a>
        <a
          href="http://www.credly.com/badges/f6fb3fca-f9c4-4858-9850-fed6243df068"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={require("../../img/aws-ccp.png")}
            alt="AWS Cloud Practitioner"
          />
        </a>
        <a
          href="https://www.credly.com/badges/eb75b466-a638-42a8-92e4-e998733f9666/public_url"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={require("../../img/pfne.png")}
            alt="Programming for Network Engineers"
          />
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
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
