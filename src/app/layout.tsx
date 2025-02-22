import "@/assets/styles/global.scss";
import "animate.css";
import Layout from "@/components/Layout";
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
  authors: [{ name: "Vincent20", url: "/" }],
  openGraph: {
    title: "Vincent20 Tattoo",
    description:
      "Cung cấp dịch vụ xăm hình nghệ thuật, xỏ khuyên với chất lượng tuyệt vời, cam kết bảo hành lâu dài.",
    url: "",
    siteName: "My Website",
    images: [
      {
        url: "/meta/thumbnail.jpg", // Thay bằng link ảnh thật
        width: 1200,
        height: 630,
        alt: "My Website Thumbnail",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter_handle",
    title: "Vincent20 Tattoo",
    description:
      "Cung cấp dịch vụ xăm hình nghệ thuật, xỏ khuyên với chất lượng tuyệt vời, cam kết bảo hành lâu dài.",
    images: ["/meta/thumbnail.jpg"], // Thumbnail cho Twitter
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
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
