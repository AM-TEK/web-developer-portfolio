import SectionHeading from "./section-heading"
export default function About() {
  return (
    <section className="mt-5 mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28">
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After returning from work in the ESL industry in Japan, I decided to pursue my passion for computers and technology. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.
        My first position was as a QA tester and frontend developer mainly fixing bugs. Currently, my core stack is{" "}
        <span className="font-medium">
          React, NextJS, NodeJS, & Tailwind
        </span>
        . I am also familiar with TypeScript, Go, & JestJS. I am always looking to
        learn new technologies and am currently looking for a full-time position as a software developer.{" "}
        <span className="italic">When I'm not coding</span>, I enjoy reading, playing
        video games, and hiking.
      </p>

      {/* <p>
        <span className="italic">When I'm not coding</span>, I enjoy reading, playing
        video games, and hiking.
      </p> */}
    </section>
  )
}
