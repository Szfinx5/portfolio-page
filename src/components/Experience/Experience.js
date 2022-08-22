import React from "react";
import { Grid, Typography } from "@mui/material";
import data from "../../data/data";
import WorkIcon from "@mui/icons-material/Work";
import BasicTimeline, {
  BasicTimelineSeparator,
} from "../BasicTimeline/BasicTimeline";

import { TimelineItem } from "@mui/lab";

import TimelineContent from "@mui/lab/TimelineContent";

import "./Experience.css";

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
              {data.work.map((job) => (
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
