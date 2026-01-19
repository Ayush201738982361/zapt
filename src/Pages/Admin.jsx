import { useState } from "react";
import { supabase } from "../supabase-client";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../Components/Navbar";

function Admin() {
  const sucessToast = () => toast.success("Question entered sucessfully");
  const errorToast = () => toast.error("Error in entering the question");

  // Form Submission States
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");

  const handleSubmit = async function (e) {
    e.preventDefault();
    const slug = title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/[\s-]+/g, "-")
      .replace(/^-+|-+$/g, "");

    const { data, error } = await supabase.from("logical_reasoning").insert([
      {
        question_title: title,
        question_description: description,
        difficulty: difficulty,
        options: {
          optionA,
          optionB,
          optionC,
          optionD,
        },
        correct_answer: correctAnswer,
        slug: slug,
      },
    ]);
    if (error) {
      errorToast();
      console.log(error);
      return;
    }
    sucessToast();
  };

  return (
    <>
      <Navbar />
      <Toaster />
      <section className="mt-20">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-8">
          <div className="xl:mx-auto xl:w-full shadow-md p-4 xl:max-w-sm 2xl:max-w-md">
            <form className="mt-8" onSubmit={handleSubmit}>
              <div className="space-y-5">
                {/* Title */}
                <div>
                  <label className="text-base font-medium text-purple-500">
                    Title
                  </label>
                  <input
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    type="text"
                    placeholder="Question Title"
                    className="mt-2 flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                  />
                </div>

                {/* Description */}

                <div>
                  <label className="text-base font-medium text-purple-500">
                    Question Description
                  </label>
                  <textarea
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    placeholder="Description"
                    className="mt-2 flex h-40 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                  />
                </div>

                {/* Difficulty */}
                <div>
                  <label className="text-base font-medium text-purple-500">
                    Question Difficulty
                  </label>

                  <select
                    className="mt-2 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-gray-400"
                    onChange={(e) => {
                      setDifficulty(e.target.value);
                    }}
                  >
                    <option value="" className="bg-gray-800">
                      Choose The Difficulty
                    </option>
                    <option value="easy" className="bg-gray-800">
                      Easy
                    </option>
                    <option value="medium" className="bg-gray-800">
                      Medium
                    </option>
                    <option value="hard" className="bg-gray-800">
                      Hard
                    </option>
                  </select>
                </div>

                {/* Options */}
                <div>
                  <label className="text-base  font-medium text-purple-500">
                    Question Options
                  </label>

                  <input
                    type="text"
                    placeholder="Option A"
                    onChange={(e) => {
                      setOptionA(e.target.value);
                    }}
                    className="mt-2 flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                  />

                  <input
                    type="text"
                    placeholder="Option B"
                    onChange={(e) => {
                      setOptionB(e.target.value);
                    }}
                    className="mt-2 flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                  />

                  <input
                    type="text"
                    placeholder="Option C"
                    onChange={(e) => {
                      setOptionC(e.target.value);
                    }}
                    className="mt-2 flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                  />

                  <input
                    type="text"
                    placeholder="Option D"
                    onChange={(e) => {
                      setOptionD(e.target.value);
                    }}
                    className="mt-2 flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                  />
                </div>

                {/* Correct Answer */}

                <div>
                  <label className="text-base font-medium text-purple-500">
                    Correct Answer
                  </label>

                  <input
                    type="text"
                    placeholder="Correct Answer"
                    onChange={(e) => {
                      setCorrectAnswer(e.target.value);
                    }}
                    className="mt-2 flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                  />
                </div>

                <div className="mt-2 flex items-center justify-center">
                  <button
                    type="submit"
                    className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5"
                  >
                    Add Question
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Admin;
