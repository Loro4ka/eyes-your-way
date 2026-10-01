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
import frameRound from "@/assets/frame-round.jpg";
import frameCatEye from "@/assets/frame-cateye.jpg";
import frameRect from "@/assets/frame-rect.jpg";
import frameOval from "@/assets/frame-oval.jpg";
import frameGeo from "@/assets/frame-geo.jpg";

function shapeImage(shape: string) {
  switch (shape) {
    case "Круглые":
    case "Панто":
      return frameRound;
    case "Кошачий глаз":
    case "Бабочка":
      return frameCatEye;
    case "Овал":
    case "Лектор":
      return frameOval;
    case "Многоугольник":
    case "Квадрат":
    case "Aviator":
      return frameGeo;
    default:
      return frameRect;
  }
}



export const Route = createFileRoute("/opravy/zhenskie")({
  head: () => ({
    meta: [
      { title: "Женские оправы для очков в Санкт-Петербурге — Оптика 100%" },
      {
        name: "description",
        content:
          "Женские оправы для очков в Санкт-Петербурге: 607 моделей 83 брендов — «кошачий глаз», прямоугольные, бабочка, металл, ацетат и титан от 2 000 ₽. Фильтры по бренду, форме, цвету и материалу, примерка в салоне.",
      },
      { property: "og:title", content: "Женские оправы для очков — Оптика 100%" },
      {
        property: "og:description",
        content:
          "Каталог женских оправ в Санкт-Петербурге: 83 бренда, 607 моделей, цены от 2 000 ₽. Бесплатный подбор оправы у специалиста.",
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
  { model: "LION`S HEART 8811-1 clip", brand: "LION`S HEART", shape: "Бабочка", material: "Пластик", color: "Черный", size: "56 мм", price: 2300 },
  { model: "LION`S HEART 8810-3 clip", brand: "LION`S HEART", shape: "Бабочка", material: "Пластик", color: "Бордовый/Розовый", size: "55 мм", price: 4000 },
  { model: "LION`S HEART 8810-4 clip", brand: "LION`S HEART", shape: "Бабочка", material: "Пластик", color: "Синий/Голубой", size: "55 мм", price: 4000 },
  { model: "LION`S HEART SN200780-2", brand: "LION`S HEART", shape: "Прямоугольные", material: "Металл", color: "Фиолетовый/Сиреневый", size: "55 мм", price: 4000 },
  { model: "LION`S HEART SN230418-2", brand: "LION`S HEART", shape: "Прямоугольные", material: "Металл", color: "Золото/Желтый", size: "54 мм", price: 4000 },
  { model: "LION`S HEART SN230418-3", brand: "LION`S HEART", shape: "Прямоугольные", material: "Металл", color: "Фиолетовый/Сиреневый", size: "54 мм", price: 4000 },
  { model: "LION`S HEART SN230420-1", brand: "LION`S HEART", shape: "Прямоугольные", material: "Металл", color: "Серебро/Серый/Белый", size: "52 мм", price: 4000 },
  { model: "LION`S HEART SN230420-2", brand: "LION`S HEART", shape: "Прямоугольные", material: "Металл", color: "Золото/Желтый", size: "52 мм", price: 4000 },
  { model: "HICKMANN 6031-C02", brand: "HICKMANN", shape: "Многоугольник", material: "Пластик", color: "Синий/Голубой", size: "50 мм", price: 7000 },
  { model: "POLAROID D545-C9A", brand: "POLAROID", shape: "Кошачий глаз", material: "Пластик", color: "Бордовый/Розовый", size: "57 мм", price: 7200 },
  { model: "O.D.L Estetica Neva-11", brand: "O.D.L", shape: "Кошачий глаз", material: "Ацетат", color: "Мультиколор", size: "52 мм", price: 6900 },
  { model: "O.D.L Estetica Angel-0 бежевый", brand: "O.D.L", shape: "Овал", material: "Ацетат", color: "Бронза/Коричневый", size: "48 мм", price: 7500 },
  { model: "O.D.L Estetica Lector-7", brand: "O.D.L", shape: "Лектор", material: "Ацетат", color: "Красный", size: "46 мм", price: 7500 },
  { model: "ST.LOUISE SD2008-02", brand: "ST.LOUISE", shape: "Овал", material: "Металл", color: "Золото/Желтый", size: "53 мм", price: 7000 },
  { model: "ST.LOUISE SL1058-01", brand: "ST.LOUISE", shape: "Кошачий глаз", material: "Металл", color: "Черный", size: "55 мм", price: 7000 },
  { model: "ST.LOUISE SL1081-01", brand: "ST.LOUISE", shape: "Овал", material: "Металл", color: "Золото/Желтый", size: "54 мм", price: 7000 },
  { model: "MEREL 8277-06", brand: "MEREL", shape: "Кошачий глаз", material: "Пластик", color: "Красный", size: "54 мм", price: 4500 },
  { model: "MEREL MS8276-02", brand: "MEREL", shape: "Прямоугольные", material: "Пластик", color: "Бордовый/Розовый", size: "55 мм", price: 4500 },
  { model: "MEREL MS8322-01", brand: "MEREL", shape: "Кошачий глаз", material: "Пластик", color: "Черный", size: "53 мм", price: 4500 },
  { model: "SAFILO S-S 7A 605-086", brand: "SAFILO SEVENTH STREET", shape: "Кошачий глаз", material: "Пластик", color: "Бронза/Коричневый", size: "53 мм", price: 6100 },
  { model: "SAFILO S-S 7A 577-807", brand: "SAFILO SEVENTH STREET", shape: "Бабочка", material: "Пластик", color: "Черный", size: "50 мм", price: 6800 },
  { model: "DONNA DN3080-5", brand: "DONNA", shape: "Прямоугольные", material: "Пластик", color: "Красный", size: "53 мм", price: 5200 },
  { model: "LINA LATINI 62600-003", brand: "LINA LATINI", shape: "Прямоугольные", material: "Титан", color: "Золото/Желтый", size: "53 мм", price: 7200 },
  { model: "LINA LATINI 62600-033", brand: "LINA LATINI", shape: "Прямоугольные", material: "Титан", color: "Бордовый/Розовый", size: "53 мм", price: 7200 },
  { model: "MEGAPOLIS free line 2015 BROWN", brand: "MEGAPOLIS", shape: "Круглые", material: "Металл", color: "Бронза/Коричневый", size: "48 мм", price: 4950 },
  { model: "MEGAPOLIS city 1356 BLUE", brand: "MEGAPOLIS", shape: "Прямоугольные", material: "Пластик", color: "Черный", size: "52 мм", price: 6500 },
  { model: "RICO MIRADO 188 BLUE", brand: "RICO MIRADO", shape: "Панто", material: "Металл", color: "Синий/Голубой", size: "52 мм", price: 5200 },
  { model: "RICO MIRADO 67 BLACK", brand: "RICO MIRADO", shape: "Круглые", material: "Металл", color: "Черный", size: "52 мм", price: 5200 },
  { model: "WAGNER+KUHNER 5330-1", brand: "WAGNER+KUHNER", shape: "Кошачий глаз", material: "Металл", color: "Золото/Желтый", size: "53 мм", price: 6500 },
  { model: "WAGNER+KUHNER 5363-1", brand: "WAGNER+KUHNER", shape: "Кошачий глаз", material: "Пластик", color: "Мультиколор", size: "53 мм", price: 6500 },
  { model: "BALLET Extra 24457-1", brand: "BALLET Extra", shape: "Кошачий глаз", material: "Пластик", color: "Серебро/Серый/Белый", size: "55 мм", price: 4100 },
  { model: "BANISS BR5080-02", brand: "BANISS", shape: "Круглые", material: "Металл", color: "Серебро/Серый/Белый", size: "53 мм", price: 3100 },
  { model: "BLUE CLASSIC 583-10", brand: "BLUE CLASSIC", shape: "Кошачий глаз", material: "Металл", color: "Черный", size: "52 мм", price: 2500 },
  { model: "BULGET 6464-P01", brand: "BULGET", shape: "Прямоугольные", material: "Пластик", color: "Черный", size: "52 мм", price: 7200 },
  { model: "DACCHI 37753-2", brand: "DACCHI", shape: "Панто", material: "Пластик", color: "Бронза/Коричневый", size: "52 мм", price: 2000 },
  { model: "ELFSPIRIT 4386-005", brand: "ELFSPIRIT", shape: "Aviator", material: "Металл", color: "Серебро/Серый/Белый", size: "54 мм", price: 6400 },
  { model: "GLORY 542 BLUE", brand: "GLORY", shape: "Круглые", material: "Металл", color: "Синий/Голубой", size: "48 мм", price: 4000 },
  { model: "MONICA MS312453-3", brand: "MONICA", shape: "Прямоугольные", material: "Металл", color: "Серебро/Серый/Белый", size: "54 мм", price: 5300 },
  { model: "SAFILO 1090-YOB", brand: "SAFILO", shape: "Панто", material: "Пластик", color: "Синий/Голубой", size: "49 мм", price: 5400 },
];

// Полный список брендов салона с количеством моделей в наличии.
// Сортировка: LION`S HEART первым, далее по убыванию количества.
const brandList: [string, number][] = [
  ["LION`S HEART", 79],
  ["GUESS", 36],
  ["ANA HICKMANN", 38],
  ["HICKMANN", 22],
  ["FURLA", 20],
  ["VON BOGEN", 19],
  ["ESCADA", 17],
  ["VOGUE", 17],
  ["YALEA", 17],
  ["CAROLINA HERRERA", 16],
  ["MAX&CO", 16],
  ["OKULA", 16],
  ["POLAROID", 15],
  ["SILHOUETTE", 15],
  ["O.D.L", 14],
  ["ST.LOUISE", 13],
  ["WILLIAM MORRIS", 12],
  ["ETNIA BARCELONA", 11],
  ["FOR ART'S SAKE", 10],
  ["MARC JACOBS", 10],
  ["PIERRE CARDIN", 15],
  ["TOUS", 10],
  ["BLUMARINE", 8],
  ["WOOW", 8],
  ["LAURA BIAGIOTTI", 7],
  ["MAX MARA", 7],
  ["BELUTTI", 6],
  ["ENNI MARCO", 6],
  ["MEREL", 6],
  ["NINA RICCI", 6],
  ["TRUSSARDI", 6],
  ["BORBONESE", 5],
  ["ELEVENPARIS", 5],
  ["KARL LAGERFELD", 5],
  ["LOOL", 5],
  ["MOREL", 5],
  ["PRODESIGN", 5],
  ["SAFILO SEVENTH STREET", 5],
  ["STEPPER", 5],
  ["DONNA", 4],
  ["AVO", 3],
  ["CHARLES STONE", 3],
  ["NOMAD", 3],
  ["REVLON", 3],
  ["BOLON", 2],
  ["CARRERA", 2],
  ["EMPORIO ARMANI", 2],
  ["K-WAY", 2],
  ["KOALI", 2],
  ["LANCEL", 2],
  ["LINA LATINI", 2],
  ["MEGAPOLIS", 2],
  ["MOLSION", 2],
  ["OPERA Chic", 2],
  ["RICO MIRADO", 2],
  ["SKAGA", 2],
  ["VALENTIN YUDASHKIN", 2],
  ["WAGNER+KUHNER", 2],
  ["BALLET Extra", 1],
  ["BANISS", 1],
  ["BLUE CLASSIC", 1],
  ["BULGET", 1],
  ["CONVERSE", 1],
  ["DACCHI", 1],
  ["ELFSPIRIT", 1],
  ["GIGISTUDIOS", 1],
  ["GLORY", 1],
  ["HERMOSSA", 1],
  ["HUGO BOSS", 1],
  ["LOZZA", 1],
  ["LULU CASTAGNETTE", 1],
  ["MANILA GRACE", 1],
  ["MARIUS MOREL", 1],
  ["MOLESKINE", 1],
  ["MONICA", 1],
  ["PEPE JEANS", 1],
  ["POLICE", 1],
  
  ["ROBERTA DI CAMERINO", 1],
  ["ROBERTO CAVALLI", 1],
  ["SAFILO", 1],
  ["T-CHARGE", 1],
  ["TED BAKER", 1],
  ["TOM FORD", 1],
];

const totalModels = brandList.reduce((sum, [, count]) => sum + count, 0);

const categories: [string, string, number][] = [
  ["Кошачий глаз", "Приподнятые уголки визуально «открывают» взгляд и подчёркивают скулы.", 152],
  ["Прямоугольные", "Строгие модели для работы и деловых образов, вытягивают округлое лицо.", 148],
  ["Бабочка", "Расширенная кверху форма — женственный акцент и крупный световой проём.", 94],
  ["Овал", "Самая универсальная форма: подходит почти под любые пропорции лица.", 48],
  ["Многоугольник", "Геометрия с гранями — заметная деталь образа без лишней массивности.", 45],
  ["Круглые", "Мягкая ретро-геометрия, хорошо смотрится на лицах с угловатыми чертами.", 36],
  ["Панто", "Классика с лёгким изгибом верхней линии, спокойная и универсальная.", 29],
  ["Квадрат", "Выразительный акцент, уравновешивает мягкие округлые черты.", 23],
];

const faq: [string, string][] = [
  [
    "Как выбрать женскую оправу?",
    "Ориентируйтесь на три вещи: форму лица, параметры рецепта и посадку. Чем сильнее диоптрии, тем компактнее должна быть оправа. Специалист салона проверит центровку и посадку на носу и заушниках — это важнее, чем модный силуэт.",
  ],
  [
    "Какая оправа подойдёт для круглого лица?",
    "Формы с чёткими линиями: прямоугольные, квадратные и «кошачий глаз». Они добавляют лицу структуры. Круглых и очень мелких моделей лучше избегать.",
  ],
  [
    "Сколько стоят женские оправы?",
    "В каталоге модели от 2 000 ₽ (например, DACCHI 37753-2). Большинство моделей — 4 000–8 000 ₽, дизайнерские и титановые доходят до 42 000 ₽. Итоговая стоимость очков зависит ещё и от выбранных линз.",
  ],

  [
    "Можно ли установить линзы в любую оправу?",
    "Почти в любую, включая вашу собственную, если она целая и не деформирована. Ограничения бывают у безободковых и сильно изогнутых оправ при высоких диоптриях — это проверяют на приёме.",
  ],
  [
    "Где примерить оправу в Санкт-Петербурге?",
    "В салоне Оптики 100% по адресу ул. Кирочная, 17 (м. Чернышевская, ежедневно 10:00–20:00). Примерка бесплатная, записываться для неё не обязательно.",
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
  { label: "до 4 000 ₽", min: 0, max: 4000 },
  { label: "4 000–6 000 ₽", min: 4000, max: 6000 },
  { label: "от 6 000 ₽", min: 6000, max: Infinity },
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

  const selectBrand = (brand: string) => {
    // Название бренда в каталоге может отличаться регистром от списка салона
    const catalogBrand =
      frames.find((f) => f.brand.toUpperCase() === brand.toUpperCase())?.brand ?? brand;
    setFilters((prev) => ({
      ...prev,
      brand: prev.brand === catalogBrand ? null : catalogBrand,
    }));
    document.getElementById("katalog")?.scrollIntoView({ behavior: "smooth" });
  };

  const isBrandActive = (brand: string) =>
    filters.brand !== null && filters.brand.toUpperCase() === brand.toUpperCase();

  const selectCategory = (title: string) => {
    setFilters((prev) => ({
      ...prev,
      shape: prev.shape === title ? null : title,
    }));
    document.getElementById("katalog")?.scrollIntoView({ behavior: "smooth" });
  };

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
              {[`${totalModels} моделей`, `${brandList.length} брендов`, "Примерка бесплатно", "От 2 000 ₽"].map((chip) => (
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
              «Кошачий глаз», прямоугольные, бабочка, овал, тонкий металл и титан — в салоне
              Оптики 100% в Санкт-Петербурге, ул. Кирочная, 17. Примерьте понравившуюся модель
              и сразу закажите в неё линзы.
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
          </div>

          <div className="relative self-start">
            <div className="absolute -right-10 -top-10 hidden h-48 w-48 rounded-full bg-primary/10 blur-3xl lg:block" />
            <img
              src={heroFrames}
              alt="Женские оправы для очков: cat-eye, прозрачный ацетат и тонкий золотистый металл"
              width={1280}
              height={960}
              className="relative mx-auto max-h-64 w-auto max-w-full rounded-2xl object-cover shadow-xl md:max-h-72"
            />
          </div>
        </div>

        {/* Бренды — хлебные крошки, все видны сразу */}
        <nav
          aria-label="Бренды женских оправ"
          className="mx-auto max-w-6xl border-t border-border px-5 pb-10 pt-6"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Бренды в наличии — {brandList.length} брендов, более {totalModels} моделей. Нажмите
            на бренд, чтобы показать модели
          </p>
          <ol className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1.5 text-sm font-bold uppercase tracking-tight text-foreground">
            {brandList.map(([brand, count], i) => (
              <li key={brand} className="flex items-center gap-2">
                {i > 0 && <span className="text-primary/50">›</span>}
                {brand === "LION`S HEART" ? (
                  <Link
                    to="/opravy/lions-heart"
                    title="Страница бренда LION`S HEART"
                    className={`cursor-pointer transition-colors hover:text-primary ${
                      isBrandActive(brand) ? "text-primary underline underline-offset-4" : ""
                    }`}
                  >
                    {brand}
                    <span className="ml-1 align-super text-[10px] font-bold normal-case text-primary/70">
                      {count}
                    </span>
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => selectBrand(brand)}
                    className={`cursor-pointer transition-colors hover:text-primary ${
                      isBrandActive(brand) ? "text-primary underline underline-offset-4" : ""
                    }`}
                  >
                    {brand}
                    <span className="ml-1 align-super text-[10px] font-bold normal-case text-primary/70">
                      {count}
                    </span>
                  </button>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </section>

      {/* Текст */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
            <div className="max-w-3xl space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <h2 className="heading-bar text-2xl font-extrabold text-foreground md:text-3xl">
                Женские оправы для очков в Санкт-Петербурге
              </h2>
              <p>
                В салоне Оптики 100% представлено {totalModels} женских оправ от{" "}
                {brandList.length} брендов — от повседневных моделей за 2 000 ₽ до дизайнерских
                титановых. В ассортименте оправы для постоянного ношения, для работы за
                компьютером, для прогрессивных линз и солнцезащитных линз с диоптриями. Каждую
                модель можно примерить и сразу заказать в неё линзы.
              </p>
              <p>
                <strong className="text-foreground">Бренды.</strong> Самая большая коллекция —
                LION`S HEART (79 женских моделей: тонкий металл, пластик и модели с клипоном).
                Далее GUESS (36), ANA HICKMANN (23), FURLA (20), VON BOGEN (19), ST.LOUISE (13).
                Представлены и дизайнерские марки. Полный список брендов с количеством моделей
                — на первом экране страницы.
              </p>
              <p>
                <strong className="text-foreground">Формы.</strong> «Кошачий глаз» (145 моделей),
                прямоугольные (143), бабочка (92), овал (45), многоугольник (44), круглые (36),
                панто (28) и квадрат (23). Овальные подходят почти всем, круглые смягчают
                угловатые черты, прямоугольные и квадратные добавляют лицу структуры, «кошачий
                глаз» подчёркивает скулы и линию брови.
              </p>
              <p>
                <strong className="text-foreground">Материалы.</strong> Металл — 254 модели,
                пластик — 200, ацетат — 64, комбинированные — 42, титан — 28. Пластик и ацетат
                держат насыщенный цвет и заметную форму, тонкий металл почти не виден на лице,
                титан — самый лёгкий и гипоаллергенный вариант для постоянного ношения.
              </p>
              <p>
                <strong className="text-foreground">Размеры.</strong> Ширина ободка 46–61 мм,
                длина заушника 135–150 мм, ширина переносицы 13–23 мм — есть узкие модели для
                миниатюрного лица и широкие посадки.
              </p>
              <p>
                <strong className="text-foreground">Цены.</strong> Женские оправы — от 2 000 ₽,
                большинство моделей — 4 000–8 000 ₽, дизайнерские и титановые — до 42 000 ₽.
                Стоимость готовых очков складывается из оправы и линз, поэтому итоговую сумму
                специалист считает на приёме — подробности в разделе{" "}
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
                <strong className="text-foreground">Где примерить.</strong> В салоне Оптики
                100% в Санкт-Петербурге по адресу ул. Кирочная, 17 (м. Чернышевская,
                ежедневно 10:00–20:00). Примерка бесплатная и без записи, а на приёме
                специалист проверит центровку выбранной модели под ваш рецепт.
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
                  <a href="tel:88007000214" className="font-semibold underline">
                    8-800-700-0214
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
            {categories.map(([title, text, count]) => {
              const active = filters.shape === title;
              return (
                <button
                  key={title}
                  type="button"
                  onClick={() => selectCategory(title)}
                  className="text-left"
                >
                  <Card
                    className={`h-full transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-md ${
                      active ? "border-primary shadow-md" : ""
                    }`}
                  >
                    <CardContent className="p-5">
                      <h3 className="text-lg font-semibold">
                        {title}{" "}
                        <span className="text-sm font-bold text-primary">{count}</span>
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">{text}</p>
                      <span className="mt-3 inline-block text-sm font-bold text-primary">
                        Смотреть модели →
                      </span>
                    </CardContent>
                  </Card>
                </button>
              );
            })}
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
              <a href="tel:88007000214">Позвонить и записаться →</a>
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
