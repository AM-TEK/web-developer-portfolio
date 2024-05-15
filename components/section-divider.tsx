"use client"
import "@/app/globals.css";
import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

// export default function SectionDivider() {
//   return (
//     // <motion.div
//     //   className="w-1 rounded-full sm:block flex"
//     //   initial={{ opacity: 0, y: 100 }}
//     //   animate={{ opacity: 1, y: 0 }}
//     //   transition={{ delay: 0.125 }}
//     // >
//       <motion.svg
//       className=""
//       width="100%"
//       height="100%"
//       viewBox="0 0 600 600"
//       initial="hidden"
//       animate="visible"
//       >
//         <motion.line
//           x1="120"
//           y1="170"
//           x2="260"
//           y2="30"
//           stroke="#00cc88"
//           variants={draw}
//           custom={2.5}
//           />
//         <motion.line
//           x1="220"
//           y1="170"
//           x2="360"
//           y2="30"
//           stroke="#ff0055"
//           variants={draw}
//           custom={3.5}
//         />
//         <motion.line
//           x1="320"
//           y1="170"
//           x2="460"
//           y2="30"
//           stroke="#0099ff"
//           variants={draw}
//           custom={4.5}
//         />
//       </motion.svg>
//     // </motion.div>
//   )
// }
export default function SectionDivider() {
  return (
    <motion.div className="flex justify-center items-center">
      <motion.svg
        className="w-full max-w-screen-lg h-auto"
        width="600"
        height="200"
        viewBox="0 0 600 200"
        initial="hidden"
        animate="visible"
      >
        <motion.line
          x1="120"
          y1="170"
          x2="260"
          y2="30"
          stroke="#00cc88"
          variants={draw}
          custom={2.5}
        />
        <motion.line
          x1="220"
          y1="170"
          x2="360"
          y2="30"
          stroke="#ff0055"
          variants={draw}
          custom={3.5}
        />
        <motion.line
          x1="320"
          y1="170"
          x2="460"
          y2="30"
          stroke="#0099ff"
          variants={draw}
          custom={4.5}
        />
      </motion.svg>
    </motion.div>
  );
}
