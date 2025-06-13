import EveryThingAfterNav from "./EveryThingAfterNav";
import NavBar from "./NavBar";

function MainEdu() {
  return (
    <section
      style={{ flex: "1", flexDirection: "column", position: "relative" }}
    >
      <NavBar />
      <EveryThingAfterNav />
    </section>
  );
}

export default MainEdu;
