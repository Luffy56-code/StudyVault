import { SiStudyverse } from "react-icons/si";

import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate()
  return (
    <div className="px-6 py-4 mt-10 ">
        <div className="max-w-6xl  mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex gap-2 items-center text-xl text-accent" onClick={()=>navigate('/')}>
                    <SiStudyverse  />
                    <h1 className="cursor-pointer">StudyVault</h1>
            </div>
            <p className="text-muted text-sm">© 2025 CoreDump. All rights reserved.</p>
            <div className="flex text-lg justify-between text-accent gap-3">
                <FaXTwitter className="cursor-pointer"/>
                <FaGithub className="cursor-pointer"/>
            </div>
        </div>
    </div>
  );
}

export default Footer;
