import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Providers from "./providers";
import Overflow from "./overflow";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Scidrom",
  description: "",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Overflow inter={inter}>
        <Providers>
          {children}
        </Providers>
      </Overflow>
    </html>
  );
}
