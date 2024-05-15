import Image from "next/image";
import profilePic from "@/public/alejandro-portrait.jpeg"
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  return (
    <section className="mb-10 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <div>
          <Image 
            src={profilePic} 
            alt="Alejandro Profile Picture"
            width="192"
            height="192"
            priority={true}
            className="h-24 w-24 rounded-full object-cover border-2 border-white shadow-xl"
            />
        </div>
      </div>

      <h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
        <span className="font-bold">Hello, I'm Alejandro.</span> I'm a{" "}
        <span className="font-bold">frontend developer</span> with{" "}
        <span className="font-bold">4 years</span> of experience. I enjoy building apps & tinkering with new technology. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </h1>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium">
        <Link 
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-lg outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"  
        >
          Contact Me 
          <BsArrowRight 
            className="opacity-70 group-hover:translate-x-2 transition" 
          />
        </Link>
        <a 
          className="group bg-gray-400 px-7 py-3 flex items-center gap-2 rounded-lg outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/20" href="/resume.pdf" 
          target="_blank"
        >
          Download Resume 
          <HiDownload 
            className="opacity-60 group-hover:translate-y-1 transition"
          />
        </a>
        <a 
          className="bg-white p-4 text-gray-800 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/20"
          href="www.linkedin.com/in/alejandro-maldonado-35929232"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a 
          className="bg-white p-4 text-gray-800 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-105 transition border border-black/20"
          href="https://github.com/AM-TEK?tab=overview&from=2024-05-01&to=2024-05-14"
          target="_blank"
        >
          <BsGithub />
        </a>
      </div>
    </section>
  )
}
