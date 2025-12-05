import { useState, type FormEvent } from "react";
import Auth from "../features/authentication/component/Auth";
import { RiAdminFill } from "react-icons/ri";
import { Link } from "react-router-dom";


const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <div className="h-screen flex justify-center items-center">
            <form className="max-w-md w-full" onSubmit={handleSubmit}>
                <div className="w-full p-4 border-3 border-card rounded-xl bg-card text-card-foreground">
                    <div className="flex flex-col w-full gap-3">
                        <div className="flex justify-center items-center gap-3 text-xl">
                            <p className="font-semibold">Signup</p>
                            <RiAdminFill />
                        </div>
                        <input className="p-2 border-3 border-border rounded-lg bg-card focus:outline-none" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} />
                        <Auth email={email} password={password} onEmailChange={setEmail} onPasswordChange={setPassword} />
                        <button className="cursor-pointer bg-accent text-accent-text hover:bg-accent-hover p-2 rounded-xl">Submit</button>
                        <div className="flex text-sm gap-2">
                            <p className="font-light">Already have an account?</p>
                            <Link to="/login" className="text-accent hover:text-accent-hover">
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Signup;
