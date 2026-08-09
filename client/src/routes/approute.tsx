
import { Routes, Route} from "react-router-dom";

import Login from "../pages/login/login";

function AppRoutes() {
  return (
    
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
   
  );
}

export default AppRoutes;