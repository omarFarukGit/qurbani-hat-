import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "300", "500", "600"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.className}  h-full antialiased `}>
      <body className="min-h-full flex flex-col container mx-auto ">
        <Navbar />
        <main className="container mx-auto">{children}</main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
