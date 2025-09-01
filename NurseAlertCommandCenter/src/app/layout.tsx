import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Manrope } from 'next/font/google';
import "./globals.css";
import NavBar from "./components/navbar/navbar";

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope', // This is optional if you want to use the font as a CSS variable
  weight: ['400', '500', '600', '700'], // Specify the weights you need
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nurse Alert Dashboard",
  description: "Records Management System for Patients in a Health Facility",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased`}>
        <div className="flex h-screen flex-col bg-customAsh">
          <div className="w-full p-3">
            <NavBar />
          </div>
          <div className="flex-grow overflow-y-auto p-3 text-black">{children}</div>
        </div>
      </body>
    </html>
  );
};
