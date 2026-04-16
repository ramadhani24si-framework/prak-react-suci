import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Dashboard() {
  const cards = [
    { id: "orders", count: "75", text: "Total Orders", icon: <FaShoppingCart />, color: "bg-hijau" },
    { id: "delivered", count: "175", text: "Total Delivered", icon: <FaTruck />, color: "bg-biru" },
    { id: "canceled", count: "40", text: "Total Canceled", icon: <FaBan />, color: "bg-merah" },
    { id: "revenue", count: "Rp.128", text: "Total Revenue", icon: <FaDollarSign />, color: "bg-kuning" },
  ];

  return (
    <div id="dashboard-container" className="animate-in fade-in duration-700">
      <PageHeader />
      <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div key={card.id} className="group flex items-center space-x-5 bg-white rounded-3xl shadow-sm hover:shadow-xl p-6 border border-transparent hover:border-hijau/10 hover:-translate-y-2 transition-all cursor-default">
            <div className={`${card.color} rounded-2xl p-4 text-white shadow-lg group-hover:scale-110 transition-transform`}>
              <span className="text-3xl">{card.icon}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-extrabold text-gray-800 tracking-tight">{card.count}</span>
              <span className="text-sm font-medium text-gray-400 mt-1">{card.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}