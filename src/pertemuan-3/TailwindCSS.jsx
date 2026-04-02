export default function TailwinddCSS() {
    return (
        <div className="min-h-screen bg-red-50 px-6 py-8 space-y-6">

            {/* Header */}
            <h1 className="text-3xl font-bold text-red-400 border-b-2 border-red-200 pb-2">
                Belajar Tailwind CSS 4
            </h1>

            {/* Button */}
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md transition">
                Click Me
            </button>

            <Spacing />
            <Typography />
            <BorderRadius />
            <BackgroundColors />
            <FlexboxGrid />
            <ShadowEffects />
        </div>
    );
}

function Spacing() {
    return (
        <div className="bg-red-200 text-gray-800 shadow-md p-6 rounded-lg">
            <h2 className="text-lg font-semibold">Card Title</h2>
            <p className="mt-2 text-gray-700">
                Ini adalah contoh penggunaan padding dan margin di Tailwind.
            </p>
        </div>
    );
}

function Typography() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
            <h1 className="text-2xl font-bold text-red-400">
                Tailwind Typography
            </h1>
            <p className="text-gray-600 text-lg mt-2">
                Belajar Tailwind sangat menyenangkan dan cepat!
            </p>
        </div>
    );
}

function BorderRadius() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
            <button className="border-2 border-red-300 text-red-400 px-6 py-2 rounded-full hover:bg-red-200 transition">
                Klik Saya
            </button>
        </div>
    );
}

function BackgroundColors() {
    return (
        <div className="bg-gradient-to-r from-red-200 via-pink-200 to-blue-200 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800">
                Tailwind Colors
            </h3>
            <p className="mt-2 text-gray-700">
                Belajar Tailwind itu seru dan fleksibel!
            </p>
        </div>
    );
}

function FlexboxGrid() {
    return (
        <nav className="flex justify-between items-center bg-red-300 p-4 rounded-lg shadow-md text-white">
            <h1 className="text-lg font-bold">MyWebsite</h1>
            <ul className="flex space-x-4">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
        </nav>
    );
}

function ShadowEffects() {
    return (
        <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-2xl transition duration-300 border border-red-100">
            <h3 className="text-xl font-semibold text-red-400">
                Hover me!
            </h3>
            <p className="text-gray-600 mt-2">
                Lihat efek bayangan saat hover.
            </p>
        </div>
    );
}