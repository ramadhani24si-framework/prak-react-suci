import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const { id } = useParams(); // Menangkap ID dari URL
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  // KITA SAMAKAN DATANYA DENGAN DI HALAMAN PRODUK.JSX
  const menuSedap = [
    { id: 1, title: "Nasi Goreng Spesial", category: "Makanan", price: 25, desc: "Nasi goreng bumbu rempah pilihan dengan topping ayam suwir, telur mata sapi, dan kerupuk.", img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600" },
    { id: 2, title: "Es Teh Manis", category: "Minuman", price: 5, desc: "Teh segar pilihan dengan gula murni dan es batu kristal.", img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600" },
    { id: 3, title: "Sate Ayam Madura", category: "Makanan", price: 30, desc: "Sate ayam empuk dengan bumbu kacang rahasia khas Madura.", img: "https://images.unsplash.com/photo-1529507180107-ec2844e6b1ad?w=600" },
    { id: 4, title: "Soto Ayam", category: "Makanan", price: 20, desc: "Kuah kuning bening yang gurih dengan suwiran ayam dan koya.", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600" },
    { id: 5, title: "Ayam Penyet", category: "Makanan", price: 22, desc: "Ayam goreng garing yang dipenyet dengan sambal terasi super pedas.", img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=600" },
    // Data default untuk ID 6 - 30 agar Suci nggak capek ngetik satu-satu:
  ];

  useEffect(() => {
    // Cari data yang ID-nya cocok
    const found = menuSedap.find((item) => item.id === parseInt(id));

    if (found) {
      setProduct(found);
    } else {
      // Jika user klik ID 6-30, kita kasih data generic makanan biar tetep muncul
      setProduct({
        id: id,
        title: "Menu Favorit Sedap #" + id,
        category: "Menu Populer",
        price: 15,
        desc: "Hidangan lezat dari dapur Sedap yang dimasak dengan cinta dan bumbu tradisional.",
        img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600"
      });
    }
  }, [id]);

  if (!product) return <div className="p-10 text-center font-bold text-hijau animate-pulse">Menyiapkan hidangan...</div>;

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-[50px] shadow-2xl mt-10 border border-gray-100">
      {/* Tombol Back */}
      <button
        onClick={() => navigate(-1)} 
        className="mb-8 text-gray-400 hover:text-hijau font-bold flex items-center gap-2 transition-all hover:-translate-x-2"
      >
        ← Kembali ke Daftar Menu
      </button>
      
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Gambar Makanan */}
        <div className="w-full md:w-1/2 group">
          <img 
            src={product.img} 
            alt={product.title} 
            className="w-full h-96 object-cover rounded-[40px] shadow-2xl group-hover:scale-105 transition-transform duration-500 border-4 border-green-50" 
          />
        </div>

        {/* Info Detail */}
        <div className="w-full md:w-1/2 space-y-6">
          <div>
            <span className="bg-green-100 text-hijau px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
              {product.category}
            </span>
            <h2 className="text-5xl font-black text-gray-800 mt-4 leading-tight">
              {product.title}
            </h2>
          </div>

          <p className="text-gray-500 text-lg leading-relaxed italic">
            "{product.desc}"
          </p>

          <div className="pt-8 border-t border-gray-100 flex justify-between items-center">
            <div>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Harga</p>
              <p className="text-4xl font-black text-hijau">
                Rp {product.price}.000
              </p>
            </div>
            
            <button className="bg-hijau text-white px-10 py-4 rounded-2xl font-black shadow-lg shadow-green-200 hover:scale-105 active:scale-95 transition-all">
                PESAN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}