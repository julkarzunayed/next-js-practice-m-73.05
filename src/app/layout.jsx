import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Poppins Font Set
const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Learning NextJS",
    template: "%s || Learning NextJS ",
  },
  keywords: ['Next.js', 'React', 'JavaScript'],
  description: "This is the home page of The learning NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}  antialiased`}
      >
        <div className="">
          <NavBar />
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
