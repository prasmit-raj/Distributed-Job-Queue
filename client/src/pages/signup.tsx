import { Link } from "react-router-dom";
function Signup(){
    return (
         <div>
            <h1>Signup </h1>

            <form>
              <label  htmlFor="username">Username:</label> 
              <input type="text" placeholder="enter username" />
              <br /><br   />
              <label htmlFor="email">Email:</label>
              <input type="email" placeholder="enter email" />
              <br /><br   />
              <label htmlFor="password">Password:</label>
              <input type="password" placeholder="enter password" />
              <br /><br   />
            </form>

            <h3>Already have an account? <Link to="/login">Login</Link> </h3>
        </div>
    );
 }

 export default Signup;