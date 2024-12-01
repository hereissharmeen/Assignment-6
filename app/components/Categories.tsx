export default function CategoriesSection() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-4">
          Explore Courses By Category
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </p>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="flex items-center p-6 bg-zinc-100 rounded-lg">
            <img
              src="/imge/icon1.png" 
              alt="Design & Development"
              className="h-12 w-12 mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">Design & Development</h3>
              <p className="text-gray-500">50+ Courses Available</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center p-6 bg-zinc-100 rounded-lg">
            <img
              src="/imge/icon2.png" 
              alt="Marketing"
              className="h-12 w-12 mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">Marketing</h3>
              <p className="text-gray-500">50+ Courses Available</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center p-6 bg-zinc-100  rounded-lg">
            <img
              src="/imge/icon3.png" 
              alt="Development"
              className="h-12 w-12 mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">Development</h3>
              <p className="text-gray-500">50+ Courses Available</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-center p-6 bg-zinc-100 rounded-lg">
            <img
              src="/imge/icon4.png" 
              alt="Development"
              className="h-12 w-12 mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">Development</h3>
              <p className="text-gray-500">50+ Courses Available</p>
            </div>
          </div>
          {/* Card 5 */}
          <div className="flex items-center p-6 bg-zinc-100 rounded-lg">
            <img
              src="/imge/icon5.png" 
              alt="Development"
              className="h-12 w-12 mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">Development</h3>
              <p className="text-gray-500">50+ Courses Available</p>
            </div>
          </div>
          {/* Card 6 */}
          <div className="flex items-center p-6 bg-zinc-100  rounded-lg">
            <img
              src="/imge/icon6.png" 
              alt="Development"
              className="h-12 w-12 mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">Development</h3>
              <p className="text-gray-500">50+ Courses Available</p>
            </div>
          </div>
          {/* Card 7 */}
          <div className="flex items-center p-6 bg-zinc-100  rounded-lg">
            <img
              src="/imge/icon7.png" 
              alt="Design & Development"
              className="h-12 w-12 mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">Design & Development</h3>
              <p className="text-gray-500">50+ Courses Available</p>
            </div>
          </div>
          {/* Card 8 */}
          <div className="flex items-center p-6 bg-zinc-100  rounded-lg">
            <img
              src="/imge/icon8.png" 
              alt="Design & Development"
              className="h-12 w-12 mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">Design & Development</h3>
              <p className="text-gray-500">50+ Courses Available</p>
            </div>
          </div>
          
          {/* Card 9 */}
          <div className="flex items-center p-6 bg-zinc-100  rounded-lg">
            <img
              src="/imge/icon9.png" 
              alt="Design & Development"
              className="h-12 w-12 mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">Design & Development</h3>
              <p className="text-gray-500">50+ Courses Available</p>
            </div>
          </div>
        </div>

        {/* Button */}
          <div className="mt-8 text-center">
            <button className="px-6 py-2 text-black bg-white border border-black rounded hover:bg-gray-100">
           View All Courses
            </button>
            </div>
        </div>
      </div>
  );
}
