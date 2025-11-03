import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ativação Imediata - Codigos de Recarga",
    template: "%s | Ativação Imediata - Codigos de Recarga",
  },
  description:
    "Codigos de Recarga com Recarga Imediata e o Menor Preço do Brasil.Acesse agora mesmo e tenha acesso imediato a nossa plataforma e compre com segurança.",
  keywords: [
    "UniTv",
    "Unitv Menor Preço",
    "IPTV",
    "TV Online",
    "Recarga Imediata",
    "Canais Ao Vivo",
    "Filmes e Séries",
    "Assinatura IPTV",
    "IPTV Barato",
    "Planos UniTv",
    "Unitv Anual",
    "Unitv Mensal",
    "Unitv Trimestral",
    "Baixar UniTv",
    "AlphaPlay",
    "AlphaPlay Menor Preço",
    "AlphaPlay Online",
    "TV Online",
    "Recarga Imediata",
    "Canais Ao Vivo",
    "Filmes e Séries",
    "Assinatura AlphaPlay",
    "AlphaPlay Barato",
    "Planos AlphaPlay",
    "AlphaPlay Anual",
    "AlphaPlay Mensal",
    "AlphaPlay Trimestral",
    "Baixar AlphaPlay",
  ],
  authors: [
    {
      name: "Ativacao Imediata",
      url: "https://ativacaoimediata.com",
    },
  ],
  icons: {
    icon: "/icon.png",
  },
  publisher: "Ativacao Imediata",
  metadataBase: new URL("https://ativacaoimediata.com"),
  alternates: {
    canonical: "https://ativacaoimediata.com",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title:
      "Recarga Imediata - Codigos de Recarga - Compra com Segurança",
    description:
      "Compre seus codigos de recarga pela nossa plataforma ou, se preferir, pelo WhatsApp.",
    url: "https://ativacaoimediata.com",
    siteName: "Ativacao Imediata",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/LOGOROXA.png", // ideal: imagem 1200x630 otimizada
        width: 1200,
        height: 630,
        alt: "Ativacao Imediata",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ativacaoimediata",
    creator: "@ativacaoimediata",
    title: "Ativação Imediata - Codigos de Recarga",
    description:
      "Compre seus codigos de recarga pela nossa plataforma ou, se preferir, pelo WhatsApp.",
    images: ["/LOGOROXA.png"],
  },
  category: "entretenimento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}