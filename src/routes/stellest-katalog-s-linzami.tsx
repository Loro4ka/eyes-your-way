import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroStellest from "@/assets/hero-stellest.jpg";

export const Route = createFileRoute("/stellest-katalog-s-linzami")({
  head: () => ({
    meta: [
      { title: "Линзы Stellest для контроля миопии — Оптика 100% СПб" },
      {
        name: "description",
        content:
          "Линзы Stellest для контроля миопии у детей и подростков: как работают, кому подходят, каталог с ценами, этапы подбора и ответы на вопросы. Санкт-Петербург, запись на диагностику.",
      },
      { property: "og:title", content: "Линзы Stellest для контроля миопии — Оптика 100%" },
      {
        property: "og:description",
        content:
          "Что такое Stellest, как работает технология H.A.L.T., кому подходят линзы, каталог с ценами и этапы подбора в салонах Оптики 100% в Санкт-Петербурге.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StellestPage,
});

const audience: [string, string][] = [
  [
    "Дети 6–12 лет",
    "Основной возраст, когда миопия прогрессирует быстрее всего. Чем раньше начат контроль, тем меньше итоговая степень.",
  ],
  [
    "Подростки 13–16 лет",
    "Рост глаза продолжается: линзы помогают удерживать прогрессирование при высоких зрительных нагрузках.",
  ],
  [
    "При наследственной близорукости",
    "Если у одного или двух родителей миопия, риск быстрого роста степени выше — за динамикой наблюдают чаще.",
  ],
  [
    "При росте на 0,5 D и более в год",
    "Заметный прирост диоптрий за год — прямой повод обсудить со специалистом методы контроля миопии.",
  ],
];

const advantages = [
  "Замедляют прогрессирование миопии — по данным производителя в среднем на 67 % при постоянном ношении.",
  "Обычные очки: не требуют контактных линз, капель и привыкания к инвазивным методам.",
  "Центральная зона работает как привычная однофокальная линза — острота зрения не страдает.",
  "Подходят для школы, спорта, чтения и работы за экраном.",
  "Устанавливаются практически в любую детскую оправу подходящей геометрии.",
  "Есть покрытия с защитой от царапин и синего света.",
  "Динамику можно отслеживать на контрольных осмотрах и корректировать план.",
];

type Lens = {
  model: string;
  specs: string[];
  price: string;
};

const lenses: Lens[] = [
  {
    model: "Stellest 1.5",
    specs: ["Индекс 1.5", "Технология H.A.L.T.", "Диаметр 65 мм", "Базовое покрытие"],
    price: "уточняется на приёме",
  },
  {
    model: "Stellest 1.5 Crizal Sapphire",
    specs: ["Индекс 1.5", "Просветляющее покрытие", "Антибликовое", "Легко чистится"],
    price: "уточняется на приёме",
  },
  {
    model: "Stellest 1.59 Polycarbonate",
    specs: ["Индекс 1.59", "Ударопрочный поликарбонат", "Для активных детей", "UV-защита"],
    price: "уточняется на приёме",
  },
  {
    model: "Stellest 1.6",
    specs: ["Индекс 1.6", "Тоньше и легче", "Для средних и высоких диоптрий", "UV-защита"],
    price: "уточняется на приёме",
  },
];

const steps: [string, string][] = [
  ["Осмотр", "Сбор анамнеза: возраст, наследственность, нагрузки, прежние рецепты и динамика."],
  ["Диагностика", "Проверка остроты зрения, рефракции, при необходимости — в условиях циклоплегии."],
  ["Оценка риска", "Сравнение данных с прежними измерениями: как быстро растёт степень миопии."],
  ["Выбор коррекции", "Специалист объясняет доступные варианты и говорит, показан ли Stellest в вашем случае."],
  ["Изготовление", "Подбор оправы, снятие центровки, заказ линз и сборка очков."],
  ["Контроль", "Плановые осмотры для оценки эффекта и, при необходимости, корректировки рецепта."],
];

const faq: [string, string][] = [
  [
    "Что такое линзы Stellest?",
    "Очковые линзы для контроля миопии у детей и подростков. В центре — привычная коррекция для чёткого зрения, вокруг неё — кольцевые зоны микролинз, которые формируют сигнал, замедляющий рост глаза.",
  ],
  [
    "С какого возраста можно носить Stellest?",
    "Чаще всего линзы назначают детям с 6 лет и подросткам. Решение всегда принимает специалист по результатам диагностики — универсального возрастного правила нет.",
  ],
  [
    "Насколько эффективны Stellest?",
    "Производитель приводит замедление прогрессирования миопии в среднем на 67 % при ношении не менее 12 часов в сутки. Индивидуальный результат зависит от возраста, наследственности и режима ношения.",
  ],
  [
    "Сколько стоят линзы Stellest?",
    "Итоговая стоимость зависит от индекса, покрытия и рецепта, поэтому цену мы не публикуем заранее — специалист рассчитает её на приёме вместе со стоимостью оправы. Порядок расчёта описан в разделе стоимости подбора очков.",
  ],
  [
    "Нужен ли рецепт, чтобы заказать Stellest?",
    "Да. Линзы для контроля миопии подбираются только по результатам диагностики: нужны актуальные данные о рефракции и динамике зрения.",
  ],
  [
    "Сколько времени в день нужно носить линзы?",
    "Для ожидаемого эффекта — постоянно, не менее 12 часов в сутки. При нерегулярном ношении результат существенно снижается.",
  ],
  [
    "Долго ли привыкать к Stellest?",
    "Большинство детей адаптируются в первые дни: центральная зона работает как обычные очки. Если через 1–2 недели остаётся дискомфорт, нужен контрольный осмотр.",
  ],
  [
    "Можно ли поставить Stellest в любую оправу?",
    "В большинство детских оправ подходящей геометрии. Важны достаточная высота проёма и правильная центровка — это проверяют при подборе оправы.",
  ],
  [
    "Чем Stellest отличается от обычных очков?",
    "Обычные линзы только корректируют зрение. Stellest дополнительно воздействует на механизм роста глаза, поэтому применяется как метод контроля миопии, а не только коррекции.",
  ],
  [
    "Как часто нужны контрольные осмотры?",
    "Обычно раз в 6 месяцев, иногда чаще — график назначает специалист по динамике. На осмотре оценивают эффект и при необходимости меняют рецепт.",
  ],
  [
    "Можно ли совмещать Stellest с солнцезащитными очками?",
    "Да. Дополнительно можно изготовить вторые очки с диоптриями и затемнением — это обсуждается на приёме.",
  ],
];

function StellestPage() {
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
          <li>
            <Link to="/" hash="vidy" className="hover:text-primary">
              Линзы
            </Link>
          </li>
          <li aria-hidden>›</li>
          <li className="font-medium text-foreground">Линзы Stellest</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <div className="flex flex-wrap gap-2">
              {["Контроль миопии", "Для детей и подростков", "Диагностика перед подбором"].map(
                (chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-primary/30 bg-background px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary"
                  >
                    {chip}
                  </span>
                ),
              )}
            </div>
            <h1 className="mt-5 text-4xl leading-[1.02] md:text-6xl">
              Линзы Stellest
              <span className="block text-primary">для контроля миопии</span>
            </h1>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
              Очковые линзы, которые не только корректируют близорукость, но и помогают
              замедлить её прогрессирование у детей и подростков. Подбираются только после
              диагностики — назначение делает специалист.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" className="rounded-lg px-7 text-base font-bold" asChild>
                <a href="#katalog">Каталог Stellest →</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-lg px-7 text-base" asChild>
                <Link to="/" hash="zapis">
                  Записаться на диагностику
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <img
              src={heroStellest}
              alt="Специалист подбирает ребёнку очки с линзами Stellest для контроля миопии"
              width={1280}
              height={960}
              className="w-full rounded-2xl object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* 1. Что такое Stellest */}
      <section id="chto-takoe" className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          <div className="max-w-3xl space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            <h2 className="heading-bar text-2xl font-extrabold text-foreground md:text-3xl">
              Что такое Stellest
            </h2>
            <p>
              Stellest — это очковые линзы для детей и подростков с близорукостью. Внешне это
              обычные очки: ребёнок носит их постоянно, видит чётко и не нуждается ни в
              контактных линзах, ни в дополнительных процедурах.
            </p>
            <p>
              Отличие — в конструкции. Помимо оптической зоны для коррекции зрения, в линзе
              есть кольцевые зоны с микролинзами. Они меняют характер сигнала, который получает
              глаз при фокусировке, и тем самым влияют на скорость роста глазного яблока —
              главную причину усиления миопии.
            </p>
            <p>
              Stellest применяют как часть плана контроля миопии, а не как «замену» обычным
              очкам. Назначение возможно только после диагностики зрения — самостоятельно
              выбрать такие линзы по прежнему рецепту нельзя.
            </p>
          </div>

          <Card className="border-primary/20 bg-accent text-accent-foreground lg:sticky lg:top-6">
            <CardContent className="space-y-4 p-6">
              <h2 className="text-xl">Нужен ли Stellest вашему ребёнку?</h2>
              <p className="text-sm">
                Специалист оценит динамику миопии и скажет, показаны ли линзы для контроля
                миопии в вашем случае и какие есть альтернативы.
              </p>
              <Button size="lg" className="w-full" asChild>
                <Link to="/" hash="zapis">
                  Записаться на диагностику →
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

      {/* 2. Для кого подходят */}
      <section id="komu" className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="heading-bar text-2xl font-extrabold md:text-3xl">Для кого подходят</h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-muted-foreground">
            Ниже — типичные ситуации, когда обсуждают контроль миопии. Это не показания к
            покупке: окончательное решение принимает специалист после диагностики.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {audience.map(([title, text]) => (
              <Card key={title} className="border-border">
                <CardContent className="p-6">
                  <p className="font-extrabold text-foreground">{title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Как работают линзы */}
      <section id="kak-rabotayut" className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="heading-bar text-2xl font-extrabold md:text-3xl">Как работают линзы</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {[
            [
              "Центральная зона",
              "Работает как привычная однофокальная линза: полностью корректирует близорукость, ребёнок видит чётко вдаль и вблизи.",
            ],
            [
              "Кольца микролинз",
              "Вокруг центра расположены концентрические зоны с множеством микролинз. Они формируют перед сетчаткой объём света, который глаз воспринимает как сигнал «расти не нужно».",
            ],
            [
              "Эффект при постоянном ношении",
              "Сигнал работает только когда очки на ребёнке. Поэтому режим ношения — не менее 12 часов в день — критично важен, а результат оценивают на контрольных осмотрах.",
            ],
          ].map(([title, text]) => (
            <div key={title} className="rounded-xl border border-border p-6">
              <p className="font-extrabold text-foreground">{title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Преимущества */}
      <section id="preimushchestva" className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="heading-bar text-2xl font-extrabold md:text-3xl">Преимущества Stellest</h2>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {advantages.map((item) => (
              <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground">
                <span aria-hidden className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Каталог */}
      <section id="katalog" className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="heading-bar text-2xl font-extrabold md:text-3xl">Каталог Stellest</h2>
        <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-muted-foreground">
          Линзы изготавливаются под рецепт, поэтому фиксированной цены у модели нет — она
          зависит от диоптрий, индекса и покрытия. Специалист рассчитает стоимость на приёме,
          порядок расчёта описан в разделе{" "}
          <Link to="/" hash="stoimost" className="font-semibold text-primary underline">
            стоимость подбора очков
          </Link>
          .
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {lenses.map((lens) => (
            <Card key={lens.model} className="flex flex-col border-border">
              <CardContent className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-extrabold text-foreground">{lens.model}</h3>
                <ul className="mt-3 flex-1 space-y-1 text-sm text-muted-foreground">
                  {lens.specs.map((s) => (
                    <li key={s}>— {s}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm font-semibold text-foreground">Цена: {lens.price}</p>
                <div className="mt-4 flex flex-col gap-2">
                  <Button className="w-full" asChild>
                    <Link to="/" hash="zapis">
                      Уточнить цену
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="tel:+78120000000">Позвонить</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 6. Как проходит подбор */}
      <section id="podbor" className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="heading-bar text-2xl font-extrabold md:text-3xl">Как проходит подбор</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {steps.map(([title, text], i) => (
              <li key={title} className="rounded-xl border border-border bg-background p-6">
                <span className="text-sm font-extrabold text-primary">0{i + 1}</span>
                <p className="mt-2 font-extrabold text-foreground">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-[15px] text-muted-foreground">
            Полный порядок приёма мы описали{" "}
            <Link to="/" hash="kak" className="font-semibold text-primary underline">
              пошагово в подборе очков
            </Link>
            , а оправу для линз можно выбрать в{" "}
            <Link to="/opravy/zhenskie" hash="katalog" className="font-semibold text-primary underline">
              каталоге оправ
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 7. FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="heading-bar text-2xl font-extrabold md:text-3xl">
          Частые вопросы о Stellest
        </h2>
        <Accordion type="single" collapsible className="mt-8">
          {faq.map(([q, a], i) => (
            <AccordionItem key={q} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-semibold">{q}</AccordionTrigger>
              <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Смотрите также */}
      <section className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <h2 className="heading-bar text-xl font-extrabold md:text-2xl">Смотрите также</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { title: "Подбор очков в СПб", text: "Диагностика зрения и подбор очков пошагово.", to: "/" as const, hash: "" },
              { title: "Стоимость подбора", text: "Что входит в приём и как считается цена.", to: "/" as const, hash: "stoimost" },
              { title: "Каталог оправ", text: "Оправы для очков: формы, материалы, цены.", to: "/opravy/zhenskie" as const, hash: "katalog" },
            ].map((card) => (
              <Link
                key={card.title}
                to={card.to}
                hash={card.hash}
                className="rounded-xl border border-border bg-background p-6 transition-colors hover:border-primary"
              >
                <p className="font-extrabold text-foreground">{card.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{card.text}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-primary">
                  Перейти →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Финальный CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5 py-14 text-center">
          <h2 className="text-3xl md:text-4xl">Записаться на диагностику миопии</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-primary-foreground/90">
            Специалист оценит динамику зрения ребёнка, объяснит, показаны ли линзы Stellest, и
            рассчитает стоимость очков.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-primary-foreground/80">
            Салон в Санкт-Петербурге: ул. Кирочная, 17, м. Чернышевская, ежедневно 10:00–20:00.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button size="lg" variant="secondary" className="rounded-lg px-7 text-base font-bold" asChild>
              <Link to="/" hash="zapis">
                Записаться →
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-lg border-primary-foreground/40 bg-transparent px-7 text-base text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <a href="tel:+78120000000">8 (812) 000-00-00</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
