import { Metadata } from "next";
import Link from "next/link";
import {
  Book,
  Globe,
  Network,
  Search,
  Shield,
  Zap,
  ArrowLeft,
  Smartphone,
  Server,
  Share2,
  FileDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Что такое DNS? Простыми словами | Ren VPN",
  description:
    "Узнайте, что такое DNS, как он работает и зачем он нужен. Простое и понятное объяснение для обычных пользователей.",
};

export default function ChtoTakoeDnsPage() {
  return (
    <div className="min-h-screen">
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
              <Book className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Что такое DNS?
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
              DNS — это телефонная книга интернета
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              DNS (Domain Name System) — это система, которая переводит названия
              сайтов в понятные компьютерам адреса. Когда вы вводите в браузере
              адрес сайта, DNS за доли секунды находит нужный IP-адрес и
              соединяет вас с ним.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Представьте, что вы хотите позвонить другу. Вы не запоминаете его
              номер телефона — вы просто находите имя в телефонной книге и
              нажимаете «Позвонить». DNS работает точно так же: сайты запоминать
              не нужно — DNS сам находит правильный адрес.
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
              Каждый сайт в интернете имеет свой уникальный IP-адрес — набор
              цифр вроде 192.168.1.1. Запоминать такие адреса неудобно. DNS
              берёт на себя эту работу:
            </p>
            <ul className="space-y-3">
              {[
                {
                  icon: Search,
                  title: "Поиск адреса",
                  desc: "Вы вводите название сайта — DNS ищет его IP-адрес в своей базе",
                },
                {
                  icon: Share2,
                  title: "Маршрутизация",
                  desc: "DNS соединяет ваш запрос с нужным сервером по кратчайшему пути",
                },
                {
                  icon: Server,
                  title: "Кэширование",
                  desc: "Чтобы не искать каждый раз заново, DNS запоминает уже найденные адреса",
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

          {/* 3. Почему DNS важен для вас */}
          <div
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-xl"
            id="zachem"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary text-sm">
                3
              </span>
              Почему DNS важен для обычного пользователя?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Кажется, что DNS работает где-то в фоне и вас не касается. Но на
              самом деле от него зависит очень многое:
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Zap,
                  title: "Скорость загрузки",
                  desc: "Быстрый DNS открывает сайты моментально. Медленный — заставляет вас ждать",
                },
                {
                  icon: Shield,
                  title: "Безопасность",
                  desc: "Некоторые DNS-серверы блокируют опасные сайты и защищают от мошенников",
                },
                {
                  icon: Globe,
                  title: "Доступ к контенту",
                  desc: "Смена DNS может помочь открыть сайты, которые недоступны в вашей стране",
                },
                {
                  icon: Network,
                  title: "Стабильность",
                  desc: "Надёжный DNS работает без сбоев — вы не останетесь без интернета",
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

          {/* 4. Мифы о DNS */}
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
                  myth: "DNS — это что-то сложное и мне это не нужно",
                  truth:
                    "DNS работает сам по себе, вы им пользуетесь каждый день, даже не замечая. Но знание основ помогает понять, почему иногда сайты не открываются и как это исправить.",
                },
                {
                  myth: "Все DNS-серверы одинаковые",
                  truth:
                    "Разные DNS-серверы работают с разной скоростью и надёжностью. Некоторые блокируют рекламу и опасные сайты, другие — нет. Есть публичные DNS от Google, Cloudflare и других компаний, которые часто быстрее тех, что предлагает ваш провайдер.",
                },
                {
                  myth: "DNS никак не влияет на скорость интернета",
                  truth:
                    "Медленный DNS может заметно тормозить загрузку сайтов, особенно если сайт использует много разных сервисов (картинки, скрипты, шрифты). Смена DNS-сервера иногда ускоряет интернет ощутимо.",
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
              Ren VPN заботится о вашем DNS
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Используйте Ren VPN и получите не только защищённое соединение, но
              и надёжные DNS-серверы, которые не следят за вами и не тормозят
              интернет.
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
                <Smartphone className="h-4 w-4" />
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
