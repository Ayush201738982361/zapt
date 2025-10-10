import { LuBrainCircuit } from "react-icons/lu";
import { MdOutlineFeedback } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { IoSpeedometerSharp } from "react-icons/io5";

const card = [
  {
    icon: <LuBrainCircuit className="w-12 h-12 text-purple-500" />,
    heading: "Topic Practice",
    subheading: "Master concepts through organized category-based learning.",
  },
  {
    icon: <MdOutlineFeedback className="w-12 h-12 text-purple-500" />,
    heading: "Instant Feedback",
    subheading:
      "Get real-time results and explanations to learn from your mistakes instantly.",
  },
  {
    icon: <IoSpeedometerSharp className="w-12 h-12 text-purple-500" />,
    heading: "Adaptive Difficulty",
    subheading:
      "Questions adjust to your skill level to keep your practice challenging and engaging.",
  },
  {
    icon: <GiProgression className="w-12 h-12 text-purple-500" />,
    heading: "Track Your Progress",
    subheading:
      "Monitor your performance with detailed reports and score analytics.",
  },
];

function Card() {
  return (
    <div className="flex gap-3 flex-row">
      {card.map((x, i) => {
        return (
          <>
            <div
              key={i}
              className="flex flex-col bg-white rounded-2xl max-w-sm mx-auto shadow-2xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
            >
              <div className="px-6 py-8 sm:p-10 sm:pb-6">
                <div className="grid items-center justify-center grid-cols-1 text-center">
                  <div className="flex justify-center mb-4">{x.icon}</div>
                  <div>
                    <h2 className="text-lg font-medium tracking-tighter text-gray-900 lg:text-3xl">
                      {x.heading}
                    </h2>
                    <p className="mt-4 text-gray-600 text-sm">{x.subheading}</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center px-6 pb-8 sm:px-8">
                <a className="mt-4 text-purple-900 text-sm" href="#">
                  Learn More
                </a>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
export default Card;
