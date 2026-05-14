import { Link } from "react-router-dom";

export default function Produk() {
  // 30 Data Menu Restoran Sedap
  const products = [
    { id: 1, title: "Nasi Goreng Spesial", category: "Makanan", price: 25 },
    { id: 2, title: "Es Teh Manis", category: "Minuman", price: 5 },
    { id: 3, title: "Sate Ayam Madura", category: "Makanan", price: 30 },
    { id: 4, title: "Soto Ayam", category: "Makanan", price: 20 },
    { id: 5, title: "Ayam Penyet", category: "Makanan", price: 22 },
    { id: 6, title: "Jus Alpukat", category: "Minuman", price: 15 },
    { id: 7, title: "Mie Goreng Jawa", category: "Makanan", price: 18 },
    { id: 8, title: "Bakso Urat", category: "Makanan", price: 20 },
    { id: 9, title: "Es Jeruk", category: "Minuman", price: 8 },
    { id: 10, title: "Gado-Gado", category: "Makanan", price: 15 },
    { id: 11, title: "Rendang Sapi", category: "Makanan", price: 35 },
    { id: 12, title: "Es Campur", category: "Minuman", price: 12 },
    { id: 13, title: "Ikan Bakar", category: "Makanan", price: 45 },
    { id: 14, title: "Cumi Tepung", category: "Makanan", price: 30 },
    { id: 15, title: "Teh Botol", category: "Minuman", price: 6 },
    { id: 16, title: "Kopi Hitam", category: "Minuman", price: 5 },
    { id: 17, title: "Nasi Uduk", category: "Makanan", price: 15 },
    { id: 18, title: "Ayam Bakar", category: "Makanan", price: 25 },
    { id: 19, title: "Sop Buntut", category: "Makanan", price: 50 },
    { id: 20, title: "Es Kelapa Muda", category: "Minuman", price: 10 },
    { id: 21, title: "Pecel Lele", category: "Makanan", price: 18 },
    { id: 22, title: "Capcay Ayam", category: "Makanan", price: 20 },
    { id: 23, title: "Tahu Tempe Goreng", category: "Makanan", price: 10 },
    { id: 24, title: "Jus Mangga", category: "Minuman", price: 15 },
    { id: 25, title: "Martabak Telur", category: "Camilan", price: 25 },
    { id: 26, title: "Pisang Goreng", category: "Camilan", price: 12 },
    { id: 27, title: "Susu Jahe", category: "Minuman", price: 8 },
    { id: 28, title: "Bubur Ayam", category: "Makanan", price: 15 },
    { id: 29, title: "Sambal Terasi", category: "Tambahan", price: 3 },
    { id: 30, title: "Nasi Putih", category: "Tambahan", price: 5 },
  ];

  return (
    <div className="p-6 bg-white rounded-3xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-poppins font-black text-gray-800">Menu Sedap</h1>
          <p className="text-gray-400 text-sm italic">Daftar menu makanan dan minuman terlengkap</p>
        </div>
        <span className="bg-green-100 text-hijau px-4 py-2 rounded-full font-bold text-sm">
          Total: {products.length} Items
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b-2 border-gray-50 text-gray-400 uppercase text-xs tracking-widest">
              <th className="p-4">ID</th>
              <th className="p-4">Nama Menu</th>
              <th className="p-4">Kategori</th>
              <th className="p-4">Harga</th>
              <th className="p-4">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item.id} className="border-b border-gray-50 hover:bg-green-50/50 transition-all group">
                <td className="p-4 font-bold text-gray-400 text-sm">#{item.id}</td>
                <td className="p-4 font-extrabold text-gray-700 group-hover:text-hijau transition-colors">
                  {item.title}
                </td>
                <td className="p-4">
                  <span className="text-xs font-bold bg-gray-100 px-3 py-1 rounded-full text-gray-500">
                    {item.category}
                  </span>
                </td>
                <td className="p-4 font-black text-gray-800">
                  Rp {item.price}.000
                </td>
                <td className="p-4">
                  <Link 
                    to={`/produk/${item.id}`} 
                    className="inline-block bg-hijau text-white px-5 py-2 rounded-xl font-bold text-xs shadow-lg shadow-green-100 hover:scale-105 active:scale-95 transition-all"
                  >
                    DETAIL
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}