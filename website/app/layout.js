
import Footer from "@/components/Footer";
import "./globals.css";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import Head from "next/head";


export const metadata = {
  title: "InnovateX",
  description: "Build the future",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Head>
    <link rel="icon" type="image/jpg" sizes="32x32" href="/logo.jpg" />
    </Head>
      <body
      >
          <SmoothScroll>
        <Header />
      
        {children}
       
        <Footer />
        </SmoothScroll>
      </body>
    
    </html>
  );
}
