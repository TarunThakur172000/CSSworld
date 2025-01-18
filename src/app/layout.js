
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import Navbar from "@/component/Navbar";
import SEOHead from "@/component/SEOHead";
import logo from '../app/res/Logo.png'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "CSS World - Effortless CSS Design and Tools",
//   description: "Discover CSS World, your go-to online tool for effortless CSS design! Create stunning gradients, animations, shadows, and more with real-time previews and copy-ready code. Whether you're a beginner or a pro, CSS World simplifies your web development workflow. Try it now for free!",
//   keywords: "CSS, gradients, animations, web design tools, CSS shadows, web development, online CSS generator, free CSS tool",
//   author: "Tarun Thakur",
  
//   // Open Graph (OG) metadata
//   openGraph: {
//     title: "CSS World - Effortless CSS Design and Tools",
//     description: "Discover CSS World, your go-to online tool for effortless CSS design! Create stunning gradients, animations, shadows, and more with real-time previews and copy-ready code.",
//     url: "https://css-world.netlify.app/",
//     image: "https://opengraph.b-cdn.net/production/images/8016126f-9daa-45ab-a200-f0f8952c7240.png?token=39AcE6SZ3vOlm3lUyZcgPKlKAf_O-ZdqYZ44CkPBLb0&height=1024&width=1024&expires=33273200526",
//     type: "website",
//   },
  
//   // Twitter Card metadata
//   twitter: {
//     card: "summary_large_image",
//     title: "CSS World - Effortless CSS Design and Tools",
//     description: "Discover CSS World, your go-to online tool for effortless CSS design! Create stunning gradients, animations, shadows, and more with real-time previews and copy-ready code.",
//     image: "https://opengraph.b-cdn.net/production/images/8016126f-9daa-45ab-a200-f0f8952c7240.png?token=39AcE6SZ3vOlm3lUyZcgPKlKAf_O-ZdqYZ44CkPBLb0&height=1024&width=1024&expires=33273200526",
//   },

//   // Favicon
//   favicon: "/favicon.ico",
// };


export default function RootLayout({ children }) {
 

  return (
    <html lang="en">
     
<title>CSS World - Effortless CSS Design and Tools</title>
<meta name="description" content="Discover CSS World, your go-to online tool for effortless CSS design! Create stunning gradients, animations, shadows, and more with real-time previews and copy-ready code."/>


<meta property="og:url" content="https://css-world.netlify.app"/>
<meta property="og:type" content="website"/>
<meta property="og:title" content="CSS World - Effortless CSS Design and Tools"/>
<meta property="og:description" content="Discover CSS World, your go-to online tool for effortless CSS design! Create stunning gradients, animations, shadows, and more with real-time previews and copy-ready code."/>
<meta property="og:image" content="https://opengraph.b-cdn.net/production/images/8016126f-9daa-45ab-a200-f0f8952c7240.png?token=mxpcRdjJY6G9XWYA9Jp_cOeIuHoIr5O__faMgubK9cw&height=1024&width=1024&expires=33273201274"/>


<meta name="twitter:card" content="summary_large_image"/>
<meta property="twitter:domain" content="css-world.netlify.app"/>
<meta property="twitter:url" content="https://css-world.netlify.app"/>
<meta name="twitter:title" content="CSS World - Effortless CSS Design and Tools"/>
<meta name="twitter:description" content="Discover CSS World, your go-to online tool for effortless CSS design! Create stunning gradients, animations, shadows, and more with real-time previews and copy-ready code."/>
<meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/8016126f-9daa-45ab-a200-f0f8952c7240.png?token=mxpcRdjJY6G9XWYA9Jp_cOeIuHoIr5O__faMgubK9cw&height=1024&width=1024&expires=33273201274">

</meta>
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
