import SideBar from "../../Generic-Component/SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const DashboardApp = () => {
    const newsItems = [
        { id: 1, title: "Market Update: Stocks Rally on Tech Earnings", source: "Finance News", time: "2h ago" },
        { id: 2, title: "New Investment Opportunities in Green Energy", source: "Market Watch", time: "4h ago" },
        { id: 3, title: "Economic Forecast 2024: Global Markets", source: "Business Daily", time: "6h ago" },
        { id: 4, title: "Cryptocurrency Market Shows Strong Recovery", source: "Crypto News", time: "8h ago" },
        { id: 5, title: "Real Estate Market Trends Q1 2024", source: "Property Weekly", time: "12h ago" },
        { id: 6, title: "Banking Sector Performance Analysis", source: "Financial Times", time: "1d ago" },
        { id: 7, title: "Emerging Markets: Growth Opportunities", source: "Global Markets", time: "1d ago" },
        { id: 8, title: "Tech Stocks: Q1 Earnings Report", source: "Tech Insider", time: "2d ago" }
    ];

    return (
     <section style={{padding:".75rem"}} className="flex gap-2 w-full min-h-screen bg-neutral-800">
        <SideBar/>
        <div style={{padding:"1rem"}} className="flex flex-col w-full bg-[#1a1a1a] text-white rounded-lg border-[#1a1a1a] min-h-screen shadow-lg border-r border-light">
            <div className="flex items-center justify-between gap-4 w-full">
                <div className="flex flex-col gap-1.5">
                    <h1 className="text-3xl font-bold">Dashboard</h1>
                    <p>Welcome back, <span className="font-bold text-xl">Inioluwa</span>👋</p>
                </div>
                <div className="flex items-center gap-1.5">
                    <FontAwesomeIcon className="text-gray-600" style={{width:"25px", height:"25px"}} icon={faMagnifyingGlass}/>
                    <input
                    style={{padding:"1rem 1rem", marginLeft:"0.5rem"}} 
                    className="w-125 h-10 bg-gray-600 rounded-4xl text-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-colors !rounded-button"
                    placeholder="Search"
                    />
                </div>
                <div className="flex items-center gap-2.5">
                    <div style={{padding:"0.5rem 1rem"}} className="flex items-center gap-1.5 bg-gray-600 rounded-lg">
                        <img
                        style={{width:"30px", height:"30px"}}
                        src="/images/sparkles.png"
                        />
                        Free Plan</div>
                    <FontAwesomeIcon style={{width:"25px", height:"25px"}} icon={faBell}/>
                </div>
            </div>
            <div style={{marginBlock:"1.5rem"}} className="flex justify-between items-center gap-1.5 w-full">
                <div style={{padding:"1.5rem"}} className="flex justify-between w-100 h-45 bg-gray-700 rounded-xl">
                    <div className= "flex flex-col gap-3 items-start justify-start">
                        <h1 className="text-2xl font-bold">Total Revenue</h1>
                        <h2 className="text-xl font-bold">$40,675.96</h2>
                        <p className="text-sm font-bold ">6% Increase Rate</p>
                    </div>
                    <div className= "flex flex-col gap-3 items-start justify-start">
                        <h1 className="text-2xl font-bold">Bounce Rate</h1>
                        <h2 className="text-xl font-bold">86.54%</h2>
                        <p className="text-sm font-bold ">32% Increase Rate</p>
                    </div>
                </div>
                <div style={{padding:"1.5rem"}} className="flex justify-between w-150 h-45 bg-gray-700 rounded-xl">
                    <div className= "flex flex-col gap-3 items-start justify-start">
                        <h1 className="text-xl font-bold">Total Revenue</h1>
                        <h2 className="text-lg font-bold">$40,675.96</h2>
                        <p className="text-sm font-bold ">6% Increase Rate</p>
                    </div>
                    <div className= "flex flex-col gap-3 items-start justify-start">
                        <h1 className="text-xl font-bold">Bounce Rate</h1>
                        <h2 className="text-lg font-bold">86.54%</h2>
                        <p className="text-sm font-bold ">32% Increase Rate</p>
                    </div>
                    <div className= "flex flex-col gap-3 items-start justify-start">
                        <h1 className="text-xl font-bold">Total Revenue</h1>
                        <h2 className="text-lg font-bold">$40,675.96</h2>
                        <p className="text-sm font-bold ">6% Increase Rate</p>
                    </div>
                    <div className= "flex flex-col gap-3 items-start justify-start">
                        <h1 className="text=xl font-bold">Bounce Rate</h1>
                        <h2 className="text-lg font-bold">86.54%</h2>
                        <p className="text-sm font-bold ">32% Increase Rate</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div  className="flex items-center justify-between w-full">
                    <div>
                        <h2 className="text-2xl font-bold">Statistics</h2>
                        <p className="text-gray-500">Total earnings for the last 30 days</p>
                    </div>
                        <button style={{padding:"0.5rem 1.5rem"}}  className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-[var(--primary)] transition-colors">30 Days</button>
                </div>
                    <img
                    style={{width:"100%", height:"auto", marginBlock:"1rem"}}
                    src="/images/graph.jpg"
                    />
            </div>
            <div style={{padding:"1.5rem 0"}}  className="flex flex-col gap-2 col-span-2 bg-[#1a1a1a] rounded-lg shadow-sm text-gray-300">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Market News</h2>
            <button className="text-sm text-indigo-600 hover:text-indigo-800 cursor-pointer whitespace-nowrap !rounded-button">
              View All
            </button>
          </div>
          
          <div style={{padding:"1rem 0" }} className="flex flex-col gap-2 space-y-4 overflow-y-auto">
            {newsItems.map((news) => (
              <div style={{padding:".5rem 0.25rem"}} key={news.id} className="border-b border-gray-100 pb-3 last:border-0 cursor-pointer hover:bg-gray-700 p-2 rounded">
                <h3 className="font-medium text-sm">{news.title}</h3>
                <div style={{padding:".35rem 0"}} className="flex justify-between mt-1">
                  <span className="text-xs text-gray-500">{news.source}</span>
                  <span className="text-xs text-gray-500">{news.time}</span>
                </div>
              </div>
            ))}
          </div>
          </div>
     </div>
   
    </section>)};

export default DashboardApp;
