import { useNavigate } from "react-router-dom"; // IMPORT INI

export default function Register() {
    const navigate = useNavigate(); // DEFINISIKAN INI

    const handleSubmit = (e) => {
        e.preventDefault(); // Biar halaman nggak reload
        
        // Sesuai modul, kita kasih tanda sukses dulu
        alert("Pendaftaran Berhasil! Silakan masuk ke akun Anda.");

        // PINDAH KE HALAMAN LOGIN
        navigate("/login"); 
    };

    return (
        <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
                Create Your Account ✨
            </h2>

            {/* TAMBAHKAN onSubmit DI SINI */}
            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400"
                        placeholder="you@example.com"
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        required
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400"
                        placeholder="********"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        required
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400"
                        placeholder="********"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                >
                    Register
                </button>
            </form>
        </div>
    );
}