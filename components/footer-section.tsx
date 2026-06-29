import Link from "next/link";
import { BookOpen, ExternalLink, Shield } from "lucide-react";

const blogLinks = [
  { title: "Что такое VPN?", href: "/blog/chto-takoe-vpn" },
  { title: "Что такое DNS?", href: "/blog/chto-takoe-dns" },
  {
    title: "Что такое раздельное туннелирование?",
    href: "/blog/razdelnoe-tunnelfrovanie",
  },
];

export function FooterSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-24 sm:pb-32">
      <div className="absolute top-[-10%] right-[-5%] h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[120px]" />
      <div className="absolute bottom-[-5%] left-[-10%] h-[350px] w-[350px] rounded-full bg-primary/5 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 text-center space-y-3">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
            <BookOpen className="h-7 w-7 text-primary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Полезные статьи
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Разбираемся в VPN и интернет-технологиях
          </p>
        </div>

        <div className="mx-auto max-w-lg space-y-3">
          {blogLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-6 py-5 shadow-xl transition-all duration-300 hover:border-primary/30 hover:bg-white/10 hover:-translate-y-0.5"
            >
              <span className="text-base font-medium group-hover:text-primary transition-colors duration-300">
                {link.title}
              </span>
              <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </Link>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-lg">
          <div className="mb-6 border-t border-white/10" />
          <Link
            href="/privacy"
            className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-6 py-4 shadow-xl transition-all duration-300 hover:border-primary/30 hover:bg-white/10 hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-base font-medium group-hover:text-primary transition-colors duration-300">
                Политика конфиденциальности
              </span>
            </div>
            <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
