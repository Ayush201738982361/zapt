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
    <>
      {/* Section Header */}
      <section className="flex flex-col items-center justify-center bg-black text-center py-16 px-4">
        <h3 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
          Why Choose Zapt?
        </h3>
        <p className="mt-4 text-gray-400 text-sm sm:text-base max-w-2xl">
          Discover what makes our platform the best choice for mastering your
          skills.
        </p>
      </section>

      {/* Cards Grid */}
      <div className="bg-black py-10 px-4 sm:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {card.map((x, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-white rounded-2xl shadow-lg hover:shadow-purple-500/20 transition-all duration-300 p-8 text-center"
            >
              <div className="mb-4">{x.icon}</div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                {x.heading}
              </h2>
              <p className="mt-3 text-gray-600 text-sm sm:text-base">
                {x.subheading}
              </p>
              <a
                href="#"
                className="mt-5 text-purple-700 text-sm font-medium hover:text-purple-900"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Card;
