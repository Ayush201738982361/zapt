import { Navigate, BrowserRouter, Routes, Route } from "react-router-dom";
import { supabase } from "./supabase-client";
import { useState, useEffect } from "react";
import { ButtonContext } from "./Contexts/ButtonContext";
import LogicalReasoning from "./Pages/LogicalReasoning";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Admin from "./Pages/Admin";

function App() {
  const [admin, isAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [ButtonText] = useState("Default");

  useEffect(() => {
    const checkAdmin = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (!error && data.user) {
        isAdmin(data.user.user_metadata?.role === "admin");
      } else {
        isAdmin(false);
      }
      setLoading(false);
    };

    checkAdmin();
  }, []);

  if (loading) {
    return (
      <div class="text-center mt-5">
        <div class="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"></div>
        <h2 class="text-zinc-900 dark:text-white mt-4">Loading...</h2>
      </div>
    );
  }

  return (
    <>
      <ButtonContext.Provider value={{ ButtonText }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/logical-reasoning" element={<LogicalReasoning />} />
            <Route
              path="/admin"
              element={
                admin === true ? <Admin /> : <Navigate to="/login" replace />
              }
            />
          </Routes>
        </BrowserRouter>
      </ButtonContext.Provider>
    </>
  );
}

export default App;
