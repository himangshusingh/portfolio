import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-fraunces",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

// Runs before paint so the saved/seasonal theme is applied without a flash.
const themeInit = `(function(){try{var d=document.documentElement,s=localStorage.getItem("season"),ok=["spring","summer","monsoon","autumn","winter"];if(ok.indexOf(s)<0){var m=new Date().getMonth();s=(m==0||m==11)?"winter":m<3?"spring":m<6?"summer":m<9?"monsoon":"autumn"}d.setAttribute("data-season",s);var h=new Date().getHours();d.setAttribute("data-tod",h>=5&&h<8?"dawn":h>=8&&h<17?"day":h>=17&&h<19?"dusk":"night");d.classList.add("js")}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${instrumentSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
