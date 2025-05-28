import type { Metadata, Viewport } from "next";
import { Pacifico } from "next/font/google";
import { Toaster } from 'react-hot-toast';
import "../globals.css";

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
      <body  >
        
          {children}
      
        <Toaster position="bottom-right" reverseOrder={false} />
      </body>
    </html>
  );
}
