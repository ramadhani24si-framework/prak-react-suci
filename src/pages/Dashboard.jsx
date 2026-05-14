import PageHeader from "../components/PageHeader";
import { FaUtensils, FaShoppingBag, FaUsers, FaWallet } from "react-icons/fa";

export default function Dashboard() {
  // Data Dummy untuk Statistik
  const stats = [
    { label: "Total Revenue", value: "Rp 12.500.000", icon: <FaWallet />, color: "bg-blue-500" },
    { label: "Total Orders", value: "1,240", icon: <FaShoppingBag />, color: "bg-hijau" },
    { label: "New Customers", value: "150", icon: <FaUsers />, color: "bg-orange-500" },
    { label: "Menu Items", value: "30", icon: <FaUtensils />, color: "bg-purple-500" },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* HEADER */}
      <PageHeader
        title="Dashboard Overview"
        breadcrumb={["Dashboard", "Overview"]}
      >
        <button className="bg-hijau hover:bg-green-700 text-white px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-green-100 transition-all active:scale-95">
          + Download Report
        </button>
      </PageHeader>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-[30px] shadow-sm border border-gray-100 flex items-center space-x-4 hover:shadow-md transition-shadow">
            <div className={`${item.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg`}>
              {item.icon}
            </div>
            <div>
              <p className="text-gray-400 text-sm font-medium">{item.label}</p>
              <h3 className="text-xl font-black text-gray-800">{item.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* RECENT ORDERS TABLE */}
        <div className="lg:col-span-2 bg-white p-8 rounded-[40px] shadow-sm border border-gray-100">
          <h3 className="text-xl font-black text-gray-800 mb-6">Recent Orders</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-400 text-xs uppercase tracking-widest border-b border-gray-50">
                  <th className="pb-4">Customer</th>
                  <th className="pb-4">Menu</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4 text-right">Price</th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium">
                <tr className="border-b border-gray-50">
                  <td className="py-4 font-bold">Suci Ramadhani</td>
                  <td className="py-4 text-gray-500">Nasi Goreng Spesial</td>
                  <td className="py-4"><span className="text-hijau bg-green-50 px-3 py-1 rounded-full text-[10px] font-black">DELIVERED</span></td>
                  <td className="py-4 text-right font-black text-gray-800">Rp 25.000</td>
                </tr>
                <tr className="border-b border-gray-50">
                  <td className="py-4 font-bold">Dosen React</td>
                  <td className="py-4 text-gray-500">Sate Ayam Madura</td>
                  <td className="py-4"><span className="text-orange-500 bg-orange-50 px-3 py-1 rounded-full text-[10px] font-black">PENDING</span></td>
                  <td className="py-4 text-right font-black text-gray-800">Rp 30.000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* PROMO BANNER / QUICK INFO */}
        <div className="bg-gradient-to-br from-hijau to-green-600 p-8 rounded-[40px] text-white flex flex-col justify-between shadow-xl shadow-green-100">
          <div>
            <h3 className="text-2xl font-black mb-2">Restoran Sedap</h3>
            <p className="text-green-100 text-sm leading-relaxed">
              "Sedap dipandang, makin sedap dimakan. Dashboard ini membantumu mengelola pesanan dengan kilat!"
            </p>
          </div>
          <div className="mt-8">
            <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm border border-white/30">
              <p className="text-xs font-bold uppercase mb-1">Top Selling Menu</p>
              <p className="font-black text-lg">Ayam Penyet Sambal Ijo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}