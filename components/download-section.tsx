"use client";

import { toast } from "sonner";

const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.rg.nomadvpn";

export function DownloadSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-24 sm:pb-32">
      <div className="absolute top-[-10%] right-[-5%] h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[120px]" />
      <div className="absolute bottom-[-15%] left-[-5%] h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 text-center space-y-3">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Скачайте приложение
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Доступно на Android
          </p>
        </div>

        <div className="mx-auto grid max-w-lg gap-4 sm:grid-cols-2">
          <a
            href={GOOGLE_PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-xl transition-all duration-300 hover:border-primary/30 hover:bg-white/10 hover:-translate-y-1 cursor-pointer text-left"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.498 1.498 0 010 2.594zM6.259 2.379L16.66 7.39l-3.39 3.368-7.011-7.015v-.002a1.072 1.072 0 011.023-1.366c.202 0 .404.05.583.149zM4.018 3.693l7.315 7.317-7.315 7.317a1.584 1.584 0 01-.255-.938V4.631c0-.342.099-.663.255-.938zM16.66 16.61l-10.401 5.011a1.055 1.055 0 01-.583.149c-.63 0-1.143-.512-1.143-1.143v-.223l7.326-7.326 3.801 3.532z" />
              </svg>
            </div>
            <span className="text-lg font-semibold">Скачать с Google Play</span>
          </a>
          <button
            className="group relative flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-xl transition-all duration-300 hover:border-primary/30 hover:bg-white/10 hover:-translate-y-1 cursor-pointer text-left"
            onClick={() => toast.success("Загрузка Ren VPN для .apk начата")}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
              <svg
                className="h-7 w-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </div>
            <span className="text-lg font-semibold">Скачать .apk</span>
          </button>
        </div>
      </div>
    </section>
  );
}
