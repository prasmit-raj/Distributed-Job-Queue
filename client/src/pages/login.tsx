import { Link } from "react-router-dom";
function LoginPage(){
    return (
        <div className=" flex align-center justify-center h-screen">
            <h1>Login </h1>

            <form>
              <label  htmlFor="username">Username:</label> 
              <input type="text" placeholder="enter username" />
            <br /><br   />
              <label htmlFor="password">Password:</label>
              <input type="password" placeholder="enter password" />

            </form>
            <h3>Dont have an account? <Link to="/signup">Sign up</Link> </h3>


        </div>
    );
}

export default LoginPage;