import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elizabeth Umoren | Portfolio",
  description: "Portfolio website showcasing design and development work",
  icons: {
    icon: "/k-icon.png",
    shortcut: "/k-icon.png",
    apple: "/k-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
