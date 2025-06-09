import MainEdu from "./MainEdu";
import "../../Education/Education-global.css";

const { default: SideBar } = require("../Generic-Component/SideBar");

function Education() {
  return (
    <section
      style={{
        display: "flex",
        background: "#121212",
        color: "var(--text-color)",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <SideBar />
      <MainEdu />
    </section>
  );
}

export default Education;
