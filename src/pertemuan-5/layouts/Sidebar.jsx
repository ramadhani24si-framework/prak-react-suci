import { FaPlus, FaHome, FaClipboardList, FaUsers } from "react-icons/fa";

export default function Sidebar() {
  const menus = [
    { name: "Dashboard", icon: <FaHome />, active: true },
    { name: "Orders", icon: <FaClipboardList />, active: false },
    { name: "Customers", icon: <FaUsers />, active: false },
  ];

  return (
    <div id="sidebar" className="flex min-h-screen w-80 flex-col bg-white p-8 shadow-xl">
      <div id="sidebar-logo" className="flex flex-col mb-12">
        <span id="logo-title" className="font-poppins text-4xl font-bold text-gray-900">
          Sedap<b className="text-hijau">.</b>
        </span>
        <span className="text-sm font-medium text-gray-400">Modern Admin Dashboard</span>
      </div>

      <nav id="sidebar-menu" className="flex-1">
        <ul className="space-y-2">
          {menus.map((menu, i) => (
            <li key={i}>
              <div className={`flex cursor-pointer items-center space-x-4 rounded-xl p-4 font-semibold transition-all group
                ${menu.active ? "bg-hijau/10 text-hijau" : "text-gray-500 hover:bg-gray-50 hover:text-hijau"}`}>
                <span className="text-xl">{menu.icon}</span>
                <span className="group-hover:translate-x-1 transition-transform">{menu.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </nav>

      <div id="sidebar-footer" className="mt-auto">
        <div className="bg-hijau p-5 rounded-2xl shadow-lg shadow-hijau/30 mb-6 relative overflow-hidden group">
          <div className="relative z-10">
            <p className="text-white text-xs leading-relaxed opacity-90">Please organize your menus through button below!</p>
            <button className="flex w-full justify-center items-center p-2.5 mt-4 bg-white rounded-xl space-x-2 font-bold text-gray-800 hover:scale-105 active:scale-95 transition-transform">
              <FaPlus className="text-hijau text-sm" />
              <span>Add Menus</span>
            </button>
          </div>
          {/* Hiasan lingkaran di background card */}
          <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
        </div>
        <div className="text-center">
          <span className="font-bold text-gray-400 text-sm">Sedap Restaurant</span>
          <p className="text-[10px] text-gray-400 mt-1">&copy; 2025 All Right Reserved</p>
        </div>
      </div>
    </div>
  );
}