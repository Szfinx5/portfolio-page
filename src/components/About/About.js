import { Grid, Typography } from "@mui/material";
import data from "../../data/data";
import "./About.css";

const Experience = () => {
  return (
    <div>
      {/* About me */}
      <Grid container className="section padding-bottom-45">
        <Grid item className="title-styling margin-bottom-30">
          <span></span>
          <h6 className="title-styling-text">About me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className="about-me-text">
            {data.about}
          </Typography>
        </Grid>
      </Grid>

      {/* Interests */}
      <Grid container className="section padding-bottom-45 top-60">
        <Grid item className="title-styling">
          <span></span>
          <h6 className="title-styling-text">Interests</h6>
        </Grid>
        <Grid item xs={12}>
          {data.interests.map((interest) => (
            <div>
              <Typography className="interest-name top-20">
                {interest.name}
              </Typography>
              <Typography className="interest-description">
                {interest.description}
              </Typography>
            </div>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Experience;
