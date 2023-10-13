import { useParams } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { AiTwotoneStar } from "react-icons/ai";
import data from "./../data/CA.json";
import Button from "../components/Button";
import Recommendation from "../components/Recommendation";

// {
//   "id": 10,
//   "name": "Prospect Peak Financials",
//   "charge": "$145/hr",
//   "description": "With a team of seasoned experts, Prospect Peak Financials ensures transparent and ethical financial solutions tailored to individual business needs.",
//   "rating": 4.9,
//   "image": "https://images.unsplash.com/photo-1579637305941-57a5d3807b1d?fit=crop&w=800&q=80"
// }

function CaInfo() {
  const { searchInfo } = useParams();
  const searchQuery = searchInfo.toLowerCase();
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery)
  );
  console.log(filteredData);
  return (
    <div className="min-h-screen ">
      <div className="flex justify-between gap-12">
        <div className="flex flex-wrap pt-[8rem]">
          <div className="max-w-[40%] px-12">
            <h2 className="font-semibold text-3xl">{filteredData[0]?.name}</h2>
            <p className="my-4">
              I am here to provide my expertise in accounting and finance, which
              includes financial statements, economics, and auditing, all to
              assist you effectively
            </p>
            <div className="flex items-center  pb-6">
              <span className="flex gap-1 items-center text-blue-400">
                <AiTwotoneStar />
                <span className="font-semibold ">{filteredData[0].rating}</span>
              </span>
              <span>(89)</span>
            </div>
            <div className="flex flex-col gap-6 bg-gray-50 p-4 rounded-xl shadow-md shadow-gray-300 my-4">
              <div className="flex justify-between">
                <p>Basic to complex tasks</p>
                <span className="font-semibold text-lg">₹4,370</span>
              </div>
              <div className="flex items-center justify-start gap-2 ">
                <span className="text-blue-400">
                  <SlCalender />
                </span>
                <p>Delivers the job within 2 days</p>
              </div>
              <div className="flex items-center gap-2 justify-around">
                <Button type="blue" btnStyle={"w-full"}>
                  Request Proposal
                </Button>
                <Button btnStyle={"w-full"}>Chat with me</Button>
              </div>
            </div>
            <div className="flex flex-col gap-6 bg-gray-50 p-4 rounded-xl shadow-md shadow-gray-300 my-4">
              <h2 className="font-semibold text-3xl">What people say?</h2>
              <p>
                I cannot express enough gratitude for the support Micheal has
                provided in managing my personal finances. Their attention to
                detail and deep understanding of financial markets has ensured
                that my investments are in safe hands. I highly recommend their
                services to anyone seeking financial guidance.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 ">
            <img
              className="w-[90%] rounded-xl overflow-hidden shadow-sm shadow-gray-300"
              src={
                filteredData[0].img ||
                "https://images.unsplash.com/photo-1556740772-1a741367b93e?fit=crop&w=800&q=80"
              }
              alt="Profile"
            />
            <h2 className="font-semibold text-3xl my-6">
              About {filteredData[0]?.name}
            </h2>
            <div className="flex items-center gap-[8rem]">
              <div>
                <p className="text-sm font-semibold text-gray-400 mb-4">FROM</p>
                <p>INDIA</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-400 mb-4">
                  PARTNER SINCE
                </p>
                <p>2011</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-400 mb-4">
                  AVERAGE RESPONSE TIME
                </p>
                <p>30 minutes</p>
              </div>
            </div>
            <div className="my-4">
              <p className="text-sm font-semibold text-gray-400 ">About</p>
              <p>
                I am a Professional Chartered Accountant here to offer
                professional services of accounting and finance, financial
                statements, bookkeeping at an affordable price.
              </p>
            </div>
            <div className="flex gap-[10rem] my-4">
              <div>
                <p className="text-sm font-semibold text-gray-400 ">
                  SERVICES I OFFER
                </p>
                <ul className="list-disc">
                  <li>Financial accounting</li>
                  <li>Financial statements</li>
                  <li>Bookkeeping</li>
                  <li>Accounting and finance</li>
                  <li>Corporate Finance</li>
                  <li>Maintain Charts of Accounts</li>
                  <li>Profit and loss statements</li>
                  <li>Bank Reconciliation</li>
                  <li>Balance Sheets</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-400 ">WHY ME?</p>
                <ul className="list-disc">
                  <li>One-time delivery</li>
                  <li>24/7 customer support</li>
                  <li>Error-free documents</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Recommendation />
    </div>
  );
}

export default CaInfo;
