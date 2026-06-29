import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Smartphone,
  Zap,
  Split,
  Router,
  Globe,
  Lock,
  Shield,
  Gauge,
  Monitor,
  FileDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Что такое раздельное туннелирование? Простыми словами | Ren VPN",
  description:
    "Узнайте, что такое раздельное туннелирование в VPN, как оно работает и зачем оно нужно. Простое и понятное объяснение для обычных пользователей.",
};

export default function RazdelnoeTunnelfrovaniePage() {
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
              <Split className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Что такое раздельное туннелирование?
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
              Раздельное туннелирование — это выбор
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Представьте, что у вас дома есть два крана: один с горячей водой,
              другой с холодной. Вы сами решаете, из какого крана какую воду
              взять. Раздельное туннелирование работает так же — вы выбираете,
              какие приложения или сайты будут работать через VPN, а какие —
              напрямую через обычный интернет.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Обычно VPN пропускает через себя весь интернет-трафик устройства.
              Но иногда вам нужно, чтобы некоторые приложения работали без VPN
              (например, онлайн-банкинг или стриминговый сервис в вашей стране).
              Раздельное туннелирование даёт вам эту гибкость.
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
              Когда вы включаете VPN, все данные с вашего телефона или
              компьютера идут через зашифрованный туннель. Раздельное
              туннелирование добавляет к этому «перекрёсток», который направляет
              трафик по разным путям:
            </p>
            <ul className="space-y-3">
              {[
                {
                  icon: Split,
                  title: "Разделение трафика",
                  desc: "Вы сами решаете, какие приложения использовать через VPN, а какие — напрямую",
                },
                {
                  icon: Router,
                  title: "Два канала",
                  desc: "Устройство одновременно держит два соединения: защищённое (VPN) и обычное (прямой доступ)",
                },
                {
                  icon: Globe,
                  title: "Правила маршрутизации",
                  desc: "Приложения сами «знают», по какому пути им идти, — вы ничего не настраиваете вручную",
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

          {/* 3. Зачем нужно раздельное туннелирование */}
          <div
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-xl"
            id="zachem"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary text-sm">
                3
              </span>
              Зачем оно нужно?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Раздельное туннелирование решает несколько практических задач, с
              которыми сталкиваются многие пользователи:
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Gauge,
                  title: "Скорость",
                  desc: "Не все приложения требуют VPN. Местные сайты и сервисы работают быстрее без шифрования",
                },
                {
                  icon: Lock,
                  title: "Банки и платежи",
                  desc: "Некоторые банки блокируют вход через VPN. Раздельное туннелирование решает эту проблему",
                },
                {
                  icon: Monitor,
                  title: "Локальные устройства",
                  desc: "Принтеры, умный дом и другие устройства в вашей сети работают только через локальное подключение",
                },
                {
                  icon: Shield,
                  title: "Экономия трафика",
                  desc: "Шифрование требует ресурсов. Зачем шифровать то, что и так безопасно?",
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

          {/* 4. Мифы о раздельном туннелировании */}
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
                  myth: "Если VPN включён — через него должно идти всё",
                  truth:
                    "Это необязательно. Раздельное туннелирование как раз создано для того, чтобы вы могли выбирать. VPN защищает только то, что вы хотите защитить, а остальное работает как обычно.",
                },
                {
                  myth: "Раздельное туннелирование — это небезопасно",
                  truth:
                    "Наоборот, это безопасно. Защищённые приложения по-прежнему используют шифрование VPN. А те приложения, что идут напрямую, работают в обычном режиме — ровно так же, как если бы VPN был выключен.",
                },
                {
                  myth: "Это сложно настраивать",
                  truth:
                    "В современных VPN-приложениях всё настраивается в пару нажатий. Обычно достаточно отметить галочками приложения, которые должны работать через VPN, а остальное программа делает сама.",
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
              Ren VPN поддерживает раздельное туннелирование
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Выбирайте, какие приложения защищать, а какие — нет. Всё
              настраивается в один клик. Скачайте Ren VPN и попробуйте сами.
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
