function Card({ number, heading, description, dueDate, penalty }) {
  return (
    <div className="mx-auto w-[25rem] p-6  rounded-3xl bg-white shadow-lg h-[16rem] relative">
      <div className="absolute customBgColor rounded-lg p-2 text-white font-semibold top-[-5px] left-[-5px]">
        {number}
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold text-center text-gray-800 ">
          {heading}
        </h2>
        <p className="text-gray-600 mt-2  text-sm text-center">{description}</p>
      </div>
      <div className="mt-4">
        <div className="flex  justify-center text-left bg-gray-100 p-2 rounded-xl">
          <div className="w-full">
            <h2 className="text-md font-semibold text-blue-600">Due Date</h2>
            <p className="text-gray-600"> {dueDate} </p>
          </div>
          <div className="w-full h-[5rem]">
            <h2 className="text-md font-semibold text-pink-400">
              Penalty Fees
            </h2>
            <ul className="text-gray-600 ">
              {penalty.map((item, key) => (
                <li key={key} className="text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
