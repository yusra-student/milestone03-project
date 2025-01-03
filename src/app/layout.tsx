import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
import Providers from "@/components/Providers";
export const metadata: Metadata = {
  title: "Ecommerce-toolKit",
  description: "create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <Providers>
    <html lang="en">
      <body className={inter.className}>
       <Navbar/> {children}
       <Footer/>
        </body>
    </html>
    </Providers>
  );
}
