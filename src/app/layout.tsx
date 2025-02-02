import type { Metadata } from "next";

import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Heebo,Inter} from "next/font/google"

const heebo = Heebo({ subsets:["latin"] , weight:["400" ,"700","900"] });
const inter = Inter({ subsets:["latin"] , weight:["400" ,"700"] });

export const metadata: Metadata = {
  title: "my-portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={heebo.className} >
        <Header font = {inter}/>
        {children}
        <Footer />

      </body>
    </html>
  );
}
