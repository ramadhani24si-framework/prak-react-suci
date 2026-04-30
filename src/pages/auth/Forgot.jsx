import { useNavigate } from "react-router-dom"; // 1. Import si sopir navigasi

export default function Forgot() {
    const navigate = useNavigate(); // 2. Siapkan fungsinya

    const handleSubmit = (e) => {
        e.preventDefault(); // Biar gak reload halamannya
        
        // Kasih notifikasi biar kelihatan pro
        alert("Link reset password sudah dikirim ke email kamu!");

        // 3. BARIS SAKTI: Pindah balik ke halaman Login
        navigate("/login"); 
    };

    return (
        <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2 text-center">
                Forgot Your Password?
            </h2>
            
            <p className="text-sm text-gray-500 mb-6 text-center">
                Enter your email address and we'll send you a link to reset your
                password.
            </p>

            {/* 4. Tambahkan onSubmit di tag form */}
            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        required // Tambahkan required biar gak kosong
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm
                            placeholder-gray-400"
                        placeholder="you@example.com"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4
                        rounded-lg transition duration-300"
                >
                    Send Reset Link
                </button>
            </form>

            {/* Tambahan: Biar user bisa balik ke login tanpa klik tombol send */}
            <div className="mt-4 text-center">
                <button 
                    onClick={() => navigate("/login")} 
                    className="text-sm text-green-600 hover:underline"
                >
                    Back to Login
                </button>
            </div>
        </div>
    )
}