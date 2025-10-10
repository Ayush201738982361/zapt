import Button from "./Button";
import { LuBrainCircuit } from "react-icons/lu";

function Card() {
  return (
    <div className="flex flex-col bg-white rounded-2xl max-w-sm mx-auto shadow-2xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
      <div className="px-6 py-8 sm:p-10 sm:pb-6">
        <div className="grid items-center justify-center grid-cols-1 text-center">
          <div className="flex justify-center mb-4">
            <LuBrainCircuit className="w-12 h-12 text-purple-500" />
          </div>
          <div>
            <h2 className="text-lg font-medium tracking-tighter text-gray-900 lg:text-3xl">
              Category Based Practice
            </h2>
            <p className="mt-4 text-gray-600 text-sm">
              Master concepts through organized category-based learning.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center px-6 pb-8 sm:px-8">
        <Button text={"Learn more"} />
      </div>
    </div>
  );
}
export default Card;
