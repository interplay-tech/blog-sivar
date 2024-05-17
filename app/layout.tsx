"use client";


import { Providers } from "./providers";
import Header from '../components/components/Header/index';
import Footer from '../components/components/Footer/index';
import ScrollToTop from '../components/components/ScrollToTop/index';


import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils"

import "../app/globals.css"



const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={cn(
          "bg-[#060c1f]",
          fontSans.variable
        )}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

