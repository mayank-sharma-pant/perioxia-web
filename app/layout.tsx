import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Perioxia Technology — AI, Software & Robotics",
  description:
    "Building advanced AI agents, custom CRM, and next-gen robotic operating systems.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen w-full">{children}</main>
      </body>
    </html>
  );
}
