import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "lanark.house — A New Home Journey",
    template: "%s | lanark.house",
  },
  description:
    "Documenting 18 months, 3 builders, and 2 collapsed deals on the path to 728 Langley Terrace SE, Airdrie AB.",
  metadataBase: new URL("https://lanark.house"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
