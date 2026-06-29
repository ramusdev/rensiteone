"use client";

import { useState } from "react";
import { faqItems } from "@/lib/data";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative overflow-hidden px-4 pb-24 sm:pb-32">
      <div className="absolute top-[-10%] right-[-5%] h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[120px]" />
      <div className="absolute bottom-[-5%] left-[-10%] h-[350px] w-[350px] rounded-full bg-primary/5 blur-[100px]" />

      <div className="relative mx-auto max-w-3xl">
        <div className="mb-12 text-center space-y-3">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
            <HelpCircle className="h-7 w-7 text-primary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Часто задаваемые вопросы
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Всё, что вы хотели знать о Ren VPN
          </p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-primary/30"
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold sm:text-lg">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
