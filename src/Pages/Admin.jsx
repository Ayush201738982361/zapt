import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { supabase } from "../supabase-client";

function Admin() {
  const [adminSession, setAdminSession] = useState(null);
  const [loading, setLoading] = useState(true);

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

                <div>
                  <label className="text-base font-medium text-purple-500">
                    Question Difficulty
                  </label>

                  <select className="mt-2 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-gray-400">
                    <option value="" className="bg-gray-800">
                      Options
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
