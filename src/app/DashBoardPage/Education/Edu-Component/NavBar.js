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
    <nav style={{padding:"1rem"}} className="flex items-center justify-between ">
      <div style={{padding:"1.5rem 1rem"}} className="flex items-center justify-between gap-2">
        <FontAwesomeIcon icon={faArrowLeft} style={{ width: "1rem" }} />
        <input 
          placeholder="Search courses, articles, tutorials"
          className="bg-gray-700 flex items-center w-125 rounded-4xl "
          style={{padding:".5rem 0.75rem"}}
        />
        {/* <div>
          <FontAwesomeIcon icon={faSearch} style={{ width: "1rem" }} />
          <p>Search courses,articles,tutorial</p>
        </div> */}
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
