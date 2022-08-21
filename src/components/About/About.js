import { Grid, Typography } from "@mui/material";
import cvData from "../../data/cvData";
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
            {cvData.about}
          </Typography>
        </Grid>
      </Grid>

      {/* Skills */}
      <Grid container className="section padding-bottom-45"></Grid>

      {/* Interests */}
      <Grid container className="section padding-bottom-45 top-60">
        <Grid item className="title-styling">
          <span></span>
          <h6 className="title-styling-text">Interests</h6>
        </Grid>
        <Grid item xs={12}>
          {cvData.interests.map((interest) => (
            <div>
              <Typography className="interest-name top-30">
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
