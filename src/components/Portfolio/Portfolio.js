import { TimelineDot } from "@material-ui/lab";
import { Grid, Paper, Typography } from "@mui/material";
import cvData from "../../data/cvData";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div>
      <Grid item className="title-styling margin-bottom-30">
        <span></span>
        <h6 className="title-styling-text">Some of my projects</h6>
      </Grid>
      <Grid>Here</Grid>
      {/* Skills */}
      <Grid item className="title-styling margin-bottom-30">
        <span></span>
        <h6 className="title-styling-text">
          Technology I used for the projects
        </h6>
      </Grid>
      <Grid
        container
        spacing={3}
        // justify
        className="section padding-bottom-45 grey-background"
      >
        {cvData.skills.map((skill) => (
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={0} className="skills">
              <Typography variant="h6" className="skills-title">
                {skill.title}
              </Typography>
              {skill.description.map((e) => (
                <Typography variant="body2" className="skills-description">
                  <TimelineDot
                    variant={"outlined"}
                    className={"timeline-dot"}
                  />
                  {e}
                </Typography>
              ))}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Portfolio;
