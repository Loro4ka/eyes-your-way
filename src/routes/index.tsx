import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-optics.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Подбор очков в Санкт-Петербурге — запись к специалисту" },
      {
        name: "description",
        content:
          "Профессиональный подбор очков в Санкт-Петербурге: диагностика зрения, подбор линз и оправы, изготовление и проверка посадки. Запишитесь на консультацию.",
      },
      { property: "og:title", content: "Подбор очков в Санкт-Петербурге" },
      {
        property: "og:description",
        content:
          "Диагностика зрения, подбор линз и оправы, изготовление очков. Запишитесь на подбор очков — специалист проконсультирует по стоимости.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const priceRows = [
  { label: "Диагностика зрения", value: "уточняется на записи" },
  { label: "Подбор очков", value: "уточняется на записи" },
  { label: "Продолжительность приёма", value: "40–60 минут" },
  { label: "Запись", value: "по телефону или онлайн" },
];

const included = [
  "Консультация специалиста",
  "Проверка остроты зрения",
  "Определение оптических параметров",
  "Рекомендации по линзам и покрытиям",
  "Помощь в выборе оправы",
  "Проверка посадки готовых очков",
];

const salons = [
  { title: "Салон в центре", address: "Санкт-Петербург, Центральный район" },
  { title: "Салон на севере города", address: "Санкт-Петербург, Выборгский район" },
  { title: "Салон на юге города", address: "Санкт-Петербург, Московский район" },
];

const steps: [string, string][] = [
  ["Консультация", "Обсуждаем задачи, образ жизни и жалобы на зрение."],
  ["Диагностика зрения", "Проверяем остроту зрения и работу обоих глаз."],
  ["Определение параметров", "Фиксируем рефракцию, межзрачковое расстояние, дополнительные величины."],
  ["Подбор линз", "Выбираем дизайн линз, индекс, покрытия под ваши задачи."],
  ["Подбор оправы", "Учитываем форму лица, посадку и параметры линз."],
  ["Проверка посадки", "Настраиваем оправу: заушники, носоупоры, центровка."],
  ["Изготовление", "Изготавливаем очки по вашим параметрам."],
  ["Контроль качества", "Проверяем готовые очки и комфорт при ношении."],
];

const glassesTypes: [string, string][] = [
  ["Для постоянного ношения", "Универсальные очки на каждый день с комфортной коррекцией."],
  ["Для компьютера", "Снижают нагрузку при работе на средней дистанции."],
  ["Для офиса", "Офисные линзы для работы с документами и монитором."],
  ["Для вождения", "Контрастность и защита от блики фар и мокрого асфальта."],
  ["Прогрессивные", "Одни очки для дали, средней дистанции и чтения."],
  ["Солнцезащитные с диоптриями", "Затемнённые линзы с вашей коррекцией и UV-защитой."],
  ["Детские", "Лёгкие оправы и линзы с учётом роста и активности ребёнка."],
];

const faq: [string, string][] = [
  [
    "Сколько времени занимает подбор очков?",
    "Обычно приём занимает 40–60 минут: диагностика, определение параметров, подбор линз и оправы.",
  ],
  [
    "Нужно ли заранее записываться?",
    "Да, запись желательна — так специалист выделит достаточно времени и вы придёте без ожидания.",
  ],
  [
    "Можно ли подобрать очки по готовому рецепту?",
    "Да. Мы изготовим очки по вашему рецепту и при необходимости проверим его актуальность.",
  ],
  [
    "Можно ли подобрать очки без рецепта?",
    "Да, рецепт не обязателен: специалист проведёт диагностику и определит нужные параметры на приёме.",
  ],
  [
    "Сколько времени изготавливаются очки?",
    "Простые заказы — как правило от одного дня, сложные линзы (прогрессивные, специальные покрытия) — дольше. Точный срок сообщат при заказе.",
  ],
  [
    "Можно ли подобрать прогрессивные очки?",
    "Да. Для прогрессивных линз мы дополнительно снимаем индивидуальные параметры посадки оправы.",
  ],
  [
    "Можно ли заказать очки с диоптриями для вождения?",
    "Да, включая солнцезащитные и линзы с покрытиями, уменьшающими блики в темноте.",
  ],
  [
    "Как выбрать оправу под форму лица?",
    "Специалист подскажет пропорции и посадку: важны не только форма лица, но и параметры выбранных линз.",
  ],
];

function Index() {
  return (
    <main className="bg-background text-foreground">
      {/* Breadcrumbs */}
      <nav aria-label="Хлебные крошки" className="border-b border-border">
        <ol className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-5 py-4 text-sm text-muted-foreground">
          <li>
            <a href="/" className="hover:text-primary">
              Главная
            </a>
          </li>
          <li aria-hidden>›</li>
          <li className="font-medium text-foreground">Подбор очков</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="bg-hero-gradient">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:py-20">
          <div>
            <h1 className="text-4xl leading-[1.05] md:text-6xl">
              Подбор очков в Санкт-Петербурге
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Диагностика зрения, точное определение параметров, подбор линз и оправы,
              изготовление и проверка посадки — в одном приёме у специалиста.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" className="rounded-lg px-7 text-base font-bold" asChild>
                <a href="#zapis">Записаться на подбор очков →</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-lg border-primary/30 px-7 text-base font-semibold text-primary hover:bg-accent"
                asChild
              >
                <a href="#stoimost">Стоимость подбора</a>
              </Button>
            </div>
          </div>
          <img
            src={heroImage}
            alt="Специалист подбирает очки клиенту в салоне оптики в Санкт-Петербурге"
            width={1600}
            height={1100}
            className="w-full rounded-2xl object-cover shadow-soft"
          />
        </div>
      </section>

      {/* Стоимость */}
      <section id="stoimost" className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="heading-bar text-3xl md:text-4xl">Стоимость подбора очков</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Итоговая стоимость зависит от объёма диагностики, выбранных линз и оправы.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardContent className="p-6">
              <dl className="divide-y divide-border">
                {priceRows.map((row) => (
                  <div
                    key={row.label}
                    className="flex flex-wrap items-baseline justify-between gap-2 py-3"
                  >
                    <dt className="font-medium">{row.label}</dt>
                    <dd className="text-muted-foreground">{row.value}</dd>
                  </div>
                ))}
              </dl>
              <h3 className="mt-6 text-lg font-semibold">Что входит</h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {included.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                    <span aria-hidden className="text-primary">
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-accent text-accent-foreground">
            <CardContent className="flex h-full flex-col justify-between gap-6 p-6">
              <div>
                <h3 className="text-xl">Запись на приём</h3>
                <p className="mt-3 text-sm">
                  Запишитесь на подбор очков — специалист проконсультирует по стоимости и
                  доступным вариантам.
                </p>
              </div>
              <Button size="lg" asChild>
                <a href="#zapis">Записаться на подбор очков</a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <h3 className="mt-12 text-xl font-semibold">Адреса салонов в Санкт-Петербурге</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {salons.map((salon) => (
            <Card key={salon.title}>
              <CardContent className="p-5">
                <p className="font-medium">{salon.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{salon.address}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Пошагово */}
      <section id="kak" className="border-y border-border bg-secondary py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="heading-bar text-3xl md:text-4xl">Как подобрать очки — пошагово</h2>
          <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([title, text], i) => (
              <li key={title} className="rounded-xl border border-border bg-card p-5">
                <span className="text-sm font-semibold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Какие очки */}
      <section id="vidy" className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="heading-bar text-3xl md:text-4xl">Какие очки можно подобрать</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {glassesTypes.map(([title, text]) => (
            <Card key={title}>
              <CardContent className="p-5">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Перелинковка */}
      <section className="border-t border-border bg-secondary py-14">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="heading-bar text-3xl md:text-4xl">Каталог оправ</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <Card className="transition-shadow hover:shadow-md">
              <CardContent className="p-5">
                <h3 className="text-lg font-semibold">
                  <Link to="/opravy/zhenskie" className="hover:text-primary">
                    Женские оправы для очков
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Круглые, овальные, cat-eye, металл и титан — от 1 500 ₽, с фильтрами по
                  бренду, цвету и размеру.
                </p>
              </CardContent>
            </Card>
            <Card className="transition-shadow hover:shadow-md">
              <CardContent className="p-5">
                <h3 className="text-lg font-semibold">
                  <Link to="/opravy/zhenskie" hash="katalog" className="hover:text-primary">
                    Каталог моделей и цены
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Подберите оправу по цене и характеристикам, а примерка в салоне — бесплатно.
                </p>
              </CardContent>
            </Card>
            <Card className="transition-shadow hover:shadow-md">
              <CardContent className="p-5">
                <h3 className="text-lg font-semibold">
                  <Link to="/opravy/zhenskie" hash="faq" className="hover:text-primary">
                    Как выбрать оправу
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Формы под тип лица, материалы и ответы на частые вопросы об оправах.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section id="faq" className="border-y border-border bg-secondary py-16">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="heading-bar text-3xl md:text-4xl">Частые вопросы</h2>
          <Accordion type="single" collapsible className="mt-6">
            {faq.map(([q, a]) => (
              <AccordionItem key={q} value={q}>
                <AccordionTrigger className="text-left">{q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section id="zapis" className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="text-3xl md:text-4xl">Записаться на подбор очков</h2>
          <p className="mt-4 text-primary-foreground/85">
            Специалист проконсультирует по стоимости, срокам изготовления и подходящим
            вариантам линз и оправ.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              size="lg"
              variant="secondary"
              className="rounded-lg px-7 text-base font-bold text-primary"
              asChild
            >
              <a href="tel:+78120000000">Позвонить и записаться →</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <a href="#stoimost">Узнать о стоимости</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
