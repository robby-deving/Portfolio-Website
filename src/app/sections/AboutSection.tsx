export default function AboutSection() {
    return (
        <div className="w-full flex flex-col items-center py-20"> 
        
            <h2 className="text-4xl font-bold">About Me</h2>

            <div className="flex items-center">
                <div className="flex-1">
                    <p className="text-lg text-center max-w-xl">
                       Hello! I'm a passionate developer who loves bringing ideas to life on the web. My core mission is to create beautiful, highly functional, and scalable web applications that offer an intuitive user experience.

I'm driven by the process of turning complex challenges into clean, elegant code, and I thrive on working across diverse, modern technologies to deliver high-quality products.
                    </p>
                </div>
        
                <div className="flex-1">
                    <img src="/aboutImage.png" alt="" className="max-h-[50rem]" />
                </div>
            </div>
        </div>
    );
}