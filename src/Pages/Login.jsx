import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import toast, { Toaster } from "react-hot-toast";
import { supabase } from "../supabase-client";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sucessToast = () => toast.success("Login sucessfull");
  const errorToast = () => toast.error("Error in Logging in");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      errorToast();
      console.log(error);
      return;
    }
    sucessToast();
    console.log(data);
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
              Login to your account
            </h2>

            <form className="mt-8" method="POST" onSubmit={handleSubmit}>
              <div className="space-y-5">
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
                    Get started
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-3 space-y-3">
              <Link
                to="/signup"
                className="mt-2 flex item-center justify-center text-sm text-white"
              >
                Don't have an account? Create a free account
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Login;
