import "./rightbar.css";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="./assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pola Foster</b> & <b>3 other Friends</b> have Birthday Today
          </span>
        </div>
        <img src="./assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {/* -------------------------- 1 ------------------------ */}

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="./assets/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Gowri Krishna</span>
          </li>

          {/* -------------------------- 2 ------------------------ */}

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="./assets/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Gowri Krishna</span>
          </li>

          {/* -------------------------- 3 ------------------------ */}

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="./assets/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Gowri Krishna</span>
          </li>

          {/* -------------------------- 4 ------------------------ */}

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="./assets/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Gowri Krishna</span>
          </li>

          {/* -------------------------- 5 ------------------------ */}

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="./assets/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Gowri Krishna</span>
          </li>

          {/* -------------------------- 6 ------------------------ */}

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="./assets/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Gowri Krishna</span>
          </li>

          {/* -------------------------- 7 ------------------------ */}

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="./assets/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Gowri Krishna</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
