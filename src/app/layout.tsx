import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Louai Khodary — Frontend Developer",
  description:
    "Frontend Developer specializing in React.js, TypeScript, and modern web interfaces. Based in Cairo, Egypt. Currently at Risidio.",
  keywords: [
    "Frontend Developer",
    "React",
    "TypeScript",
    "Louai Khodary",
    "Web Developer",
  ],
  openGraph: {
    title: "Louai Khodary — Frontend Developer",
    description:
      "Frontend Developer specializing in React.js, TypeScript, and modern web interfaces.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${archivo.variable} ${spaceGrotesk.variable} min-h-full font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}