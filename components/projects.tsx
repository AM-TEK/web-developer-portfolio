// import SectionHeading from "./section-heading"
// import petDogsImg from "@/public/petDogs.png"
// import videoGameRankerImg from "@/public/vgRanker.png"
// import Image from "next/image"

// import Image from "next/image";

// export default function Projects() {
  //   return (
    //     <section>
    //       <SectionHeading>
    //         My Projects
    //       </SectionHeading>
    //         <div>
    //           {
      //             projectsData.map((project, index) => (
        //               <React.Fragment key={index}>
        //                 <Project {...project} />
        //               </React.Fragment>
        //             ))
        //           }
        //         </div>
        //     </section>
        //   )
        // }
        
        
        
import React from "react"
import Project from "./project";
import { projectsData } from "@/lib/data"


export default function Projects() {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-10">
        <h2 className="text-xl uppercase py-4">Projects I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
        {
            projectsData.map((project, index) => (
              <React.Fragment key={index}>
                <Project {...project} />
              </React.Fragment>
            ))
          }
          {/* <Project title="Pet Dogs" imageUrl={petDogsImg}/>
          <Project title="Video Game Ranker" imageUrl={videoGameRankerImg}/> */}

        </div>
      </div>
    </div>
  )
}
