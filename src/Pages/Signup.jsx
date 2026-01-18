import { useState } from "react";
import { supabase } from "../supabase-client";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const sucessToast = () => toast.success("Signup sucessfull");
  const errorToast = () => toast.error("Error in signing up");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { username },
      },
    });

    if (error) {
      errorToast();
      return;
    }
    sucessToast();
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <Toaster />
      <section className="mt-20">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-8">
          <div className="xl:mx-auto xl:w-full shadow-md p-4 xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2 flex justify-center"></div>
            <h2 className="text-center text-2xl font-bold leading-tight text-white">
              Create a account for free
            </h2>

            <form
              onSubmit={handleSubmit}
              className="mt-8"
              method="POST"
              action="#"
            >
              <div className="space-y-5">
                <div>
                  <label className="text-base font-medium text-purple-500">
                    Username
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                      placeholder="Username"
                      type="text"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-base font-medium text-purple-500">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder="Email"
                      type="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base font-medium text-purple-500">
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      placeholder="Password"
                      type="password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </div>
                <div className="mt-2 flex item-center justify-center">
                  <button
                    type="submit"
                    className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                  >
                    Create an account
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Signup;
