export default function TeamSection() {
  const teamMembers = [
    {
      name: "James Nduku",
      role: "Marketing Coordinator",
      image: "/imge/person1.png",
      socialIcons: {
        linkedin: "/imge/linkdin.png",
        twitter: "/imge/twetter.png",
        dribbble: "/imge/circle.png",
      },
    },
    {
      name: "Joseph Munyambu",
      role: "Nursing Assistant",
      image: "/imge/person2.png",
      socialIcons: {
        linkedin: "/imge/linkdin.png",
        twitter: "/imge/twetter.png",
        dribbble: "/imge/circle.png",
      },
    },
    {
      name: "Joseph Ngumbau",
      role: "Medical Assistant",
      image: "/imge/person3.png",
      socialIcons: {
        linkedin: "/imge/linkdin.png",
        twitter: "/imge/twetter.png",
        dribbble: "/imge/circle.png",
      },
    },
    {
      name: "Erick Kipkemboi",
      role: "Web Designer",
      image: "/imge/person4.png",
      socialIcons: {
        linkedin: "/imge/linkdin.png",
        twitter: "/imge/twetter.png",
        dribbble: "/imge/circle.png",
      },
    },
    {
      name: "Stephen Kerubo",
      role: "President of Sales",
      image: "/imge/person5.png",
      socialIcons: {
        linkedin: "/imge/linkdin.png",
        twitter: "/imge/twetter.png",
        dribbble: "/imge/circle.png",
      },
    },
    {
      name: "John Leboo",
      role: "Dog Trainer",
      image: "/imge/person6.png",
      socialIcons: {
        linkedin: "/imge/linkdin.png",
        twitter: "/imge/twetter.png",
        dribbble: "/imge/circle.png",
      },
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <h1 className="text-4xl font-bold text-center mb-2">Our Team</h1>
        <p className="text-center text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
            >
              {/* Member Image */}
              <div className="w-32 h-32 bg-gray-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Member Name and Role */}
              <div>
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-4">
                <a href="#">
                  <img
                    src={member.socialIcons.linkedin}
                    alt="LinkedIn"
                    className="w-6 h-6"
                  />
                </a>
                <a href="#">
                  <img
                    src={member.socialIcons.twitter}
                    alt="Twitter"
                    className="w-6 h-6"
                  />
                </a>
                <a href="#">
                  <img
                    src={member.socialIcons.dribbble}
                    alt="Dribbble"
                    className="w-6 h-6"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
