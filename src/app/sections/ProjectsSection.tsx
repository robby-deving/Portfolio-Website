"use client";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";

// Update Project interface to match JSON structure
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  thumbnails: {
    thumbnail1: string;
    thumbnail2: string;
    thumbnail3: string;
  };
}

// Add type for props
interface ProjectsSectionProps {
  projects: Project[];
}

// Add type annotation to the component
export default function ProjectsSection({ projects = [] }: ProjectsSectionProps) {
  const handleStackComplete = () => {
    console.log("Stack animation completed");
  };

  // Add check for projects array
  if (!Array.isArray(projects)) {
    console.warn('Projects prop is not an array');
    return null;
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">Projects</h1>

      <ScrollStack
        onStackComplete={handleStackComplete}
        useWindowScroll={true}
        itemDistance={600}
        itemStackDistance={0}
        stackPosition="15%"
        baseScale={0.9}
      >
        {projects.map((project) => (
          <ScrollStackItem key={project.id}>
            <div className="border border-gray-300/20 rounded-3xl p-8 md:p-12 w-full bg-[#171717] backdrop-blur-md transition-all duration-300 hover:border-gray-300/40 group">
              <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-8">
                <div className="flex gap-6 items-start">
                  <h1 className="font-bold text-6xl md:text-8xl text-gray-500/30 font-mono leading-none">
                    {String(project.id).padStart(2, '0')}
                  </h1>
                  <div>
                    <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">
                      {project.title}
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
                <a
                  href="#"
                  className="px-6 py-3 border border-gray-400 rounded-full hover:bg-white hover:text-black transition-all duration-500 flex items-center gap-3 text-lg font-medium whitespace-nowrap"
                >
                  Explore Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
              <div className="flex gap-6 h-[400px] md:h-[500px]">
                <div className="w-1/3 flex flex-col gap-6">
                  <div className="h-1/2 bg-gray-800 rounded-2xl overflow-hidden hover:opacity-90 transition-all duration-500 cursor-pointer">
                    <img 
                      src={project.thumbnails.thumbnail1} 
                      alt={`${project.title} thumbnail 1`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="h-1/2 bg-gray-700 rounded-2xl overflow-hidden hover:opacity-90 transition-all duration-500 cursor-pointer">
                    <img 
                      src={project.thumbnails.thumbnail2} 
                      alt={`${project.title} thumbnail 2`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="w-2/3 bg-gray-600 rounded-2xl overflow-hidden hover:opacity-90 transition-all duration-500 cursor-pointer">
                  <img 
                    src={project.thumbnails.thumbnail3} 
                    alt={`${project.title} main image`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </div>
  );
}