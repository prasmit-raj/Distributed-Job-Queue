
import { Routes, Route} from "react-router-dom";

import Login from "../pages/login/login";
import LoginOTP from "../pages/login/loginotp";

function AppRoutes() {
  return (
    
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/loginotp" element={<LoginOTP />} />
    </Routes>
   
  );
}

export default AppRoutes;