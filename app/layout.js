import { Inter } from "next/font/google";
import "./globals.css";
import icon from "./favicon.ico";
import Navbar from "./components/Navbar/Navbar";
import Head from "next/head";
import Footer from "./components/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: `Sourav's Portfolio`,
  description: "A next app",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href={icon} sizes="any" />
      </Head>
      <body
        className={`${inter.className} bg-[#282C33] text-white text-center min-h-screen flex flex-col justify-between min-w-52`}
      >
        <div className="flex flex-col">
          <Navbar />
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
