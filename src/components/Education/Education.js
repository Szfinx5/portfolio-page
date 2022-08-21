import { Grid, Typography } from "@mui/material";
import cvData from "../../data/cvData";
import "./Education.css";
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
import "./Education.css";
import ApprovalIcon from "@mui/icons-material/Approval";

const Education = () => {
  return (
    <div>
      {/* About me */}
      <Grid container className="section padding-bottom-45">
        <Grid item className="title-styling margin-bottom-30">
          <span></span>
          <h6 className="title-styling-text">Education</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container>
            {/* Schools */}
            <Grid item sm={12} md={6}>
              <BasicTimeline title="Schools" icon={<SchoolIcon />}>
                {cvData.schools.map((school) => (
                  <TimelineItem>
                    <BasicTimelineSeparator />
                    <TimelineContent>
                      <Typography className="timeline-name">
                        {school.name}
                      </Typography>
                      <Typography variant="caption" className="timeline-date">
                        {school.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline-description"
                      >
                        {school.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </BasicTimeline>
            </Grid>
            {/* Certifications */}
            <Grid item sm={12} md={6}>
              <BasicTimeline title="Certifications" icon={<ApprovalIcon />}>
                {cvData.certifications.map((certification) => (
                  <TimelineItem>
                    <BasicTimelineSeparator />
                    <TimelineContent>
                      <Typography className="timeline-name">
                        {certification.name}
                      </Typography>
                      <Typography variant="caption" className="timeline-date">
                        {certification.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline-description"
                      >
                        {certification.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </BasicTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Skills */}
      <Grid container className="section padding-bottom-45"></Grid>

      {/* Interests */}
      <Grid container className="section padding-bottom-45"></Grid>
    </div>
  );
};

export default Education;
