import { FaBrain } from "react-icons/fa";
import { TbMath } from "react-icons/tb";
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import { SiGrammarly } from "react-icons/si";

function Categories() {
  const categories = [
    {
      icon: <FaBrain />,
      heading: "Logical Reasoning",
      subheading:
        "Sharpen your problem-solving skills with puzzles and pattern-based questions.",
    },
    {
      icon: <TbMath />,
      heading: "Quantitative Aptitude",
      subheading:
        "Strengthen your mathematical ability with arithmetic, algebra, and data questions.",
    },
    {
      icon: <IoExtensionPuzzleSharp />,
      heading: "Puzzles & Brainteasers",
      subheading:
        "Challenge your mind with fun logic puzzles that boost creative thinking.",
    },
    {
      icon: <SiGrammarly />,
      heading: "Verbal Ability",
      subheading:
        "Enhance your grammar, vocabulary, and comprehension to communicate effectively.",
    },
  ];
  return (
    <>
      <section className="flex flex-col items-center justify-center h-[50vh] bg-black text-center -mt-10">
        <h3 className="text-4xl sm:text-6xl font-extrabold text-purple-700 tracking-tight">
          Practice Aptitude Questions Sorted By Category
        </h3>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 pb-16">
        {categories.map((x, i) => {
          return (
            <div
              key={i}
              className="flex flex-col bg-white rounded-2xl max-w-sm mx-auto shadow-2xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
            >
              <div className="px-6 py-8 sm:p-10 sm:pb-6">
                <div className="grid items-center justify-center grid-cols-1 text-center">
                  <div className="flex justify-center mb-4 text-5xl text-purple-600">
                    {x.icon}
                  </div>
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
                  Start
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Categories;
