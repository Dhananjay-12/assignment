import { useState } from "react";
import Button from "./Button";
import Heading from "./Heading";
import { useNavigate } from "react-router-dom";

function Hero() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!searchInput) {
      alert("Field cannot be empty!");
    } else {
      navigate(`/caInfo/${searchInput}`);
    }
  }

  const customBackground = {
    background:
      "linear-gradient(74.71deg, #FEDDEE 0%, #FCF6FC 31.77%, #C5EAED 64.58%, #FDDDFE 100%)",
  };

  return (
    <div className="min-h-screen bg-transparent relative">
      <div
        className="h-[110vh] relative skew-y-[-6deg] top-[-8rem] z-[-10] sm:w-full max-[600px]:skew-y-[0] "
        style={customBackground}
      ></div>
      <div className="flex p-4 justify-center absolute top-0 items-center min-h-screen">
        <div className="max-w-2xl p-8 text-center text-gray-800 m-12">
          <Heading customStyle={"text-left"}>
            Find <span className="customTextGradient">partners</span> (CAs)
            available online
          </Heading>
          <p className="mt-4 font-open-sans text-xl font-light leading-6 text-left text-gray-500 max-[600px]:text-md">
            <span className="font-semibold text-gray-500">CONNECT</span> with us
            where your services are listed and visible to a myriad of businesses
            seeking CA&apos;s for compliance support
          </p>
          <div className="mt-8 flex justify-center max-[600px]:flex-col max-[600px]:items-center max-[600px]:gap-4">
            <input
              type="text"
              placeholder="Search by name"
              className="w-full p-4 rounded-l-lg border border-gray-300 bg-white text-gray-800 focus:outline-none"
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <Button
              type="blue"
              btnStyle="rounded-r-lg w-32 p-4"
              onClick={handleSubmit}
            >
              Search
            </Button>
          </div>
        </div>
        <div className="w-1/2 flex gap-4 justify-center max-[600px]:hidden">
          <img
            src="https://images.pexels.com/photos/8472874/pexels-photo-8472874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-[14rem]  object-cover h-[25rem] rounded-2xl shadow-md mt-[160px]  "
          />
          <img
            src="https://images.pexels.com/photos/7552365/pexels-photo-7552365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-[14rem] h-[25rem] object-cover rounded-lg shadow-md mt-[100px]"
          />
          <img
            src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-[14rem] h-[25rem] object-cover rounded-lg shadow-md mt-[160px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
