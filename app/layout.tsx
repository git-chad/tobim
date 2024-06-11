import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";
import { ReactLenis } from "@/lib/lenis";

export const metadata: Metadata = {
  title: "tobi moccagatta",
  description: "Fullstack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        smoothWheel: true,
      }}
    >
      <html lang="en">
        <body className={GeistSans.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ReactLenis>
  );
}
