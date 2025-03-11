import { Search } from "lucide-react";

const Header = () => {
    return (
        <nav className="flex items-center justify-between py-6 px-8">
            <div className="text-2xl font-bold">
                <span className="text-red-600">Tortoise</span>-
                <span className="text-black">Hare</span>
            </div>

            <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
                <li><a href="#" className="hover:text-black">Home</a></li>
                <li><a href="#" className="hover:text-black">Features</a></li>
                <li><a href="#" className="hover:text-black">Insights</a></li>
                <li><a href="#" className="hover:text-black">About</a></li>
                <li><a href="#" className="hover:text-black">Blogs</a></li>
            </ul>

            <div className="flex items-center space-x-4">
                <div className="relative w-64">
                    <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-600" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-8 border-b border-black focus:outline-none bg-transparent"
                    />
                </div>
                <button className="text-gray-600 hover:text-black">
                    ❤️ {/* Icon yêu thích */}
                </button>
                <button className="text-gray-600 hover:text-black">
                    🛒 {/* Icon giỏ hàng */}
                </button>
            </div>
        </nav>
    );
};

export default Header;
