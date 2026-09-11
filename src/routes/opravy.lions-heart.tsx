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
import frameCatEye from "@/assets/frame-cateye.jpg";
import frameRect from "@/assets/frame-rect.jpg";

export const Route = createFileRoute("/opravy/lions-heart")({
  head: () => ({
    meta: [
      { title: "Оправы LION`S HEART в Санкт-Петербурге — Оптика 100%" },
      {
        name: "description",
        content:
          "Оправы LION`S HEART: 79 женских моделей — металл, пластик и модели с клипоном, цены от 2 300 ₽. Примерка и подбор в салоне на ул. Кирочная, 17 в Санкт-Петербурге.",
      },
      { property: "og:title", content: "Оправы LION`S HEART — Оптика 100%" },
      {
        property: "og:description",
        content:
          "79 женских моделей LION`S HEART в наличии: бабочка, прямоугольные, металл и пластик, клипоны. Бесплатная примерка в Санкт-Петербурге.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LionsHeartPage,
});

type Frame = {
  model: string;
  shape: string;
  material: string;
  color: string;
  size: string;
  price: number;
};

const frames: Frame[] = [
  { model: "LION`S HEART 8811-1 clip", shape: "Бабочка", material: "Пластик", color: "Черный", size: "56 мм", price: 2300 },
  { model: "LION`S HEART 8810-3 clip", shape: "Бабочка", material: "Пластик", color: "Бордовый/Розовый", size: "55 мм", price: 4000 },
  { model: "LION`S HEART 8810-4 clip", shape: "Бабочка", material: "Пластик", color: "Синий/Голубой", size: "55 мм", price: 4000 },
  { model: "LION`S HEART SN200780-2", shape: "Прямоугольные", material: "Металл", color: "Фиолетовый/Сиреневый", size: "55 мм", price: 4000 },
  { model: "LION`S HEART SN230418-2", shape: "Прямоугольные", material: "Металл", color: "Золото/Желтый", size: "54 мм", price: 4000 },
  { model: "LION`S HEART SN230418-3", shape: "Прямоугольные", material: "Металл", color: "Фиолетовый/Сиреневый", size: "54 мм", price: 4000 },
  { model: "LION`S HEART SN230420-1", shape: "Прямоугольные", material: "Металл", color: "Серебро/Серый/Белый", size: "52 мм", price: 4000 },
  { model: "LION`S HEART SN230420-2", shape: "Прямоугольные", material: "Металл", color: "Золото/Желтый", size: "52 мм", price: 4000 },
];

const faq: [string, string][] = [
  [
    "Сколько моделей LION`S HEART в наличии?",
    "В женском каталоге салона представлено 79 моделей LION`S HEART. Наличие конкретной модели уточняйте при записи — ассортимент обновляется.",
  ],
  [
    "Сколько стоят оправы LION`S HEART?",
    "Цены начинаются от 2 300 ₽, большинство моделей — около 4 000 ₽. Итоговая стоимость очков зависит ещё и от выбранных линз.",
  ],
  [
    "Что такое модели с клипоном?",
    "Клипон — съёмная солнцезащитная накладка на магнитах. Одна оправа работает и как обычные очки, и как солнцезащитные — удобно за рулём и летом.",
  ],
  [
    "Можно ли поставить в оправу прогрессивные линзы?",
    "Да. Для прогрессивных линз важна высота светового проёма — специалист проверит её на примерке. Подробнее — на странице о прогрессивных линзах.",
  ],
  [
    "Где примерить оправы LION`S HEART?",
    "В салоне Оптики 100% по адресу Санкт-Петербург, ул. Кирочная, 17 (м. Чернышевская, ежедневно 10:00–20:00). Примерка бесплатная.",
  ],
];

function LionsHeartPage() {
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
          <li>
            <Link to="/opravy/zhenskie" className="hover:text-primary">
              Женские оправы
            </Link>
          </li>
          <li aria-hidden>›</li>
          <li className="font-medium text-foreground">LION`S HEART</li>
        </ol>
      </nav>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-12 md:grid-cols-2">
          <div>
            <Badge className="mb-4">79 моделей в наличии</Badge>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
              Оправы LION`S HEART в Санкт-Петербурге
            </h1>
            <p className="mt-4 text-muted-foreground">
              LION`S HEART — один из самых широко представленных брендов в женском каталоге Оптики
              100%. Это лёгкие металлические и пластиковые оправы спокойных форм: бабочка и
              прямоугольные силуэты, часть моделей — с магнитным солнцезащитным клипоном. Цены
              начинаются от 2 300 ₽, большинство моделей — около 4 000 ₽.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#katalog">Смотреть модели</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:88007000214">Записаться на подбор</a>
              </Button>
            </div>
          </div>
          <img
            src={heroFrames}
            alt="Женские оправы LION`S HEART в салоне Оптика 100%"
            className="max-h-72 w-full rounded-xl object-cover"
            loading="lazy"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <h2 className="border-l-4 border-primary pl-3 text-2xl font-extrabold tracking-tight">
          Почему выбирают LION`S HEART
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            ["Лёгкий вес", "Тонкий металл и облегчённый пластик — оправа не давит на нос и виски при ежедневном ношении."],
            ["Модели с клипоном", "Съёмная солнцезащитная накладка на магнитах: одни очки для города и для солнца."],
            ["Доступная цена", "От 2 300 ₽ при аккуратной сборке — разумный выбор для первой или второй пары очков."],
          ].map(([title, text]) => (
            <Card key={title}>
              <CardContent className="p-5">
                <p className="font-semibold">{title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="katalog" className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <h2 className="border-l-4 border-primary pl-3 text-2xl font-extrabold tracking-tight">
            Модели LION`S HEART
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Примеры моделей из каталога салона. Полный ассортимент — на примерке.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {frames.map((f) => (
              <Card key={f.model} className="overflow-hidden">
                <img
                  src={f.shape === "Бабочка" ? frameCatEye : frameRect}
                  alt={`Оправа ${f.model}`}
                  className="h-32 w-full object-cover"
                  loading="lazy"
                />
                <CardContent className="p-4">
                  <p className="text-sm font-semibold">{f.model}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {f.shape} · {f.material} · {f.color} · {f.size}
                  </p>
                  <p className="mt-2 font-bold text-primary">{f.price.toLocaleString("ru-RU")} ₽</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <h2 className="border-l-4 border-primary pl-3 text-2xl font-extrabold tracking-tight">
          Вопросы и ответы
        </h2>
        <Accordion type="single" collapsible className="mt-6">
          {faq.map(([q, a]) => (
            <AccordionItem key={q} value={q}>
              <AccordionTrigger className="text-left">{q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-12 text-center">
          <h2 className="text-2xl font-extrabold tracking-tight">
            Примерьте LION`S HEART в салоне
          </h2>
          <p className="mt-3 text-muted-foreground">
            Санкт-Петербург, ул. Кирочная, 17 · м. Чернышевская · ежедневно 10:00–20:00
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <a href="tel:88007000214">Записаться на подбор</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/opravy/zhenskie" hash="katalog">
                Весь каталог женских оправ
              </Link>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/" className="hover:text-primary">
              Подбор очков
            </Link>
            <Link to="/progressivnye-linzy" className="hover:text-primary">
              Прогрессивные линзы
            </Link>
            <Link to="/stellest-katalog-s-linzami" className="hover:text-primary">
              Линзы Stellest
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
