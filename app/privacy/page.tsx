import { Metadata } from "next";
import Link from "next/link";
import { Shield, ArrowLeft, FileDown, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Политика конфиденциальности | Ren VPN",
  description:
    "Политика конфиденциальности Ren VPN. Узнайте, как мы защищаем ваши данные и обеспечиваем приватность.",
};

export default function PrivacyPage() {
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
              <Shield className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Политика конфиденциальности
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Мы серьёзно относимся к вашей приватности
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 pb-24 sm:pb-32">
        <div className="mx-auto max-w-3xl space-y-8">
          {/* 1. Введение */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary text-sm">
                1
              </span>
              Введение
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Настоящая Политика конфиденциальности объясняет, как Ren VPN
              собирает, использует и защищает вашу информацию при использовании
              нашего приложения и веб-сайта.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Используя Ren VPN, вы соглашаетесь с условиями, описанными в
              данном документе. Мы можем периодически обновлять эту политику,
              поэтому рекомендуем проверять её время от времени.
            </p>
          </div>

          {/* 2. Какие данные мы собираем */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary text-sm">
                2
              </span>
              Какие данные мы собираем
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Мы придерживаемся политики отсутствия логов (no-logs). Это значит:
            </p>
            <ul className="space-y-3">
              {[
                {
                  title: "Мы НЕ собираем",
                  desc: "Историю ваших посещений, содержимое трафика, DNS-запросы, ваш реальный IP-адрес во время использования VPN",
                  positive: false,
                },
                {
                  title: "Мы НЕ храним",
                  desc: "Логи соединений, временные метки подключений, объём переданных данных по каждому пользователю",
                  positive: false,
                },
                {
                  title: "Мы можем собирать",
                  desc: "Анонимную статистику использования приложения (только с вашего согласия) для улучшения качества сервиса",
                  positive: true,
                },
                {
                  title: "Мы храним",
                  desc: "Адрес электронной почты, если вы регистрируетесь или обращаетесь в поддержку",
                  positive: true,
                },
              ].map((item) => (
                <li
                  key={item.title}
                  className="flex gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4"
                >
                  <div
                    className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                      item.positive
                        ? "bg-primary/10 text-primary"
                        : "bg-red-500/10 text-red-400"
                    }`}
                  >
                    <span className="text-sm font-bold">
                      {item.positive ? "✓" : "✗"}
                    </span>
                  </div>
                  <div>
                    <strong className="text-foreground">{item.title}</strong>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Как мы используем данные */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary text-sm">
                3
              </span>
              Как мы используем данные
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Любая информация, которую мы собираем, используется исключительно
              для:
            </p>
            <ul className="space-y-3">
              {[
                "Обеспечения работы и поддержки VPN-сервиса",
                "Ответов на ваши запросы в службу поддержки",
                "Улучшения качества и производительности приложения",
                "Уведомлений об изменениях в сервисе или политике",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">
                    {i + 1}
                  </span>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Передача данных третьим лицам */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary text-sm">
                4
              </span>
              Передача данных третьим лицам
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Мы не продаём и не передаём ваши личные данные третьим лицам, за
              исключением следующих случаев:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
              <li>Если это требуется по закону (по решению суда)</li>
              <li>
                Для защиты наших законных прав и предотвращения мошенничества
              </li>
              <li>С вашего явного согласия на передачу данных</li>
            </ul>
          </div>

          {/* 5. Безопасность данных */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary text-sm">
                5
              </span>
              Безопасность данных
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Мы принимаем разумные меры для защиты вашей информации:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
              <li>
                Используем современные протоколы шифрования для передачи данных
              </li>
              <li>
                Регулярно обновляем наше программное обеспечение для устранения
                уязвимостей
              </li>
              <li>
                Ограничиваем доступ к данным только теми сотрудниками, которым
                это необходимо
              </li>
            </ul>
          </div>

          {/* 6. Ваши права */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary text-sm">
                6
              </span>
              Ваши права
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Вы имеете право:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
              <li>Запросить информацию о том, какие данные мы храним</li>
              <li>Потребовать удаления ваших данных</li>
              <li>Отозвать согласие на обработку данных в любой момент</li>
              <li>
                Обратиться в службу поддержки с вопросами о конфиденциальности
              </li>
            </ul>
          </div>

          {/* 7. Контакты */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary text-sm">
                7
              </span>
              Контактная информация
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Если у вас есть вопросы о нашей Политике конфиденциальности,
              пожалуйста, свяжитесь с нами по электронной почте:
            </p>
            <p className="mt-3 text-primary font-medium">support@renvpn.com</p>
          </div>

          {/* CTA */}
          <div className="rounded-2xl border border-primary/20 bg-primary/[0.03] backdrop-blur-xl p-8 shadow-xl text-center space-y-4">
            <Shield className="mx-auto h-10 w-10 text-primary" />
            <h2 className="text-2xl font-bold">
              Попробуйте Ren VPN прямо сейчас
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Ваша приватность — наш главный приоритет. Защитите свои данные уже
              сегодня.
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
