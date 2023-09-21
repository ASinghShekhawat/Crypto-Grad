import Navbar from "@/components/Navbar/Navbar";
import "./globals.scss";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Providers from "./providers";
import NftDroppingNav from "@/components/Navbar/NftDroppingNav";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cryptograd",
  description: "Cryptograd",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={dmSans.className}>
        <Providers>
          <div className="max-w-[1730px] mx-auto relative w-full flex flex-col">
            <NftDroppingNav />
            <Navbar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
