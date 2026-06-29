import { appInfo } from "@/lib/data";

export function FeatureCards() {
  const { highlights } = appInfo;

  return (
    <section className="px-4 pb-24 sm:pb-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center space-y-3">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ключевые возможности
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Всё необходимое для безопасного и комфортного интернета
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {highlights.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-xl transition-all duration-300 hover:border-primary/30 hover:bg-white/10 hover:-translate-y-1"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
