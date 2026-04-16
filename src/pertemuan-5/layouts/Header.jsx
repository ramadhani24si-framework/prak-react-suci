import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Header() {
  return (
    <div id="header-container" className="flex justify-between items-center p-6 bg-transparent transition-all duration-300">
      
      {/* Search Bar - Sekarang lebih clean pake shadow, bukan border kaku */}
      <div id="search-bar" className="relative w-full max-w-md group">
        <input
          id="search-input"
          type="text"
          placeholder="Search Here..."
          className="bg-white shadow-sm border-none p-3 pr-12 w-full rounded-2xl outline-none focus:ring-2 focus:ring-hijau/20 transition-all placeholder:text-gray-300"
        />
        <FaSearch 
          id="search-icon" 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300 group-focus-within:text-hijau transition-colors" 
        />
      </div>

      {/* Icon & Profile Section */}
      <div id="icons-container" className="flex items-center space-x-6">
        
        {/* Grup Icon - Sekarang pake background putih & soft shadow */}
        <div className="flex items-center space-x-3">
          <div id="notification-icon" className="relative p-3 bg-white shadow-sm rounded-xl text-blue-500 cursor-pointer hover:bg-blue-50 hover:-translate-y-1 transition-all">
            <FaBell />
            <span id="notification-badge" className="absolute -top-1 -right-1 bg-red-500 text-white font-bold rounded-full h-5 w-5 flex items-center justify-center text-[10px] border-2 border-white">
              50
            </span>
          </div>
          
          <div id="chart-icon" className="p-3 bg-white shadow-sm rounded-xl cursor-pointer hover:bg-gray-50 hover:-translate-y-1 transition-all">
            <FcAreaChart />
          </div>
          
          <div id="settings-icon" className="p-3 bg-white shadow-sm rounded-xl text-red-500 cursor-pointer hover:bg-red-50 hover:-translate-y-1 transition-all">
            <SlSettings />
          </div>
        </div>

        {/* Profile Section - Udah pake foto lo sendiri */}
        <div id="profile-container" className="flex items-center space-x-4 border-l pl-6 border-gray-200">
          <div id="profile-text" className="text-right hidden sm:block">
            <p className="text-xs text-gray-400">Hello,</p>
            <p className="text-sm font-bold text-gray-800">Suci Ramadhani</p>
          </div>
          
          {/* Bingkai foto profil pake warna hijau biar sinkron */}
          <div className="p-0.5 bg-hijau rounded-full shadow-md shadow-hijau/20">
            <img
              id="profile-avatar"
              src="/img/Foto-suci.jpeg" // Manggil file lo dari folder public/img
              className="w-11 h-11 rounded-full border-2 border-white object-cover"
              alt="Foto Suci Ramadhani"
            />
          </div>
        </div>

      </div>
    </div>
  );
}