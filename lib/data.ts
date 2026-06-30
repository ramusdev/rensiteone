import {
  ShieldCheck,
  Zap,
  Lock,
  Globe,
  Smartphone,
  Play,
  Download,
  Mail,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface AppInfo {
  name: string;
  tagline: string;
  description: string;
  stats: Array<{ label: string; value: string }>;
  highlights: Array<{
    icon: LucideIcon;
    title: string;
    description: string;
  }>;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  avatar: string;
  text: string;
  rating: number;
}

export interface Publication {
  id: string;
  name: string;
}

export interface PricingPlan {
  id: string;
  duration: string;
  durationLabel: string;
  price: number;
  originalPrice?: number;
  periodLabel: string;
  description: string;
  features: string[];
  recommended?: boolean;
  discount?: string;
  promo?: boolean;
}

export interface SocialProof {
  rating: number;
  totalRatings: string;
  users: string;
  downloads: string;
  reviews: Review[];
  publications: Publication[];
}

export const appInfo: AppInfo = {
  name: "Ren VPN",
  tagline: "Безопасный интернет для всех",
  description:
    "Современный VPN-сервис с надёжным шифрованием, без логирования и с высокой скоростью соединения. Защитите свою приватность в один клик.",
  stats: [
    { label: "Стран", value: "97+" },
    { label: "Серверов", value: "1200+" },
    { label: "Пользователей", value: "1M+" },
  ],
  highlights: [
    {
      icon: ShieldCheck,
      title: "Шифрование",
      description: "AES-256 — современный стандарт шифрования",
    },
    {
      icon: Zap,
      title: "Скорость",
      description: "10+ Gbps на каждом сервере без ограничений трафика",
    },
    {
      icon: Lock,
      title: "Без логов",
      description: "Мы не храним историю ваших подключений",
    },
    {
      icon: Globe,
      title: "Глобальный доступ",
      description: "Свободный доступ к контенту в 97 странах мира",
    },
    {
      icon: Smartphone,
      title: "Все платформы",
      description: "Работает на Android",
    },
  ],
};

export const socialProof: SocialProof = {
  rating: 4.8,
  totalRatings: "12 458",
  users: "1M+",
  downloads: "3.2M+",
  reviews: [
    {
      id: "r1",
      name: "Алексей Кузнецов",
      role: "Фрилансер",
      avatar: "АК",
      text: "Пользуюсь Ren VPN уже полгода. Скорость отличная, ни разу не было обрывов. Всё открывается без проблем — рекомендую.",
      rating: 5,
    },
    {
      id: "r2",
      name: "Елена Соколова",
      role: "Маркетолог",
      avatar: "ЕС",
      text: "Переехала с другого VPN и не жалею. Интерфейс интуитивный, настройка заняла минуту. Шифрование на высшем уровне.",
      rating: 5,
    },
    {
      id: "r3",
      name: "Дмитрий Иванов",
      role: "Разработчик",
      avatar: "ДИ",
      text: "Использую для работы с зарубежными серверами. Стабильное соединение 24/7, поддержка отвечает быстро. Цена оправдана.",
      rating: 4,
    },
    {
      id: "r4",
      name: "Мария Петрова",
      role: "Путешественница",
      avatar: "МП",
      text: "Отличный VPN для поездок. Работает в десятках стран, подключается автоматически. Чувствую себя в безопасности везде.",
      rating: 5,
    },
  ],
  publications: [
    { id: "p1", name: "TechCrunch" },
    { id: "p2", name: "Wired" },
    { id: "p3", name: "Forbes" },
    { id: "p4", name: "The Verge" },
    { id: "p5", name: "CNET" },
  ],
};

export interface DownloadPlatform {
  id: string;
  name: string;
  icon: LucideIcon;
  description?: string;
}

export const downloadPlatforms: DownloadPlatform[] = [
  {
    id: "google-play",
    name: "Скачать с Google Play",
    icon: Play,
  },
  {
    id: "apk",
    name: "Скачать .apk",
    icon: Download,
  },
];

export interface SupportChannel {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  action?: string;
}

export const supportChannels: SupportChannel[] = [
  {
    id: "email",
    icon: Mail,
    title: "Email поддержка",
    description: "Отправьте письмо — ответим в течение часа в рабочее время.",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "monthly",
    duration: "3",
    durationLabel: "3 дня",
    price: 1,
    periodLabel: "3 дня",
    description: "Промо-доступ на 3 дня",
    features: [
      "AES-256 шифрование",
      "Без логирования данных",
      "97+ стран подключения",
      "1200+ серверов",
      "До 5 устройств",
      "30 дней возврата",
    ],
    promo: true,
  },
  {
    id: "annual",
    duration: "1",
    durationLabel: "1 месяц",
    price: 199,
    originalPrice: 499,
    periodLabel: "месяц",
    description: "Максимальная выгода",
    features: [
      "AES-256 шифрование",
      "Без логирования данных",
      "97+ стран подключения",
      "1200+ серверов",
      "До 15 устройств",
      "Приоритетная поддержка 24/7",
      "Выделенный сервер",
      "30 дней возврата",
    ],
    recommended: true,
    discount: "−60%",
  },
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    id: "speed",
    question: "Замедляет ли VPN интернет?",
    answer:
      "Любой VPN может немного снижать скорость из-за шифрования трафика, но мы используем высокопроизводительные серверы с подключением 10+ Gbps и оптимизированные протоколы. В большинстве случаев вы не заметите разницы, а прирост приватности с лихвой компенсирует минимальную потерю скорости.",
  },
  {
    id: "devices",
    question: "Какие устройства поддерживаются?",
    answer:
      "Ren VPN поддерживает устройства на Android. Вы можете установить приложение на свой смартфон или планшет и пользоваться одной подпиской.",
  },
  {
    id: "multisubscription",
    question: "Сколько устройств можно подключить?",
    answer:
      "Количество устройств зависит от выбранного тарифа: до 5 устройств на тарифе «3 дня», до 15 устройств на тарифе «1 месяц». Все устройства работают одновременно — никаких ограничений по количеству подключений.",
  },
];

export interface ServerCountry {
  flag: string;
  name: string;
  city?: string;
}

export interface ServerRegion {
  id: string;
  name: string;
  countries: ServerCountry[];
}

export const serverRegions: ServerRegion[] = [
  {
    id: "europe",
    name: "Европа",
    countries: [
      { flag: "🇩🇪", name: "Германия" },
      { flag: "🇫🇷", name: "Франция" },
      { flag: "🇬🇧", name: "Великобритания" },
      { flag: "🇳🇱", name: "Нидерланды" },
      { flag: "🇸🇪", name: "Швеция" },
      { flag: "🇳🇴", name: "Норвегия" },
      { flag: "🇩🇰", name: "Дания" },
      { flag: "🇫🇮", name: "Финляндия" },
      { flag: "🇪🇸", name: "Испания" },
      { flag: "🇮🇹", name: "Италия" },
      { flag: "🇨🇭", name: "Швейцария" },
      { flag: "🇦🇹", name: "Австрия" },
      { flag: "🇧🇪", name: "Бельгия" },
      { flag: "🇮🇪", name: "Ирландия" },
      { flag: "🇵🇹", name: "Португалия" },
      { flag: "🇵🇱", name: "Польша" },
      { flag: "🇨🇿", name: "Чехия" },
      { flag: "🇬🇷", name: "Греция" },
      { flag: "🇷🇴", name: "Румыния" },
      { flag: "🇭🇺", name: "Венгрия" },
      { flag: "🇧🇬", name: "Болгария" },
      { flag: "🇭🇷", name: "Хорватия" },
      { flag: "🇱🇹", name: "Литва" },
      { flag: "🇱🇺", name: "Люксембург" },
    ],
  },
  {
    id: "north-america",
    name: "Северная Америка",
    countries: [{ flag: "🇺🇸", name: "США" }],
  },
  {
    id: "eurasia",
    name: "Евразия",
    countries: [{ flag: "🇹🇷", name: "Турция" }],
  },
];
