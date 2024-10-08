import Header from "@/components/Header";
import "./styles/globals.css";
import { Montserrat, Roboto } from "next/font/google";
import Footer from "@/components/Footer";
import Spinner from "@/components/ui/Spinner";

export const metadata = {
  title: "FastTrack",
  description: "Generated by create next app",
  icons: {
    icon: ["/favicon/favicon.ico?v=4"],
    apple: ["/favicon/apple-touch-icon.png?v=4"],
    shortcut: ["/favicon/apple-touch-icon.png"],
  },
};

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${roboto.className} ${montserrat.variable}`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
