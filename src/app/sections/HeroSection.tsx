import TextPressure from "@/components/TextPressure";

export default function HeroSection() {
    return (
        <div className="w-full flex flex-col items-center gap-8">
            <div className="border border-[#45FFBE] rounded-2xl px-5 py-1" >
                <h2 className="text-white/70">Hello! I'm</h2>
            </div>
            <div style={{position: 'relative'}} className="py-10">
                <TextPressure
                text="John robert rodejo"
                flex={true}
                alpha={false}
                stroke={false}
                width={false}
                weight={true}
                italic={true}
                textColor="#ffffff"
                strokeColor="#ff0000"
                minFontSize={120}
                />
            </div>
            <div className="max-w-2xl text-center text-white/70 space-y-4">
            <p>A Full-Stack Engineer who connects the dots between great design and powerful functionality. I specialize in delivering end-to-end solutions that drive performance and user engagement. Let's create something impactful.</p>
            </div>
            <div className="pt-4">
                <a href="#contact" className="
                bg-gradient-to-r 
                from-[#00ffa6cc] 
                via-[#45ffbecc] 
                to-[#00da8ecc] 
                text-white 
                py-3 
                px-5 
                rounded-full 
                font-semibold 
                transition-all 
                duration-300 
                ease-in-out 
                shadow-lg 
                shadow-transparent 
                hover:shadow-green-500/50 
                hover:shadow-[0_0_25px_rgba(69,255,190,0.8)]
                hover:scale-105 
                inline-block
                ">
                Get in Touch
                </a>
            </div>
        </div>
    )
}