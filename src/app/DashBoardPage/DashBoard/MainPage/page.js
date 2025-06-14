import SideBar from "../../Generic-Component/SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const DashboardApp = () => {
  return (
    <section
      style={{ padding: ".75rem", height: "100vh", overflow: "hidden" }}
      className="flex gap-2 w-full min-h-screen bg-neutral-800"
    >
      <SideBar />
      <div
        style={{ padding: "1rem" }}
        className="flex flex-col w-full bg-[#1a1a1a] text-white rounded-lg border-[#1a1a1a] min-h-screen shadow-lg border-r border-light"
      >
        <div className="flex items-center justify-between gap-4 w-full">
          <div className="flex flex-col gap-1.5">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p>
              Welcome back, <span className="font-bold text-xl">Inioluwa</span>
              👋
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <FontAwesomeIcon
              className="text-gray-600"
              style={{ width: "25px", height: "25px" }}
              icon={faMagnifyingGlass}
            />
            <input
              style={{ padding: "1rem 1rem", marginLeft: "0.5rem" }}
              className="w-125 h-10 bg-gray-600 rounded-4xl text-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-colors !rounded-button"
              placeholder="Search"
            />
          </div>
          <div className="flex items-center gap-2.5">
            <div
              style={{ padding: "0.5rem 1rem" }}
              className="flex items-center gap-1.5 bg-gray-600 rounded-lg"
            >
              <img
                style={{ width: "30px", height: "30px" }}
                src="/images/sparkles.png"
              />
              Free Plan
            </div>
            <FontAwesomeIcon
              style={{ width: "25px", height: "25px" }}
              icon={faBell}
            />
          </div>
        </div>
        <div
          style={{ marginBlock: "1.5rem" }}
          className="flex justify-between items-center gap-1.5 w-full"
        >
          <div className="w-100 h-45 bg-gray-600 rounded-xl"></div>
          <div className="w-150 h-45 bg-gray-600 rounded-xl"></div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between w-full">
            <div>
              <h2 className="text-2xl font-bold">Statistics</h2>
              <p className="text-gray-500">
                Total earnings for the last 30 days
              </p>
            </div>
            <button
              style={{ padding: "0.5rem 1.5rem" }}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-[var(--primary)] transition-colors"
            >
              30 Days
            </button>
          </div>
          <img
            style={{ width: "100%", height: "auto", marginBlock: "1rem" }}
            src="/images/graph.jpg"
          />
        </div>
        <div
          style={{ marginBlock: "1.5rem" }}
          className="flex justify-between items-center gap-1.5 w-full"
        >
          <div className="w-100 h-60 bg-gray-600 rounded-xl"></div>
          <div className="w-150 h-60 bg-gray-600 rounded-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default DashboardApp;
