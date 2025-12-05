import { MdArrowDownward, MdArrowUpward } from "react-icons/md";

import type { faqComponentProps } from "../../types/landingpage";
import { useState } from "react";
const FAQComponent : React.FC<faqComponentProps> = ({question,answer}) => {
    const [hidden,setHidden] = useState(true)
    const toggleIcon = ()=>{
        setHidden(!hidden)
    }
  return (
    <div className="max-w-3xl w-full bg-card rounded-2xl">
        <div className="flex px-4 py-4 flex-col gap-3">
            <div className="flex justify-between">
                <p className="text-base font-semibold">{question}</p>
                {hidden?<MdArrowDownward onClick={toggleIcon}/>:<MdArrowUpward onClick={toggleIcon}/>}
            </div>
            <div className={`${hidden?'hidden':'flex'}`}>
                <p className="text-sm text-muted">{answer}</p>
            </div>
        </div>
    </div>
  );
}

export default FAQComponent;
