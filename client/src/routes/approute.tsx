
import { Routes, Route} from "react-router-dom";

import Login from "../pages/login/login";
import LoginOTP from "../pages/login/loginotp";
import Signup from "../pages/signup/signup";

function AppRoutes() {
  return (
    
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/loginotp" element={<LoginOTP />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
   
  );
}

export default AppRoutes;