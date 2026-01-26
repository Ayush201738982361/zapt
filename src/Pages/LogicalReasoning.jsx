import { supabase } from "../supabase-client";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";

function LogicalReasoning() {
  const [questionData, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from("logical_reasoning")
        .select("question_title,difficulty");

      if (error) {
        // Add toast later
        console.log("Error in fetching data:", error);
      }

      setData(data);
    }

    fetchData();
  }, []);

  // console.log(questionData);

  return (
    <div className="w-full p-4">
      <div className="mb-10">
        <Navbar />
      </div>
      <div className="relative flex flex-col mx-auto max-w-2x2 overflow-hidden text-white bg-black shadow-md rounded-xl bg-clip-border border border-slate-800">
        <table className="w-full text-left table-auto">
          <thead>
            <tr className="border-b border-slate-700 bg-slate-800/50">
              <th className="p-3">
                <p className="block font-sans text-xs antialiased font-semibold uppercase leading-none text-slate-400">
                  Problems
                </p>
              </th>
              <th className="p-3">
                <p className="block font-sans text-xs antialiased font-semibold uppercase leading-none text-slate-400">
                  Difficulty
                </p>
              </th>
              <th className="p-3">
                <p className="block font-sans text-xs antialiased font-semibold uppercase leading-none text-slate-400">
                  Problem Status
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-slate-800/30 transition-colors">
              <td className="p-3 border-b border-slate-800">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-slate-200">
                  <a href="#">
                    {questionData.map((x) => {
                      return x.question_title;
                    })}
                  </a>
                </p>
              </td>
              <td className="p-3 border-b border-slate-800">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-slate-200">
                  {questionData.map((x) => {
                    return x.difficulty;
                  })}
                </p>
              </td>
              <td className="p-3 border-b border-slate-800">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-slate-200">
                  Solved/Unsolved
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LogicalReasoning;
