import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-gradient-to-r from-gray-900 to-indigo-900 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
                            Movie4Shabi
                        </Link>
                    </div>
                    <div className="flex space-x-4">
                        <Link to="/" className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-indigo-800">
                            Home
                        </Link>
                        <Link to="/favo" className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-indigo-800">
                            Favorites
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;