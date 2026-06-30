"use client";

import { pricingPlans } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Check } from "lucide-react";

export function PricingSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-24 sm:pb-32">
      <div className="absolute top-[-15%] left-[-5%] h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-5%] h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 text-center space-y-3">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Выберите ваш тариф
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Защитите свою приватность по лучшей цене
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 items-start">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-2xl border p-8 shadow-xl transition-all duration-300 ${
                plan.recommended
                  ? "border-primary/50 bg-primary/[0.04] backdrop-blur-xl scale-105 lg:scale-110"
                  : "border-white/10 bg-white/5 backdrop-blur-xl hover:border-primary/30"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="default" className="px-4 py-1 text-xs">
                    Рекомендуем
                  </Badge>
                </div>
              )}
              {plan.promo && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="secondary" className="px-4 py-1 text-xs">
                    Промо
                  </Badge>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-1">
                  {plan.durationLabel}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">{plan.price} ₽</span>
                  <span className="text-sm text-muted-foreground">
                    /{plan.periodLabel}
                  </span>
                </div>
                {plan.originalPrice && (
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-muted-foreground line-through">
                      {plan.originalPrice} ₽
                    </span>
                    {plan.discount && (
                      <Badge
                        variant="secondary"
                        className="text-xs font-medium"
                      >
                        {plan.discount}
                      </Badge>
                    )}
                  </div>
                )}
              </div>

              <ul className="mb-8 space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center shadow-xl">
          <ShieldCheck className="h-8 w-8 shrink-0 text-cyan-400" />
          <div className="text-left">
            <p className="font-semibold">30-дневная гарантия возврата</p>
            <p className="text-sm text-muted-foreground">
              Если сервис вам не подойдёт, вернём полную стоимость без вопросов
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
