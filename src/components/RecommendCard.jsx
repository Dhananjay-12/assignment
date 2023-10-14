import { AiTwotoneStar } from "react-icons/ai";
import Button from "./Button";

function RecommendCard({ name, pricing, rating, reviews }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="mb-2">
        <img
          src="recommend-img.svg"
          alt="Recommendation"
          className="w-full h-auto rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <div className="mb-2 flex justify-between">
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-lg font-semibold">₹{pricing}</p>
        </div>
        <div className="mb-2">
          <p className="text-base">
            I will do business evaluation and corporate services
          </p>
        </div>
        <div className="flex items-center my-4">
          <span className="flex gap-1 items-center text-blue-400">
            <AiTwotoneStar />
            <span className="font-semibold">{rating}</span>
          </span>
          <span className="text-gray-500">({reviews})</span>
        </div>
        <Button type="blue" btnStyle="w-full">
          View services
        </Button>
      </div>
    </div>
  );
}

export default RecommendCard;
