import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BasketListContext } from "@/context/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Green Shop",
  description: "Green Shop Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-icon.svg" />
      </head>
      <body className={inter.className}>
        <BasketListContext>
          <Header />
          <main className="pt-[80px]">{children}</main>
          <Footer />
        </BasketListContext>
      </body>
    </html>
  );
}
