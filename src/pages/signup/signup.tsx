import { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useCreateUser } from "../../hooks/useSignup";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { createUser, isLoading, error } = useCreateUser();

  const handleSubmit = async () => {
    const success = await createUser({ name, email, password });

    if (success) {
      alert("User created successfully!");
      navigate("/login");
    } else if (error) {
      alert(error);
    }
  };
  //do the registration logic
  return (
    <>
      <main className="bg-primary-bg min-h-screen pb-4 px-2">
        <div className="flex items-start pt-3 px-1">
          <button onClick={() => navigate("/")} className="bg-transparent">
            <IoMdArrowRoundBack size={40} color="#009DA2" />
          </button>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <img src="../../assets/Logo.png" alt="" />
          <span className="text-primary-text-color text-h3 font-bold ">
            Join Us!
          </span>
        </div>
        <section className="flex flex-col m-4 gap-4">
          <div className="flex flex-col gap-3">
            <span className="text-primary-text-color text-input-label font-bold">
              Name
            </span>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="px-5 py-2 rounded-lg outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-primary-text-color text-input-label font-bold">
              Email
            </span>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-5 py-2 rounded-lg outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <div className="error-message">{error}</div>}
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-primary-text-color text-input-label font-bold">
              Password
            </span>
            <input
              type="password"
              placeholder="Enter Your Email"
              className="px-5 py-2 rounded-lg outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            onClick={handleSubmit}
            className="bg-primary-button py-3 mt-6 rounded-xl hover:bg-button-hover-color"
          >
            <span className="text-primary-text-color font-bold text-base">
              {isLoading ? "Signing up..." : "Signup"}
            </span>
          </button>
        </section>
        <div className="flex items-center justify-center">
          <span className="text-primary-text-color font-bold text-base">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              className="bg-transparent p-0"
            >
              <span className="text-secondary-text-color underline hover:text-hover-text-color">
                Login
              </span>
            </button>
          </span>
        </div>
      </main>
    </>
  );
};
