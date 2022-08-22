import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import "./BasicTimeline.css";
import { Typography } from "@mui/material";

export default function BasicTimeline({ title, icon, children }) {
  return (
    <Timeline className={"timeline"}>
      {/* Header */}
      <TimelineItem className={"timeline-top"}>
        <TimelineSeparator>
          <TimelineDot className={"timeline-dot-header"}>{icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" className={"timeline-header"}>
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {children}
    </Timeline>
  );
}

export const BasicTimelineSeparator = () => (
  <TimelineSeparator className={"separator-padding"}>
    <TimelineDot className={"timeline-dot"} />
    <TimelineConnector />
  </TimelineSeparator>
);
