import type { Metadata } from "next";
import { Kaisei_Tokumin, Poppins } from "next/font/google";
import { GlobalStyles } from "@/styles/GlobalStyles";
import StyledComponentsRegistry from "./registry";
import Favicon from "./favicon.ico";
import { LoadingOverlay } from "./LoadingOverlay";
import React from "react";

const kaiseiTokumin = Kaisei_Tokumin({
  variable: "--font-kaisei-tokumin",
  weight: ["500", "700", "800"],
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "6037 Venture Partnership",
  description: "6037 Venture Partnership booking app",
  icons: {
    icon: Favicon.src,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${kaiseiTokumin.variable} ${poppins.variable}`}>
        <LoadingOverlay />

        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
