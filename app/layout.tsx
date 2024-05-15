import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alejandro M. | Portfolio",
  description: "Alejandro is a frontend developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-100 text-gray-950 pt-28 sm:pt-30`}>
        {/* <div className="bg-[#3ce37c] absolute top-[-5rem] right-[5rem] h-96 w-96 rounded-full blur-[10rem] sm:w-[48rem] -z-10"></div>
        <div className="bg-[#25a1a9] absolute bottom-[-5rem] left-[5rem] h-96 w-96 rounded-full blur-[10rem] sm:w-[48rem] -z-10"></div> */}
        <Header />
        {children}
      </body>
    </html>
  );
}
