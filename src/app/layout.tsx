import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nexum.so"),
  title: "Nexum — The Trust Layer for AI Agents",
  description:
    "On-chain identity, discovery, payments, and reputation for AI agents on Solana.",
  openGraph: {
    title: "Nexum — The Trust Layer for AI Agents",
    description:
      "On-chain identity, discovery, payments, and reputation for AI agents on Solana.",
    type: "website",
    url: "https://nexum.so",
    siteName: "Nexum",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexum — The Trust Layer for AI Agents",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
