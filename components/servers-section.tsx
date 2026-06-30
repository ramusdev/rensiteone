import { serverRegions } from "@/lib/data";
import { Globe } from "lucide-react";

export function ServersSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-24 sm:pb-32">
      <div className="absolute top-[-15%] left-[-10%] h-[500px] w-[500px] rounded-full bg-primary/5 blur-[150px]" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 text-center space-y-3">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Карта серверов
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Серверы в 97 странах мира для быстрого и стабильного соединения
          </p>
        </div>

        <div className="mb-8 flex items-center justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-2">
            <Globe className="h-4 w-4 text-primary" />
            <span>24 страны</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-2">
            <Globe className="h-4 w-4 text-primary" />
            <span>1200+ серверов</span>
          </div>
        </div>

        <div className="grid gap-8">
          {serverRegions.map((region) => (
            <div
              key={region.id}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-xl sm:p-8"
            >
              <h3 className="mb-6 text-xl font-semibold tracking-tight text-primary">
                {region.name}
              </h3>
              <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                {region.countries.map((country) => (
                  <div
                    key={country.name}
                    className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 transition-all duration-200 hover:border-primary/20 hover:bg-white/[0.06]"
                  >
                    <span className="text-xl leading-none">{country.flag}</span>
                    <span className="text-sm font-medium">{country.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
