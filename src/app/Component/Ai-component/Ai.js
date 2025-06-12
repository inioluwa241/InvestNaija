import Ai from "@/app/Ai/page";
import Header from "./Header";
import AiMain from "./AiMain";
import SideBar from "../Generic-Component/SideBar";

function AiCompo() {
  return (
    <section style={{ display: "flex" }}>
      <SideBar />
      <div>
        <Header />
        <AiMain />
      </div>
    </section>
  );
}

export default AiCompo;
