export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "James Nduku",
      role: "Software Developer",
      image: "/imge/person1.png",
      rating: 5,
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    },
    {
      name: "Erick Kipkemboi",
      role: "Scrum Master",
      image: "/imge/person2.png",
      rating: 5,
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    },
    {
      name: "Stephen Kerubo",
      role: "UI/UX Designer",
      image: "/imge/person3.png",
      rating: 5,
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    },
  ];
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <h2 className="text-5xl font-bold text-left mb-10">
          Customer testimonials
        </h2>
        <p className="text-left text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className=" border-black border -lg p-6 flex flex-col items-center"
            >
              {/* Star Ratings */}
              <div className="flex mb-10">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-black-500">&#9733;</span>
                ))}
              </div>

              {/* Feedback */}
              <p className="text-sm text-black-600 mb-4">
                "{testimonial.feedback}"
              </p>

              {/* Profile Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-md font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-black-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


  
  