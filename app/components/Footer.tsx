import React from 'react'

export default function Footer() {
  return (
      <div className="bg-gray-100 py-8 px-4">
  {/* Newsletter Section */}
  <div className="max-w-7xl mx-auto p-4">
    <h2 className="text-lg font-bold mb-8">Subscribe to our newsletter</h2>
    <p className="text-sm text-gray-600 mb-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <div className="flex flex-col items-end space-y-2">
      <form className="lg:w-1/3 flex justify-end">
     <label htmlFor="email" className="sr-only">Email address</label>
     <input
      type="email"
      name="email"
       id="email"
       className="appearance-none w-full px-4 py-2 border border-black rounded-md text-base leading-6 text-black-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-black-500 sm:max-w-xs"
       placeholder="Enter your email"
     />
     <button
       type="submit"
      className="mt-3 w-full flex items-center justify-center px-4 py-2 border border-black text-base font-medium rounded-md text-black bg-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0 ">
           Subscribe
     </button>
        </form>
      <p className="text-xs text-gray-500 text-center lg:text-left">
        By subscribing you agree to with our{' '}
        <a href="#" className="text-gray-900 hover:underline">
          Privacy Policy
        </a>.
      </p>
    </div>
  </div>

  {/* Footer Section */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 p-4">
  <div className="flex items-center space-x-3">
   <img src="/imge/head1.svg" alt="Logo" className="h-8 w-8" />
   <div>
     <h3 className="font-bold text-lg">Ddsgnr</h3>
   </div>
 </div>
    <div>
      <h3 className="font-bold mb-2">Courses</h3>
      <ul className="space-y-1 text-sm">
        <li>Business</li>
        <li>Development</li>
        <li>Technology</li>
        <li>Design</li>
        <li>Programming</li>
      </ul>
    </div>
    <div>
      <h3 className="font-bold mb-2">Resources</h3>
      <ul className="space-y-1 text-sm">
        <li>Career</li>
        <li>Resume</li>
        <li>Learning</li>
        <li>Interview Preparation</li>
        <li>Jobs</li>
      </ul>
    </div>
    <div>
      <h3 className="font-bold mb-2">About Us</h3>
      <ul className="space-y-1 text-sm">
        <li>Contact</li>
        <li>Help/Support</li>
        <li>FAQ</li>
        <li>Terms and Conditions</li>
        <li>Partners</li>
      </ul>
    </div>
  </div>

{/* bottom sectoin */}
  <div className="bg-gray-100 py-4 border-t border-black">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
    {/* Left Section */}
    <p className="text-sm text-black">
      © 2023 Ddsgnr. All rights reserved.
    </p>

  {/* center section */}
<ul className="flex space-x-4 text-sm">
  <li>
    <a href="#" className="text-black underline">
      Privacy Policy
    </a>
  </li>
  <li>
    <a href="#" className="text-black underline">
      Terms of Service
    </a>
  </li>
  <li>
    <a href="#" className="text-black underline">
      Cookies Settings
    </a>
  </li>
</ul>


    {/* Right Section */}
    <div className="flex space-x-4">
      <img src="/imge/Facebook.png" alt="Facebook" className="w-5 h-5" />
      <img src="/imge/Instagram.png" alt="Instagram" className="w-5 h-5" />
      <img src="/imge/twetter.png" alt="Twitter" className="w-5 h-5" />
      <img src="/imge/linkdin.png" alt="LinkedIn" className="w-5 h-5" />
    </div>
  </div>
</div>
  </div>

  )
}
