import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/block/Header";
import { Footer } from "@/components/block/Footer";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SafaPoint",
    template: "%s | SafaPoint",
  },
  description: "Book professional pagdi/safa tying service for your event",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="container mx-auto px-4 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
