import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { AppLogo } from "@/components/app-logo";
import { BridgeProvider } from "@/components/bridge-provider";
import { Toaster } from "@/components/ui/sonner";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const appName = "Ren VPN";

const siteUrl = process.env.SITE_URL ?? "https://renvpn.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: appName,
    template: `%s | ${appName}`,
  },
  description:
    "Ren VPN — безопасный VPN-сервис с шифрованием AES-256, без логирования и с высокой скоростью. Защитите свою приватность в один клик.",
  openGraph: {
    siteName: appName,
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: appName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: appName,
    description:
      "Ren VPN — безопасный VPN-сервис с шифрованием AES-256, без логирования и с высокой скоростью.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={cn("dark font-sans", geist.variable)}>
      <body className="antialiased min-h-screen bg-background flex flex-col">
        <BridgeProvider />
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
          <div className="container mx-auto px-4 h-14 flex items-center">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold tracking-wider whitespace-nowrap"
            >
              <AppLogo className="h-7 w-7" />
              {appName}
            </Link>
          </div>
        </header>
        <main className="flex-1">{children}</main>

        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
