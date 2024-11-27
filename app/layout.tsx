import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css";

const plusJarkaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Developer Card: Build More, Earn More",
  description: `Empowering developers with tailored rewards, 
              seamless financial management, and exclusive 
              perks for tools you love. Optimize your expenses 
              and invest in innovation with the credit card 
              designed for your coding journey.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJarkaSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
