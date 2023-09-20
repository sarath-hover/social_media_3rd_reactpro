import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="./assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pola Foster</b> & <b>3 other Friends</b> have Birthday Today
          </span>
        </div>
        <img src="./assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          {/* ======================== 1 ========================== */}

          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Trivandrum</span>
          </div>

          {/* ======================== 2 ========================== */}

          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Medical Collage</span>
          </div>

          {/* ======================== 3 ========================== */}

          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          {/* ========================= 1 ============================ */}

          <div className="rightbarFollowing">
            <img
              src={`${PF}person/2.jpeg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Mobi .J. Alex</span>
          </div>

          {/* ========================= 2 ============================ */}

          <div className="rightbarFollowing">
            <img
              src={`${PF}person/3.jpeg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Gowri Krishna</span>
          </div>

          {/* ========================= 3 ============================ */}

          <div className="rightbarFollowing">
            <img
              src={`${PF}person/4.jpeg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Christeena Paul</span>
          </div>

          {/* ========================= 4 ============================ */}

          <div className="rightbarFollowing">
            <img
              src={`${PF}person/5.jpeg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Amitha</span>
          </div>

          {/* ========================= 5 ============================ */}

          <div className="rightbarFollowing">
            <img
              src={`${PF}person/6.jpeg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Arya D.</span>
          </div>

          {/* ========================= 6 ============================ */}

          <div className="rightbarFollowing">
            <img
              src={`${PF}person/8.jpeg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Dhanya .R. Rajan</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
