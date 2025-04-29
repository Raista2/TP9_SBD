import { useState, useEffect } from 'react'
import logo from './assets/logo_fate.png'

function NavBar() {
    const [headerText, setHeaderText] = useState("Story");
    const [animate, setAnimate] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        const texts = [
            "Story",
            "Servants",
            "About Us"
        ];

        let currentIndex = 0;

        const intervalId = setInterval(() => {
            setAnimate(true);

            setTimeout(() => {
                currentIndex = (currentIndex + 1) % texts.length;
                setHeaderText(texts[currentIndex]);
                setAnimate(false);
            }, 500); // 500ms - waktu untuk fade out
        }, 3000); // Mengubah teks setiap 3 detik

        return () => clearInterval(intervalId);
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 w-full bg-gray-800 text-white p-3 shadow-md z-50 opacity-95 border-b-2 border-blue-100">
            <div className="w-full px-4 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <a href="/" className="text-2xl font-bold text-white">Mustofa</a>
                    <a href="https://fate-go.us/" target="_blank" rel="noopener noreferrer">
                        <img src={logo} alt="Logo" className="h-10 w-25 rounded-full" />
                    </a>
                </div>

                <div className="relative w-36">
                    <button
                        onClick={toggleDropdown}
                        className="flex items-center gap-1 font-bold text-l hover:text-gray-300 transition-colors w-full justify-end"
                    >

                        <div className="w-50 h-8 flex items-center justify-end overflow-hidden relative">
                            <span
                                className={`transition-opacity duration-500 ${animate ? 'opacity-0' : 'opacity-100'} whitespace-nowrap`}
                            >
                                {headerText}
                            </span>
                        </div>
                        <svg
                            className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 bg-gray-700 rounded-md shadow-lg p-2 min-w-[160px] z-20">
                            <a href="#story" className="block py-2 px-3 hover:bg-gray-600 rounded transition-colors">Story</a>
                            <a href="#servants" className="block py-2 px-3 hover:bg-gray-600 rounded transition-colors">Servants</a>
                            <a href="#about" className="block py-2 px-3 hover:bg-gray-600 rounded transition-colors">About Us</a>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default NavBar;