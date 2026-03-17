import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Velo Creative — Connect. Collaborate. Create.",
  description:
    "The exclusive platform connecting ambitious brands with world-class creative professionals. Bring your vision to life with the perfect creative partner.",
  keywords: "creative platform, freelance creatives, brand collaboration, design community",
  openGraph: {
    title: "Velo Creative — Connect. Collaborate. Create.",
    description:
      "The exclusive platform connecting ambitious brands with world-class creative professionals.",
    url: "https://veloocreative.com",
    siteName: "Velo Creative",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
