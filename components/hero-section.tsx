import { appInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { Download, FileDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[100px]" />
      <div className="relative mx-auto max-w-3xl text-center">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text">
              {appInfo.tagline}
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
              {appInfo.description}
            </p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.rg.nomadvpn"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 px-8 text-base gap-2"
              )}
            >
              <Download className="h-4 w-4" />
              Скачать с Google Play
            </a>
            <Button size="lg" className="h-12 px-8 text-base gap-2">
              <FileDown className="h-4 w-4" />
              Скачать .apk
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
