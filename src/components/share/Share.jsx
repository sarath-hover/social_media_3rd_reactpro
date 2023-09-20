import { EmojiEmotions, Label, PermMedia, Room } from "@material-ui/icons";
import "./share.css";

export default function Share() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src={`${PF}person/1.jpeg`} alt="" className="shareProfileImg" />
          <input
            placeholder="What's in your mind Reethu Anil?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            {/* -------------------- 1 --------------------- */}

            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>

            {/* -------------------- 2 --------------------- */}

            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>

            {/* -------------------- 3 --------------------- */}

            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>

            {/* -------------------- 4 --------------------- */}

            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
