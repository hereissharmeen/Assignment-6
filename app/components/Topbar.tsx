
const TopBarAndNavbar = () => {
    return (
      <div>
        {/* Top Bar */}
        <div className="bg-gray-100 border-b border-slate-800 py-2">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center text-sm text-gray-700">
            {/* Left Section */}
            <div className="flex space-x-6">
              <p>Phone Number: 956 742 455 678</p>
              <p>Email: info@ddsgnr.com</p>
            </div>
            {/* Right Section */}
            <div className="flex space-x-4">
              <img src="/imge/Facebook.png" alt="Facebook" className="w-5 h-5" />
              <img src="/imge/Instagram.png" alt="Instagram" className="w-5 h-5" />
              <img src="/imge/twetter.png" alt="Twitter" className="w-5 h-5" />
              <img src="/imge/linkdin.png" alt="LinkedIn" className="w-5 h-5" />
            </div>
          </div>
        </div>
  
        {/* Navbar */}
        <nav className="bg-gray-100 border-b border-gray-500 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <img className="h-8 w-8" src="/imge/head1.svg" alt="Logo" />
                <span className="ml-2 font-bold text-xl">Ddsgnr</span>
              </div>
              {/* Navigation Links */}
              <div className="hidden sm:flex sm:space-x-8">
                <a href="/" className="text-gray-900 px-3 py-2 text-sm font-medium hover:text-black">
                  Home
                </a>
                <a href="/courses" className="text-gray-900 px-3 py-2 text-sm font-medium hover:text-black">
                  Courses
                </a>
                <a href="/services" className="text-gray-900 px-3 py-2 text-sm font-medium hover:text-black">
                  Services
                </a>
                <a href="/achievement" className="text-gray-900 px-3 py-2 text-sm font-medium hover:text-black">
                  Achievement
                </a>
                <a href="/about" className="text-gray-900 px-3 py-2 text-sm font-medium hover:text-black">
                  About Us
                </a>
                <a href="/testimonial" className="text-gray-900 px-3 py-2 text-sm font-medium hover:text-black">
                  Testimonial
                </a>
              </div>
              {/* Buttons */}
              <div className="hidden sm:flex sm:items-center space-x-4">
                <button className="bg-white text-black px-3 py-2 rounded-md text-sm font-medium border border-black">
                  Login
                </button>
                <button className="bg-black text-white px-3 py-2 rounded-md text-sm font-medium">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  };
  
  export default TopBarAndNavbar;
  
  
  