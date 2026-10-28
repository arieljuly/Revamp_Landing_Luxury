import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marci Metzger | Pahrump Realtor",
  description:
    "The Ridge Realty Group — helping Pahrump buyers and sellers move with confidence.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
