import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from './components/Header'
import { Footer } from './components/Footer'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Password generator",
  description: "Web app the generate passwords",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
