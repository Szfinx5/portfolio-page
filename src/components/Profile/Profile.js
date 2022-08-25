import { Typography } from "@mui/material";
import "./Profile.css";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import data from "../../data/data";
import { TimelineContent, TimelineItem } from "@mui/lab";
import CustomButton from "../Button/Button";
import GetAppIcon from "@mui/icons-material/GetApp";
import Timeline from "@mui/lab/Timeline";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import cv from "../../data/Gabor-Havasi.pdf";

const BasicTimeline = ({ title, icon, children }) => {
  return (
    <Timeline className={"profile-timeline"}>
      {/* Header */}
      <TimelineItem className={"timeline-top"}>
        <TimelineSeparator>
          {/* <TimelineDot className={"profile-dot-header"}>{icon}</TimelineDot> */}
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
};

const BasicTimelineSeparator = () => (
  <TimelineSeparator className={"separator-padding"}>
    <TimelineDot className={"profile-dot"} />
    <TimelineConnector />
  </TimelineSeparator>
);

const BasicTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <BasicTimelineSeparator />
    <TimelineContent className="timeline-content">
      {link ? (
        <Typography className="timelineItem-text">
          <span>{title}: </span>
          <a href={link} target="_blank" rel="noreferrer">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem-text">
          <span>{title}: </span>
          {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  return (
    <div className="profile container-shadow">
      <div className="profile-name">
        <Typography className="name">{data.name}</Typography>
        <Typography className="title">{data.title}</Typography>
      </div>

      <figure className="profile-image">
        <img src={require("../../img/gabor-bw.png")} alt="" />
      </figure>

      <div className="profile-information">
        <BasicTimeline icon={<PersonOutlineIcon />}>
          <BasicTimelineItem title="Address" text={data.address} />

          <BasicTimelineItem
            title="GitHub"
            text={data.social.github.text}
            link={data.social.github.link}
          />
          <BasicTimelineItem
            title="LinkedIn"
            text={data.social.linkedin.text}
            link={data.social.linkedin.link}
          />
          <BasicTimelineItem
            title="Twitter"
            text={data.social.twitter.text}
            link={data.social.twitter.link}
          />
          <BasicTimelineItem
            title="Skype"
            text={data.social.skype.text}
            link={data.social.skype.link}
          />
        </BasicTimeline>
        <div className={"button-container"}>
          <a href={cv} download={"gabor-havasi-cv"}>
            <CustomButton
              text={"Download CV"}
              icon={<GetAppIcon />}
            ></CustomButton>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
