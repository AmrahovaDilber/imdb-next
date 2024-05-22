import { Inter } from "next/font/google";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}