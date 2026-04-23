import React from 'react';

// Jika Anda menggunakan library icon seperti Heroicons atau font-awesome, Anda bisa menggunakannya.
// Jika tidak, kita bisa menggunakan SVG sederhana sebagai pengganti logo besar.

const BigExclamationIcon = () => (
  <svg
    className="w-32 h-32 text-gray-400 mb-8" // Warna abu-abu pudar agar tidak terlalu kontras
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    />
  </svg>
);

export default function NotFound() {
  return (
    <div className="flex-1 p-6 md:p-8 lg:p-10"> {/* Padding yang konsisten dengan desain utama */}
      
      {/* Container utama dengan background putih dan bayangan halus, mirip card di dashboard */}
      <div className="bg-white p-12 rounded-2xl shadow-sm min-h-[70vh] flex flex-col items-center justify-center text-center border border-gray-100">
        
        {/* Ikon besar sebagai visual utama */}
        <BigExclamationIcon />
        
        {/* Kode Error - Teks besar, warna hijau Sedap */}
        <h1 className="text-8xl font-extrabold text-[#00B074] mb-4">404</h1>
        
        {/* Judul Pesan */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Halaman Tidak Ditemukan
        </h2>
        
        {/* Deskripsi - Teks abu-abu untuk nuansa modern, mirip teks di card dashboard */}
        <p className="text-gray-500 max-w-md mb-10">
          Maaf, halaman yang Anda cari tidak dapat ditemukan atau telah dipindahkan.
          Silakan periksa kembali URL atau kembali ke halaman utama.
        </p>
        
        {/* Tombol Aksi - Menggunakan warna hijau Sedap dan gaya yang mirip tombol "Add Button" */}
        <button
          onClick={() => window.location.href = '/'} // Contoh: kembali ke Home
          className="bg-[#00B074] text-white px-8 py-3 rounded-xl font-medium shadow-md hover:bg-[#009663] transition duration-150 active:scale-95"
        >
          Kembali ke Dashboard
        </button>

      </div>
      
    </div>
  );
}