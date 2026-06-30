import { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  Globe,
  Lock,
  Eye,
  Zap,
  ArrowLeft,
  FileDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { GooglePlayIcon } from "@/components/ui/google-play-icon";

export const metadata: Metadata = {
  title: "Что такое VPN? Простыми словами | Ren VPN",
  description:
    "Узнайте, что такое VPN, как он работает и зачем он нужен. Простое и понятное объяснение для обычных пользователей.",
  openGraph: {
    title: "Что такое VPN? Простыми словами | Ren VPN",
    description:
      "VPN — это как секретный туннель для вашего интернета. Узнайте, как работает VPN, зачем он нужен и разберитесь в распространённых мифах.",
  },
};

export default function ChtoTakoeVpnPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Что такое VPN? Простыми словами",
    description:
      "Простое и понятное объяснение VPN для обычных пользователей: как работает, зачем нужен, распространённые мифы.",
    author: {
      "@type": "Organization",
      name: "Ren VPN",
    },
    publisher: {
      "@type": "Organization",
      name: "Ren VPN",
    },
    datePublished: "2024-01-01",
    dateModified: "2024-01-01",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://renvpn.com/blog/chto-takoe-vpn",
    },
  };
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-[-15%] left-[-5%] h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[100px]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            На главную
          </Link>
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-6">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Shield className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Что такое VPN?
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Объясняем простыми словами — без сложных терминов и технических
              деталей
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 pb-24 sm:pb-32">
        <div className="mx-auto max-w-3xl space-y-12">
          {/* 1. Простое определение */}
          <div
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-xl"
            id="chto-eto"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary text-sm">
                1
              </span>
              VPN — это просто
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              VPN (Virtual Private Network) — это как секретный туннель для
              вашего интернета. Когда вы включаете VPN, весь ваш трафик проходит
              через зашифрованный канал, который никто не видит и не может
              прочитать.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Представьте, что вы отправляете открытку по почте — любой
              почтальон может её прочитать. VPN превращает эту открытку в
              запечатанный конверт, который может открыть только тот, кому он
              адресован.
            </p>
          </div>

          {/* 2. Как это работает – аналогия */}
          <div
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-xl"
            id="kak-rabotaet"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary text-sm">
                2
              </span>
              Как это работает?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Обычно ваше устройство подключается к сайту напрямую. Все данные
              видны вашему интернет-провайдеру и посторонним. VPN работает
              иначе:
            </p>
            <ul className="space-y-3">
              {[
                {
                  icon: Lock,
                  title: "Шифрование",
                  desc: "Все ваши данные превращаются в непонятный для посторонних код",
                },
                {
                  icon: Globe,
                  title: "Новый адрес",
                  desc: "Вы выходите в интернет из другой точки мира — меняется ваш IP-адрес",
                },
                {
                  icon: Eye,
                  title: "Приватность",
                  desc: "Даже ваш провайдер не видит, какие сайты вы посещаете",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.title}
                    className="flex gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4"
                  >
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <strong className="text-foreground">{item.title}</strong>
                      <p className="text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* 3. Зачем нужен VPN */}
          <div
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-xl"
            id="zachem"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary text-sm">
                3
              </span>
              Зачем нужен VPN?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Есть несколько ситуаций, когда VPN особенно полезен:
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Lock,
                  title: "Безопасный Wi-Fi",
                  desc: "В кафе, аэропортах и отелях VPN защищает ваши данные от перехвата",
                },
                {
                  icon: Eye,
                  title: "Приватность",
                  desc: "Сайты и рекламные сети не смогут отслеживать ваши действия",
                },
                {
                  icon: Globe,
                  title: "Доступ к контенту",
                  desc: "Смотрите видео и сайты, которые могут быть недоступны в вашей стране",
                },
                {
                  icon: Shield,
                  title: "Защита личных данных",
                  desc: "Пароли, переписка и банковские данные остаются только вашими",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-xl border border-white/5 bg-white/[0.02] p-5 space-y-2"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 4. Мифы о VPN */}
          <div
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-xl"
            id="mify"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary text-sm">
                4
              </span>
              Распространённые мифы
            </h2>
            <div className="space-y-4">
              {[
                {
                  myth: "VPN замедляет интернет",
                  truth:
                    "Хороший VPN работает практически незаметно. Да, шифрование требует ресурсов, но с современными технологиями разница в скорости минимальна. А в некоторых случаях VPN может даже ускорить соединение.",
                },
                {
                  myth: "VPN — это для хакеров и преступников",
                  truth:
                    "VPN используют обычные люди по всему миру: чтобы защитить данные в кафе, смотреть любимые шоу в путешествиях или просто сохранить свою приватность. Это как замок на двери — им пользуются все.",
                },
                {
                  myth: "Настроить VPN сложно",
                  truth:
                    "Современные VPN-приложения работают в одно нажатие. Скачал, открыл, нажал «Подключиться» — готово. Всё остальное приложение делает само.",
                },
              ].map((item) => (
                <div
                  key={item.myth}
                  className="rounded-xl border border-white/5 bg-white/[0.02] p-5"
                >
                  <p className="text-sm text-muted-foreground mb-1">❌ Миф:</p>
                  <p className="font-semibold mb-3">{item.myth}</p>
                  <p className="text-sm text-muted-foreground mb-1">
                    ✅ Правда:
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.truth}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Итог + CTA */}
          <div className="rounded-2xl border border-primary/20 bg-primary/[0.03] backdrop-blur-xl p-8 shadow-xl text-center space-y-4">
            <Zap className="mx-auto h-10 w-10 text-primary" />
            <h2 className="text-2xl font-bold">
              Попробуйте Ren VPN прямо сейчас
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Защитите свои данные уже сегодня. Всего одно нажатие — и ваш
              интернет станет безопасным и приватным.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href="https://play.google.com/store/apps/details?id=com.rg.nomadvpn"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 px-8 text-base gap-2"
                )}
              >
                <GooglePlayIcon className="h-4 w-4" />
                Скачать с Google Play
              </a>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 text-base gap-2"
              >
                <FileDown className="h-4 w-4" />
                Скачать .apk
              </Button>
            </div>
          </div>

          {/* Навигация */}
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Вернуться на главную
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
