import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../pages/login/login";
import { Signup } from "../pages/signup/signup";
import { Home } from "../pages/Home/home";
import { InitialPage } from "../pages/InitialPage/initial-Page";
import { Profile } from "../pages/profile/profile";

function App() {
  return (
    <Router>
      {/* Route configuration */}
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
