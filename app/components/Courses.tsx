export default function CoursesSection() {
  const courses = [
    {
      category: "Design",
      title: "UX/UI Design 201",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      price: "$400",
      rating: "5.0",
      image: "/imge/UX design.jpg",
      starIcon: "/imge/star1.png", 
    },
    {
      category: "Programming",
      title: "Introduction to Python",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      price: "$400",
      rating: "5.0",
      image: "/imge/python.jpg",
      starIcon: "/imge/star1.png", 
    },
    {
      category: "Business",
      title: "Data Analysis for Beginners",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      price: "$400",
      rating: "5.0",
      image: "/imge/data anlyis.jpg",
      starIcon: "/imge/star1.png", 
    },
    {
      category: "Art",
      title: "Art Specialization",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      price: "$400",
      rating: "5.0",
      image: "/imge/art.jpg",
      starIcon: "/imge/star1.png", 
    },
    {
      category: "Law",
      title: "Rule of Law",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      price: "$400",
      rating: "5.0",
      image: "/imge/law.jpg",
      starIcon: "/imge/star1.png", 
    },
    {
      category: "Tech",
      title: "Introduction to webflow",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      price: "$400",
      rating: "5.0",
      image: "/imge/web flow.jpg",
      starIcon: "/imge/star1.png", 
    },
  ];

  return (
    <div className="bg-black-50 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-center mb-2">Courses</h2>
        <p className="text-center text-black-600 mb-8">
          Your Ultimate Guide to Learning
        </p>

        {/* Tabs */}
        <div className="flex justify-center space-x-6 mb-6">
          <button className="text-black font-semibold border-b-2 border-black">
            Popular
          </button>
          <button className="text-black-600 hover:text-black">Recommended</button>
          <button className="text-black-600 hover:text-black">Best Price</button>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-zinc-100"
            >
              {/* Course Image */}
              <img
                src={course.image}
                alt={course.title}
                className="h-40 w-full object-cover"
              />

              {/* Course Info */}
              <div className="p-4">
                {/* Top Info (Category & Rating) */}
                <div className="flex justify-between items-center">
                  <p className="text-sm font-semibold text-black-600">{course.category}</p>
                  <div className="flex items-center">
                    {/* Star Icon Image */}
                    <img
                      src={course.starIcon}
                      alt="Star Icon"
                      className="h-4 w-4 mr-1"
                    />
                    <span className="text-sm font-semibold">{course.rating}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mt-2">{course.title}</h3>

                {/* Description */}
                <p className="text-sm text-black-600 mt-2">
                  {course.description}
                </p>

                {/* Bottom Info (Button & Price) */}
                <div className="flex items-center justify-between mt-4">
                  <button className="px-4 py-1 border border-black text-black rounded ">
                    Enroll Now
                  </button>
                  <p className="text-lg font-bold">{course.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Button */}
      <div className="mt-8 text-center">
            <button className="px-6 py-2 text-black bg-white border border-black rounded">
           View All Courses
            </button>
            </div>
    </div>
    
  );
}

