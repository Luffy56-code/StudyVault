import { useState, type FormEvent } from "react";
import { RiAdminFill } from "react-icons/ri";
import Auth from "../features/authentication/component/Auth";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    alert("Email: "+email+" Password: "+password)
  }


  return (
    <div className="h-screen flex justify-center items-center px-4">
     <form onSubmit={handleSubmit} className="max-w-md w-full">
         <div className=" w-full p-4 border-2 border-border rounded-xl bg-card text-card-foreground">
        
        <div className="w-full flex flex-col gap-4">

          <div className="flex justify-center items-center gap-3 text-xl">
            <p className="font-semibold">Login</p>
            <RiAdminFill />
          </div>


          <Auth
            email={email}
            password={password}
            onEmailChange={setEmail}
            onPasswordChange={setPassword}
          />

          <button className="cursor-pointer bg-accent text-accent-text hover:bg-accent-hover p-2 rounded-xl">
            Submit
          </button>

          <div className="flex text-sm gap-2">
            <p className="font-light">Don't have an account?</p>
            <Link to="/signup" className="text-accent hover:text-accent-hover">
              Signup
            </Link>
          </div>

        </div>

      </div>
     </form>
    </div>
  );
};

export default Login;
