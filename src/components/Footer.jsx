import FooterOptions from "./FooterOptions";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

function Footer() {
  const bgGradient = {
    background: "linear-gradient(95.74deg, #0076CE -7.82%, #9400D3 143.96%)",
  };

  return (
    <footer className=" text-white" style={bgGradient}>
      <div className="container  mx-auto p-8">
        <div className="flex  flex-wrap justify-between">
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
            <FooterOptions
              heading={"LOGO"}
              list={[
                "India's first platform dedicated to simplifying partner search",
              ]}
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-3/4 flex flex-wrap">
            <div className="w-full md:w-1/2 lg:w-1/5 mb-8">
              <FooterOptions
                heading={"Company"}
                list={["About", "Pricing", "Careers"]}
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/5 mb-8">
              <FooterOptions
                heading={"Solutions"}
                list={["Search", "Connect"]}
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/5 mb-8">
              <FooterOptions heading={"Resources"} list={["Blogs", "Forms"]} />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/5 mb-8">
              <FooterOptions
                heading={"Support"}
                list={["Help", "Contact Us"]}
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/5 mb-8">
              <FooterOptions
                heading={"Legal"}
                list={["Privacy", "Terms", "Accessibility"]}
              />
            </div>
          </div>
        </div>
        <div className="text-center mt-8 border-t-2 pt-2">
          <p className="mb-4">
            Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071,
            Maharashtra
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-white hover:text-gray-300">
              <BsFacebook />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <BsTwitter />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <BsInstagram />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
