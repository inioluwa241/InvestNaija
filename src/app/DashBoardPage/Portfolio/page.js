'use client';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import * as echarts from 'echarts';
// import Header from "./HeaderComp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faSyncAlt, faSearch, faBell, faUser, faPlus, faMinus, faDrawPolygon, faExpandAlt } from '@fortawesome/free-solid-svg-icons';
import SideBar from "../Generic-Component/SideBar"

const App = () => {
  const [activeTab, setActiveTab] = useState('buy');
  const [quantity, setQuantity] = useState('1');
  const [orderType, setOrderType] = useState('market');
  const [stockSymbol, setStockSymbol] = useState('AAPL');
  const [timeframe, setTimeframe] = useState('1D');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  
  // Sample data
  const accountBalance = 25000.75;
  const stockPrice = 178.42;
  const priceChange = 3.28;
  const priceChangePercent = 1.87;
  
  const portfolioStocks = [
    { symbol: 'AAPL', name: 'Apple Inc.', shares: 10, avgPrice: 165.32, currentPrice: 178.42, change: 7.92 },
    { symbol: 'MSFT', name: 'Microsoft Corp.', shares: 5, avgPrice: 320.45, currentPrice: 338.11, change: 5.51 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', shares: 3, avgPrice: 132.18, currentPrice: 129.82, change: -1.79 },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', shares: 8, avgPrice: 142.56, currentPrice: 149.84, change: 5.11 },
    { symbol: 'TSLA', name: 'Tesla Inc.', shares: 12, avgPrice: 218.76, currentPrice: 201.43, change: -7.92 },
  ];
  
  const watchlistStocks = [
    { symbol: 'AAPL', price: 178.42, change: 1.87 },
    { symbol: 'MSFT', price: 338.11, change: 0.92 },
    { symbol: 'GOOGL', price: 129.82, change: -0.45 },
    { symbol: 'AMZN', price: 149.84, change: 1.23 },
    { symbol: 'TSLA', price: 201.43, change: -2.15 },
    { symbol: 'META', price: 312.75, change: 0.78 },
    { symbol: 'NVDA', price: 432.89, change: 3.42 },
  ];
  
  const newsItems = [
    { id: 1, title: 'Fed signals potential rate cut in September', source: 'Financial Times', time: '2h ago' },
    { id: 2, title: 'Tech stocks rally as inflation data comes in lower than expected', source: 'Wall Street Journal', time: '3h ago' },
    { id: 3, title: 'Apple announces new product line, shares jump 3%', source: 'CNBC', time: '5h ago' },
    { id: 4, title: 'Oil prices drop amid concerns over global demand', source: 'Bloomberg', time: '6h ago' },
    { id: 5, title: 'Tesla beats quarterly earnings expectations', source: 'Reuters', time: '8h ago' },
    { id: 6, title: 'Crypto market sees renewed interest as Bitcoin surpasses $60,000', source: 'CoinDesk', time: '12h ago' },
  ];
  
  // Initialize chart
  useEffect(() => {
    const chartDom = document.getElementById('main-chart');
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
          [time.getFullYear(), time.getMonth() + 1, time.getDate()].join('/'),
          Math.round((baseValue + Math.random() * 20 - 10 + i * 0.2) * 100) / 100
        ]);
      }
      
      const option = {
        animation: false,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          top: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: data.map(item => item[0])
        },
        yAxis: {
          type: 'value',
          scale: true,
          splitLine: {
            lineStyle: {
              color: '#f0f0f0'
            }
          }
        },
        series: [
          {
            name: 'AAPL',
            type: 'line',
            data: data.map(item => item[1]),
            smooth: true,
            showSymbol: false,
            lineStyle: {
              width: 3,
              color: '#10b981'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(16, 185, 129, 0.3)'
                },
                {
                  offset: 1,
                  color: 'rgba(16, 185, 129, 0.05)'
                }
              ])
            }
          }
        ]
      };
      
      myChart.setOption(option);
      
      const handleResize = () => {
        myChart.resize();
      };
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
        myChart.dispose();
      };
    }
  }, []);
  
  // Mini sparkline charts for portfolio
  useEffect(() => {
    portfolioStocks.forEach(stock => {
      const chartDom = document.getElementById(`sparkline-${stock.symbol}`);
      if (chartDom) {
        const sparkline = echarts.init(chartDom);
        
        // Generate random data for sparkline
        const data = [];
        for (let i = 0; i < 20; i++) {
          data.push(stock.avgPrice * (1 + (Math.random() * 0.1 - 0.05) + (i * 0.002 * (stock.change > 0 ? 1 : -1))));
        }
        
        const option = {
          animation: false,
          grid: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          },
          xAxis: {
            type: 'category',
            show: false
          },
          yAxis: {
            type: 'value',
            show: false,
            scale: true
          },
          series: [
            {
              type: 'line',
              data: data,
              showSymbol: false,
              lineStyle: {
                width: 1.5,
                color: stock.change >= 0 ? '#10b981' : '#ef4444'
              }
            }
          ]
        };
        
        sparkline.setOption(option);
        
        return () => {
          sparkline.dispose();
        };
      }
    });
  }, []);
  
  return (
    <div style={{padding:"1.5rem 1rem"}} className="flex gap-2 min-h-screen bg-neutral-800 text-gray-200">
      <SideBar/>
        <div className="flex flex-col gap-2.5 rounded-lg shadow-sm overflow-hidden">
          {/* Header */}
       <header style={{padding:"1rem"}} className="bg-[#1a1a1a] rounded-lg shadow-sm h-16 flex items-center px-6">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center">
           <img
           src="/images/logo.png"
           className='w-10 h-10'
           />
            <h1 className="text-3xl font-bold text-[var(--primary)]">InvestNaija</h1>
          </div>
          
          {/* Search Bar */}
          <div className="flex items=center justify-between gaap-3 w-1/3 relative">
            <input
              type="text"
              placeholder="Search stocks..."
              style={{padding:"0.5rem 2rem"}}
              className="w-75 rounded-4xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent text-sm"
            />             
            <button  style={{margin:"0rem 1rem"}} className=" text-gray-400">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          
          {/* User Profile Section */}
          <div className="flex items-center justify-center gap-2 space-x-6">
            <div className="text-right">
              <p className="text-sm text-gray-600">Account Balance</p>
              <p className="font-bold">${accountBalance.toLocaleString()}</p>
            </div>
            
            <div className="relative">
              <button 
                className="text-gray-600 hover:text-indigo-600 cursor-pointer"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <FontAwesomeIcon icon={faBell} className="text-2xl" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">3</span>
              </button>
              
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-10 border border-gray-200">
                  <div className="p-3 border-b border-gray-200">
                    <h3 className="font-semibold">Notifications</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    <div className="p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
                      <p className="text-sm font-medium">AAPL reached your price target of $180</p>
                      <p className="text-xs text-gray-500">10 minutes ago</p>
                    </div>
                    <div className="p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
                      <p className="text-sm font-medium">Your TSLA order was executed</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                    <div className="p-3 hover:bg-gray-50 cursor-pointer">
                      <p className="text-sm font-medium">Market opens in 30 minutes</p>
                      <p className="text-xs text-gray-500">Today, 8:30 AM</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="relative">
              <button 
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => setShowUserMenu(!showUserMenu)}
              >
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">
                  JS
                </div>
                <i className="fas fa-chevron-down text-xs text-gray-500"></i>
              </button>
              
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10 border border-gray-200">
                  <div className="p-3 border-b border-gray-200">
                    <p className="font-medium">John Smith</p>
                    <p className="text-xs text-gray-500">john.smith@example.com</p>
                  </div>
                  <div>
                    <a href="#" className="block p-3 hover:bg-gray-50 text-sm">
                      <i className="fas fa-user mr-2"></i> Profile
                    </a>
                    <a href="#" className="block p-3 hover:bg-gray-50 text-sm">
                      <i className="fas fa-cog mr-2"></i> Settings
                    </a>
                    <a href="#" className="block p-3 hover:bg-gray-50 text-sm text-red-500">
                      <i className="fas fa-sign-out-alt mr-2"></i> Logout
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      {/* Watchlist Ticker */}
      <div style={{padding:"0.5rem"}} className=" text-sm bg-[#1a1a1a] rounded-lg ">
        <div className="flex items-center space-x-6 overflow-x-auto">
          {watchlistStocks.map(stock => (
            <div style={{padding:".5rem"}} key={stock.symbol} className="flex items-center space-x-2 whitespace-nowrap cursor-pointer hover:bg-gray-500 gap-1 rounded">
              <span className="font-medium">{stock.symbol}</span>
              <span className={`text-sm ${stock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                ${stock.price.toFixed(2)} 
                <span className="ml-1">
                  {stock.change >= 0 ? <i className="fas fa-caret-up"></i> : <i className="fas fa-caret-down"></i>}
                  {Math.abs(stock.change).toFixed(2)}%
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Main Content */}
      <main className="p-6 grid grid-cols-5 gap-3" style={{ minHeight: 'calc(100vh - 9rem)' }}>
        {/* Stock Chart (2/5 width) */}
        <div style = {{padding:"1.5rem 1rem"}} className="flex flex-col gap-4 col-span-3 bg-[#1a1a1a] rounded-lg shadow-sm p-4">
          <div className="flex justify-between items-start mb-4">
            <div className="flex flex-col gap-0.5 items-start">
              <div className="flex items-center gap-1">
                <h2 className="text-3xl font-bold">{stockSymbol}</h2>
                <span className="ml-2 text-gray-600 text-sm">Apple Inc.</span>
              </div>
              <div className="flex gap-1 items-center mt-1">
                <span className="text-lg font-semibold">${stockPrice}</span>
                <span className={`ml-2 text-sm ${priceChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {priceChange >= 0 ? '+' : ''}{priceChange.toFixed(2)} ({priceChangePercent.toFixed(2)}%)
                </span>
              </div>
            </div>
            
            <div className="flex gap-1 space-x-1">
              {['1D', '1W', '1M', '3M', '1Y', 'All'].map(tf => (
                <button 
                  key={tf}
                  style = {{padding:"5px"}}
                  className={`px-3 py-1 text-sm rounded-lg !rounded-button whitespace-nowrap ${timeframe === tf ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'}`}
                  onClick={() => setTimeframe(tf)}
                >
                  {tf}
                </button>
              ))}
            </div>
          </div>
          
          <div id="main-chart" style={{ width: '100%', height: '320px' }}></div>
          
          <div className="flex justify-between  ">
            <div className="flex items-center gap-4 space-x-3">
              <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-[var(--primary)] cursor-pointer whitespace-nowrap !rounded-button">
              <FontAwesomeIcon icon={faChartLine} className="text-xl" />  Technical Indicators
              </button>
              <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-[var(--primary)] cursor-pointer whitespace-nowrap !rounded-button">
              <FontAwesomeIcon icon={faDrawPolygon} className="text-xl" /> Drawing Tools
              </button>
            </div>
            <div>
              <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-[var(--primary)] cursor-pointer whitespace-nowrap !rounded-button">
                <FontAwesomeIcon icon={faExpandAlt}/> Fullscreen
              </button>
            </div>
          </div>
        </div>
        
        {/* Trading Panel */}
        <div style={{padding:"1.5rem 1rem"}} className="flex flex-col gap-3 justify-start col-span-2 bg-[#1a1a1a] rounded-lg shadow-sm p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Trade {stockSymbol}</h2>
            <div className="flex bg-gray-100 rounded-lg">
              <button
                style={{padding:"0.5rem .75rem"}} 
                className={`text-sm font-medium rounded-lg !rounded-button whitespace-nowrap ${activeTab === 'buy' ? 'bg-[var(--primary)] text-white' : 'text-gray-600'}`}
                onClick={() => setActiveTab('buy')}
              >
                Buy
              </button>
              <button 
                style={{padding:"0.5rem .75rem"}}
                className={`text-sm font-medium rounded-lg !rounded-button whitespace-nowrap ${activeTab === 'sell' ? 'bg-indigo-600 text-white' : 'text-gray-600'}`}
                onClick={() => setActiveTab('sell')}
              >
                Sell
              </button>
            </div>
          </div>
          
          <div className='flex flex-col gap-4'>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Order Type</label>
              <div className="flex flex-col gap-2 relative">
                <select 
                  className="block w-full pl-3 pr-10 py-2 text-base text-gray-500 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  value={orderType}
                  onChange={(e) => setOrderType(e.target.value)}
                >
                  <option value="market">Market Order</option>
                  <option value="limit">Limit Order</option>
                  <option value="stop">Stop Order</option>
                </select>
              </div>
            </div>
            
            <div className="flex flex-col gap-2 mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
              <div className="flex rounded-md shadow-sm">
                <button 
                  style={{padding:"0.5rem .75rem"}}
                  className="relative inline-flex items-center px-3 py-2 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm rounded-l-md !rounded-button whitespace-nowrap"
                  onClick={() => setQuantity(prev => (parseInt(prev) > 1 ? (parseInt(prev) - 1).toString() : '1'))}
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <input
                  type="text"
                  value={quantity}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (/^\d*$/.test(val)) {
                      setQuantity(val);
                    }
                  }}
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full px-3 py-2 sm:text-sm border-gray-300 border-y text-center"
                />
                <button 
                  style={{padding:"0.5rem .75rem"}} 
                  className="relative inline-flex items-center px-3 py-2 border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm rounded-r-md !rounded-button whitespace-nowrap"
                  onClick={() => setQuantity(prev => (parseInt(prev) + 1).toString())}
                >
                 <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
            
            {orderType !== 'market' && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {orderType === 'limit' ? 'Limit Price' : 'Stop Price'}
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="text"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="0.00"
                    defaultValue={stockPrice.toFixed(2)}
                  />
                </div>
              </div>
            )}
            
            <div className="flex flex-col gap-2 mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Estimated Cost</span>
                <span className="font-medium">${(stockPrice * parseInt(quantity || '0')).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Available Cash</span>
                <span className="font-medium">${accountBalance.toLocaleString()}</span>
              </div>
            </div>
            
            <button
              style={{padding:"1rem", marginBlock:"1.5rem"}}  
              className={`w-full py-3 px-4 rounded-lg font-medium text-white !rounded-button whitespace-nowrap ${activeTab === 'buy' ? 'bg-[var(--primary)]' : 'bg-red-600 hover:bg-red-700'}`}
            >
              {activeTab === 'buy' ? 'Buy' : 'Sell'} {quantity} {stockSymbol} {orderType === 'market' ? 'at Market Price' : `at $${stockPrice.toFixed(2)}`}
            </button>
          </div>
        </div>
        
        {/* Portfolio Overview */}
        <div style={{padding:"1.5rem"}} className="flex flex-col gap-4 col-span-3 bg-[#1a1a1a] rounded-lg shadow-sm p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Portfolio Overview</h2>
            <button style={{padding:"7px"}} className="flex items-center gap-1 text-sm text-[var(--primary)] hover:bg-gray-400 hover:border hover:rounded-lg cursor-pointer whitespace-nowrap !rounded-button">
              <FontAwesomeIcon icon={faSyncAlt} className="mr-1" />
              Refresh
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="flex flex-col gap-2 min-w-full divide-y divide-gray-200">
              <thead style={{padding:"0.5rem 0.25rem"}} className="flex justify-center items-center rounded-md bg-gray-400 font-bold text-gray-900">
                <tr className='flex w-full justify-between items-center'>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symbol</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shares</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg. Price</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Price</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Market Value</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gain/Loss</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
                </tr>
              </thead>
              <tbody style={{padding:"0.75rem 0.5rem"}} className="flex flex-col gap-5 bg-[#1a1a1a] text-gray-500 rounded-lg divide-y divide-gray-500">
                {portfolioStocks.map((stock) => (
                  <tr key={stock.symbol} style={{padding:".55rem 0.5rem"}} className="flex justify-between items-center hover:bg-gray-300 hover:border hover:rounded-lg cursor-pointer">
                    <td className="whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-bold text-gray-500">{stock.symbol}</div>
                        <div className="text-sm text-gray-500 ml-2">{stock.name}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stock.shares}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${stock.avgPrice.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${stock.currentPrice.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ${(stock.shares * stock.currentPrice).toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span style={{padding:"3px"}} className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${stock.change >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}%
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div id={`sparkline-${stock.symbol}`} style={{ width: '80px', height: '24px' }}></div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Market News Feed */}
        <div style={{padding:"1.5rem"}}  className="flex flex-col gap-2 col-span-2 bg-[#1a1a1a] rounded-lg shadow-sm text-gray-300">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Market News</h2>
            <button className="text-sm text-indigo-600 hover:text-indigo-800 cursor-pointer whitespace-nowrap !rounded-button">
              View All
            </button>
          </div>
          
          <div style={{padding:"1rem 0", maxHeight: '350px' }} className="flex flex-col gap-2 space-y-4 overflow-y-auto">
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
      </main>
        </div>
    </div>
  );
};

export default App;
