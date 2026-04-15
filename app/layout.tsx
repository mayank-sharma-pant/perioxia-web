import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Perioxia Technology — AI, Software & Robotics",
  description:
    "Building advanced AI agents, custom CRM, and next-gen robotic operating systems.",
};

import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <body>
        <Navbar />
        <main className="min-h-screen w-full pt-16">{children}</main>
      </body>
    </html>
  );
}
