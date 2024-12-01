export default function AchievementsSection() {
  const achievements = [
    { number: "+200", label: "Courses" },
    { number: "50K", label: "Mentors" },
    { number: "370k", label: "Students" },
    { number: "100+", label: "Recognition" },
  ];

  return (
    <div className="bg-gray-50">
      {/* First Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 text-center  rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Our Achievements</h1>
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl font-bold text-black-600">{achievement.number}</p>
              <p className="text-black-600">{achievement.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Gap Between Sections */}
      <div className="py-6"></div>

      {/* Second Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 text-center rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Our Achievements</h1>
        <p className="text-black-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl font-bold text-black-600">{achievement.number}</p>
              <p className="text-gray-600">{achievement.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}




  
  