import { Typography } from "@mui/material";
import BasicTimeline from "../Timeline/BasicTimeline";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile container-shadow">
      <div className="profile-name">
        <Typography className="name">Gabor</Typography>
        <Typography className="title">Junior Software Engineer</Typography>
      </div>
      <figure className="profile-image">
        <img src={require("../../img/gabor.png")} alt="" />
      </figure>
      <div className="profile-information">
        <BasicTimeline />
        <br />
        <button>Button</button>
      </div>
    </div>
  );
};

export default Profile;
