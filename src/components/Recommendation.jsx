import RecommendCard from "./RecommendCard";

function Recommendation() {
  return (
    <div className="p-32">
      <h2 className="font-semibold text-3xl">Recommended for you</h2>
      <div className="flex gap-4">
        <RecommendCard
          name={"Michael Jackson"}
          pricing={"4,370"}
          rating={4.8}
          reviews={89}
        />
        <RecommendCard
          name={"Stevie Wonder"}
          pricing={"4,263"}
          rating={5.0}
          reviews={62}
        />
        <RecommendCard
          name={"Ray Charles"}
          pricing={"2,586"}
          rating={4.3}
          reviews={189}
        />
      </div>
    </div>
  );
}

export default Recommendation;
