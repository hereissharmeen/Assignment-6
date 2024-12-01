import Image from "next/image";
const Hero = () => {
  return (

    <div className="flex flex-col lg:flex-row items-center justify-center w-full h-screen px-8 bg-secondary">
  {/* Left Section */}
  <div className="text-black max-w-lg">
    {/* Heading */}
    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
      Learn new skills online with ease
    </h1>
    {/* Description */}
    <p className="mt-4 text-gray-600 text-lg">
      Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
    </p>
    {/* Buttons */}
    <div className="mt-8 flex flex-wrap gap-4">
      <a
        href="#"
        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 transition duration-300"
      >
        Start learning now
      </a>
      <a
        href="#"
        className="inline-flex items-center justify-center px-6 py-3 border border-gray-900 text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 transition duration-300"
      >
        Explore Courses
      </a>
    </div>
  </div>
         {/* <div className="flex justify-end">
    <Image
      src="/imge/img1.jpg"
      alt="girl pic"
      width={590}
      height={900}
      className="object-cover"
    />
  </div> */}
  <div className="flex justify-end">
        <Image src="/imge/img1.jpg" alt="girl pic" width={500} height={100}
        className="object-cover"/>
        </div>
  </div>
  );
};

export default Hero;




// <div className="bg-white mt-16">
      {/* <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            <span className="block">Learn new skills</span>
            <span className="block">online with ease</span>
          </h2>          <p className="mt-4 text-lg leading-6 text-gray-500">
            Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black"
              >
                Start learning now
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-gray-900 text-base font-medium rounded-md text-gray-900 bg-white"
              >
                Explore Courses
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0 lg:ml-8 flex justify-end items-start relative">
          <img
            className="object-cover"
            src="/imge/img1.jpg"
            alt="Hero Image"
            style={{ height: '100%', maxHeight: '900px', maxWidth: '640px' }} 
          />
        </div>
      </div> */}









