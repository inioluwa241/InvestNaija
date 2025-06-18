"use client";

import SideBar from "../../Generic-Component/SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faMagnifyingGlass,
  faChartLine,
  faDrawPolygon,
  faExpandAlt,
} from "@fortawesome/free-solid-svg-icons";
import * as echarts from "echarts";
import React, { useState, useEffect } from "react";

const DashboardApp = () => {
  const newsItems = [
    {
      id: 1,
      title: "New Investment Opportunities in Green Energy",
      source: "Market Watch",
      time: "4h ago",
    },
    {
      id: 2,
      title: "Economic Forecast 2024: Global Markets",
      source: "Business Daily",
      time: "6h ago",
    },
    {
      id: 3,
      title: "Cryptocurrency Market Shows Strong Recovery",
      source: "Crypto News",
      time: "8h ago",
    },
    {
      id: 4,
      title: "Real Estate Market Trends Q1 2024",
      source: "Property Weekly",
      time: "12h ago",
    },
    {
      id: 5,
      title: "Emerging Markets: Growth Opportunities",
      source: "Global Markets",
      time: "1d ago",
    },
    {
      id: 6,
      title: "Tech Stocks: Q1 Earnings Report",
      source: "Tech Insider",
      time: "2d ago",
    },
  ];

  const [activeTab, setActiveTab] = useState("buy");
  const [quantity, setQuantity] = useState("1");
  const [orderType, setOrderType] = useState("market");
  const [stockSymbol, setStockSymbol] = useState("OND");
  const [timeframe, setTimeframe] = useState("1D");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const accountBalance = 25000.75;
  const stockPrice = 178.42;
  const priceChange = 3.28;
  const priceChangePercent = 1.87;

  const portfolioStocks = [
    {
      symbol: "CON",
      name: "CONOIL",
      shares: 10,
      avgPrice: 165.32,
      currentPrice: 178.42,
      change: 7.92,
    },
    {
      symbol: "ZNT",
      name: "Zenith Bank",
      shares: 5,
      avgPrice: 320.45,
      currentPrice: 338.11,
      change: 5.51,
    },
    {
      symbol: "AFR",
      name: "Afromedia",
      shares: 3,
      avgPrice: 132.18,
      currentPrice: 129.82,
      change: -1.79,
    },
    {
      symbol: "MTN",
      name: "MTN",
      shares: 8,
      avgPrice: 142.56,
      currentPrice: 149.84,
      change: 5.11,
    },
    {
      symbol: "MAY",
      name: "Maybaker",
      shares: 12,
      avgPrice: 218.76,
      currentPrice: 201.43,
      change: -7.92,
    },
  ];

  const watchlistStocks = [
    { symbol: "NES", price: 178.42, change: 1.87 },
    { symbol: "TOTAL", price: 338.11, change: 0.92 },
    { symbol: "WAPCO", price: 129.82, change: -0.45 },
    { symbol: "MTN", price: 149.84, change: 1.23 },
    { symbol: "CON", price: 201.43, change: -2.15 },
    { symbol: "META", price: 312.75, change: 0.78 },
    { symbol: "GTB", price: 432.89, change: 3.42 },
  ];

  const marketItems = [
    {
      id: 1,
      symbol: "GTB",
      name: "Guaranteed Trust Bank",
      price: "182.63",
      change: "+1.25%",
      volume: "62.5M",
    },
    {
      id: 2,
      symbol: "ZNT",
      name: "Zenith Bank",
      price: "375.79",
      change: "+0.89%",
      volume: "23.1M",
    },
    {
      id: 3,
      symbol: "MTN",
      name: "MTN",
      price: "142.65",
      change: "-0.45%",
      volume: "18.7M",
    },
    {
      id: 4,
      symbol: "AFR",
      name: "Afromedia",
      price: "155.34",
      change: "+2.11%",
      volume: "35.2M",
    },
    {
      id: 5,
      symbol: "CON",
      name: "CONOIL",
      price: "238.45",
      change: "-1.23%",
      volume: "42.8M",
    },
    {
      id: 6,
      symbol: "META",
      name: "Meta Platforms",
      price: "378.53",
      change: "+1.67%",
      volume: "19.3M",
    },
  ];

  //Initialise charts
  useEffect(() => {
    const chartDom = document.getElementById("main-chart");
    if (chartDom) {
      const myChart = echarts.init(chartDom);

      // Generate some random data
      const baseValue = 178;
      const data = [];
      const now = new Date();
      const oneDay = 24 * 3600 * 1000;

      for (let i = 0; i < 60; i++) {
        const time = new Date(now.getTime() - (60 - i) * oneDay);
        data.push([
          [time.getFullYear(), time.getMonth() + 1, time.getDate()].join("/"),
          Math.round((baseValue + Math.random() * 20 - 10 + i * 0.2) * 100) /
            100,
        ]);
      }

      const option = {
        animation: false,
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: data.map((item) => item[0]),
        },
        yAxis: {
          type: "value",
          scale: true,
          splitLine: {
            lineStyle: {
              color: "#f0f0f0",
            },
          },
        },
        series: [
          {
            name: "AAPL",
            type: "line",
            data: data.map((item) => item[1]),
            smooth: true,
            showSymbol: false,
            lineStyle: {
              width: 3,
              color: "#10b981",
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(16, 185, 129, 0.3)",
                },
                {
                  offset: 1,
                  color: "rgba(16, 185, 129, 0.05)",
                },
              ]),
            },
          },
        ],
      };

      myChart.setOption(option);

      const handleResize = () => {
        myChart.resize();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        myChart.dispose();
      };
    }
  }, []);

  // Mini sparkline charts for portfolio
  useEffect(() => {
    portfolioStocks.forEach((stock) => {
      const chartDom = document.getElementById(`sparkline-${stock.symbol}`);
      if (chartDom) {
        const sparkline = echarts.init(chartDom);

        // Generate random data for sparkline
        const data = [];
        for (let i = 0; i < 20; i++) {
          data.push(
            stock.avgPrice *
              (1 +
                (Math.random() * 0.1 - 0.05) +
                i * 0.002 * (stock.change > 0 ? 1 : -1))
          );
        }

        const option = {
          animation: false,
          grid: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
          xAxis: {
            type: "category",
            show: false,
          },
          yAxis: {
            type: "value",
            show: false,
            scale: true,
          },
          series: [
            {
              type: "line",
              data: data,
              showSymbol: false,
              lineStyle: {
                width: 1.5,
                color: stock.change >= 0 ? "#10b981" : "#ef4444",
              },
            },
          ],
        };

        sparkline.setOption(option);

        return () => {
          sparkline.dispose();
        };
      }
    });
  }, []);
  return (
    <section
      style={{ padding: ".75rem", height: "100vh", overflow: "hidden" }}
      className="flex gap-2 min-h-screen bg-neutral-800 overflow-hidden"
    >
      <SideBar />
      <div
        style={{ padding: "1rem", overflow: "scroll" }}
        className="flex flex-col w-full bg-[#1a1a1a] text-white rounded-lg border-[#1a1a1a] min-h-screen shadow-lg border-r border-light gap-8"
      >
        <div className="flex items-center justify-between gap-4 w-full">
          <div className="flex flex-col gap-1.5">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p>
              Welcome back, <span className="font-bold text-xl">Inioluwa</span>
              👋
            </p>
            <p style={{ fontSize: 10 }} className=" text-gray-300">
              Wallet ID: BBB25-FA597-34C76-DBE98-BFC-59
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <FontAwesomeIcon
              className="text-gray-600"
              style={{ width: "20px", height: "20px" }}
              icon={faMagnifyingGlass}
            />
            <input
              style={{ padding: "1rem .5rem", marginLeft: "0.5rem" }}
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
          <div
            style={{ padding: "1rem", width: "250px", height: "160px" }}
            className="bg-neutral-800 border border-gray-300 rounded-2xl "
          >
            <p className="text-sm text-gray-600">Available Balance</p>
            <div
              style={{ paddingBlock: "10px" }}
              className="flex items-center gap-2 rounded-xl"
            >
              <h1 className="text-3xl font-bold">₦30,000.00</h1>
              <span
                style={{ padding: "5px" }}
                className="bg-emerald-300 opacity-40 rounded-lg text-white"
              >
                +0.00%
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-start justify-start gap-0.5">
                <h5 className="text-gray-500 sm">Estimate fee</h5>
                <span className="text-white font-bold text-md">₦0</span>
              </div>
              <div className="flex flex-col items-start justify-start gap-0.5">
                <h5 className="text-gray-500 sm">Spread</h5>
                <span className="text-white font-bold text-md">0%</span>
              </div>
            </div>
          </div>
          <div
            style={{ padding: "1rem", width: "250px", height: "160px" }}
            className="bg-neutral-800 border border-gray-300 rounded-2xl "
          >
            <p className="text-sm text-gray-600">Total Revenue</p>
            <div
              style={{ paddingBlock: "10px" }}
              className="flex items-center gap-2 rounded-xl"
            >
              <h1 className="text-3xl font-bold">₦0</h1>
              <span
                style={{ padding: "5px" }}
                className="bg-emerald-300 opacity-40 rounded-lg text-white"
              >
                +0.00%
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-start justify-start gap-0.5">
                <h5 className="text-gray-500 sm">Estimate fee</h5>
                <span className="text-white font-bold text-md">₦0</span>
              </div>
              <div className="flex flex-col items-start justify-start gap-0.5">
                <h5 className="text-gray-500 sm">Spread</h5>
                <span className="text-white font-bold text-md">0%</span>
              </div>
            </div>
          </div>
          <div
            style={{ padding: "1rem", width: "250px", height: "160px" }}
            className="bg-neutral-800 border border-gray-300 rounded-2xl "
          >
            <p className="text-sm text-gray-600">Total Deposit</p>
            <div
              style={{ paddingBlock: "10px" }}
              className="flex items-center gap-2 rounded-xl"
            >
              <h1 className="text-3xl font-bold">₦30,000.00</h1>
              <span
                style={{ padding: "5px" }}
                className="bg-emerald-300 opacity-40 rounded-lg text-white"
              >
                +0.00%
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-start justify-start gap-0.5">
                <h5 className="text-gray-500 sm">Estimate fee</h5>
                <span className="text-white font-bold text-md">₦0</span>
              </div>
              <div className="flex flex-col items-start justify-start gap-0.5">
                <h5 className="text-gray-500 sm">Spread</h5>
                <span className="text-white font-bold text-md">0%</span>
              </div>
            </div>
          </div>
          <div
            style={{ padding: "1rem", width: "250px", height: "160px" }}
            className="bg-neutral-800 border border-gray-300 rounded-2xl "
          >
            <p className="text-sm text-gray-600">Total Withdrawals</p>
            <div
              style={{ paddingBlock: "10px" }}
              className="flex items-center gap-2 rounded-xl"
            >
              <h1 className="text-3xl font-bold">₦0</h1>
              <span
                style={{ padding: "5px" }}
                className="bg-emerald-300 opacity-40 rounded-lg text-white"
              >
                +0.00%
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-start justify-start gap-0.5">
                <h5 className="text-gray-500 sm">Estimate fee</h5>
                <span className="text-white font-bold text-md">₦0</span>
              </div>
              <div className="flex flex-col items-start justify-start gap-0.5">
                <h5 className="text-gray-500 sm">Spread</h5>
                <span className="text-white font-bold text-md">0%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between w-full">
            <div>
              <h2 className="text-2xl font-bold">Statistics</h2>
              <p className="text-gray-500">
                Total earnings for the last 30 days
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                style={{ padding: "0.5rem 1.5rem" }}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-[var(--primary)] transition-colors opacity-25"
              >
                1 H
              </button>
              <button
                style={{ padding: "0.5rem 1.5rem" }}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-[var(--primary)] transition-colors opacity-25"
              >
                24 H
              </button>
              <button
                style={{ padding: "0.5rem 1.5rem" }}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-[var(--primary)] transition-colors opacity-25"
              >
                1 W
              </button>
              <button
                style={{ padding: "0.5rem 1.5rem" }}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-[var(--primary)] transition-colors"
              >
                1 M
              </button>
            </div>
          </div>
          <div
            style={{ padding: "1.5rem 1rem" }}
            className="flex flex-col gap-4 col-span-3 bg-[#1a1a1a] rounded-lg shadow-sm p-4"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex flex-col gap-0.5 items-start">
                <div className="flex items-center gap-1">
                  <h2 className="text-3xl font-bold">{stockSymbol}</h2>
                  <span className="ml-2 text-gray-600 text-sm">OANDO</span>
                </div>
                <div className="flex gap-1 items-center mt-1">
                  <span className="text-lg font-semibold">${stockPrice}</span>
                  <span
                    className={`ml-2 text-sm ${
                      priceChange >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {priceChange >= 0 ? "+" : ""}
                    {priceChange.toFixed(2)} ({priceChangePercent.toFixed(2)}%)
                  </span>
                </div>
              </div>

              <div className="flex gap-1 space-x-1">
                {["1D", "1W", "1M", "3M", "1Y", "All"].map((tf) => (
                  <button
                    key={tf}
                    style={{ padding: "5px" }}
                    className={`px-3 py-1 text-sm rounded-lg !rounded-button whitespace-nowrap ${
                      timeframe === tf
                        ? "bg-indigo-100 text-indigo-700"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                    onClick={() => setTimeframe(tf)}
                  >
                    {tf}
                  </button>
                ))}
              </div>
            </div>

            <div
              id="main-chart"
              style={{ width: "100%", height: "320px" }}
            ></div>

            <div className="flex justify-between  ">
              <div className="flex items-center gap-4 space-x-3">
                <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-[var(--primary)] cursor-pointer whitespace-nowrap !rounded-button">
                  <FontAwesomeIcon icon={faChartLine} className="text-xl" />{" "}
                  Technical Indicators
                </button>
                <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-[var(--primary)] cursor-pointer whitespace-nowrap !rounded-button">
                  <FontAwesomeIcon icon={faDrawPolygon} className="text-xl" />{" "}
                  Drawing Tools
                </button>
              </div>
              <div>
                <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-[var(--primary)] cursor-pointer whitespace-nowrap !rounded-button">
                  <FontAwesomeIcon icon={faExpandAlt} /> Fullscreen
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ padding: "1.5rem 0" }}
          className="flex flex-col gap-2 col-span-2 bg-[#1a1a1a] rounded-lg shadow-sm text-gray-300"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Market News</h2>
            <button className="text-sm text-[var(--primary)] hover:text-emerald-400 cursor-pointer whitespace-nowrap !rounded-button">
              View All
            </button>
          </div>
          <div className="flex grid-cols-2 items-center justify-between gap-4">
            <div
              style={{ padding: "1rem 0" }}
              className="w-full flex flex-col gap-2 space-y-4 overflow-y-auto"
            >
              {marketItems.map((market) => (
                <div
                  style={{ padding: ".5rem 0.25rem" }}
                  key={market.id}
                  className="border-b border-gray-100 pb-3 last:border-0 cursor-pointer hover:bg-gray-700 p-2 rounded"
                >
                  <h3 className="font-medium text-sm">
                    {market.name} ({market.symbol})
                  </h3>
                  <div
                    style={{ padding: ".35rem 0" }}
                    className="flex justify-between mt-1"
                  >
                    <span className="text-xs text-gray-500">
                      ${market.price}
                    </span>
                    <span
                      className={`text-xs ${
                        market.change.startsWith("+")
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {market.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{ padding: "1rem 0" }}
              className="w-full flex flex-col gap-2 space-y-4 overflow-y-auto"
            >
              {newsItems.map((news) => (
                <div
                  style={{ padding: ".5rem 0.25rem" }}
                  key={news.id}
                  className="border-b border-gray-100 pb-3 last:border-0 cursor-pointer hover:bg-gray-700 p-2 rounded"
                >
                  <h3 className="font-medium text-sm">{news.title}</h3>
                  <div
                    style={{ padding: ".35rem 0" }}
                    className="flex justify-between mt-1"
                  >
                    <span className="text-xs text-gray-500">{news.source}</span>
                    <span className="text-xs text-gray-500">{news.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardApp;
