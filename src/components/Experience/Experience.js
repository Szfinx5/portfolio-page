import React from "react";
import { Grid, Typography } from "@mui/material";
import cvData from "../../data/cvData";
import WorkIcon from "@mui/icons-material/Work";
import BasicTimeline, {
  BasicTimelineSeparator,
  BasicTimelineItem,
} from "../Timeline/BasicTimeline";
import SchoolIcon from "@mui/icons-material/School";
import { TimelineItem } from "@material-ui/lab";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import "./Experience.css";
import ApprovalIcon from "@mui/icons-material/Approval";

export default function Experience() {
  return (
    <div>
      <Grid container className="section padding-bottom-45">
        <Grid item className="title-styling margin-bottom-30">
          <span></span>
          <h6 className="title-styling-text">Work experiences</h6>
        </Grid>

        <Grid item xs={12}>
          {/* Schools */}
          <Grid item sm={12} md={12}>
            <BasicTimeline title="Work experiences" icon={<WorkIcon />}>
              {cvData.work.map((job) => (
                <TimelineItem>
                  <BasicTimelineSeparator />
                  <TimelineContent>
                    <Typography className="timeline-name">
                      {job.title}
                    </Typography>
                    <Typography variant="caption" className="timeline-date">
                      {job.name}
                    </Typography>
                    <br />
                    <Typography variant="caption" className="timeline-date">
                      {job.date}
                    </Typography>

                    {job.description.map((e) => (
                      <Typography
                        variant="body2"
                        className="timeline-description"
                      >
                        - {e}
                      </Typography>
                    ))}
                  </TimelineContent>
                </TimelineItem>
              ))}
            </BasicTimeline>
          </Grid>
        </Grid>
      </Grid>

      {/* Skills */}
      <Grid container className="section padding-bottom-45"></Grid>

      {/* Interests */}
      <Grid container className="section padding-bottom-45"></Grid>
    </div>
  );
}
