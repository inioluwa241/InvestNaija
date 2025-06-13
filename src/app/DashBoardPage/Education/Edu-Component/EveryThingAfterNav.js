import Advanced from "./Advanced";
import Beginner from "./Beginner";
import EduHero from "./EduHero";
import Intermediate from "./Intermediate";
function EveryThingAfterNav() {
  return (
    <div
      style={{
        padding: "1rem 2rem",
        overflow: "scroll",
        height: "calc(100vh - 6rem)",
      }}
    >
      <EduHero />
      <Beginner />
      <Intermediate />
      <Advanced />
    </div>
  );
}

export default EveryThingAfterNav;
