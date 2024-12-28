import { useNavigate } from "react-router-dom";

export const InitialPage = () => {
  const navigate = useNavigate(); // Hook para navegação programática

  return (
    <div className="flex flex-col justify-center min-h-screen gap-4 bg-primary-bg px-6">
      <div className="flex flex-col gap-7 items-center">
        <img src="../../assets/Logo.png" alt="" />
      </div>
      <div className="flex flex-col gap-4">
        <button
          className="bg-primary-button py-3 rounded-xl hover:bg-button-hover-color"
          onClick={() => navigate("/login")}
        >
          <span className="text-primary-text-color font-bold text-base">
            Access Your Account
          </span>
        </button>
        <button
          className="bg-primary-button py-3 mt-6 rounded-xl hover:bg-button-hover-color"
          onClick={() => navigate("/signup")}
        >
          <span className="text-primary-text-color font-bold text-base">
            Create an Account
          </span>
        </button>
      </div>
    </div>
  );
};
