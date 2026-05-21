import { FaPlus, FaTachometerAlt, FaShoppingBag, FaUsers, FaExclamationTriangle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  
  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, to: "/" },
    { name: "Orders", icon: <FaShoppingBag />, to: "/orders" },
    { name: "Customers", icon: <FaUsers />, to: "/customers" },
    
    // 🔥 MENU BARU PERTEMUAN 9
    { name: "Produk", icon: <FaShoppingBag />, to: "/produk" },
    { name: "Components", icon: <FaShoppingBag />, to: "/components" },

    // ERROR MENU
    { name: "Error 400", icon: <FaExclamationTriangle />, to: "/error-400" },
    { name: "Error 401", icon: <FaExclamationTriangle />, to: "/error-401" },
    { name: "Error 403", icon: <FaExclamationTriangle />, to: "/error-403" },
  ];

  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4 space-x-2 transition-all
    ${isActive ? 
      "text-hijau bg-green-200 font-extrabold shadow-sm" : 
      "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
    }`;

  return (
    <div className="flex min-h-screen w-80 flex-col bg-white/90 backdrop-blur-md shadow-2xl rounded-r-3xl border-r border-white/30">

      {/* Logo */}
      <div className="flex flex-col p-6 border-b border-gray-100">
        <span className="font-poppins text-[48px] text-gray-800 tracking-tight">
          Sedap <b className="text-hijau">.</b>
        </span>
        <span className="font-semibold text-gray-400 text-sm">
          Modern Admin Dashboard
        </span>
      </div>

      {/* Menu */}
      <div className="mt-6 px-4 flex-1">
        <p className="text-xs font-bold text-gray-400 uppercase mb-4">Main Menu</p>

        <ul className="space-y-2">
          {menuItems.map((item, idx) => (
            <NavLink key={idx} to={item.to} className={menuClass}>
              <span className="text-lg">{item.icon}</span>
              <span>{item.name}</span>
            </NavLink>
          ))}
        </ul>
      </div>

      {/* Footer tetap */}
      <div className="p-4">
        <div className="bg-gradient-to-br from-hijau to-green-600 px-4 py-4 rounded-2xl mb-6">
          <div className="text-white text-sm space-y-3">
            <span>Organize your menus through button below!</span>
            <div className="flex justify-between items-center p-2 bg-white/20 rounded-xl cursor-pointer">
              <div className="flex items-center space-x-2 text-white">
                <FaPlus />
                <span>Add Menus</span>
              </div>
              <img
                src="https://avatar.iran.liara.run/public/28"
                className="w-8 h-8 rounded-full"
                alt="profile"
              />
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-400 pb-2">
          &copy; 2025 Sedap Dashboard
        </div>
      </div>
    </div>
  );
}