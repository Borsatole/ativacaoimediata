import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://ativacaoimediataonline.com.br"),
  // 1. Título Genérico: O Google ama termos como "Processamento", "Pagamentos" ou "Portal"
  title: {
    default: "Portal de Ativação Digital | Processamento Imediato",
    template: "%s | Portal de Ativação Digital",
  },
  icons: "/icone.ico",

  // 2. Descrição Neutra: Foca em segurança e termos de uso
  description:
    "Plataforma de processamento de serviços digitais e ativação imediata. Verifique seus termos de acesso e utilize nossa interface segura para gestão de pedidos.",

  // 3. REMOVA AS KEYWORDS: O Google não usa mais para SEO, mas usa para BANIR anúncios.
  // Se quiser manter, use apenas termos "White":
  keywords: [
    "Ativação Digital",
    "Serviços Online",
    "Pagamento Seguro",
    "Portal do Usuário",
  ],

  authors: [
    { name: "Gestão Digital", url: "http://ativacaoimediataonline.com.br" },
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: "Portal de Ativação Digital - Acesso Seguro",
    description:
      "Verificação de segurança e processamento de pedidos digitais.",
    url: "http://ativacaoimediataonline.com.br",
    siteName: "Portal Digital",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/logotipo_roxa.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
