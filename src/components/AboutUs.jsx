import Card from "./Card";
import Heading from "./Heading";

function AboutUs() {
  return (
    <div className="min-h-screen mt-[6rem] shadow-sm shadow-blue-200">
      <Heading customStyle={"text-center my-2"}>
        Want to <span className="customTextGradient">join</span> us ?
      </Heading>
      <p className="text-center text-2xl p-4 ">
        To remain with us, it is essential that you diligently follow the steps
        provided
      </p>
      <div className="grid grid-cols-3 gap-4 p-8 bg-hero_pattern mt-12 max-[600px]:grid-cols-1 ">
        <Card
          number={"1st"}
          heading={"Commencement of business "}
          description={
            "Invested shareholders must confirm payment and office address "
          }
          dueDate={"Within 180 days "}
          penalty={["₹50,000 for the company", "₹1,000 /day for directors"]}
        />

        <Card
          number={"2nd"}
          heading={"Auditor Appointment"}
          description={
            "Company informs new auditor and submits ADT.1 form to ROC."
          }
          dueDate={"Within 30 days "}
          penalty={["₹300 per month"]}
        />

        <Card
          number={"3rd"}
          heading={"DIN eKYC"}
          description={
            "Directors share personal information for identification & verification "
          }
          dueDate={"Every year"}
          penalty={["₹5000 one time"]}
        />

        <Card
          number={"4th"}
          heading={"DPT-3"}
          description={
            "Companies report money taken from people to ROC; auditors confirm details."
          }
          dueDate={"Within 30 days"}
          penalty={["₹300 per month."]}
        />

        <Card
          number={"5th"}
          heading={"MCA Form AOC-4"}
          description={
            "It's like an official report card for a company's documents"
          }
          dueDate={"On or Before 30th November"}
          penalty={["₹200 per day (No upper limit)*"]}
        />

        <Card
          number={"6th"}
          heading={"MCA Form MGT-7"}
          description={
            "Companies must annually report activities and finances to the registrar."
          }
          dueDate={"On or Before 31st December"}
          penalty={["₹200 per day(No upper limit)* "]}
        />
      </div>
      <p className="text-left text-md p-8">
        * For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200{" "}
        <span className="font-semibold"> every day </span>until you file the
        form . There is no maximum penalty amount. So, if you don&apos;t file
        the form for a year, you will owe ₹73,000 per form
      </p>
    </div>
  );
}

export default AboutUs;
