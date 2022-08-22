import { Typography } from "@mui/material";
import BasicTimeline, {
  BasicTimelineSeparator,
} from "../BasicTimeline/BasicTimeline";
import "./Profile.css";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import data from "../../data/data";
import { TimelineContent, TimelineItem } from "@mui/lab";
import CustomButton from "../Button/Button";
import GetAppIcon from "@mui/icons-material/GetApp";

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
console.log(data.social.linkedin);

const Profile = () => {
  return (
    <div className="profile container-shadow">
      <div className="profile-name">
        <Typography className="name">{data.name}</Typography>
        <Typography className="title">{data.title}</Typography>
      </div>

      <figure className="profile-image">
        <img src={require("../../img/gabor.png")} alt="" />
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
          {/* <BasicTimelineItem
            title="Skype"
            text={cvData.social.skype.text}
            link={cvData.social.skype.link}
          /> */}
        </BasicTimeline>
        <div className={"button-container"}>
          <CustomButton
            text={"Download CV"}
            icon={<GetAppIcon />}
          ></CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Profile;
