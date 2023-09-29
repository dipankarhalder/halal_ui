import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { IPageChildProps } from "@/utils/interface";
import { allStaticInfo } from "@/utils/common/staticInfo";

const inter = Inter({
  weight: ["400", "700"],
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: allStaticInfo.themes.project_title,
  description: allStaticInfo.themes.decspt,
};

export default function RootLayout({ children }: IPageChildProps) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${inter.className}`}>{children}</body>
    </html>
  );
}
