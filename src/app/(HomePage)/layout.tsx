import type { Metadata, Viewport } from "next";
import { Toaster } from 'react-hot-toast';
import "../globals.css";
import SideBar from "../components/SideBar";


export const metadata: Metadata = {
  title: "Shocial App",
  keywords: ["Next.js", "JWT", "Authentication", "React", "Web Development"],
  authors: [{ name: "Your Name", url: "https://yourwebsite.com" }],
  creator: "Your Name",
  description: "Shocial App is a modern web application built with Next.js and JWT authentication, providing a seamless user experience.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "twins",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex max-h-screen bg-gray-50 text-gray-900 max-w-screen">
        <SideBar />
        <div className="flex-1 p-6 justify-center items-center m">
          {children}
        </div>
        <Toaster position="bottom-right" reverseOrder={false} />
      </body>
    </html>
  );
}