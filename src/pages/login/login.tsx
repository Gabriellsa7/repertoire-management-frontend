import { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useLoginUser } from "../../hooks/useLogin";

import { Toaster, toast } from "react-hot-toast";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { loginUser, error, isLoading } = useLoginUser();

  const handleSubmit = async () => {
    try {
      const success = await loginUser({ email, password });

      if (success) {
        //use a floating notification system
        toast.success("Logged in successfully!", {
          position: "top-right",
          duration: 2000,
        });
        setTimeout(() => {
          navigate("/home");
        }, 2000);
      } else if (error) {
        //use a floating notification system
        toast.error("Invalid email or password", {
          position: "top-right",
          duration: 3000,
        });
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      toast.error("Error logging in. Please try again.", {
        position: "top-right",
        duration: 3000,
      });
    }
  };
  return (
    <>
      <Toaster />
      <main className="bg-primary-bg min-h-screen">
        <div className="flex items-start p-3">
          <button onClick={() => navigate("/")} className="bg-transparent">
            <IoMdArrowRoundBack size={40} color="#009DA2" />
          </button>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <img src="../../assets/Logo.png" alt="" />
          <span className="text-primary-text-color text-h3 font-bold ">
            Welcome Back!
          </span>
        </div>
        <section className="flex flex-col m-7 mt-5 gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-primary-text-color text-input-label font-bold">
              Email
            </span>
            <input
              type="text"
              placeholder="Enter Your Email"
              className="px-5 py-2 rounded-lg outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-primary-text-color text-input-label font-bold">
              Password
            </span>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="px-5 py-2 rounded-lg outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <a href="" className="text-end">
            <span className="text-primary-text-color text-secondary-text">
              Forgot your password?
            </span>
          </a>

          <button
            onClick={handleSubmit}
            className="bg-primary-button py-3 rounded-xl hover:bg-button-hover-color"
          >
            <span className="text-primary-text-color font-bold text-base">
              {isLoading ? "Login..." : "Login"}
            </span>
          </button>
        </section>
        <div className="flex items-center justify-center">
          <span className="text-primary-text-color font-bold text-base">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="bg-transparent p-0"
            >
              <span className="text-secondary-text-color underline hover:text-hover-text-color">
                Sign up
              </span>
            </button>
          </span>
        </div>
      </main>
    </>
  );
};
