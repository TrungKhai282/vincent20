import type { Metadata } from "next";
import "@/assets/styles/global.scss";
import "animate.css";
import Layout from "@/components/Layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
