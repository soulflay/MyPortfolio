import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  // variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'], 
});

export const metadata: Metadata = {
  title: "Hameed's Portfolio",
  description: "Modern and minimalistic portfolio website",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="en">
    <body className={poppins.className}>{children}</body>
  </html>
  );
}
