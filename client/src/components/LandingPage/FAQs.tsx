import { faqs } from "../../data/faqs";
import FAQComponent from "./FAQComponent";

const FAQs  = () => {
  return (
    <div className="mt-25 px-4 w-full">
        <div className="max-w-5xl w-full mx-auto flex flex-col items-center gap-10">
            <p className="text-4xl font-semibold">Frequently Asked Questions</p>
            <div className="flex flex-col gap-5 w-full items-center">
                {faqs.map((faq)=>{
                  return <FAQComponent question={faq.question} answer={faq.answer}/>
                })}
            </div>
        </div>
    </div>
  );
}

export default FAQs;
