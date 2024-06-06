import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";
import Navbar from "@/components/navigation/navbar";

export const metadata: Metadata = {
  title: "tobi moccagatta",
  description: "Your not so typical fullstack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={GeistSans.className}>
          <Navbar/>
          {children}
          </body>
      </html>
    </ViewTransitions>
  );
}
