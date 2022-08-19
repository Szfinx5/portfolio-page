import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const cvData = {
  name: "Gabor Havasi",
  title: "Junior Software Engineer",
  address: "Derby, East Midlands",

  social: {
    github: {
      link: "https://github.com/Szfinx5",
      text: "Szfinx5",
      icon: <GitHubIcon />,
    },
    linkedin: {
      link: "https://www.linkedin.com/in/gabor-havasi-derby/",
      text: "gabor-havasi-derby",
      icon: <LinkedInIcon />,
    },
    twitter: {
      link: "https://twitter.com/szfinx5",
      text: "Szfinx5",
      icon: <TwitterIcon />,
    },
  },
};

export default cvData;
