import { DM_Sans, Josefin_Sans, Jost, Poppins } from "next/font/google";
import "../assets/css/bootstrap.css";
import "swiper/css";
import "../assets/css/fontawesome.min.css";
import "../assets/css/spacing.css";
import "../assets/css/nice-select.css";
import "../assets/css/accordion-menu.css";
import "./globals.css";
// import "../assets/css/responsive.css";


import Cursor from "@/Component/Shared/Cursor/Cursor";
import Preloader from "@/Component/Shared/Preloader/Preloader";
import ReturnTopBtn from "@/Component/Shared/ReturnTopBtn/ReturnTopBtn";
import Portal from "@/Component/Shared/Portal/Portal";
import Footer from "@/Component/Shared/Footer/Footer";

// Google Fonts Loaded -----------
const dM_Sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});


// Included Metadata  -----
export const metadata = {
  title: "Elmart - Home one",
  description: "this is home page one",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dM_Sans.variable} ${jost.variable} ${josefin_sans.variable} ${poppins.variable}`}>
      <body>
        <Cursor />
        <Preloader/>
        {children}
        <Footer />
        <Portal />
        <ReturnTopBtn />
      </body>
    </html>
  );
}
