import {
  Bookmark,
  Chat,
  Group,
  Help,
  InsertInvitation,
  PlayCircleFilled,
  RssFeed,
  School,
  Work,
} from "@material-ui/icons";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          {/* ----------------- 1 ------------------- */}

          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>

          {/* ----------------- 2 ------------------- */}

          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>

          {/* ----------------- 3 ------------------- */}

          <li className="sidebarListItem">
            <PlayCircleFilled className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>

          {/* ----------------- 4 ------------------- */}

          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>

          {/* ----------------- 5 ------------------- */}

          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>

          {/* ----------------- 6 ------------------- */}

          <li className="sidebarListItem">
            <Help className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>

          {/* ----------------- 7 ------------------- */}

          <li className="sidebarListItem">
            <Work className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>

          {/* ----------------- 8 ------------------- */}

          <li className="sidebarListItem">
            <InsertInvitation className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>

          {/* ----------------- 9 ------------------- */}

          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>

        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />

        <ul className="sidebarFriendList">
          {/* ----------------- 1 ------------------- */}

          <li className="sidebarFriend">
            <img
              src="./assets/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Mobi .J. Alex</span>
          </li>

          {/* ----------------- 2 ------------------- */}

          <li className="sidebarFriend">
            <img
              src="./assets/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Mobi .J. Alex</span>
          </li>

          {/* ----------------- 3 ------------------- */}

          <li className="sidebarFriend">
            <img
              src="./assets/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Mobi .J. Alex</span>
          </li>

          {/* ----------------- 4 ------------------- */}

          <li className="sidebarFriend">
            <img
              src="./assets/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Mobi .J. Alex</span>
          </li>

          {/* ----------------- 5 ------------------- */}

          <li className="sidebarFriend">
            <img
              src="./assets/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Mobi .J. Alex</span>
          </li>

          {/* ----------------- 6 ------------------- */}

          <li className="sidebarFriend">
            <img
              src="./assets/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Mobi .J. Alex</span>
          </li>

          {/* ----------------- 7 ------------------- */}

          <li className="sidebarFriend">
            <img
              src="./assets/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Mobi .J. Alex</span>
          </li>

          {/* ----------------- 8 ------------------- */}

          <li className="sidebarFriend">
            <img
              src="./assets/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Mobi .J. Alex</span>
          </li>

          {/* ----------------- 9 ------------------- */}

          <li className="sidebarFriend">
            <img
              src="./assets/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Mobi .J. Alex</span>
          </li>

          {/* ----------------- 10 ------------------- */}

          <li className="sidebarFriend">
            <img
              src="./assets/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Mobi .J. Alex</span>
          </li>

          {/* ----------------- 11 ------------------- */}

          <li className="sidebarFriend">
            <img
              src="./assets/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Mobi .J. Alex</span>
          </li>

          {/* ----------------- 12 ------------------- */}

          <li className="sidebarFriend">
            <img
              src="./assets/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Mobi .J. Alex</span>
          </li>

          {/* ----------------- 13 ------------------- */}

          <li className="sidebarFriend">
            <img
              src="./assets/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Mobi .J. Alex</span>
          </li>

          {/* ----------------- 14 ------------------- */}

          <li className="sidebarFriend">
            <img
              src="./assets/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Mobi .J. Alex</span>
          </li>

          {/* ----------------- 15 ------------------- */}

          <li className="sidebarFriend">
            <img
              src="./assets/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Mobi .J. Alex</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
