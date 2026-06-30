import { FileDown, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { GooglePlayIcon } from "@/components/ui/google-play-icon";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:py-28">
      <div className="absolute top-[-15%] left-[-5%] h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-5%] h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-3xl">
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
      </div>
    </section>
  );
}
