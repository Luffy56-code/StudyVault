
const Hero = () => {
  return (
    <div className='px-4 w-full' >
        <div className='flex max-w-3xl gap-3 lg:w-full mx-auto  flex-col items-center text-center'>
            <h1 className='text-foreground text-5xl font-semibold'>Your notes. Your papers. One smart search.</h1>
            <p className='text-muted text-lg'>Never scroll folders again — just ask. Upload notes & question papers once. Find anything using a simple prompt.</p>
            <div className="flex flex-col md:flex-row gap-2">
                <button className="text-accent-text text-sm cursor-pointer  hover:bg-accent-hover bg-accent px-3 py-2 rounded-md">Get Started For Free</button>
                <button className="text-accent-text text-sm cursor-pointer bg-accent rounded-md  hover:bg-accent-hover px-3 py-2">Try AI Search Demo</button>
            </div>
        </div>
    </div>
  );
}

export default Hero;
