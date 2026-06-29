"use client";

import { socialProof } from "@/lib/data";
import { Star, Users, Download } from "lucide-react";

export function SocialProof() {
  const { rating, totalRatings, users, downloads, reviews, publications } =
    socialProof;

  return (
    <section className="relative overflow-hidden px-4 pb-24 sm:pb-32">
      <div className="absolute top-[-10%] right-[-10%] h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-[-5%] left-[-10%] h-[300px] w-[300px] rounded-full bg-cyan-500/5 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 text-center space-y-3">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Нам доверяют
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Тысячи пользователей по всему миру уже выбрали безопасный интернет
          </p>
        </div>

        <div className="mb-16 grid gap-4 sm:grid-cols-3">
          <div className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center shadow-xl">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < Math.floor(rating) ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground/30"}`}
                />
              ))}
            </div>
            <span className="text-3xl font-bold">{rating}/5</span>
            <span className="text-sm text-muted-foreground">
              Средняя оценка · {totalRatings} отзывов
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center shadow-xl">
            <Users className="h-8 w-8 text-primary" />
            <span className="text-3xl font-bold">{users}</span>
            <span className="text-sm text-muted-foreground">
              Активных пользователей
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center shadow-xl">
            <Download className="h-8 w-8 text-primary" />
            <span className="text-3xl font-bold">{downloads}</span>
            <span className="text-sm text-muted-foreground">
              Скачиваний приложения
            </span>
          </div>
        </div>

        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-xl transition-all duration-300 hover:border-primary/30 hover:bg-white/10"
            >
              <div className="mb-3 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < review.rating ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground/30"}`}
                  />
                ))}
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground flex-1">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                  {review.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-xl">
          <p className="mb-6 text-center text-sm font-medium text-muted-foreground uppercase tracking-wider">
            О нас пишут
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {publications.map((pub) => (
              <span
                key={pub.id}
                className="text-lg font-bold text-muted-foreground/50 transition-colors hover:text-muted-foreground/80"
              >
                {pub.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
