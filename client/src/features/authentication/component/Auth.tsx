import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

interface AuthProps {
    email: string;
    password: string;
    onEmailChange: (value: string) => void;
    onPasswordChange: (value: string) => void;
}

const Auth = ({ email, password, onEmailChange, onPasswordChange }: AuthProps) => {
    const [hidePassword, setHidePassword] = useState(true);

    const toggleIcon = () => setHidePassword((prev) => !prev);

    return (
        <div className='flex flex-col w-full gap-3'>
            
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => onEmailChange(e.target.value)}
                className="p-2 border-3 border-border rounded-lg bg-card focus:outline-none"
            />

            <div className="relative w-full">
                <input
                    type={hidePassword ? "password" : "text"}   
                    placeholder="Password"
                    value={password}
                    onChange={(e) => onPasswordChange(e.target.value)}
                    className="p-2 pr-10 w-full border-3 border-border rounded-lg bg-card focus:outline-none"
                />

                <span 
                    className="absolute right-3 top-3 text-xl cursor-pointer"
                    onClick={toggleIcon}
                >
                    {hidePassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </span>
            </div>

        </div>
    );
};

export default Auth;
