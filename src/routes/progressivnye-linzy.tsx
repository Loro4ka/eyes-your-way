import { createFileRoute, Link } from "@tanstack/react-router";

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
  { title: "Возраст", text: "Прогрессивные линзы обычно назначаются после 40 лет, когда развивается возрастная дальнозоркость (пресбиопия)." },
  { title: "Образ жизни", text: "Активная жизнь, спорт, поездки — от этого зависит выбор серии: стандартная, премиальная или индивидуальная." },
  { title: "Работа за компьютером", text: "Для долгой работы с монитором важна широкая промежуточная зона — учитываем это при выборе дизайна линзы." },
  { title: "Вождение", text: "Если вы много времени за рулём, подбираем линзы с усиленной дальней зоной и комфортным боковым обзором." },
  { title: "Чтение", text: "Много читаете или работаете с документами — выбираем дизайн с расширенной ближней зоной." },
  { title: "Расстояние", text: "Оцениваем, на каких дистанциях вы проводите больше времени: вдаль, средние расстояния или вблизи." },
  { title: "Аддидация", text: "Величина аддидации (добавки для близи) напрямую влияет на выбор серии и длины прогрессивного коридора." },
  { title: "Особенности рецепта", text: "Астигматизм, разница между глазами, сила коррекции — всё это учитываем при подборе линз и оправы." },
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
        <div className="flex items-stretch gap-3">
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
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Записаться на подбор
              </a>
              <a
                href="#brendy"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
              >
                Сравнить бренды
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Блок 1: Что такое */}
      <section className="border-t border-border py-10">
        <h2 className="text-2xl font-extrabold tracking-tight text-foreground">Что такое прогрессивные линзы</h2>
        <div className="mt-4 max-w-3xl space-y-4 text-muted-foreground">
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
        </div>
      </section>

      {/* Блок 2: Кому подходят */}
      <section className="border-t border-border py-10">
        <h2 className="text-2xl font-extrabold tracking-tight text-foreground">Кому подходят прогрессивные линзы</h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Людям старше 40 лет с возрастной дальнозоркостью (пресбиопией)",
            "Тем, кто устал носить отдельные очки для чтения и для дали",
            "Работающим за компьютером: нужна чёткость на разных дистанциях",
            "Водителям — от дороги до приборной панели одним взглядом",
            "Активным людям, которым важно выглядеть без «возрастных» очков",
            "Тем, у кого уже есть коррекция миопии или астигматизма и добавилась пресбиопия",
          ].map((item) => (
            <li key={item} className="rounded-lg border border-border bg-card p-4 text-sm text-foreground">
              <span className="mb-2 block h-1 w-8 rounded-full bg-primary" aria-hidden="true" />
              {item}
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
          {howToChoose.map((f) => (
            <li key={f.title} className="rounded-lg border border-border bg-card p-4">
              <h3 className="font-bold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
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
                <tr key={b.brand} className="border-t border-border bg-card">
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
          {priceRanges.map((p) => (
            <li key={p.name} className="rounded-lg border border-border bg-card p-5">
              <p className="text-lg font-extrabold text-primary">{p.price}</p>
              <h3 className="mt-1 font-bold text-foreground">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
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
                  <span className="text-primary transition-transform group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
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
