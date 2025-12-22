import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mr Okay | Lüks Parfümeri",
  description:
    "Sofistike bireyler için özenle hazırlanmış eşsiz kokular. Mr Okay - Zarafetin duyularla buluştuğu yer.",
  keywords: [
    "lüks parfüm",
    "parfümeri",
    "koku",
    "kolonya",
    "Mr Okay",
    "tasarım kokular",
  ],
  openGraph: {
    title: "Mr Okay | Lüks Parfümeri",
    description:
      "Sofistike bireyler için özenle hazırlanmış eşsiz kokular.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="bg-white text-black antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
