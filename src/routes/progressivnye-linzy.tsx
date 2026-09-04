import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Glasses,
  Users,
  Monitor,
  Car,
  Sparkles,
  Eye,
  CalendarClock,
  BookOpen,
  Ruler,
  FileText,
  Plus,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import heroProgressive from "@/assets/hero-progressive.jpg";

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export const Route = createFileRoute("/progressivnye-linzy")({
  head: () => ({
    meta: [
      { title: "Прогрессивные линзы для очков — Essilor, Varilux, Hoyalux в СПб | Оптика 100%" },
      {
        name: "description",
        content:
          "Прогрессивные линзы для очков в Санкт-Петербурге: Essilor, Varilux, Hoyalux и другие. Цены от 5 700 ₽. Подбор, изготовление и консультация специалиста. ул. Кирочная, 17.",
      },
      { property: "og:title", content: "Прогрессивные линзы для очков — от 5 700 ₽ | Оптика 100%" },
      {
        property: "og:description",
        content:
          "Прогрессивные линзы Essilor, Varilux, Hoyalux в Санкт-Петербурге. Что это, кому подходят, как выбрать и сколько стоят. Запись на подбор.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProgressiveLensesPage,
});

const brands = [
  {
    brand: "Essilor",
    series: "Essilor Progressive",
    whom: "Первые прогрессивные линзы, ежедневное ношение",
    features: "Плавный переход между зонами, широкий выбор дизайнов",
    price: "от 5 700 ₽",
  },
  {
    brand: "Varilux",
    series: "Comfort / Physio / X-series",
    whom: "Активный образ жизни, требовательные пользователи",
    features: "Эталонный комфорт, минимальные искажения по краям",
    price: "от 12 000 ₽",
  },
  {
    brand: "Hoyalux",
    series: "Hoyalux iD / WorkStyle",
    whom: "Работа за компьютером и вождение",
    features: "Индивидуальные дизайны, учёт параметров оправы",
    price: "от 9 000 ₽",
  },
];

const howToChoose = [
  { icon: CalendarClock, title: "Возраст", text: "Прогрессивные линзы обычно назначаются после 40 лет, когда развивается возрастная дальнозоркость (пресбиопия)." },
  { icon: Sparkles, title: "Образ жизни", text: "Активная жизнь, спорт, поездки — от этого зависит выбор серии: стандартная, премиальная или индивидуальная." },
  { icon: Monitor, title: "Работа за компьютером", text: "Для долгой работы с монитором важна широкая промежуточная зона — учитываем это при выборе дизайна линзы." },
  { icon: Car, title: "Вождение", text: "Если вы много времени за рулём, подбираем линзы с усиленной дальней зоной и комфортным боковым обзором." },
  { icon: BookOpen, title: "Чтение", text: "Много читаете или работаете с документами — выбираем дизайн с расширенной ближней зоной." },
  { icon: Ruler, title: "Расстояние", text: "Оцениваем, на каких дистанциях вы проводите больше времени: вдаль, средние расстояния или вблизи." },
  { icon: Plus, title: "Аддидация", text: "Величина аддидации (добавки для близи) напрямую влияет на выбор серии и длины прогрессивного коридора." },
  { icon: FileText, title: "Особенности рецепта", text: "Астигматизм, разница между глазами, сила коррекции — всё это учитываем при подборе линз и оправы." },
];

const whom = [
  { icon: Users, text: "Людям старше 40 лет с возрастной дальнозоркостью (пресбиопией)" },
  { icon: Glasses, text: "Тем, кто устал носить отдельные очки для чтения и для дали" },
  { icon: Monitor, text: "Работающим за компьютером: нужна чёткость на разных дистанциях" },
  { icon: Car, text: "Водителям — от дороги до приборной панели одним взглядом" },
  { icon: Sparkles, text: "Активным людям, которым важно выглядеть без «возрастных» очков" },
  { icon: Eye, text: "Тем, у кого уже есть коррекция миопии или астигматизма и добавилась пресбиопия" },
];

const priceRanges = [
  { name: "Базовые прогрессивные линзы", price: "5 700 – 12 000 ₽", text: "Стандартные дизайны для первых прогрессивных очков и несложных рецептов." },
  { name: "Премиальные серии", price: "12 000 – 25 000 ₽", text: "Расширенные зоны обзора, быстрая адаптация, покрытия премиум-класса." },
  { name: "Индивидуальные дизайны", price: "25 000 – 40 000+ ₽", text: "Линзы, рассчитанные под ваш рецепт, оправу и параметры посадки." },
];

const faqs = [
  {
    q: "Что такое прогрессивные линзы простыми словами?",
    a: "Это линзы, в которых оптическая сила плавно меняется от верхней зоны (для дали) к нижней (для чтения). Одни очки заменяют две-три пары: для дали, компьютера и чтения.",
  },
  {
    q: "Кому нужны прогрессивные линзы?",
    a: "В первую очередь людям старше 40 лет с пресбиопией — когда становится трудно читать вблизи, а снимать и надевать очки неудобно.",
  },
  {
    q: "Сколько стоят прогрессивные линзы?",
    a: "В нашем каталоге — от 5 700 ₽ за базовые модели до более 40 000 ₽ за индивидуальные дизайны премиальных серий Varilux и Hoyalux.",
  },
  {
    q: "Как быстро можно привыкнуть к прогрессивным линзам?",
    a: "Обычно адаптация занимает от нескольких дней до двух недель. Современные дизайны Varilux и Hoyalux заметно сокращают этот срок.",
  },
  {
    q: "Можно ли водить машину в прогрессивных очках?",
    a: "Да. Верхняя зона линзы предназначена для дали. Существуют дизайны, специально оптимизированные для вождения.",
  },
  {
    q: "Подойдут ли прогрессивные линзы при астигматизме?",
    a: "Да, большинство современных прогрессивных линз изготавливаются с учётом астигматической коррекции. Параметры рецепта мы проверяем на диагностике.",
  },
  {
    q: "В какую оправу можно установить прогрессивные линзы?",
    a: "Важна достаточная высота оправы — обычно от 28–30 мм. Наши специалисты помогут подобрать подходящую модель из каталога женских оправ.",
  },
  {
    q: "Чем Varilux отличается от обычных прогрессивных линз?",
    a: "Varilux — флагманская серия Essilor с минимальными боковыми искажениями, широкими зонами обзора и быстрой адаптацией.",
  },
  {
    q: "Сколько времени изготавливаются очки с прогрессивными линзами?",
    a: "Обычно от 3 до 14 дней в зависимости от сложности рецепта и выбранной серии линз. Точный срок сообщим при заказе.",
  },
  {
    q: "Можно ли подобрать прогрессивные линзы без рецепта?",
    a: "Да — проведём диагностику зрения в салоне и подберём параметры линз. Стоимость услуг уточняйте на записи.",
  },
];

function ProgressiveLensesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5">
      {/* Breadcrumbs */}
      <nav aria-label="Хлебные крошки" className="pt-6 text-sm text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link to="/" className="hover:text-primary">
              Главная
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-foreground">Прогрессивные линзы</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="py-10 md:py-14">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex items-stretch gap-3 animate-fade-in">
            <span className="w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
                Прогрессивные линзы для очков
              </h1>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Essilor, Varilux, Hoyalux и другие серии — от 5 700 ₽ до индивидуальных дизайнов.
                Подбор по рецепту, образу жизни и параметрам посадки в салоне на ул. Кирочная, 17.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#zapis"
                  className="group inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Записаться на подбор
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#brendy"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
                >
                  Сравнить бренды
                </a>
              </div>
              {/* Зоны линзы */}
              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  { label: "Даль", w: "w-full" },
                  { label: "Компьютер", w: "w-2/3" },
                  { label: "Чтение", w: "w-1/3" },
                ].map((z, i) => (
                  <div key={z.label} className="w-full">
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-2 rounded-full bg-primary ${z.w} animate-pulse`}
                        style={{ animationDelay: `${i * 400}ms` }}
                        aria-hidden="true"
                      />
                      <span className="text-xs font-semibold text-muted-foreground">{z.label}</span>
                    </div>
                  </div>
                ))}
                <p className="mt-1 text-xs text-muted-foreground">
                  Три зоны чёткого зрения — в одной линзе без видимых границ
                </p>
              </div>
            </div>
          </div>
          <div className="animate-scale-in">
            <img
              src={heroProgressive}
              alt="Очки с прогрессивными линзами в салоне оптики"
              width={1024}
              height={768}
              className="w-full rounded-xl border border-border object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Блок 1: Что такое */}
      <section className="border-t border-border py-10">
        <h2 className="text-2xl font-extrabold tracking-tight text-foreground">Что такое прогрессивные линзы</h2>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_320px]">
          <Reveal className="space-y-4 text-muted-foreground">
            <p>
              Прогрессивные линзы — это мультифокальные линзы без видимых границ, в которых оптическая
              сила плавно изменяется сверху вниз. Верхняя часть линзы предназначена для взгляда вдаль,
              средняя (так называемый прогрессивный коридор) — для промежуточных расстояний, например
              экрана компьютера, а нижняя — для чтения и работы вблизи. В отличие от бифокальных линз,
              здесь нет резкой линии перехода: очки выглядят как обычные, а фокус меняется естественным
              движением взгляда.
            </p>
            <p>
              Такие линзы решают главную проблему пресбиопии — возрастной дальнозоркости, которая
              развивается у большинства людей после 40 лет. Вместо двух-трёх пар очков для разных задач
              достаточно одной: вы смотрите на дорогу за рулём, на приборную панель, на телефон — и
              везде видите чётко. Современные дизайны Essilor, Varilux и Hoyalux делают боковые зоны
              искажений минимальными, поэтому привыкание занимает в среднем несколько дней.
            </p>
            <p>
              Качество прогрессивных очков наполовину зависит от правильного подбора: измерения
              межзрачкового расстояния, высоты посадки оправы, вертексного расстояния и углов наклона.
              Поэтому прогрессивные линзы стоит подбирать в салоне, где специалист учтёт ваш рецепт,
              аддидацию, привычки и форму оправы. В «Оптике 100%» мы подбираем линзы под конкретную
              оправу и проверяем посадку до заказа.
            </p>
          </Reveal>

          {/* Схема зон линзы */}
          <Reveal delay={150}>
            <figure className="rounded-xl border border-border bg-card p-5">
              <svg viewBox="0 0 200 240" className="mx-auto h-auto w-full max-w-[220px]" role="img" aria-label="Схема зон прогрессивной линзы">
                <defs>
                  <linearGradient id="lensZones" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.08" />
                    <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.22" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.45" />
                  </linearGradient>
                </defs>
                <ellipse cx="100" cy="120" rx="88" ry="112" fill="url(#lensZones)" stroke="hsl(var(--primary))" strokeWidth="2" />
                <rect x="88" y="60" width="24" height="130" rx="12" fill="hsl(var(--primary))" opacity="0.25" />
                <text x="100" y="55" textAnchor="middle" className="fill-foreground" fontSize="13" fontWeight="700">Даль</text>
                <text x="100" y="128" textAnchor="middle" className="fill-foreground" fontSize="13" fontWeight="700">Средняя</text>
                <text x="100" y="200" textAnchor="middle" className="fill-foreground" fontSize="13" fontWeight="700">Близь</text>
              </svg>
              <figcaption className="mt-3 text-center text-xs text-muted-foreground">
                Оптическая сила плавно нарастает сверху вниз по прогрессивному коридору
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Блок 2: Кому подходят */}
      <section className="border-t border-border py-10">
        <h2 className="text-2xl font-extrabold tracking-tight text-foreground">Кому подходят прогрессивные линзы</h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {whom.map((item, i) => (
            <li key={item.text}>
              <Reveal delay={i * 70}>
                <div className="group flex h-full gap-3 rounded-lg border border-border bg-card p-4 text-sm text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-md">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <item.icon className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  <span>{item.text}</span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* Блок 3: Как выбрать */}
      <section className="border-t border-border py-10">
        <h2 className="text-2xl font-extrabold tracking-tight text-foreground">Как выбрать прогрессивные линзы</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          При подборе мы учитываем восемь ключевых факторов — они определяют, какая серия линз подойдёт именно вам.
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {howToChoose.map((f, i) => (
            <li key={f.title}>
              <Reveal delay={i * 60}>
                <div className="group h-full rounded-lg border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-md">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <f.icon className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-3 font-bold text-foreground">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* Блок 4: Сравнение брендов */}
      <section id="brendy" className="scroll-mt-24 border-t border-border py-10">
        <h2 className="text-2xl font-extrabold tracking-tight text-foreground">Сравнение брендов прогрессивных линз</h2>
        <div className="mt-6 overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-secondary text-foreground">
              <tr>
                <th className="px-4 py-3 font-bold">Бренд</th>
                <th className="px-4 py-3 font-bold">Серия</th>
                <th className="px-4 py-3 font-bold">Для кого</th>
                <th className="px-4 py-3 font-bold">Особенности</th>
                <th className="px-4 py-3 font-bold">Цена</th>
              </tr>
            </thead>
            <tbody>
              {brands.map((b) => (
                <tr key={b.brand} className="border-t border-border bg-card transition-colors hover:bg-accent/50">
                  <td className="px-4 py-3 font-bold text-primary">{b.brand}</td>
                  <td className="px-4 py-3 text-foreground">{b.series}</td>
                  <td className="px-4 py-3 text-muted-foreground">{b.whom}</td>
                  <td className="px-4 py-3 text-muted-foreground">{b.features}</td>
                  <td className="px-4 py-3 font-semibold text-foreground">{b.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          В наличии также другие серии и производители — полный ассортимент и наличие уточняйте в салоне.
        </p>
      </section>

      {/* Блок 5: Цены */}
      <section className="border-t border-border py-10">
        <h2 className="text-2xl font-extrabold tracking-tight text-foreground">Сколько стоят прогрессивные линзы</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          В нашем каталоге представлены модели от 5 700 ₽ до более 40 000 ₽. Итоговая цена зависит
          от серии линзы, сложности рецепта и выбранных покрытий.
        </p>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {priceRanges.map((p, i) => (
            <li key={p.name}>
              <Reveal delay={i * 90}>
                <div className="h-full rounded-lg border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-md">
                  <p className="text-lg font-extrabold text-primary">{p.price}</p>
                  <h3 className="mt-1 font-bold text-foreground">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted-foreground">
          Точную стоимость под ваш рецепт рассчитает специалист.{" "}
          <a
            href="https://optika100.com/uslugi/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary underline-offset-2 hover:underline"
          >
            Стоимость услуг
          </a>{" "}
          уточняется на записи.
        </p>
      </section>

      {/* Блок 6: Подбор + CTA */}
      <section id="zapis" className="scroll-mt-24 border-t border-border py-10">
        <div className="rounded-xl bg-primary p-8 text-primary-foreground md:p-10">
          <h2 className="text-2xl font-extrabold tracking-tight">Подбор прогрессивных линз</h2>
          <p className="mt-3 max-w-2xl opacity-90">
            Специалист проведёт диагностику зрения, измерит параметры посадки и подберёт серию линз
            под ваш рецепт, образ жизни и оправу. Салон в Санкт-Петербурге: ул. Кирочная, 17,
            м. Чернышевская, ежедневно с 10:00 до 20:00.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="tel:+78120000000"
              className="inline-flex items-center justify-center rounded-md bg-background px-6 py-3 text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
            >
              Записаться на подбор: 8 (812) 000-00-00
            </a>
            <Link
              to="/opravy/zhenskie"
              className="inline-flex items-center justify-center rounded-md border border-primary-foreground/40 px-6 py-3 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
            >
              Выбрать оправу
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border py-10">
        <h2 className="text-2xl font-extrabold tracking-tight text-foreground">Частые вопросы о прогрессивных линзах</h2>
        <ul className="mt-6 space-y-3">
          {faqs.map((f) => (
            <li key={f.q}>
              <details className="group rounded-lg border border-border bg-card">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold text-foreground transition-colors hover:text-primary">
                  {f.q}
                  <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="px-5 pb-4 text-sm text-muted-foreground">{f.a}</p>
              </details>
            </li>
          ))}
        </ul>
      </section>

      {/* Перелинковка */}
      <section className="border-t border-border py-10">
        <h2 className="text-xl font-extrabold tracking-tight text-foreground">Смотрите также</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <Link
            to="/"
            className="group rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary"
          >
            <h3 className="font-bold text-foreground group-hover:text-primary">Подбор очков в СПб</h3>
            <p className="mt-2 text-sm text-muted-foreground">Диагностика, подбор линз и оправы по шагам.</p>
          </Link>
          <Link
            to="/opravy/zhenskie"
            className="group rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary"
          >
            <h3 className="font-bold text-foreground group-hover:text-primary">Женские оправы</h3>
            <p className="mt-2 text-sm text-muted-foreground">LION`S HEART, FURLA, GUESS и ещё 70+ брендов.</p>
          </Link>
          <Link
            to="/stellest-katalog-s-linzami"
            className="group rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary"
          >
            <h3 className="font-bold text-foreground group-hover:text-primary">Линзы Stellest</h3>
            <p className="mt-2 text-sm text-muted-foreground">Линзы для контроля миопии у детей.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
