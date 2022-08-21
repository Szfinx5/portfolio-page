import { Typography } from "@mui/material";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <Typography className="footer-name"></Typography>
      </div>
      <div className="footer-right">
        <Typography className="footer-copyright">
          Developed by{" "}
          <a
            href="https://www.linkedin.com/in/gabor-havasi-derby/"
            target="_blank"
          >
            Gabor Havasi
          </a>
          <br />
          Based on{" "}
          <a href="https://www.youtube.com/c/SalmanFazal01" target="_blank">
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
