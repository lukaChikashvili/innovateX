
import "./globals.css";
import Header from "@/components/Header";


export const metadata = {
  title: "InnovateX",
  description: "Build the future",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
