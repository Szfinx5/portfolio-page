import { TimelineDot } from "@mui/lab";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Grow,
  Paper,
  Typography,
} from "@mui/material";
import { useState } from "react";
import data from "../../data/data";
import "./Portfolio.css";

const Portfolio = () => {
  const [projectDialog, setProjectDialog] = useState(false);

  // const ProjectDialog = () => (
  //   <Dialog open={projectDialog} onClose={() => setProjectDialog(false)}>
  //     <DialogTitle open={projectDialog} onClose={() => setProjectDialog(false)}>
  //       {projectDialog.title}
  //     </DialogTitle>
  //     <img src="" alt="" />
  //     <DialogContent>{projectDialog.description}</DialogContent>
  //     <DialogActions>
  //       {projectDialog?.links.map((link) => (
  //         <a href={link.link} target="_blank">
  //           {link.icon}
  //         </a>
  //       ))}
  //     </DialogActions>
  //   </Dialog>
  // );
  console.log(data.projects[0].links);
  return (
    <Grid container spacing={1} className="section padding-bottom-45">
      {/* Title */}
      <Grid item className="title-styling margin-bottom-20">
        <span></span>
        <h6 className="title-styling-text">Some of my projects</h6>
      </Grid>

      {/* projects */}
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {data.projects.map((project) => (
            <Grid item xs={8} sm={6} md={6} lg={4}>
              <Grow in timeout={1000}>
                <Card
                  className="custom-card"
                  onClick={() => setProjectDialog(project)}
                >
                  <CardActionArea>
                    <CardMedia
                      className="custom-card-image"
                      image={project.thumbnail}
                      title={project.title}
                    />
                    <CardContent>
                      <Typography
                        variant="body2"
                        className={"custom-card-title"}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="caption"
                        className={"custom-card-caption"}
                      >
                        {project.caption}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grow>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Dialog
        open={projectDialog}
        onClose={() => setProjectDialog(false)}
        className="project-dialog"
      >
        <DialogTitle
          open={projectDialog}
          onClose={() => setProjectDialog(false)}
        >
          {projectDialog.title}
        </DialogTitle>
        <img
          src={projectDialog.image}
          alt=""
          className="project-dialog-image"
        />
        <DialogContent>
          <Typography className="project-dialog-description">
            {projectDialog.description}
          </Typography>
        </DialogContent>
        <DialogActions className="project-dialog-action">
          {projectDialog?.links?.map((link) => (
            <a
              href={link.link}
              target="_blank"
              className="project-dialog-icon"
              rel="noreferrer"
            >
              {link.icon}
            </a>
          ))}
        </DialogActions>
      </Dialog>

      {/* Skills */}
      <Grid container className="section padding-bottom-45 top-60">
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
          {data.skills.map((skill) => (
            <Grid item xs={12} sm={6} md={3}>
              <Paper elevation={0} className="skills">
                <Typography variant="h6" className="skills-title">
                  {skill.title}
                </Typography>
                {skill.description.map((e) => (
                  <Typography variant="body2" className="skills-description">
                    <TimelineDot
                      variant={"outlined"}
                      className={"skills-timeline-dot"}
                    />
                    {e}
                  </Typography>
                ))}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
<Grid container className="section padding-bottom-45"></Grid>;
