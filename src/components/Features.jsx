import Heading from "./Heading";

function Features() {
  return (
    <div className="flex flex-wrap justify-between items-center min-h-screen p-8">
      <div className="w-full md:w-1/2 p-4">
        <Heading className="text-3xl font-semibold ">
          <span className="customTextGradient">All-in-One</span> platform that
          Makes Easier
        </Heading>
        <p className=" text-2xl my-6">
          We are more than a platform; We are your success partner. Discover our
          services to achieve your business and educational goals.
        </p>
        <div className="mt-4 grid grid-cols-2">
          <div className="flex items-center justify-center w-[16rem] m-4">
            <img src="search.svg" alt="" className="w-12 h-12 mr-2" />
            <p>
              <span className="font-semibold">SEARCH</span> for vital company
              information
            </p>
          </div>

          <div className="flex items-center justify-center w-[16rem] m-4">
            <img src="connect.svg" alt="" className="w-12 h-12 mr-2" />
            <p>
              <span className="font-semibold">CONNECT</span> with the resources
              to meet your business needs
            </p>
          </div>

          <div className="flex items-center justify-center w-[16rem] m-4">
            <img src="research.svg" alt="" className="w-12 h-12 mr-2" />
            <p>
              <span className="font-semibold">RESEARCH</span> and generate
              reports that drive growth
            </p>
          </div>

          <div className="flex items-center justify-center w-[16rem] m-4">
            <img src="academy.svg" alt="" className="w-12 h-12 mr-2" />
            <p>
              <span className="font-semibold">ACADEMY</span> to give you the
              skills for success in your career
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-4 mt-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 ">
              <img src="features-1.svg" className="ml-12" alt="Image 1" />
              <img src="features-2.svg" className="ml-8" alt="Image 1" />
              <img src="features-3.svg" className="ml-4" alt="Image 1" />
            </div>
            <div className="flex flex-col gap-2 relative ">
              <img src="features-4.svg" alt="Image 1" />
              <img
                src="features-5.svg"
                alt="Image 1"
                className="ml-[4rem] w-[8rem] absolute right-0 top-12"
              />
            </div>
          </div>
          <img src="features-7.svg" alt="Image 1" />
        </div>
        <img src="features-6.svg" className="mb-12" alt="Image 2" />
      </div>
    </div>
  );
}

export default Features;
