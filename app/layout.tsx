import type { Metadata } from "next";

import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fuego UX — Design System",
  description:
    "The Fuego UX design system: warm, editorial, confident. Colors, typography, buttons, and logos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Adobe Fonts (Pacaembu + Redaction 10) */}
        <link rel="stylesheet" href="https://use.typekit.net/cca5aya.css" />
      </head>
      <body>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
