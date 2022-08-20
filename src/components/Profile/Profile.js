import { Typography } from "@mui/material";
import BasicTimeline, {
  BasicTimelineSeparator,
} from "../Timeline/BasicTimeline";
import "./Profile.css";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import cvData from "../../data/cvData";
import { TimelineContent, TimelineItem } from "@material-ui/lab";
import CvButton from "../Button/CvButton";
import GetAppIcon from "@mui/icons-material/GetApp";

const BasicTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <BasicTimelineSeparator />
    <TimelineContent className="timeline-content">
      {link ? (
        <Typography className="timelineItem-text">
          <span>{title}: </span>
          <a href={link} target="_blank">
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
console.log(cvData.social.linkedin);

const Profile = () => {
  return (
    <div className="profile container-shadow">
      <div className="profile-name">
        <Typography className="name">{cvData.name}</Typography>
        <Typography className="title">{cvData.title}</Typography>
      </div>

      <figure className="profile-image">
        <img src={require("../../img/gabor.png")} alt="" />
      </figure>

      <div className="profile-information">
        <BasicTimeline icon={<PersonOutlineIcon />}>
          <BasicTimelineItem title="Address" text={cvData.address} />

          <BasicTimelineItem
            title="GitHub"
            text={cvData.social.github.text}
            link={cvData.social.github.link}
          />
          <BasicTimelineItem
            title="LinkedIn"
            text={cvData.social.linkedin.text}
            link={cvData.social.linkedin.link}
          />
          <BasicTimelineItem
            title="Twitter"
            text={cvData.social.twitter.text}
            link={cvData.social.twitter.link}
          />
        </BasicTimeline>
        <div className={"button-container"}>
          <CvButton text={"Download CV"} icon={<GetAppIcon />}></CvButton>
        </div>
      </div>
    </div>
  );
};

export default Profile;
