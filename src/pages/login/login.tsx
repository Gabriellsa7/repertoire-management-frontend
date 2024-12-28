import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <>
      <main className="bg-primary-bg min-h-screen">
        <div className="flex items-start p-3">
          <button onClick={() => navigate("/")} className="bg-transparent">
            <IoMdArrowRoundBack size={40} color="#009DA2" />
          </button>
        </div>
        <div className="flex flex-col gap-7 items-center">
          <img src="../../assets/Logo.png" alt="" />
          <span className="text-primary-text-color text-h3 font-bold ">
            Welcome Back!
          </span>
        </div>
        <section className="flex flex-col m-7 gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-primary-text-color text-input-label font-bold">
              Email
            </span>
            <input
              type="text"
              placeholder="Enter Your Email"
              className="px-5 py-2 rounded-lg outline-none"
            />
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-primary-text-color text-input-label font-bold">
              Password
            </span>
            <input
              type="password"
              placeholder="Enter Your Email"
              className="px-5 py-2 rounded-lg outline-none"
            />
          </div>
          <a href="" className="text-end">
            <span className="text-primary-text-color text-secondary-text">
              Forgot your password?
            </span>
          </a>

          <button className="bg-primary-button py-3 rounded-xl hover:bg-button-hover-color">
            <span className="text-primary-text-color font-bold text-base">
              Login
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
}

export default Login;
