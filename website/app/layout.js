
import Footer from "@/components/Footer";
import "./globals.css";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";


export const metadata = {
  title: "InnovateX",
  description: "Build the future",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
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
