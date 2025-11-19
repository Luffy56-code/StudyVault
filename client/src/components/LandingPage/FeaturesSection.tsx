
import FeatureCard from './FeatureCard';
import { AiOutlineBulb, AiOutlineCloudUpload, AiOutlineDashboard, AiOutlineRobot, AiOutlineShareAlt, AiOutlineTags } from 'react-icons/ai';

const FeaturesSection = () => {
  return (
    <div className='mt-10 '>
      <div className='max-w-5xl w-screen mx-auto'>
        <h1 className='text-center text-3xl'>Organize study life effortlessly. AI powered search for students.</h1>
        <div className='flex flex-wrap'>
          <FeatureCard
            icon={<AiOutlineRobot className='text-background bg-accent text-2xl' />}
            title="AI-Powered Search"
            body="Ask in plain language. Find notes, papers & chapters instantly."
          />

          <FeatureCard
            icon={<AiOutlineTags className='text-background bg-accent text-2xl' />}
            title="Auto-Tagging System"
            body="Uploads are automatically organized by semester, unit, chapter & exam type."
          />

          <FeatureCard
            icon={<AiOutlineCloudUpload className='text-background bg-accent text-2xl' />}
            title="Smart Uploads"
            body="Upload notes & papers with clean auto-naming suggestions."
          />

          <FeatureCard
            icon={<AiOutlineShareAlt className='text-background bg-accent text-2xl' />}
            title="One-Click Share Links"
            body="Share study files securely with classmates — no manual searching."
          />

          <FeatureCard
            icon={<AiOutlineDashboard className='text-background bg-accent text-2xl' />}
            title="Organized Study Dashboard"
            body="A clean hub showing subjects, exams, semesters & recent uploads."
          />

          <FeatureCard
            icon={<AiOutlineBulb className='text-background bg-accent text-2xl' />}
            title="Smart Study Assist"
            body="Get summaries, questions & quick revision suggestions from your files."
          />

        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
