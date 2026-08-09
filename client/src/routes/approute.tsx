
import { Routes, Route} from "react-router-dom";

import Login from "../pages/login/login";
import LoginOTP from "../pages/login/loginotp";
import Signup from "../pages/signup/signup";
import SignupOTP from "../pages/signup/signupotp";

import Forgetpassword from "../pages/forgetpassword/forgetpassword";
import ForgetpasswordOTP from "../pages/forgetpassword/enterotp";
import Resetpassword from "../pages/forgetpassword/resetpassword";

import Dashboard from "../pages/dashboard/dashboard";

function AppRoutes() {
  return (
    
    <Routes>
      <Route path="/" element={<Login />} />
   
      <Route path="/signup" element={<Signup />} />

              <Route path="/forgetpassword" element={<Forgetpassword />} />
      <Route path="/enterotp" element={<ForgetpasswordOTP />} />
      <Route path="/resetpassword" element={<Resetpassword />} />

         <Route path="/loginotp" element={<LoginOTP />} />
      <Route path="/signupotp" element={<SignupOTP />} />

      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
   
  );
}

export default AppRoutes;