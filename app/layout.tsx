import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import CookieConsent from "@/components/Cookies/page";
import { ClerkProvider, RedirectToSignIn } from '@clerk/nextjs';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " AZ-LLC",
  description: "AZ Transportation and Care Services LLC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ClerkProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <CookieConsent />
        </ClerkProvider>
      </body>
    </html>
  );
}
