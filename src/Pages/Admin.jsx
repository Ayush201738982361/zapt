import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { supabase } from "../supabase-client";

function Admin() {
  const [adminSession, setAdminSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [difficultyOpen, setDifficultyOpen] = useState(false);
  const [difficulty, setDifficulty] = useState("Options");

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setAdminSession(data.session);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"></div>
        <h2 className="text-zinc-900 dark:text-white mt-4">Loading...</h2>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <section className="mt-20">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-8">
          <div className="xl:mx-auto xl:w-full shadow-md p-4 xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-center text-2xl font-bold leading-tight text-white">
              Hi {adminSession?.user?.user_metadata?.username}
            </h2>

            <form className="mt-8">
              <div className="space-y-5">
                <div>
                  <label className="text-base font-medium text-purple-500">
                    Title
                  </label>
                  <input
                    type="text"
                    placeholder="Question Title"
                    className="mt-2 flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                  />
                </div>

                <div>
                  <label className="text-base font-medium text-purple-500">
                    Question Description
                  </label>
                  <textarea
                    placeholder="Description"
                    className="mt-2 flex h-40 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                  />
                </div>

                <div className="relative">
                  <label className="text-base font-medium text-purple-500">
                    Question Difficulty
                  </label>

                  <button
                    type="button"
                    onClick={() => setDifficultyOpen(!difficultyOpen)}
                    className="mt-2 inline-flex w-full justify-between items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/20"
                  >
                    {difficulty}
                    <svg
                      className="size-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {difficultyOpen && (
                    <div className="absolute z-10 mt-2 w-full rounded-md bg-gray-800 shadow-lg">
                      <button
                        type="button"
                        onClick={() => {
                          setDifficulty("Easy");
                          setDifficultyOpen(false);
                        }}
                        className="block w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-white/10"
                      >
                        Easy
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setDifficulty("Medium");
                          setDifficultyOpen(false);
                        }}
                        className="block w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-white/10"
                      >
                        Medium
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setDifficulty("Hard");
                          setDifficultyOpen(false);
                        }}
                        className="block w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-white/10"
                      >
                        Hard
                      </button>
                    </div>
                  )}
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
