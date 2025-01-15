
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import Navbar from "@/component/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CSS World",
  description: "Discover CSS World, your go-to online tool for effortless CSS design! Create stunning gradients, animations, shadows, and more with real-time previews and copy-ready code. Whether you're a beginner or a pro, CSS World simplifies your web development workflow. Try it now for free!",
};

export default function RootLayout({ children }) {
 

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        id="page-wrap"
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
