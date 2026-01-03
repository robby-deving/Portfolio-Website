export default function Navbar() {
    return (
<div className="flex gap-5 border border-white/30 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full shadow-lg text-white">
    <a 
        href="#home" 
        className="transition-all duration-200 ease-in-out hover:text-white hover:font-semibold focus:scale-110 active:font-semibold"
    >
        Home
    </a>
    <a 
        href="#about" 
        className="transition-all duration-200 ease-in-out hover:text-white hover:font-semibold focus:scale-110 active:font-semibold"
    >
        About Me
    </a>
    <a 
        href="#projects" 
        className="transition-all duration-200 ease-in-out hover:text-white hover:font-semibold focus:scale-110 active:font-semibold"
    >
        Projects
    </a>
    <a 
        href="#contact" 
        className="transition-all duration-200 ease-in-out hover:text-white hover:font-semibold focus:scale-110 active:font-semibold"
    >
        Contact
    </a>
</div>
    )
}
