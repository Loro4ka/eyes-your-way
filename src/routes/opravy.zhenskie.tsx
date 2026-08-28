import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroFrames from "@/assets/hero-women-frames.jpg";


export const Route = createFileRoute("/opravy/zhenskie")({
  head: () => ({
    meta: [
      { title: "Женские оправы для очков в Санкт-Петербурге — Оптика 100%" },
      {
        name: "description",
        content:
          "Женские оправы для очков в Санкт-Петербурге: круглые, овальные, cat-eye, металлические и пластиковые модели от 1 500 ₽. Фильтры по бренду, форме, цвету и материалу, примерка в салоне.",
      },
      { property: "og:title", content: "Женские оправы для очков — Оптика 100%" },
      {
        property: "og:description",
        content:
          "Каталог женских оправ в Санкт-Петербурге: бренды, формы, материалы и цены от 1 500 ₽. Бесплатный подбор оправы у специалиста.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WomenFramesPage,
});

type Frame = {
  model: string;
  brand: string;
  shape: string;
  material: string;
  color: string;
  size: string;
  price: number;
};

const frames: Frame[] = [
  { model: "LION`S HEART SN240317-510", brand: "LION`S HEART", shape: "Классические", material: "Металл", color: "Чёрный", size: "M", price: 3900 },
  { model: "LION`S HEART SN231123-2", brand: "LION`S HEART", shape: "Кошачий глаз", material: "Металл", color: "Золотой", size: "M", price: 3900 },
  { model: "LION`S HEART SN231129-2", brand: "LION`S HEART", shape: "Круглые", material: "Металл", color: "Бронзовый", size: "S", price: 3900 },
  { model: "LION`S HEART SN250102-3", brand: "LION`S HEART", shape: "Многоугольные", material: "Металл", color: "Серебристый", size: "M", price: 3900 },
  { model: "LION`S HEART SN250886-2", brand: "LION`S HEART", shape: "Овальные", material: "Металл", color: "Зелёный", size: "S", price: 4000 },
  { model: "LION`S HEART SN230420-1", brand: "LION`S HEART", shape: "Классические", material: "Пластик", color: "Синий", size: "L", price: 4000 },
  { model: "LION`S HEART SN230896-1", brand: "LION`S HEART", shape: "Кошачий глаз", material: "Металл", color: "Фиолетовый", size: "M", price: 4400 },
  { model: "LION`S HEART SN230084-3", brand: "LION`S HEART", shape: "Круглые", material: "Титан", color: "Золотой", size: "S", price: 5000 },
  { model: "DACCHI D1042", brand: "DACCHI", shape: "Прямоугольные", material: "Пластик", color: "Чёрный", size: "M", price: 1500 },
  { model: "DACCHI D3218", brand: "DACCHI", shape: "Cat-eye", material: "Пластик", color: "Коричневый", size: "S", price: 1800 },
  { model: "DACCHI D8110", brand: "DACCHI", shape: "Овальные", material: "Металл", color: "Золотой", size: "M", price: 1900 },
  { model: "MARIO ROSSI MR01", brand: "Mario Rossi", shape: "Круглые", material: "Металл", color: "Серебристый", size: "S", price: 2400 },
  { model: "MARIO ROSSI MR27", brand: "Mario Rossi", shape: "Cat-eye", material: "Ацетат", color: "Розовый", size: "M", price: 2900 },
  { model: "NIKITANA NK5510", brand: "Nikitana", shape: "Квадратные", material: "Пластик", color: "Прозрачный", size: "L", price: 2200 },
  { model: "NIKITANA NK7220", brand: "Nikitana", shape: "Прямоугольные", material: "Металл", color: "Чёрный", size: "M", price: 2600 },
  { model: "TROPICAL SUSAN", brand: "Tropical", shape: "Круглые", material: "Ацетат", color: "Коричневый", size: "S", price: 3200 },
  { model: "TROPICAL MIA", brand: "Tropical", shape: "Овальные", material: "Пластик", color: "Синий", size: "M", price: 3400 },
  { model: "ANA HICKMANN AH6412", brand: "Ana Hickmann", shape: "Cat-eye", material: "Титан", color: "Золотой", size: "M", price: 7900 },
  { model: "ANA HICKMANN AH1398", brand: "Ana Hickmann", shape: "Квадратные", material: "Ацетат", color: "Чёрный", size: "L", price: 8400 },
  { model: "MARIO ROSSI MR44", brand: "Mario Rossi", shape: "Круглые", material: "Титан", color: "Серебристый", size: "S", price: 5600 },
];

const categories: [string, string][] = [
  ["Круглые", "Мягкая ретро-геометрия, хорошо смотрятся на лицах с угловатыми чертами."],
  ["Овальные", "Самая универсальная форма: подходит почти под любые пропорции лица."],
  ["Прямоугольные", "Строгие модели для работы и деловых образов, вытягивают округлое лицо."],
  ["Квадратные", "Выразительный акцент, уравновешивает мягкие округлые черты."],
  ["Cat-eye", "Приподнятые уголки визуально «открывают» взгляд и подчёркивают скулы."],
  ["Тонкие металлические", "Минимально заметная оправа: лёгкая, аккуратная, почти невидимая."],
  ["Пластиковые", "Насыщенные цвета и заметная форма, устойчивы к деформации."],
  ["Дизайнерские", "Модели брендов Ana Hickmann и Tropical — акцентная деталь образа."],
];

const faq: [string, string][] = [
  [
    "Как выбрать женскую оправу?",
    "Ориентируйтесь на три вещи: форму лица, параметры рецепта и посадку. Чем сильнее диоптрии, тем компактнее должна быть оправа. Специалист салона проверит центровку и посадку на носу и заушниках — это важнее, чем модный силуэт.",
  ],
  [
    "Какая оправа подойдёт для круглого лица?",
    "Формы с чёткими линиями: прямоугольные, квадратные и cat-eye. Они добавляют лицу структуры. Круглых и очень мелких моделей лучше избегать.",
  ],
  [
    "Сколько стоят женские оправы?",
    "В каталоге модели от 1 500 ₽ (например, DACCHI). Дизайнерские и титановые оправы — от 5 000 ₽. Итоговая стоимость очков зависит ещё и от выбранных линз.",
  ],
  [
    "Можно ли установить линзы в любую оправу?",
    "Почти в любую, включая вашу собственную, если она целая и не деформирована. Ограничения бывают у безободковых и сильно изогнутых оправ при высоких диоптриях — это проверяют на приёме.",
  ],
  [
    "Где примерить оправу в Санкт-Петербурге?",
    "В наших салонах в Центральном, Выборгском и Московском районах. Примерка бесплатная, записываться для неё не обязательно.",
  ],
];

type FilterKey = "brand" | "shape" | "material" | "color" | "size";

const filterLabels: Record<FilterKey, string> = {
  brand: "Бренд",
  shape: "Форма",
  material: "Материал",
  color: "Цвет",
  size: "Размер",
};

const priceRanges = [
  { label: "до 2 000 ₽", min: 0, max: 2000 },
  { label: "2 000–4 000 ₽", min: 2000, max: 4000 },
  { label: "от 4 000 ₽", min: 4000, max: Infinity },
];

function uniq(key: FilterKey) {
  return Array.from(new Set(frames.map((f) => f[key])));
}

function WomenFramesPage() {
  const [filters, setFilters] = useState<Record<FilterKey, string | null>>({
    brand: null,
    shape: null,
    material: null,
    color: null,
    size: null,
  });
  const [price, setPrice] = useState<string | null>(null);

  const options = useMemo(
    () =>
      (Object.keys(filterLabels) as FilterKey[]).map((key) => ({
        key,
        values: uniq(key),
      })),
    [],
  );

  const visible = frames.filter((f) => {
    for (const key of Object.keys(filterLabels) as FilterKey[]) {
      if (filters[key] && f[key] !== filters[key]) return false;
    }
    if (price) {
      const range = priceRanges.find((r) => r.label === price);
      if (range && (f.price < range.min || f.price >= range.max)) return false;
    }
    return true;
  });

  const toggle = (key: FilterKey, value: string) =>
    setFilters((prev) => ({ ...prev, [key]: prev[key] === value ? null : value }));

  const hasFilters = price !== null || Object.values(filters).some(Boolean);

  return (
    <main className="bg-background text-foreground">
      <nav aria-label="Хлебные крошки" className="border-b border-border">
        <ol className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-5 py-4 text-sm text-muted-foreground">
          <li>
            <Link to="/" className="hover:text-primary">
              Главная
            </Link>
          </li>
          <li aria-hidden>›</li>
          <li>Оправы</li>
          <li aria-hidden>›</li>
          <li className="font-medium text-foreground">Женские оправы</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-secondary">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <div className="flex flex-wrap gap-2">
              {["Более 300 моделей", "Примерка бесплатно", "От 1 500 ₽"].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-primary/30 bg-background px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary"
                >
                  {chip}
                </span>
              ))}
            </div>
            <h1 className="mt-5 text-4xl leading-[1.02] md:text-6xl">
              Женские оправы
              <span className="block text-primary">для очков</span>
            </h1>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
              Круглые, овальные, cat-eye, тонкий металл и титан — в салонах Оптики 100% в
              Санкт-Петербурге. Примерьте понравившуюся модель и сразу закажите в неё линзы.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" className="rounded-lg px-7 text-base font-bold" asChild>
                <a href="#katalog">Смотреть каталог →</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-lg px-7 text-base" asChild>
                <Link to="/" hash="zapis">
                  Подобрать оправу
                </Link>
              </Button>
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-6">
              {[
                ["6", "брендов"],
                ["3", "салона в СПб"],
                ["1 день", "на примерку"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="text-2xl font-extrabold text-foreground">{value}</dt>
                  <dd className="text-xs text-muted-foreground">{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -right-10 -top-10 hidden h-48 w-48 rounded-full bg-primary/10 blur-3xl lg:block" />
            <img
              src={heroFrames}
              alt="Женские оправы для очков: cat-eye, прозрачный ацетат и тонкий золотистый металл"
              width={1280}
              height={960}
              className="relative w-full rounded-2xl object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Текст */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
            <div className="max-w-3xl space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <h2 className="heading-bar text-2xl font-extrabold text-foreground md:text-3xl">
                Женские оправы для очков в Санкт-Петербурге
              </h2>
              <p>
                В салонах Оптики 100% представлено несколько сотен женских оправ — от
                повседневных моделей за 1 500 ₽ до дизайнерских титановых. В ассортименте
                оправы для очков для постоянного ношения, для работы за компьютером, для
                прогрессивных линз и солнцезащитных линз с диоптриями. Каждую модель можно
                примерить и сразу заказать в неё линзы.
              </p>
              <p>
                <strong className="text-foreground">Бренды.</strong> LION`S HEART — самая большая
                женская коллекция в салоне: более 50 моделей, преимущественно тонкий металл, а
                также пластик и титан, классические, круглые, многоугольные, овальные формы и
                кошачий глаз, цены 3 900–5 000 ₽. DACCHI и Nikitana — доступный сегмент с
                большим выбором форм. Mario Rossi — аккуратные металлические и ацетатные
                модели. Tropical и Ana Hickmann — дизайнерские коллекции с яркими цветами и
                декором на заушниках.
              </p>
              <p>
                <strong className="text-foreground">Формы.</strong> Круглые, овальные,
                прямоугольные, квадратные и cat-eye. Овальные подходят почти всем, круглые
                смягчают угловатые черты, прямоугольные и квадратные добавляют лицу
                структуры, cat-eye подчёркивает скулы и линию брови.
              </p>
              <p>
                <strong className="text-foreground">Материалы.</strong> Пластик и ацетат держат
                насыщенный цвет и заметную форму. Тонкий металл почти не виден на лице. Титан
                — самый лёгкий и гипоаллергенный вариант, его выбирают для постоянного
                ношения и сложных линз.
              </p>
              <p>
                <strong className="text-foreground">Цены.</strong> Женские оправы — от 1 500 ₽,
                металлические и ацетатные модели — 2 200–3 500 ₽, дизайнерские и титановые —
                от 5 500 ₽. Стоимость готовых очков складывается из оправы и линз, поэтому
                итоговую сумму специалист считает на приёме — подробности в разделе{" "}
                <Link to="/" hash="stoimost" className="font-semibold text-primary underline">
                  стоимость подбора очков
                </Link>
                .
              </p>
              <p>
                <strong className="text-foreground">Как выбрать.</strong> Сначала рецепт, потом
                форма: при высоких диоптриях нужна компактная оправа с небольшим световым
                проёмом, для прогрессивных линз — достаточная высота. Как проходит приём, мы
                описали{" "}
                <Link to="/" hash="kak" className="font-semibold text-primary underline">
                  пошагово в подборе очков
                </Link>
                .
              </p>
              <p>
                <strong className="text-foreground">Где примерить.</strong> В салонах в
                Центральном, Выборгском и Московском районах Санкт-Петербурга. Примерка
                бесплатная и без записи, а на приёме специалист проверит центровку выбранной
                модели под ваш рецепт.
              </p>
            </div>

            <Card className="border-primary/20 bg-accent text-accent-foreground lg:sticky lg:top-6">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-xl">Подбор оправы</h2>
                <p className="text-sm">
                  Не знаете, какая форма оправы подойдёт? Специалист поможет подобрать модель
                  с учётом формы лица, параметров рецепта и посадки.
                </p>
                <Button size="lg" className="w-full" asChild>
                  <Link to="/" hash="zapis">
                    Подобрать оправу →
                  </Link>
                </Button>
                <p className="text-xs text-accent-foreground/80">
                  Или позвоните:{" "}
                  <a href="tel:+78120000000" className="font-semibold underline">
                    8 (812) 000-00-00
                  </a>
                </p>
              </CardContent>
            </Card>
        </div>
      </section>


      {/* Категории */}
      <section id="kategorii" className="border-y border-border bg-secondary py-14">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="heading-bar text-3xl md:text-4xl">
            Какие женские оправы представлены в Оптике 100%
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {categories.map(([title, text]) => (
              <Card key={title}>
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Каталог + фильтры */}
      <section id="katalog" className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="heading-bar text-3xl md:text-4xl">Каталог женских оправ</h2>
        <p className="mt-3 text-muted-foreground">
          Подберите модель по бренду, цене, цвету, форме, материалу и размеру.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="space-y-6">
            <div>
              <p className="text-sm font-semibold">Цена</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {priceRanges.map((r) => (
                  <FilterChip
                    key={r.label}
                    label={r.label}
                    active={price === r.label}
                    onClick={() => setPrice(price === r.label ? null : r.label)}
                  />
                ))}
              </div>
            </div>
            {options.map(({ key, values }) => (
              <div key={key}>
                <p className="text-sm font-semibold">{filterLabels[key]}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {values.map((value) => (
                    <FilterChip
                      key={value}
                      label={value}
                      active={filters[key] === value}
                      onClick={() => toggle(key, value)}
                    />
                  ))}
                </div>
              </div>
            ))}
            {hasFilters && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setFilters({ brand: null, shape: null, material: null, color: null, size: null });
                  setPrice(null);
                }}
              >
                Сбросить фильтры
              </Button>
            )}
          </aside>

          <div>
            <p className="text-sm text-muted-foreground">Найдено моделей: {visible.length}</p>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {visible.map((f) => (
                <Card key={f.model} className="overflow-hidden pt-0">
                  <div className="border-b border-border bg-secondary">
                    <img
                      src={shapeImage(f.shape)}
                      alt={`Женская оправа ${f.model}, форма: ${f.shape}, ${f.material.toLowerCase()}`}
                      width={800}
                      height={600}
                      loading="lazy"
                      className="h-40 w-full object-cover"
                    />
                  </div>
                  <CardContent className="flex h-full flex-col gap-3 p-5">

                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                          {f.brand}
                        </p>
                        <h3 className="mt-1 text-base font-semibold">{f.model}</h3>
                      </div>
                      <Badge variant="secondary">{f.size}</Badge>
                    </div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>Форма: {f.shape}</li>
                      <li>Материал: {f.material}</li>
                      <li>Цвет: {f.color}</li>
                    </ul>
                    <p className="mt-auto text-lg font-extrabold">
                      от {f.price.toLocaleString("ru-RU")} ₽
                    </p>
                    <Button variant="outline" asChild>
                      <Link to="/" hash="zapis">
                        Примерить в салоне
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            {visible.length === 0 && (
              <p className="mt-6 text-muted-foreground">
                По выбранным параметрам моделей нет — сбросьте часть фильтров или позвоните
                нам, подскажем аналоги.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Перелинковка */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="heading-bar text-3xl md:text-4xl">Смотрите также</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {([
            ["Подбор очков в Санкт-Петербурге", "Как проходит приём, диагностика и подбор линз.", "kak"],
            ["Стоимость подбора очков", "Что входит в услугу и сколько занимает по времени.", "stoimost"],
            ["Какие очки можно подобрать", "Для компьютера, вождения, прогрессивные и детские.", "vidy"],
          ] as [string, string, string][]).map(([title, text, hash]) => (
            <Card key={title} className="transition-shadow hover:shadow-md">
              <CardContent className="p-5">
                <h3 className="text-lg font-semibold">
                  <Link to="/" hash={hash} className="hover:text-primary">
                    {title}
                  </Link>
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}

      <section id="faq" className="border-y border-border bg-secondary py-14">
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
      <section className="bg-primary py-14 text-primary-foreground">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="text-3xl md:text-4xl">Подобрать женскую оправу</h2>
          <p className="mt-4 text-primary-foreground/85">
            Специалист поможет выбрать форму и посадку под ваш рецепт, а примерка в салоне —
            бесплатная.
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
              <a href="#katalog">Смотреть каталог</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={
        active
          ? "rounded-md bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground"
          : "rounded-md border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
      }
    >
      {label}
    </button>
  );
}
