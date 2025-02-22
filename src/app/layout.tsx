import "@/assets/styles/global.scss";
import "animate.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vincent20 Tattoo",
  description:
    "Cung cấp dịch vụ xăm hình nghệ thuật, xỏ khuyên với chất lượng tuyệt vời, cam kết bảo hành lâu dài.",
  keywords: [
    "Vincent20",
    "Vincent Tattoo",
    "Xăm hình vincent",
    "Gò vấp tattoo",
    "Xăm hình Gò Vấp",
    "Xăm hình sài gòn",
  ],
  openGraph: {
    title: "Vincent20 Tattoo",
    description:
      "Cung cấp dịch vụ xăm hình nghệ thuật, xỏ khuyên với chất lượng tuyệt vời, cam kết bảo hành lâu dài.",
    siteName: "Vincent20 Tattoo",
    images: [
      {
        url: "https://vincent20.vercel.app/meta/thumbnail.jpg", // Thay bằng link ảnh thật
        width: 1200,
        height: 630,
        alt: "Vincent20 Thumbnail",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
