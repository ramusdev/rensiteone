"use client";

import { supportChannels } from "@/lib/data";
import { LifeBuoy } from "lucide-react";

export function SupportSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-24 sm:pb-32">
      <div className="absolute top-[-5%] right-[-10%] h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-5%] h-[350px] w-[350px] rounded-full bg-primary/5 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 text-center space-y-3">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
            <LifeBuoy className="h-7 w-7 text-primary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Мы всегда на связи
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Напишите нам — ответим на любой вопрос
          </p>
        </div>

        <div className="mx-auto max-w-md">
          {supportChannels.map((channel) => {
            const Icon = channel.icon;
            return (
              <div
                key={channel.id}
                className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-xl transition-all duration-300 hover:border-primary/30 hover:bg-white/10 hover:-translate-y-1"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{channel.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {channel.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
