import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faSearch,
  faBell,
  faBookmark,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import "../MainEduPage/Education-global.css";
import classes from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={classes.nav}>
      <div className={classes.first_child_container}>
        <FontAwesomeIcon icon={faArrowLeft} style={{ width: "1rem" }} />

        <div>
          <FontAwesomeIcon icon={faSearch} style={{ width: "1rem" }} />

          <p>Search courses,articles,tutorial</p>
        </div>
      </div>

      <div className={classes.second_child_container}>
        <div className={classes.latter_icon_cont}>
          <FontAwesomeIcon icon={faBell} style={{ width: "1rem" }} />
          <FontAwesomeIcon icon={faBookmark} style={{ width: "1rem" }} />
          <FontAwesomeIcon icon={faCircleQuestion} style={{ width: "1rem" }} />
        </div>
        <div className={classes.learning_process}>learning path</div>
      </div>
    </nav>
  );
}

export default NavBar;
